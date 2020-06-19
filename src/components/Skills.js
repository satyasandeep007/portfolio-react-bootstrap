import React, { Component } from 'react'

export default class Skills extends Component {
    render() {
        return (
            <div>
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action list-group-item-primary">HTML&CSS</a>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-secondary">JavaScript</a>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-success">React&nbsp;Js</a>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-danger">Vue&nbsp;Js</a>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-info">Node&Express</a>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-light">SQL</a>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-warning">MongoDB</a>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-primary">Heroku</a>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-secondary">AWS</a>
                </div>
            </div>
        )
    }
}
