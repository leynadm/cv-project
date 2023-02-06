import React from "react";
import "../styles/PageHeader.css";
import reactLogo from "../images/logo.svg";

function PageHeader({ handlePreview }) {
  const previewCV = () => {
    handlePreview();
  };

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
        <button type="button" className="preview-btn" onClick={previewCV}>
          <span className="material-symbols-outlined preview-btn">preview</span>
        </button>
      </div>
    </div>
  );
}

export default PageHeader;
