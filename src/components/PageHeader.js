import React from "react";
import { Component } from "react";
import "../styles/PageHeader.css";
import reactLogo from "../images/logo.svg";
import '../styles/CV.css';

class PageHeader extends Component {

  previewCV = () => {
    console.log('time to rerender')
    this.props.handlePreview();
  };

  render() {
    return (
      <div className="page-header">
        <div className="page-header-brand">
          <img src={reactLogo} alt="react logo" className="page-logo"></img>
          <div className="page-header-title">CV cREACTor</div>
        </div>

        <div
          className="page-header-buttons"
          title="Preview your CV before saving"
        >
          <button type="button" onMouseEnter={this.previewCV}>
            <span className="material-symbols-outlined preview-btn">
              preview
            </span>
          </button>

          <button type="button" title="Save your CV">
            <span className="material-symbols-outlined save-btn">save</span>
          </button>
        </div>
      </div>
    );
  }
}

export default PageHeader;
