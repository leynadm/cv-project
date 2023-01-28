import React from "react";
import { Component } from "react";
import "../styles/CV-Languages.css";
import uniqid from 'uniqid'

class CVLanguages extends Component {
    constructor(props) {
      super(props);
      this.state = {
        inputFields: []
      };
    }
    
    handleClick = () => {
      this.setState(prevState => ({
        inputFields: [...prevState.inputFields, <input type="text" />]
      }));
    };
  
    handleDelete = index => {
      this.setState(prevState => {
        const inputFields = [...prevState.inputFields];
        inputFields.splice(index, 1);
        return { inputFields };
      });
    };
  
    render() {
      return (
        <div className="CV-languages">
        
        <div>
            <hr></hr>
                <div className="CV-header-languages">LANGUAGES</div>
            <hr></hr>
          </div>
          
          <button type="button" onClick={this.handleClick}>
            <span className="material-symbols-outlined">add_circle</span>
          </button>
          
          {this.state.inputFields.map((input, index) => (

            
                <div key={index} className="CV-languages-field"><span className="material-symbols-outlined">star</span>
                {input}
                <button
                    type="button"
                    onClick={() => this.handleDelete(index)}
                >
                    <span className="material-symbols-outlined">delete</span>
                </button>
                </div>
            
          ))}
        </div>
      );
    }
  }
  
  export default CVLanguages;
