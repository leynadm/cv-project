import React from "react";
import "../styles/CV-One-Description.css";

const CVOneDescription = () => {
  return (
    <div className="cv-one-description">
      <div className="cv-one-description-header">ABOUT ME</div>
      <textarea
        className="cv-one-description-box"
        placeholder="You can add a description about yourself here"
      ></textarea>
    </div>
  );
};

export default CVOneDescription