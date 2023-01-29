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
    this.setState(prevState =>({
        inputFields:[...prevState.inputFields,CVProfExpBlock]
    }))
  };

  render() {
    return (
      <div className="CV-prof-exp-comp">
        <hr></hr>
        <div className="CV-prof-exp-header">PROFESSIONAL EXPERIENCE</div>
        <hr></hr>
        <button type="button" onClick={this.handleClick}>
          <span className="material-symbols-outlined">add_circle</span>
        </button>

        {this.state.inputFields.map((input,index)=>(

            <CVProfExpBlock/>
        ))}

      </div>
    );
  }
}

export default CVProfExp;
