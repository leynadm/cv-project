import React from "react";
import profileImage from "../images/cat.png";
import "../styles/CV-One-Profile.css";

const CVOneProfile = () => {
  return (
    <div className="cv-one-profile">
      <div className="cv-one-left-side">
        <input className="cv-one-name" placeholder="Your name here"></input>
        <input
          className="cv-one-role"
          placeholder="Your current role here"
        ></input>
      </div>

      <div className="cv-one-profile-photo">
        <img
          src={profileImage}
          className="cv-one-image"
          alt="default user"
        ></img>
      </div>
    </div>
  );
};

export default CVOneProfile;
