import "./App.css";
import React, { useState } from "react";
import CVSelection from "./components/CV-Selection";
import CVSampleTwo from "./components/CV-Sample-Two";

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState("Selection");

  const handleClick = () => {
    if (selectedComponent === "Selection") {
      setSelectedComponent("CVSampleTwo");
    } else {
      setSelectedComponent("CVSelection");
    }
  };

  console.log('Outputting state in App.js:')
  console.log(selectedComponent)

  return (
    <div className="App">
      {selectedComponent === "Selection" ? <CVSelection selectedComponent={selectedComponent} handleClick={handleClick} /> : <CVSampleTwo />}
    </div>

    /* 
    <div>
      {currentPage === <CVSampleTwo /> ? (
        <CVSampleTwo onButtonClick={currentPage} />
      ) : (
        currentPage
      )}
    </div>
     */
  );
}

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
