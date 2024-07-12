import React, { useState } from "react";

export default function Excel_to_pdf() {

  // State for Excel to PDF conversion
  const [excelFile, setExcelFile] = useState(null);
  const [excelPdfOutput, setExcelPdfOutput] = useState(null);
  const [excelError, setExcelError] = useState(null);

  const handleFileChange = (setFile) => (event) => {
    setFile(event.target.files[0]);
  };

  const handleConvertToPDF = async (file, setPdfOutput, setError, url, fileType) => {
    try {
      const formData = new FormData();
      formData.append(fileType, file);

      console.log("Starting conversion with file:", file);

      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to convert to PDF: ${errorText}`);
      }

      const data = await response.json();
      console.log("Conversion successful:", data);
      setPdfOutput(data.pdf_output);
    } catch (error) {
      console.error("Conversion failed:", error);
      setError(error.message);
    }
  };
  return (
    <div className="col-md-4 d-flex justify-content-center" style={{ width: '20em' }}>
    <div className="card mx-2 my-2">
      <div className="card-body">
        <h5 className="card-title">EXCEL to PDF</h5>
        <div className="custom-file mb-2">
          <input
            type="file"
            className="custom-file-input"
            id="inputFileExcel"
            onChange={handleFileChange(setExcelFile)}
          />
        </div>
        <button
          className="btn btn-primary mt-2"
          onClick={() =>
            handleConvertToPDF(excelFile, setExcelPdfOutput, setExcelError, 'http://localhost:8000/convert/excel-to-pdf/', 'excel_file')
          }
        >
          Convert to PDF
        </button>
        {excelPdfOutput && (
          <a
            href={`http://localhost:8000/media/excelpdfs/${excelPdfOutput}`}
            className="btn btn-success mt-2"
            download
            target="_blank"
          >
            Download PDF
          </a>
        )}
        {excelError && <p className="text-danger mt-2">Error: {excelError}</p>}
      </div>
    </div>
  </div>
  )
}
