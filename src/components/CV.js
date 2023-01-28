import React from "react";
import { Component } from "react";
import '../styles/CV.css';
import CVProfile from "./CV-Profile";
import CVPersonalInfo from "./CV-PersonalInfo";
import CVDigitalSkills from "./CV-DigitalSkills";

class CV extends Component{

    render(){

        return(
            <div className="CV-page">
                <div className="first"></div>
                <CVProfile/>
                <CVPersonalInfo/>
                <CVDigitalSkills/>
            </div>
        )
    }

}

export default CV