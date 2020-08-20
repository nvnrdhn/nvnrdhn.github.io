import React, { Component } from 'react'

export default class Service extends Component {
    render() {
        return (
            <section className="ftco-section" id="services-section">
                <div className="container-fluid px-md-5">
                    <div className="row justify-content-center py-5 mt-5">
                        <div className="col-md-12 heading-section text-center ftco-animate">
                            <h1 className="big big-2">Things I Do</h1>
                            <h2 className="mb-4">Things I Do</h2>
                            <p>Just a list of things that I'm passionate about.</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-4 text-center d-flex ftco-animate">
                            <a className="services-1 shadow">
                                <span className="icon">
                                    <i className="icon-android" />
                                </span>
                                <div className="desc">
                                    <h3 className="mb-5">Android Development</h3>
                                    <p>The ultimate solution to do things on-the-go.</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 text-center d-flex ftco-animate">
                            <a className="services-1 shadow">
                                <span className="icon">
                                    <i className="icon-code" />
                                </span>
                                <div className="desc">
                                    <h3 className="mb-5">Web Development</h3>
                                    <p>Desktop or mobile? No worries, web is the new hot.</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 text-center d-flex ftco-animate">
                            <a className="services-1 shadow">
                                <span className="icon">
                                    <i className="icon-reddit-alien" />
                                </span>
                                <div className="desc">
                                    <h3 className="mb-5">Deep Learning</h3>
                                    <p>You give data and then let the computer learns, the possibility is infinite.</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 text-center d-flex ftco-animate">
                            <a className="services-1 shadow">
                                <span className="icon">
                                    <i className="icon-gamepad" />
                                </span>
                                <div className="desc">
                                    <h3 className="mb-5">Game Development</h3>
                                    <p>"I love gaming and I can code, so why not do both?" Said no one ever.</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}