import React from "react";
import { Component } from "react";
import "../styles/CV-ProfExpBlock.css";
class CVProfExpBlock extends Component {
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
        <input type="text" className="CV-prof-exp-block-task" placeholder="Add your role task" />,
      ],
    }));
  };

  render() {
    return (
      <div className="CV-prof-exp-block">
        <div className="CV-prof-exp-block-header">
          <input
            type="text"
            className="CV-prof-exp-role"
            placeholder="Add your role here"
          ></input>
          <div>, </div>
          <input
            type="text"
            className="CV-prof-exp-company-name"
            placeholder="Add the company name here"
          ></input>
        </div>
        <div className="CV-prof-exp-interval">
          <input type="date" className="CV-prof-exp-start-date"></input>
          <input type="date" className="CV-prof-exp-end-date"></input>
        </div>

        <button type="button" onClick={this.handleClick}>
          <span className="material-symbols-outlined">add_circle</span>
        </button>

        {this.state.inputFields.map((input, index) => (
          <div key={index} className="CV-digital-skills-field">
            <span className="material-symbols-outlined">check_indeterminate_small</span>
            {input}
            <button type="button" onClick={() => this.handleDelete(index)}>
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default CVProfExpBlock;
