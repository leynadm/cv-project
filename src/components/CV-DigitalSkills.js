import React from "react";
import { Component } from "react";
import '../styles/CV-DigitalSkills.css';

class CVDigitalSkills extends Component{

    render(){
        return(
            <div className="CV-digital-skills">
                <div className="CV-header-digital-skills">DIGITAL SKILLS</div>
                <div className="CV-header-digital-skills">HTML</div>
                <div className="CV-header-digital-skills">CSS</div>
                <div className="CV-header-digital-skills">Javascript</div>
                <div className="CV-header-digital-skills">Jest</div>
                <div className="CV-header-digital-skills">React</div>
            </div>
        )
    }

}

export default CVDigitalSkills