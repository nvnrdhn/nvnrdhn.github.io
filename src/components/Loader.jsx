import React, { Component } from 'react'

export default class Loader extends Component {
    render() {
        return (
            <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx={24} cy={24} r={22} fill="none" strokeWidth={4} stroke="#2e2e2e" /><circle className="path" cx={24} cy={24} r={22} fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#ffffff" /></svg></div>
        )
    }
}