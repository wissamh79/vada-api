<<<<<<< HEAD
require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const credentials = require("./middleware/credentials");

//mongoDB
const connectDB = require("./db/connectDB");
const authenticateUser = require("./middleware/authentication");
const cookieParser = require("cookie-parser");

//routers
const authRouter = require("./routes/auth");
const ordersRouter = require("./routes/orders");
const requestsRouter = require("./routes/requests");
const eventsRouter = require("./routes/events");
const productsRouter = require("./routes/products");
// const Router = require("./routes/");

const templateRouter = require("./routes/template");
const colorsRouter = require("./routes/colors");
const scentsRouter = require("./routes/scents");
const exportingPdfRouter = require("./routes/exportingPDF");

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/errorHandler");

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));
// built-in middleware for json
app.use(express.json());
//middleware for cookies
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("");
});
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/orders", authenticateUser, ordersRouter);
app.use("/api/v1/requests", authenticateUser, requestsRouter);
app.use("/api/v1/template", authenticateUser, templateRouter);
app.use("/api/v1/events", authenticateUser, eventsRouter);
app.use("/api/v1/products", authenticateUser, productsRouter);
app.use("/api/v1/colors", authenticateUser, colorsRouter);
app.use("/api/v1/scents", authenticateUser, scentsRouter);
app.use("/api/v1/export-pdf", authenticateUser, exportingPdfRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3500;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
=======
require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const credentials = require("./middleware/credentials");

//mongoDB
const connectDB = require("./db/connectDB");
const authenticateUser = require("./middleware/authentication");
const cookieParser = require("cookie-parser");

//routers
const authRouter = require("./routes/auth");
const ordersRouter = require("./routes/orders");
const requestsRouter = require("./routes/requests");
const eventsRouter = require("./routes/events");
const productsRouter = require("./routes/products");
// const Router = require("./routes/");

const templateRouter = require("./routes/template");
const colorsRouter = require("./routes/colors");
const scentsRouter = require("./routes/scents");
const exportingPdfRouter = require("./routes/exportingPDF");

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/errorHandler");

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));
// built-in middleware for json
app.use(express.json());
//middleware for cookies
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("");
});
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/orders", authenticateUser, ordersRouter);
app.use("/api/v1/requests", authenticateUser, requestsRouter);
app.use("/api/v1/template", authenticateUser, templateRouter);
app.use("/api/v1/events", authenticateUser, eventsRouter);
app.use("/api/v1/products", authenticateUser, productsRouter);
app.use("/api/v1/colors", authenticateUser, colorsRouter);
app.use("/api/v1/scents", authenticateUser, scentsRouter);
app.use("/api/v1/export-pdf", authenticateUser, exportingPdfRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3500;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
>>>>>>> d101d3ff04871875c82cfc12bdb0a06cbbe647a5
