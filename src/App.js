import React from 'react';
import Script from 'react-script-tag'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Loader from './components/Loader'
import About from './components/About'
import Resume from './components/Resume'
import Service from './components/Service'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default class App extends React.Component {
  render() {

    return (
      <div>
        <Navbar />
        <Home />
        <About />
        <Resume />
        <Service />
        {/* <Project /> */}
        <Contact />
        <Footer />

        <Loader />

        <Script src="/js/main.js" />
      </div>
    )
  }
}
