import React from "react";
import "./App.css";
import Jpg_to_pdf from "./Components/data/Jpg_to_pdf";
import Png_to_pdf from "./Components/data/Png_to_pdf";
import Excel_to_pdf from "./Components/data/Excel_to_pdf";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";

function App() {
 
  return (
  <div>
    <Navbar/>
    <Home/>
  </div>
  );
}

export default App;
