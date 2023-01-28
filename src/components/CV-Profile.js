import React from "react";
import { Component } from "react";
import profileImage from "../images/cat.png"
import '../styles/CV-Profile.css';

class CVProfile extends Component{

    render(){
        return(
            <div className="CV-profile">
                <img src={profileImage} className="CV-profile-image" alt="default user"></img>
                <div className="CV-username">Daniel Matei</div>
                <div className="CV-job-title">Software Engineer</div>
            </div>
        )
    }

}

export default CVProfile