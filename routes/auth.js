<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const { register, login, logout } = require("../controllers/auth");
const refreshToken = require("../controllers/refreshToken");
router.post("/register", register);
router.post("/login", login);

router.get("/logout", logout);
router.get("/refresh", refreshToken);

module.exports = router;
=======
const express = require("express");
const router = express.Router();
const { register, login, logout } = require("../controllers/auth");
const refreshToken = require("../controllers/refreshToken");
router.post("/register", register);
router.post("/login", login);

router.get("/logout", logout);
router.get("/refresh", refreshToken);

module.exports = router;
>>>>>>> d101d3ff04871875c82cfc12bdb0a06cbbe647a5
