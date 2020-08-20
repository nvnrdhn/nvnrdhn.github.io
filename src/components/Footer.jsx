import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="ftco-footer ftco-section">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-md text-center">
                            <div className="ftco-footer-widget mb-2">
                                <h2 className="ftco-heading-2">Other Links</h2>
                                <ul className="ftco-footer-social list-unstyled mt-5">
                                    <li className="ftco-animate"><a href="https://github.com/nvnrdhn"><span className="icon-github" /></a></li>
                                    <li className="ftco-animate"><a href="https://www.linkedin.com/in/nvnrdhn/"><span className="icon-linkedin" /></a></li>
                                    <li className="ftco-animate"><a href="https://www.instagram.com/novanardhn_/"><span className="icon-instagram" /></a></li>
                                    <li className="ftco-animate"><a href="https://www.youtube.com/channel/UCvn-74zLOQAukZsXtwqUxYw"><span className="icon-youtube" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>
                                nvnrdhn© All rights reserved | This template is edited with <i className="icon-heart color-danger" aria-hidden="true" /> from <a href="https://colorlib.com" target="_blank">Colorlib</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}