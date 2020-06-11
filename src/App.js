import React, { Component } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Projects from './components/Projects';


import { Route, Switch } from "react-router-dom";


export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path={`/`} component={Home} />
                    <Route exact path={`/about`} component={About} />
                    <Route exact path={`/contact`} component={Contact} />
                    <Route exact path={`/experience`} component={Experience} />
                    <Route exact path={`/education`} component={Education} />
                    <Route exact path={`/projects`} component={Projects} />

                </Switch>
                <Footer />
            </div>
        )
    }
}
