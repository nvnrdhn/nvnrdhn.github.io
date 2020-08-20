import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <section className="hero-wrap js-fullheight">
                <div className="overlay" />
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight justify-content-center align-items-center">
                        <div className="col-lg-8 col-md-6 ftco-animate d-flex align-items-center">
                            <div className="text text-center">
                                <span className="subheading">Hi! I am</span>
                                <h1>Novan Ardhana</h1>
                                <h2>I'm a <span className="txt-rotate" data-period={2000} data-rotate='["Software Engineer", "Android Developer", "Web Developer"]' />
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mouse">
                    <a href="#" className="mouse-icon">
                        <div className="mouse-wheel"><span className="ion-ios-arrow-round-down" /></div>
                    </a>
                </div>
            </section>
        )
    }
}