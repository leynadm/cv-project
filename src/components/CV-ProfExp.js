import React, { useState } from "react";
import { Component } from "react";
import "../styles/CV-ProfExp.css";
import CVProfExpBlock from "./CV-ProfExpBlock";

function CVProfExp({ currentClass, textareaClass }) {
  const [inputFields, setInputFields] = useState([]);

  const handleClick = () => {
    setInputFields([...inputFields, CVProfExpBlock]);
  };

  return (
    <div className="CV-prof-exp-comp">
      <hr></hr>
      <div className="CV-prof-exp-header-comp">
        <div className="CV-prof-exp-header">PROFESSIONAL EXPERIENCE</div>
        <button type="button" className={currentClass} onClick={handleClick}>
          <span className="material-symbols-outlined">add_circle</span>
        </button>
      </div>
      <hr></hr>

      {inputFields.map((input, index) => (
        <CVProfExpBlock
          currentClass={currentClass}
          textareaClass={textareaClass}
        />
      ))}
    </div>
  );
}

export default CVProfExp;
