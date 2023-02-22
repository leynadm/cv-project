import React, { useState } from "react";
import "../styles/CV-One-ProfExp.css";
import CVProfExpBlock from "./CV-ProfExpBlock";

const CVProfExp = (props) => {
  const { currentClass, textareaClass } = props;

  const [inputFields, setInputFields] = useState([]);

  const handleClick = () => {
    setInputFields([...inputFields, CVProfExpBlock]);
  };

  return (
    <div className="cv-one-prof-exp-comp">
      <hr></hr>
      <div className="cv-one-prof-exp-header-comp">
        <div className="cv-one-prof-exp-header">PROFESSIONAL EXPERIENCE</div>
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
};

export default CVProfExp;
