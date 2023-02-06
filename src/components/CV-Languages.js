import React, { useState } from "react";
import "../styles/CV-Languages.css";
import uniqid from "uniqid";

function CVLanguages({ currentClass }) {
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
    <div className="CV-languages">
      <div>
        <hr></hr>

        <div className="CV-header-languages-comp category-header">
          <div className="CV-header-languages">LANGUAGES</div>
          <button type="button" className={currentClass} onClick={handleClick}>
            <span className="material-symbols-outlined">add_circle</span>
          </button>
        </div>
        <hr></hr>
      </div>

      {inputFields.map((input, index) => (
        <div key={index} className="CV-languages-field">
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
}

export default CVLanguages;
