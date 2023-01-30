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
        inputFields: [...prevState.inputFields, <input type="text" placeholder="Add your spoken language" />]
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
      
      const { currentClass } = this.props;

      return (
        <div className="CV-languages">
        
        <div>
            <hr></hr>
          
                <div className="CV-header-languages-comp">
                  <div className="CV-header-languages">LANGUAGES</div>
                  <button type="button" className={currentClass} onClick={this.handleClick}>
            <span className="material-symbols-outlined">add_circle</span>
          </button>                
                </div>
            <hr></hr>
          </div>
          

          
          {this.state.inputFields.map((input, index) => (

            
                <div key={index} className="CV-languages-field"><span className="material-symbols-outlined">star</span>
                {input}
                <button
                    type="button"
                    className={currentClass}
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
