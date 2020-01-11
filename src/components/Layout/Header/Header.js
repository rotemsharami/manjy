import React from 'react';
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import Login from '../Login/Login';
export default () => {
    return(
        <header>
            <div className="container">
                <div className="row nopadding">
                    <div className="col-2 nopadding"><Logo/></div>
                    <div className="col-3 nopadding"><Menu/></div>
                    <div className="col-7 nopadding"><Login/></div>
                </div>
            </div>
        </header>
    );
}