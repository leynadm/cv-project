import React from "react";
import { Component } from "react";
import '../styles/PageHeader.css';
import reactLogo from "../images/logo.svg"

class PageHeader extends Component{

    render(){

        return(
            <div className="page-header">
                <img src={reactLogo} alt="react logo" className="page-logo"></img>
                <div className="page-header-title">CV cREACTor</div>
            </div>
        )
    }

}

export default PageHeader