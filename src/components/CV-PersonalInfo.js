import React from "react";
import { Component } from "react";
import '../styles/CV-PersonalInfo.css';

class CVPersonalInfo extends Component{

    render(){
        return(
            <div className="CV-personal-info">
                <div className="CV-header-personal-info">PERSONAL INFO</div>
                <div className="CV-phone-number-personal-info">+34 666 353 893</div>
                <div className="CV-location-personal-info">Spain, Barcelona</div>
                <div className="CV-email-personal-info">matei_daniel@outlook.com</div>
                <div className="CV-linkedIn-personal-info">linkedin.com/in/matei-daniel</div>
            </div>
        )
    }
}

export default CVPersonalInfo