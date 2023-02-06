import "./App.css";
import React, { useRef, useState } from "react";
import PageHeader from "./components/PageHeader";
import CV from "./components/CV";
import ReactToPrint from "react-to-print";

function App(){

  const [currentClass, setCurrentClass] = useState('showButtons')
  const [textareaClass, setTextareaClass] = useState('showTextarea')

  const handlePreview = () => {
    setCurrentClass(prevClass =>
      prevClass === "showButtons" ? "hideButtons" : "showButtons"
    );
    setTextareaClass(prevTextareaClass =>
      prevTextareaClass === "showTextarea"
        ? "hideTextarea"
        : "showTextarea"
    );
  };

  const cvReference = useRef(null);

  return (
    <div className="App">
      <PageHeader handlePreview={handlePreview} />
      <CV
        ref={cvReference}
        currentClass={currentClass}
        textareaClass={textareaClass}
      />
      <ReactToPrint
        trigger={() => (
          <div className="button-container">
            <button className="print-cv-btn">Print the CV</button>;
          </div>
        )}
        content={() => cvReference.current}
      />
    </div>
  );
};

export default App;
