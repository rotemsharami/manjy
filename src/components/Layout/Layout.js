import React from "react";
import Header from "./Header/Header";
import "./Layout.scss";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Shopping from "./Shopping/Shopping";
import Housing from "./Housing/Housing";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

export default () => {
    return(
        <BrowserRouter>
            <div className="layout col-12 nopadding">
                <Header/>
                <main>
                    <br/>
                    <Switch>
                        <Route path="/housing" component={Housing} exact />
                        <Route path="/shopping" component={Shopping} exact />
                        <Route path="/home" component={Home} exact />
                        <Redirect from="/" to="/home" exact />
                    </Switch>
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}