import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="row ">
                    <div className="col-xl-12" >
                        <div className="card">
                            <div className="row">
                                <div className="col-sm-6">
                                    <img src="public/assets/akhil.jpg" width="60%" height="400px" className="img-rounded" alt="Me" />
                                </div>
                                <div className="col-sm-6">
                                    <div className="card w-100">
                                        <p>Hi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
