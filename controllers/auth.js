const User = require("../models/User");

const { StatusCodes } = require("http-status-codes");
const {
  BadRequestError,
  UnauthenticatedError,
  noContentError,
} = require("../errors");

const register = async (req, res) => {
  const { email } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    res.status(408).json({ message: "User with given email already Exist!" });
  }
  user = await User.create({ ...req.body });

  res.status(StatusCodes.CREATED).json({
    user: { firstName: user.firstName },
    message: "user created",
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("All fields are required");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Password");
  }

  // Saving refreshToken with current user
  const accessToken = user.createAccessJWT();
  const refreshToken = user.createRefreshJWT();

  await user.updateOne({
    refreshToken: refreshToken,
  });
  // Creates Secure Cookie with refresh token
  // Send access token to user

  res
    .status(StatusCodes.OK)
    .cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",

      maxAge: 24 * 60 * 60 * 1000,
    })
    .json({
      user: {
        firstName: user.firstName,
        email: user.email,
      },
      accessToken,
      message: "logged in successfully",
    });
};
const logout = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) {
    throw new noContentError("No Cookies provided ");
  }
  const refreshToken = cookies.jwt;
  const user = await User.findOne({ refreshToken });
  if (!user) {
    res.clearCookie("jwt", {
      httpOnly: true,
      secure: true,
      sameSite: "None",

      maxAge: 24 * 60 * 60 * 1000,
    });
    throw new noContentError("	No Content ");
  }

  await user.updateOne({ refreshToken: " " });

  res.status(StatusCodes.NO_CONTENT).cookie("jwt", {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });
};
module.exports = {
  register,
  login,
  logout,
};
