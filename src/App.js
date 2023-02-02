import './App.css';
import React, { Component } from 'react';
import PageHeader from './components/PageHeader';
import CV from './components/CV';
import PrintCVpdf from './components/PrintCVpdf';
import ReactToPrint from "react-to-print";
class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      currentClass: 'showButtons',
      textareaClass: 'showTextarea'
    };
  }

  handlePreview = () => {
    this.setState((prevState) => ({
        currentClass: prevState.currentClass === 'showButtons' ? 'hideButtons' : 'showButtons',
        textareaClass: prevState.textareaClass === 'showTextarea' ? 'hideTextarea' : 'showTextarea'
      }));
  };

  render(){

    const { currentClass, textareaClass } = this.state;

    return (

      <div className="App">
          <ReactToPrint
          trigger={() => {
            return <button>Print the CV</button>;
          }}
          content={() => this.cvRef}
        />
        <PageHeader handlePreview={this.handlePreview} />
        
        <CV ref={(el) => (this.cvRef = el)} currentClass={currentClass} textareaClass={textareaClass}/>
          
      </div>
    );
  }
  
}

export default App;
