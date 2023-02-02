import "./App.css";
import React, { Component } from "react";
import PageHeader from "./components/PageHeader";
import CV from "./components/CV";
import PrintCVpdf from "./components/PrintCVpdf";
import ReactToPrint from "react-to-print";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentClass: "showButtons",
      textareaClass: "showTextarea",
    };
  }

  handlePreview = () => {
    this.setState((prevState) => ({
      currentClass:
        prevState.currentClass === "showButtons"
          ? "hideButtons"
          : "showButtons",
      textareaClass:
        prevState.textareaClass === "showTextarea"
          ? "hideTextarea"
          : "showTextarea",
    }));
  };

  render() {
    const { currentClass, textareaClass } = this.state;
    console.log('logging in CV ref: ')
    return (
      <div className="App">
        
          
          <PageHeader handlePreview={this.handlePreview} />
        <CV
          ref={(el) => (this.cvReference = el)}
          currentClass={currentClass}
          textareaClass={textareaClass}
        />

<ReactToPrint
            trigger={() => {
              return(
                <div className="button-container">
                  <button className="print-cv-btn">Print the CV</button>;
                </div>
              ) 
              
            }}
            content={() => this.cvReference}
          />

      </div>
    );
  }
}

export default App;