import React from "react";
import "../styles/CV-One-PersonalInfo.css";

const CVOnePersonalIfo = (props) => {
  const { currentClass } = props;

  return (
    <div className="cv-one-personal-info">
      <div className="cv-one-personal-info-header-comp category-header">
        <div className="cv-one-header-personal-info">CONTACT INFO</div>
        <button type="button" className={currentClass}>
          <span className="material-symbols-outlined">add_circle</span>
        </button>
      </div>
      <div className="cv-one-personal-info-field">
        <span className="material-symbols-outlined">call</span>
        <input type="text" placeholder="Add your phone number"></input>
      </div>
      <div className="cv-one-personal-info-field">
        <span className="material-symbols-outlined">location_on</span>
        <input type="text" placeholder="Add your location"></input>
      </div>
      <div className="cv-one-personal-info-field">
        <span className="material-symbols-outlined">alternate_email</span>
        <input type="text" placeholder="Add your email address"></input>
      </div>
      <div className="cv-one-personal-info-field">
        <span>
          <i className="fa fa-linkedin-square" style={{ fontSize: "24px" }}></i>
        </span>
        <input type="text" placeholder="Add your LinkedIn"></input>
      </div>
    </div>
  );
};

export default CVOnePersonalIfo;
