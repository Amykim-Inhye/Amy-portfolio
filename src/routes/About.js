import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import AboutContent from '../components/AboutContent'

function About() {
  return (
    <>
      <Navbar />
      <Heroimg2 heading="ABOUT." text="I am a friendly Front-End Developer" />
      <AboutContent />
      <Footer />
    </>
  )
}

export default About
