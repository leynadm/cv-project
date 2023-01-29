import React from "react";
import { Component } from "react";

class CVEducationBlock extends Component {
  render() {
    return (
      <div className="CV-education-block">
        <input
          type="text"
          className="CV-education-institution-name"
          placeholder="Name of the institution"
        ></input>
        <div className="CV-education-interval">
          <input type="date" className="CV-education-start-date"></input>
          <input type="date" className="CV-education-end-date"></input>
        </div>
        <div className="CV-education-specialization-comp">
          <span class="material-symbols-outlined">arrow_right</span>
          <input
            type="text"
            className="CV-education-specialization"
            placeholder="Studies specialization"
          ></input>
        </div>
      </div>
    );
  }
}

export default CVEducationBlock;
