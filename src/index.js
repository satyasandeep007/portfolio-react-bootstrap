import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


ReactDOM.render(
    <Router>
        <App />
    </Router>
    , document.getElementById("app"));
