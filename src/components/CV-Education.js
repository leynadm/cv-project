import React from "react";
import { Component } from "react";
import "../styles/CV-Education.css";
import CVEducationBlock from "./CV-EducationBlock";

class CVEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFields: [],
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      inputFields: [...prevState.inputFields, CVEducationBlock],
    }));
  };

  render() {
    return (
      <div className="CV-education">
        <div>
          <hr></hr>
          <div className="CV-education-header-comp">
            <div className="CV-education-header">EDUCATION</div>
            <button type="button" onClick={this.handleClick}>
              <span className="material-symbols-outlined">add_circle</span>
            </button>
          </div>
          <hr></hr>
        </div>

        {this.state.inputFields.map((input, index) => (
          <CVEducationBlock />
        ))}
      </div>
    );
  }
}

export default CVEducation;
