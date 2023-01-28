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
        <input
          type="text"
          className="CV-education-specialization"
          placeholder="Studies specialization"
        ></input>
      </div>
    );
  }
}

export default CVEducationBlock;
