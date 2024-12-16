import React from 'react'
import './Home.css'

const About = () => {
  return (
    <section id="about">
      
      <div className="aboutcontainer">
      <h1 className="header1">About Us</h1>
      <h2 className="header">Our Commitment</h2>
      <p className="content">
        We are committed to providing financial security to individuals and families during life’s uncertainties. From
        job loss to unexpected disabilities, our tailored insurance solutions are here to support you.
      </p>
      
      <h3 className="subHeader">Mission Statement</h3>
      <blockquote className="mission">
        "Our mission is to deliver personalized insurance plans that empower you to navigate life's challenges with
        confidence."
      </blockquote>
      
      <h3 className="subHeader">Core Values</h3>
      <ul className="valuesList">
        <li className="value1">Compassion</li>
        <li className="value1">Reliability</li>
        <li className="value1">Innovation</li>
      </ul>
    </div>

    </section>
  )
}

export default About
