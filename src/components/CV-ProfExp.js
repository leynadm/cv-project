import React from "react";
import { Component } from "react";
import "../styles/CV-ProfExp.css";
import CVProfExpBlock from "./CV-ProfExpBlock";

class CVProfExp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputFields: [],
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      inputFields: [...prevState.inputFields, CVProfExpBlock],
    }));
  };

  render() {
    const { currentClass, textareaClass } = this.props;
    
    return (
      <div className="CV-prof-exp-comp">
        <hr></hr>
        <div className="CV-prof-exp-header-comp">
          <div className="CV-prof-exp-header">PROFESSIONAL EXPERIENCE</div>
          <button
            type="button"
            className={currentClass}
            onClick={this.handleClick}
          >
            <span className="material-symbols-outlined">add_circle</span>
          </button>
        </div>
        <hr></hr>

        {this.state.inputFields.map((input, index) => (
          <CVProfExpBlock currentClass = {currentClass} textareaClass={textareaClass} />
        ))}
      </div>
    );
  }
}

export default CVProfExp;
