const express = require("express");

const router = express.Router();
const { exportPdf } = require("../controllers/exportingPDF");

router.get("/", exportPdf);

module.exports = router;
