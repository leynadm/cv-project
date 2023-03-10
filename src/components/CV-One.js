import React, { forwardRef } from "react";
import "../styles/CV-One.css";
import CVOneProfile from "./CV-One-Profile";
import CVOnePersonalInfo from "./CV-One-PersonalInfo";
import CVOneDigitalSkills from "./CV-One-DigitalSkills";
import CVOneEducation from "./CV-One-Education";
import CVOneLanguages from "./CV-One-Languages";
import CVOneProfExp from "./CV-One-ProfExp";
import CVOneDescription from "./CV-One-Description";

const CVOne = forwardRef((props, ref) => {
  const { currentClass, textareaClass } = props;
  return (
    <div ref={ref} className="cv-one-page">
      <CVOneProfile />
      <CVOneDescription />
      <div className="cv-one-sides">
        <div className="cv-one-left-side">
          <CVOnePersonalInfo currentClass={currentClass} />
          <CVOneDigitalSkills currentClass={currentClass} />
          <CVOneLanguages currentClass={currentClass} />
          <CVOneEducation currentClass={currentClass} />   
        </div>
        
        <div className="cv-one-right-side">
          <CVOneProfExp
            currentClass={currentClass}
            textareaClass={textareaClass}
          />
        </div>
      </div>
    </div>
  );
});

export default CVOne;
