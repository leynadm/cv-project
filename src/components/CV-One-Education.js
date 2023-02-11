import React, { useState } from "react";
import "../styles/CV-One-Education.css";
import CVOneEducationBlock from "./CV-One-EducationBlock"

const CVOneEducation = (props) => {
  const { currentClass } = props

  const [inputFields, setInputFields] = useState([]);

  const handleClick = () => {
    setInputFields([...inputFields, CVOneEducationBlock]);
  };

  return (
    <div className="cv-one-education">
      <div>
        <hr></hr>
        <div className="cv-one-education-header-comp category-header">
          <div className="cv-one-education-header">EDUCATION</div>
          <button type="button" className={currentClass} onClick={handleClick}>
            <span className="material-symbols-outlined">add_circle</span>
          </button>
        </div>
        <hr></hr>
      </div>

      {inputFields.map((input, index) => (
        <CVOneEducationBlock />
      ))}
    </div>
  );
}

export default CVOneEducation;
