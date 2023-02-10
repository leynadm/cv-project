import React, { useState } from "react";
import "../styles/CV-Education.css";
import CVEducationBlock from "./CV-EducationBlock";

function CVEducation({ currentClass }) {
  const [inputFields, setInputFields] = useState([]);

  const handleClick = () => {
    setInputFields([...inputFields, CVEducationBlock]);
  };

  return (
    <div className="CV-education">
      <div>
        <hr></hr>
        <div className="CV-education-header-comp category-header">
          <div className="CV-education-header">EDUCATION</div>
          <button type="button" className={currentClass} onClick={handleClick}>
            <span className="material-symbols-outlined">add_circle</span>
          </button>
        </div>
        <hr></hr>
      </div>

      {inputFields.map((input, index) => (
        <CVEducationBlock />
      ))}
    </div>
  );
}

export default CVEducation;
