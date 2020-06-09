import React, { Component } from 'react';
import { Link } from "react-router-dom"

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark " style={{ backgroundColor: "#0074D9" }}>
                    <a className="navbar-brand" >Sandeep Kumar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item active">
                                <Link to={"/"} className="nav-link" >Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link to={"/about"} className="nav-link" >About <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link to={"/education"} className="nav-link" >Education <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link to={"/experience"} className="nav-link" >Experience <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link to={"/contact"} className="nav-link" >Contact <span className="sr-only">(current)</span></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
