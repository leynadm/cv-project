import React, { useState } from "react";
import "../styles/CV-One-Languages.css";
import uniqid from "uniqid";

const CVOneLanguages = (props) => {
  const { currentClass } = props;

  const [inputFields, setInputFields] = useState([]);

  const handleClick = () => {
    setInputFields([
      ...inputFields,
      <input type="text" placeholder="Add your spoken language" />,
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
    <div className="cv-one-languages">
      <div>
        <hr></hr>

        <div className="cv-one-header-languages-comp category-header">
          <div className="cv-one-header-languages">LANGUAGES</div>
          <button type="button" className={currentClass} onClick={handleClick}>
            <span className="material-symbols-outlined">add_circle</span>
          </button>
        </div>
        <hr></hr>
      </div>

      {inputFields.map((input, index) => (
        <div key={index} className="cv-one-languages-field">
          <span className="material-symbols-outlined">star</span>
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

export default CVOneLanguages;
