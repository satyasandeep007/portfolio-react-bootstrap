import React, { Component } from 'react';
import Icons from "./icons";


export default class Footer extends Component {
    render() {
        return (
            <div>
                <nav className="navbar sticky-bottom navbar-light bg-light">
                    <span className="navbar-brand mx-auto">
                        Made with <i className="fa fa-heart" style={{ fontSize: "24px", color: "red" }}></i> by  &nbsp; <span>Sandeep Kumar</span>
                        <br />  <span style={{ paddingLeft: "30%" }}><a href="https://github.com/satyasandeep007/portfolio-react-bootstrap">View Source</a></span>
                    </span>
                    <Icons />
                </nav>
            </div>
        )
    }
}
