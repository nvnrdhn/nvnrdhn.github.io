import React, { Component } from 'react'

export default class Resume extends Component {
    render() {
        return (
            <section className="ftco-section ftco-no-pb" id="resume-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <nav id="navi">
                                <ul>
                                    <li><a href="#page-1">Education</a></li>
                                    <li><a href="#page-2">Experience</a></li>
                                    <li><a href="#page-3">Skills</a></li>
                                    <li><a href="#page-4">Awards</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-md-9">
                            <div id="page-1" className="page one">
                                <h2 className="heading">Education</h2>
                                <div className="resume-wrap d-flex ftco-animate">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="flaticon-ideas" />
                                    </div>
                                    <div className="text pl-3">
                                        <span className="date">June 2017 - August 2021 (Expected)</span>
                                        <h2>Bachelor of Science in Computer Science Candidate</h2>
                                        <span className="position">Institut Teknologi Sepuluh Nopember, Surabaya</span>
                                        <p>Current GPA 3.72 (6th Semester).</p>
                                    </div>
                                </div>
                            </div>
                            <div id="page-2" className="page two">
                                <h2 className="heading">Experience</h2>
                                <div className="resume-wrap d-flex ftco-animate">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="flaticon-ux-design" />
                                    </div>
                                    <div className="text pl-3">
                                        <span className="date">August 2020 - Now</span>
                                        <h2>PesanLokal</h2>
                                        <span className="position">Android Developer</span>
                                        <p>Improved features on PesanLokal's native Android application.</p>
                                    </div>
                                </div>
                                <div className="resume-wrap d-flex ftco-animate">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="flaticon-ux-design" />
                                    </div>
                                    <div className="text pl-3">
                                        <span className="date">March 2019 - February 2020</span>
                                        <h2>Hoverlight</h2>
                                        <span className="position">Android/Front-End Developer</span>
                                        <p>Implemented notification, chat system, and mobile tracking system in native Android app.</p>
                                    </div>
                                </div>
                            </div>
                            <div id="page-3" className="page three">
                                <h2 className="heading">Skills</h2>
                                <h3 className="mb-3">Languages</h3>
                                <div className="row progress-circle mb-5">
                                    <div className="col-lg-3">
                                        <div className="bg-white rounded-lg shadow p-4 mb-4">
                                            <h2 className="h5 font-weight-bold text-center m-0">C/C++</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="bg-white rounded-lg shadow p-4 mb-4">
                                            <h2 className="h5 font-weight-bold text-center m-0">Java</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="bg-white rounded-lg shadow p-4 mb-4">
                                            <h2 className="h5 font-weight-bold text-center m-0">Kotlin</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="bg-white rounded-lg shadow p-4 mb-4">
                                            <h2 className="h5 font-weight-bold text-center m-0">Python</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="bg-white rounded-lg shadow p-4 mb-4">
                                            <h2 className="h5 font-weight-bold text-center m-0">JavaScript</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="bg-white rounded-lg shadow p-4 mb-4">
                                            <h2 className="h5 font-weight-bold text-center m-0">PHP</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="bg-white rounded-lg shadow p-4 mb-4">
                                            <h2 className="h5 font-weight-bold text-center m-0">HTML</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="bg-white rounded-lg shadow p-4 mb-4">
                                            <h2 className="h5 font-weight-bold text-center m-0">CSS</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="bg-white rounded-lg shadow p-4 mb-4">
                                            <h2 className="h5 font-weight-bold text-center m-0">SQL</h2>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="mb-3">Frameworks</h3>
                                <div className="row progress-circle mb-5">
                                    <div className="col-lg-3">
                                        <div className="bg-white rounded-lg shadow p-4 mb-4">
                                            <h2 className="h5 font-weight-bold text-center m-0">Android</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="bg-white rounded-lg shadow p-4 mb-4">
                                            <h2 className="h5 font-weight-bold text-center m-0">Phalcon</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="bg-white rounded-lg shadow p-4 mb-4">
                                            <h2 className="h5 font-weight-bold text-center m-0">Laravel</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="bg-white rounded-lg shadow p-4 mb-4">
                                            <h2 className="h5 font-weight-bold text-center m-0">Node.js</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="bg-white rounded-lg shadow p-4 mb-4">
                                            <h2 className="h5 font-weight-bold text-center m-0">Express.js</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="bg-white rounded-lg shadow p-4 mb-4">
                                            <h2 className="h5 font-weight-bold text-center m-0">React.js</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="bg-white rounded-lg shadow p-4 mb-4">
                                            <h2 className="h5 font-weight-bold text-center m-0">Vue.js</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="bg-white rounded-lg shadow p-4 mb-4">
                                            <h2 className="h5 font-weight-bold text-center m-0">Three.js</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="bg-white rounded-lg shadow p-4 mb-4">
                                            <h2 className="h5 font-weight-bold text-center m-0">Socket.io</h2>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="mb-3">Concepts</h3>
                                <div className="row progress-circle mb-5">
                                    <div className="col-lg-3">
                                        <div className="bg-white rounded-lg shadow p-4 mb-4">
                                            <h2 className="h5 font-weight-bold text-center m-0">MVC</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="bg-white rounded-lg shadow p-4 mb-4">
                                            <h2 className="h5 font-weight-bold text-center m-0">MVVM</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="bg-white rounded-lg shadow p-4 mb-4">
                                            <h2 className="h5 font-weight-bold text-center m-0">OOP</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="bg-white rounded-lg shadow p-4 mb-4">
                                            <h2 className="h5 font-weight-bold text-center m-0">REST API</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="page-4" className="page four">
                                <h2 className="heading">Awards</h2>
                                <div className="resume-wrap d-flex ftco-animate">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="flaticon-idea" />
                                    </div>
                                    <div className="text pl-3">
                                        <span className="date">2017 & 2018</span>
                                        <h2>Top 90 Indonesia National Contest</h2>
                                        <p>A national competitive programming contest followed by more than 500 teams in Indonesia.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}