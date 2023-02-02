import React from "react";
import { Component } from "react";
import '../styles/CV-PersonalInfo.css';

class CVPersonalInfo extends Component{

    render(){

        return(

            <div className="CV-personal-info">
                
                <div className="CV-personal-info-header-comp category-header">
                    <hr></hr>
                    <div className="CV-header-personal-info">PERSONAL INFO</div>
                    <hr></hr>
                </div>

                <div className="CV-personal-info-field">
                    <span className="material-symbols-outlined">call</span><input type="text" placeholder="Add your phone number"></input>
                </div>
                <div className="CV-personal-info-field">
                    <span className="material-symbols-outlined">location_on</span><input type="text" placeholder="Add your location"></input>
                </div>
                <div className="CV-personal-info-field">
                    <span className="material-symbols-outlined">alternate_email</span><input type="text" placeholder="Add your email address"></input>
                </div>
                <div className="CV-personal-info-field">
                   <span><i className="fa fa-linkedin-square" style={{fontSize: '24px'}}></i></span><input type="text" placeholder="Add your LinkedIn"></input>
                </div>

                
            </div>
        )
    }
}

export default CVPersonalInfo