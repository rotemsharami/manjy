import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";
export default () => {
    return(
        <ul className="menu">
            <li className=""><NavLink to="/housing" exact>Housing</NavLink></li>
            <li className=""><NavLink to="/shopping-list" exact>Shopping</NavLink></li>
        </ul>
    );
} 
