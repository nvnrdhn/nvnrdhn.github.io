import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <section className="ftco-about img ftco-section ftco-no-pt ftco-no-pb goto-here" id="about-section">
                <div className="container">
                    <div className="row d-flex no-gutters">
                        <div className="col-md-6 col-lg-6 d-flex">
                            <div className="img-about img d-flex align-items-stretch">
                                <div className="overlay" />
                                <div className="img d-flex align-self-stretch align-items-center" style={{ backgroundImage: 'url(images/me.jpg)' }}>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 pl-md-5 py-5">
                            <div className="row justify-content-start pb-3">
                                <div className="col-md-12 heading-section ftco-animate">
                                    <h1 className="big">About Me</h1>
                                    <h2 className="mb-4">About Me</h2>
                                    <p>An undergraduate-computer-science-stud / geek who's currently so into developing Android apps.</p>
                                    <ul className="about-info mt-4 px-md-0 px-2">
                                        <li className="d-flex"><span>Name:</span> <span>Novan Ardhana</span></li>
                                        <li className="d-flex"><span>Date of Birth:</span> <span>November 21, 1998</span></li>
                                        <li className="d-flex"><span>Location:</span> <span>Tangerang, Indonesia</span></li>
                                        <li className="d-flex"><span>Email:</span> <span>nvnrdhn@gmail.com</span></li>
                                        <li className="d-flex"><span>Phone: </span> <span>+62 821 2230 8510</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="counter-wrap ftco-animate d-flex mt-md-3">
                                <div className="text">
                                    <p><a href="https://intip.in/resumenvn" target="_blank" className="btn btn-primary py-3 px-3">Download Resume</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}