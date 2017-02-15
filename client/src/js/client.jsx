import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, hashHistory, IndexRedirect} from "react-router";

import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRedirect to="/home"/>
            <Route path="home" component={Home}/>
            <Route path="about" component={About}/>
            <Route path="contact" component={Contact}/>
        </Route>
    </Router>, rootElement);