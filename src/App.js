import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';


import { Route, Switch } from "react-router-dom";


export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path={`/`} component={Home} />
                    <Route path={`/about`} component={About} />
                    <Route path={`/contact`} component={Contact} />
                    <Route path={`/experience`} component={Experience} />
                    <Route path={`/education`} component={Education} />


                </Switch>

                <Footer />
            </div>
        )
    }
}
