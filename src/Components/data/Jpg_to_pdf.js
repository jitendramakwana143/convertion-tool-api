import React, { useState } from "react";

export default function Jpg_to_pdf() {

     // State for JPG/JPEG to PDF conversion
  const [jpgFile, setJpgFile] = useState(null);
  const [jpgPdfOutput, setJpgPdfOutput] = useState(null);
  const [jpgError, setJpgError] = useState(null);

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
    <div className="col-md-4 d-flex justify-content-center" style={{ width: "20em" }}>
    <div className="card mx-2 my-2">
      <div className="card-body">
        <h5 className="card-title">JPG, JPEG to PDF</h5>
        <div className="custom-file mb-2">
          <input
            type="file"
            className="custom-file-input"
            id="inputFileJPG"
            onChange={handleFileChange(setJpgFile)}
          />
        </div>
        <button
          className="btn btn-primary mt-2"
          onClick={() =>
            handleConvertToPDF(jpgFile, setJpgPdfOutput, setJpgError, "http://localhost:8000/convert/", "image")
          }
        >
          Convert to PDF
        </button>
        {jpgPdfOutput && (
          <a
            href={`http://localhost:8000/media/pdfs/${jpgPdfOutput}`}
            className="btn btn-success mt-2"
            download
            target="_blank"
          >
            Download PDF
          </a>
        )}
        {jpgError && <p className="text-danger mt-2">{jpgError}</p>}
      </div>
    </div>
  </div>
  )
}
