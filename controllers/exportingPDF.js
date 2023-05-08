<<<<<<< HEAD
// const pdfService = require("../utils/pdf-service");
const PDFDocument = require("pdfkit");
const exportPdf = async (req, res) => {
  const pdfDoc = new PDFDocument();

  pdfDoc.text("hjhascjkahcjkhcj");
  pdfDoc.pipe(res);
  pdfDoc.end();
  res.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-disposition": "attachment;filename=test.pdf",
  });
};

module.exports = { exportPdf };
=======
// const pdfService = require("../utils/pdf-service");
const PDFDocument = require("pdfkit");
const exportPdf = async (req, res) => {
  const pdfDoc = new PDFDocument();

  pdfDoc.text("hjhascjkahcjkhcj");
  pdfDoc.pipe(res);
  pdfDoc.end();
  res.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-disposition": "attachment;filename=test.pdf",
  });
};

module.exports = { exportPdf };
>>>>>>> d101d3ff04871875c82cfc12bdb0a06cbbe647a5
