import React from "react";
import "./Navbar.css";
import logo from "./logo.png";

const Navbar = () => {
  return (
    // <div>
    //   <nav style={{ display: "flex", background: "#004658" }}>
    //     <div>
    //       <img src={logo} height="100px" width="100px" />
    //     </div>

    //     <ul className="style">
    //       <li>
    //         <a href="/">Home</a>
    //       </li>
    //       <li>
    //         <a href="/about">About</a>
    //       </li>
    //       <li>
    //         <a href="/Serivese">Serivese</a>
    //       </li>
    //       <li>
    //         <a href="/OurProduct">OurProduct</a>
    //       </li>
    //       <li>
    //         <a href="/contact">Contact</a>
    //       </li>
    //     </ul>
    //   </nav>
      
    // </div>
    <div className="container indigo topLeftBorders">
    <a>HOME</a>
    <a>ARTICLES</a>
    <a>PORTFOLIO</a>
    <a>ABOUT</a>
    <a>CONTACT</a>
  </div>
  );
};

export default Navbar;
