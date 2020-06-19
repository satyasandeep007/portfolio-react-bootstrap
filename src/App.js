import React, { Component } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Blogs from './components/Blogs';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { Route, Switch, withRouter } from "react-router-dom";
import Skills from './components/Skills';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" exact component={Home} />
                    <Route exact path={"/about"} component={About} />
                    <Route exact path={"/contact"} component={Contact} />
                    <Route exact path={"/experience"} component={Experience} />
                    <Route exact path={"/blogs"} component={Blogs} />
                    <Route exact path={"/projects"} component={Projects} />
                    <Route exact path={"/skills"} component={Skills} />


                </Switch>
                <Footer />
            </div>
        )
    }
}
App.defaultProps = {
};

export default App;