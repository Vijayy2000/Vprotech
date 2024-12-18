import React from "react";
import "./Home.css";
import employment from "../Assets/employment.png"
import Providing from "../Assets/Providing.jpg"
import choose from "../Assets/choose.jpg"
import disability from "../Assets/disability.png"
import assin from "../Assets/assin.jpg"
import lifr_insurance from "../Assets/life_insurance.png"
import Footer from "../Footer";
import About from "./About";


const features = [
  {
    icon: "😊", 
    title: "5500+ Clients",
    description: "Trust Us",
  },
  {
    icon: "🤚",
    title: "Extensive Documentation",
    description: "Clean Code",
  },
  {
    icon: "🎧",
    title: "Free Lifetime Updates",
    description: "",
  },
  {
    icon: "⏰",
    title: "Get Professional",
    description: "Support",
  },
];



const ExperienceSection = () => {
  return (
    <section id="experience-section">
      <div className="experience-container">
        
   
        <div className="experience-content">
   
          <img className="profile-image" src={assin} alt="Profile" />

      
          <div className="experience-text">
            <h2>We're Here To Assist You With Exploring Protection</h2>
            <p>
              Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet
              lorem sit clita duo justo erat amet
            </p>

            {/* Feature List */}
            <div className="features">
              <div className="feature-item">
                <i className="feature-icon">📜</i> {/* Replace with proper icon */}
                <h4>Flexible Insurance Plans</h4>
              </div>
              <div className="feature-item">
                <i className="feature-icon">💸</i> {/* Replace with proper icon */}
                <h4>Money Back Guarantee</h4>
              </div>
            </div>
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ReasonsSection = () => {
  return (
    <section id="reasons-section">
      <div className="reasons-container">
        {/* Left Section */}
        <div className="reasons-content">
          <h2>Few Reasons Why People Choosing Us!</h2>
          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet.
          </p>
          <div className="reasons-features">
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h4>Simple claim process </h4>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-shipping-fast"></i>
              </div>
              <h4>Affordable premiums </h4>
            </div>
            <div className="feature">
              <div className="feature-icon">
              </div>
              <h4>Trusted by thousands </h4>
            </div>
            {/* <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-money-bill-wave"></i>
              </div>
              <h4>Money Saving</h4>
            </div> */}
          </div>
        </div>

        {/* Right Section */}
        <div className="reasons-image">
          <img src={choose} alt="Professional Woman" />
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
  
    <div class="Homebanner">
      
      <div style={{paddingLeft:"65em"}}>
        <a >7019372830 &nbsp;&nbsp; <br />
        contact@vprotecht.com</a>
        </div>
      <div className="grid-container">
        <div className="grid-item">
          <p>
         <span style={{fontSize:"25px", fontWeight:"bold"}}> Job Loss Coverage:</span> <br /> Protect your income during unemployment. 
          </p>
        </div>
        <div className="grid-item">
          <p>
          <span style={{fontSize:"25px", fontWeight:"bold"}}>Disability Insurance:</span> <br />Financial support for unexpected health challenges. 
          </p>
        </div>
        <div className="grid-item">
          <p>
          <span style={{fontSize:"25px", fontWeight:"bold"}}>  Life Insurance: </span> <br /> Safeguard your family’s future. 
          </p>
        </div>
      </div>

      <div className="home_inclusive">
        <div>
          <img className="homeimg" src={Providing} alt="img" />
        </div>
        <div className="home_para">
          <h1>Providing the best insurance policy to customers</h1>
          <p>
            Standard dummy text ever since the unknown printer took galley of
            scramble make a type specimen book has the been industr standard
            dummy text ever since printer took type make type specimen book.
          </p>
          <button className="primary">Click</button>
        </div>
      </div>
      
      <About/>

      <div className="footprint-container">
     
        <div className="footprint">
          <h2>Our Foot Print</h2>
          <p>
           VproTecht has left an indelible mark since its inception in June
            2020, serving 8.1 million lives and winning National Start-up award.
            With a nationwide footprint, our growth trajectory continues to soar
            higher!
          </p>
          <div className="stats">
            <div>
              <h3>1369</h3>
              <p>Partners</p>
            </div>
            <div>
              <h3>180</h3>
              <p>Employees</p>
            </div>
            <div>
              <h3>8.1 million</h3>
              <p>Lives Covered</p>
            </div>
            <div>
              <h3>38 KCr</h3>
              <p>Coverage</p>
            </div>
            <div>
              <h3>69 Cr</h3>
              <p>Claim Amount Serviced</p>
            </div>
          </div>
          <p className="disclaimer">
            * All business done by our associate company Svojas Insurance
            Brokers and Risk Management company Private Limited
            (U67120TG2017PTC118828) IRDAI Broking License Code No. DB 718/17,
            Certificate No. 627, License category- Direct Broker (Life &
            General), valid till 09/11/2026. Above data as of 31st October 2024.
          </p>
        </div>
      </div>

      <div className="why-choose-us">
        <h2 className="whytittle-choose">
          Why VproTecht Is Your Smart Choice?
        </h2>
        <div className="features">
          <div className="feature-card">
            <img
              src={employment}
              alt="Life Insurance"
              className="life-icon"
            />
            <h3>Job Less Coverage</h3>
            <p>
              Compliance-driven partnerships with technology in the forefront to
              take Insurance and allied products to the Underserved and
              unserved.
            </p>
          </div>
          <div className="feature-card">
            <img
              src={disability}
              alt="Health Insurance"
              className="life-icon"
            />
            <h3>Disability Insurance</h3>
            <p>
              Customized insurance, savings and pension plans ranging from
              Protection to Pension including Wellness for the chosen segment.
            </p>
          </div>
          <div className="feature-card">
            <img
              src={lifr_insurance}
              alt="Home Insurance"
              className="life-icon"
            />
            <h3>Life Insurance</h3>
            <p>
              Our expanding distribution network leverages existing market
              relationships to ensure nationwide coverage through various
              partners with efficient technology utilization.
            </p>
          </div>
        </div>
    
        <div>
        <ExperienceSection />
        </div>
        <div>
        <ReasonsSection />
        </div>


<div>
<h1>Customer Testimonials </h1>

</div>
<div className="figure">
        <figure class="snip1390">
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg" alt="profile-sample3" class="profile" />
  <figcaption>
    <h2>— Jane D.</h2>
    <h4>UX Design</h4>
    <blockquote>When I lost my job, this insurance gave me the peace of mind I needed</blockquote>
  </figcaption>
</figure>
<figure class="snip1390 hover"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg" alt="profile-sample5" class="profile" />
  <figcaption>
    <h2>Gordon Norman</h2>
    <h4>Accountant</h4>
    <blockquote>When I lost my job, this insurance gave me the peace of mind I needed </blockquote>
  </figcaption>
</figure>
<figure class="snip1390"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg" alt="profile-sample6" class="profile" />
  <figcaption>
    <h2>Sue Shei</h2>
    <h4>Public Relations</h4>
    <blockquote>When I lost my job, this insurance gave me the peace of mind I needed</blockquote>
  </figcaption>
</figure>
</div>

<div>
<Footer />
</div>

      </div>
    </div>
  );
};

export default Home;
