import React from "react";
import { Component } from "react";
import "../styles/PageHeader.css";
import reactLogo from "../images/logo.svg";
import jsPDF from "jspdf";
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

class PageHeader extends Component {

  previewCV = () => {
    console.log('time to rerender')
    this.props.handlePreview();
  };

  generatePDF = () => {

    const report = new jsPDF('portrait','pt','a4');
    
    report.html(document.querySelector('.CV-page')).then(() => {
        report.save('report.pdf');
    });
  
  }

  generateImage =() => htmlToImage.toPng(document.querySelector('.CV-page'), { quality: 0.95 })
  .then(function (dataUrl) {
    var link = document.createElement('a');
    link.download = 'my-image-name.jpeg';
    const pdf = new jsPDF();          
    pdf.addImage(dataUrl, 'PNG', 0, 0);
    pdf.save("download.pdf"); 
  });

  generatePDFImage =() =>  htmlToImage.toPng(document.querySelector('.CV-page'), { quality: 0.95 })
  .then(function (dataUrl) {
    var link = document.createElement('a');
    link.download = 'my-image-name.jpeg';
    const pdf = new jsPDF();
    const imgProps= pdf.getImageProperties(dataUrl);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(dataUrl, 'PNG', 0, 0,pdfWidth, pdfHeight);
    pdf.save("download.pdf"); 
  });

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
          
          <button type="button" className="preview-btn" onClick={this.previewCV}>
            <span className="material-symbols-outlined preview-btn">
              preview
            </span>
          </button>
        
          <button type="button" className="btn-save" onClick={this.generateImage} title="Save your CV">
            <span className="material-symbols-outlined">save</span>
          </button>
        </div>
      </div>
    );
  }
}

export default PageHeader;
