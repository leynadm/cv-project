import React, { useState } from "react";
import "../styles/CV-One-DigitalSkills.css";

const CVOneDigitalSkills = (props) => {
  const { currentClass } = props;

  const [inputFields, setInputFields] = useState([]);

  const handleClick = () => {
    setInputFields([
      ...inputFields,
      <input type="text" placeholder="You can add your skill here" />,
    ]);
  };

  const handleDelete = (index) => {
    setInputFields((prevInputFields) => {
      const newInputFields = [...prevInputFields];
      newInputFields.splice(index, 1);
      return newInputFields;
    });
  };

  return (
    <div className="cv-one-digital-skills">
      <hr></hr>
      <div className="cv-one-digital-skills-header-comp category-header">
        <div className="cv-one-header-digital-skills">DIGITAL SKILLS</div>
        <button type="button" className={currentClass} onClick={handleClick}>
          <span className="material-symbols-outlined">add_circle</span>
        </button>
      </div>

      <hr></hr>

      {inputFields.map((input, index) => (
        <div key={index} className="cv-one-digital-skills-field">
          <span className="material-symbols-outlined">done</span>
          {input}
          <button
            type="button"
            className={currentClass}
            onClick={() => handleDelete(index)}
          >
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default CVOneDigitalSkills;
