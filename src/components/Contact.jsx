import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section text-center ftco-animate">
                            <h1 className="big big-2">Contact</h1>
                            <h2 className="mb-4">Contact Me</h2>
                            <p>Got something to talk about?</p>
                        </div>
                    </div>
                    <div className="row d-flex contact-info mb-5 justify-content-center">
                        <div className="col-md-6 col-lg-3 d-flex ftco-animate">
                            <div className="align-self-stretch box text-center p-4 shadow">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="icon-phone2" />
                                </div>
                                <div>
                                    <h3 className="mb-4">WhatsApp</h3>
                                    <p><a href="tel://+6282122308510">+62 821 2230 8510</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex ftco-animate">
                            <div className="align-self-stretch box text-center p-4 shadow">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="icon-paper-plane" />
                                </div>
                                <div>
                                    <h3 className="mb-4">Email</h3>
                                    <p><a href="mailto:nvnrdhn@gmail.com">nvnrdhn@gmail.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}