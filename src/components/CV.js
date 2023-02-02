import React from "react";
import { Component } from "react";
import "../styles/CV.css";
import CVProfile from "./CV-Profile";
import CVPersonalInfo from "./CV-PersonalInfo";
import CVDigitalSkills from "./CV-DigitalSkills";
import CVEducation from "./CV-Education";
import CVLanguages from "./CV-Languages";
import CVProfExp from "./CV-ProfExp";

class CV extends Component {

  render() {

    const { currentClass, textareaClass } = this.props;
    return (
      
        <div className="CV-page">
          <div className="first"></div>
          <CVProfile />
          <CVProfExp currentClass={currentClass} textareaClass={textareaClass}/>
          <CVPersonalInfo currentClass={currentClass}/>
          <CVDigitalSkills currentClass={currentClass}/>
          <CVEducation currentClass={currentClass}/>
          <CVLanguages currentClass={currentClass}/>
          
        </div>
      
    );
  }
}

export default CV;
