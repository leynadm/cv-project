import "../styles/CV-SampleTwo.css";
import React, { useRef, useState } from "react";
import PageHeader from "./PageHeader";
import CVOne from "./CV-One";
import ReactToPrint from "react-to-print";

function CVSampleTwo({ onButtonClick }) {
  const [currentClass, setCurrentClass] = useState("showButtons");
  const [textareaClass, setTextareaClass] = useState("showTextarea");

  const handlePreview = () => {
    setCurrentClass((prevClass) =>
      prevClass === "showButtons" ? "hideButtons" : "showButtons"
    );
    setTextareaClass((prevTextareaClass) =>
      prevTextareaClass === "showTextarea" ? "hideTextarea" : "showTextarea"
    );
  };

  const componentRef = useRef();  

  console.log(componentRef)

  return (
    <div>
      <PageHeader handlePreview={handlePreview} />
      <CVOne ref={componentRef}
        currentClass={currentClass}
        textareaClass={textareaClass}
      />
      <ReactToPrint
        trigger={() => (
          <div className="button-container">
            <button className="print-cv-btn">Print the CV</button>
          </div>
        )}
        content={() => componentRef.current}
      />
    </div>
  );
}

export default CVSampleTwo;