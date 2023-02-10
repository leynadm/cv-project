import React from "react";
import "../styles/CV-Selection.css";

const CVSelection = ({ selectedComponent, handleClick }) => {
  return (
    <div className="cv-selection-page">
      <div className="sample-one-cv-comp">
        <div className="sample-one-cv">
          <div className="sample-one-header">
            <div className="header-personal-details">
              <div className="sample-one-name"></div>
              <div className="sample-one-role"></div>
            </div>

            <div className="sample-one-photo"></div>
          </div>

          <div className="sample-one-description"></div>

          <div className="sample-one-body">
            <div className="sample-one-left-side">
              <div className="sample-one-contact-info"></div>

              <div className="sample-one-software-skills"></div>

              <div className="sample-one-language-skills"></div>

              <div className="sample-one-education"></div>
            </div>

            <div className="sample-one-right-side">
              <div className="sample-one-work-experience"></div>
            </div>
          </div>
        </div>

        <button className="light-version-cv-button" onClick={handleClick}>
          Version 1
        </button>
      </div>

      <div className="sample-two-cv-comp">
        <div className="sample-two-cv">

          <div className="sample-two-left-side">

            <div className="sample-two-personal-details">

              <div className="sample-two-photo"></div>
              <div className="sample-two-name"></div>
              <div className="sample-two-role"></div>
            </div>

            <div className="sample-two-digital-skills"></div>

            <div className="sample-two-education"></div>

            <div className="sample-two-languages"></div>
          </div>

          <div className="sample-two-right-side"></div>

          <div className="sample-two-work-experience"></div>
        </div>

        <button className="light-version-cv-button" onClick={handleClick}>
          Version 2
        </button>
      </div>

    </div>
  );
};

export default CVSelection;
