<<<<<<< HEAD
const PDFDocument = require("pdfkit");

function buildPDF(dataCallback, endCallback) {
  const doc = new PDFDocument({ bufferPages: true, font: "Courier" });

  doc.on("data", dataCallback);
  doc.on("end", endCallback);

  doc.fontSize(20).text(`A heading`);

  doc.fontSize(12).text("data");
  doc.end();
}

module.exports = { buildPDF };
=======
const PDFDocument = require("pdfkit");

function buildPDF(dataCallback, endCallback) {
  const doc = new PDFDocument({ bufferPages: true, font: "Courier" });

  doc.on("data", dataCallback);
  doc.on("end", endCallback);

  doc.fontSize(20).text(`A heading`);

  doc.fontSize(12).text("data");
  doc.end();
}

module.exports = { buildPDF };
>>>>>>> d101d3ff04871875c82cfc12bdb0a06cbbe647a5
