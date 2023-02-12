import "./App.css";
import React, { useState } from "react";
import CVSelection from "./components/CV-Selection";
import CVSampleTwo from "./components/CV-Sample-Two";
import CVSampleOne from "./components/CV-Sample-One";

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState("Selection");

  const handleClick = (chosenVersion) => {
    if (chosenVersion === "Version 1") {
      setSelectedComponent("CVOne");
    } else if (chosenVersion === "Version 2") {
      setSelectedComponent("CVTwo");
    } else {
      setSelectedComponent("Selection");
    }
  };

  console.log("Outputting state in App.js:");
  console.log(selectedComponent);

  if (selectedComponent === "Selection") {
    return (
      <div className="App">
        <CVSelection
          selectedComponent={selectedComponent}
          handleClick={handleClick}
        />
      </div>
    );
  } else if (selectedComponent === "CVOne") {
    return (
      <div className="App">
        <CVSampleOne />
      </div>
    );
  } else if (selectedComponent === "CVTwo") {
    return (
      <div className="App">
        <CVSampleTwo />
      </div>
    );
  }
};

export default App;

/* 

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
 */
