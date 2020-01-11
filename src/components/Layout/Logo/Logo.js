import React from "react";
import {IoIosAnalytics} from "react-icons/io";
import "./Logo.scss";
export default () => {
    return(
        <div className="logo">
            <span className="logo-icon"><IoIosAnalytics/></span>
            <span className="app-name">Manjy</span>
        </div>
    );
}