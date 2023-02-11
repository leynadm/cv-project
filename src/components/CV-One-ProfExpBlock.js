import React, { useState } from "react";
import "../styles/CV-ProfExpBlock.css";

const CVOneProfExpBlock = (props) => {
  const { currentClass, textareaClass } = props;
  const [inputFields, setInputFields] = useState([]);

  const handleClick = () => {
    setInputFields([
      ...inputFields,
      <textarea
        type="text"
        className={textareaClass}
        placeholder="Add your role tasks (you can resize this box)"
      />,
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
    <div className="cv-one-prof-exp-block">
      <div className="cv-one-prof-exp-block-header">
        <input
          type="text"
          className="cv-one-prof-exp-role"
          placeholder="Add your role here"
        ></input>
        <div className="cv-one-prof-exp-comma">, </div>
        <input
          type="text"
          className="cv-one-prof-exp-company-name"
          placeholder="Add the company name"
        ></input>
      </div>
      <div className="cv-one-prof-exp-interval">
        <input type="date" className="cv-one-prof-exp-start-date"></input>
        <input type="date" className="cv-one-prof-exp-end-date"></input>
      </div>

      <div className="cv-one-prof-exp-block-btn-comp">
        <button type="button" className={currentClass} onClick={handleClick}>
          <span className="material-symbols-outlined">add_circle</span>
        </button>
      </div>

      {inputFields.map((input, index) => (
        <div key={index} type="text" className="cv-one-prof-exp-block-field">
          <span className="material-symbols-outlined">
            check_indeterminate_small
          </span>
          <textarea
            type="text"
            /* 
        className="cv-one-prof-exp-block-task"
         */
            className={textareaClass}
            placeholder="Add your role tasks (you can resize this box)"
          />

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

export default CVOneProfExpBlock;
