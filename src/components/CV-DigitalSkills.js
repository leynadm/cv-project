import React from "react";
import { Component } from "react";
import "../styles/CV-DigitalSkills.css";
import uniqid from "uniqid";

class CVDigitalSkills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFields: [],
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      inputFields: [
        ...prevState.inputFields,
        <input type="text" placeholder="You can add your skill here" />,
      ],
    }));
  };

  handleDelete = (index) => {
    this.setState((prevState) => {
      const inputFields = [...prevState.inputFields];
      inputFields.splice(index, 1);
      return { inputFields };
    });
  };

  render() {

    const { currentClass } = this.props;

    return (
      <div className="CV-digital-skills">
        <hr></hr>
        <div className="CV-digital-skills-header-comp">
          <div className="CV-header-digital-skills">DIGITAL SKILLS</div>
          <button type="button" className={currentClass} onClick={this.handleClick}>
            <span className="material-symbols-outlined">add_circle</span>
          </button>
        </div>

        <hr></hr>

        {this.state.inputFields.map((input, index) => (
          <div key={index} className="CV-digital-skills-field">
            <span className="material-symbols-outlined">done</span>
            {input}
            <button type="button" className={currentClass} onClick={() => this.handleDelete(index)}>
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default CVDigitalSkills;
