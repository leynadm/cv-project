import React from "react";
import profileImage from "../images/cat.png";
import "../styles/CV-Profile.css";

function CVProfile() {
  return (
    <div className="CV-profile">
      <img
        src={profileImage}
        className="CV-profile-image"
        alt="default user"
      ></img>
      <input className="CV-username" placeholder="Your name here"></input>
      <input
        className="CV-job-title"
        placeholder="Your current role here"
      ></input>
    </div>
  );
}

export default CVProfile;
