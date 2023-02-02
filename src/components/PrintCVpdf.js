import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import CV from "./CV";

class PrintCVpdf extends Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => {
            return <button>Print the CV</button>;
          }}
          content={() => this.cvRef}
        />
        <CV ref={(el) => (this.cvRef = el)}/>
      </div>
    );
  }
}

export default PrintCVpdf;
