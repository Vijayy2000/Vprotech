// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import logo from "./logo.png";

// const Navbar = () => {
//   return (
//     <div >
//       <div className="container indigo topLeftBorders">
//         <img className="image" alt="logo" src={logo} height="100px" width="100px" />
//         <div>
//           <Link to="/">Home</Link>
//           <a href="#about">About Us</a>
//           <a href="#experience-section">Services</a>
//           <a href="#pg-footer">Contact</a>
//         </div>
//         <div></div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "./logo.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMobileClick = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div>
      <div className="container indigo topLeftBorders">
        <img className="image" alt="logo" src={logo} height="100px" width="100px" />

        <div className="hamburger-menu" onClick={handleMobileClick}>
          {isMobile ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`nav-links ${isMobile ? "active" : ""}`}>
          <Link to="/">Home</Link>
          <a href="#about">About Us</a>
          <a href="#experience-section">Services</a>
          <a href="#pg-footer">Contact</a>
        </div>

        <div className="md:d-none"></div>
      </div>
    </div>
  );
};

export default Navbar;
