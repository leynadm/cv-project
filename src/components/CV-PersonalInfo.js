import React from "react";
import "../styles/CV-PersonalInfo.css";

function CVPersonalInfo({ currentClass }) {
  return (
    <div className="CV-personal-info">
      <hr></hr>
      <div className="CV-personal-info-header-comp category-header">
        <div className="CV-header-personal-info">PERSONAL INFO</div>
        <button type="button" className={currentClass}>
          <span className="material-symbols-outlined">add_circle</span>
        </button>
      </div>
      <hr></hr>

      <div className="CV-personal-info-field">
        <span className="material-symbols-outlined">call</span>
        <input type="text" placeholder="Add your phone number"></input>
      </div>
      <div className="CV-personal-info-field">
        <span className="material-symbols-outlined">location_on</span>
        <input type="text" placeholder="Add your location"></input>
      </div>
      <div className="CV-personal-info-field">
        <span className="material-symbols-outlined">alternate_email</span>
        <input type="text" placeholder="Add your email address"></input>
      </div>
      <div className="CV-personal-info-field">
        <span>
          <i className="fa fa-linkedin-square" style={{ fontSize: "24px" }}></i>
        </span>
        <input type="text" placeholder="Add your LinkedIn"></input>
      </div>
    </div>
  );
}

export default CVPersonalInfo;
