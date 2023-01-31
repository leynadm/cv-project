import React from "react";
import { Component } from "react";
import "../styles/CV.css";
import CVProfile from "./CV-Profile";
import CVPersonalInfo from "./CV-PersonalInfo";
import CVDigitalSkills from "./CV-DigitalSkills";
import CVEducation from "./CV-Education";
import CVLanguages from "./CV-Languages";
import CVProfExp from "./CV-ProfExp";
import PageHeader from "./PageHeader";

class CV extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentClass: 'showButtons',
      textareaClass: 'showTextarea'
    };
  }

  handlePreview = () => {
    console.log(this.state)
    this.setState((prevState) => ({
        currentClass: prevState.currentClass === 'showButtons' ? 'hideButtons' : 'showButtons',
        textareaClass: prevState.textareaClass === 'showTextarea' ? 'hideTextarea' : 'showTextarea'
      }));
  };

  render() {

    const { currentClass, textareaClass } = this.state;
    console.log('logging state inside CV: ')
    console.log(this.state)
    return (
      <div>
        <PageHeader handlePreview={this.handlePreview} />
        <div className="CV-page">
          <div className="first"></div>
          <CVProfile />
          <CVProfExp currentClass={currentClass} textareaClass={textareaClass}/>
          <CVPersonalInfo currentClass={currentClass}/>
          <CVDigitalSkills currentClass={currentClass}/>
          <CVEducation currentClass={currentClass}/>
          <CVLanguages currentClass={currentClass}/>
        </div>
      </div>
    );
  }
}

export default CV;
