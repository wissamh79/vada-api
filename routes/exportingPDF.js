<<<<<<< HEAD
const express = require("express");

const router = express.Router();
const { exportPdf } = require("../controllers/exportingPDF");

router.get("/", exportPdf);

module.exports = router;
=======
const express = require("express");

const router = express.Router();
const { exportPdf } = require("../controllers/exportingPDF");

router.get("/", exportPdf);

module.exports = router;
>>>>>>> d101d3ff04871875c82cfc12bdb0a06cbbe647a5
