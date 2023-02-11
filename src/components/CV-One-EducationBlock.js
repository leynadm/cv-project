import React from "react";

const CVOneEducationBlock = () => {
  return (
    <div className="cv-one-education-block">
      <input
        type="text"
        className="cv-one-education-institution-name"
        placeholder="Name of the institution"
      ></input>
      <div className="cv-one-education-interval">
        <input type="date" className="cv-one-education-start-date"></input>
        <input type="date" className="cv-one-education-end-date"></input>
      </div>
      <div className="cv-one-education-specialization-comp">
        <span class="material-symbols-outlined">arrow_right</span>
        <input
          type="text"
          className="cv-one-education-specialization"
          placeholder="Studies specialization"
        ></input>
      </div>
    </div>
  );
}

export default CVOneEducationBlock;
