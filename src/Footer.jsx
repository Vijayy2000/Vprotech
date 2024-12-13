import React from 'react';
import "./Footer.css";
import logo from "../src/Assets/logo.png";

const Footer = () => {
  return (
    <div class="pg-footer">
    <footer class="footer">
      <svg class="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path class="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
      </svg>
      <div class="footer-content">
        <div class="footer-content-column">
          <div class="footer-logo">
            <a class="footer-logo-link" href="#">
            <img src={logo} height="100px" width="100px" />
              <h1>VproTech</h1>
            </a>
          </div>
        
        </div>
        <div class="footer-content-column">
          <div class="footer-menu">
            <h2 class="footer-menu-name"> Company</h2>
            <ul id="menu-company" class="footer-menu-list">
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Contact</a>
              </li>
              <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                <a href="#">News</a>
              </li>
            </ul>
          </div>
       
        </div>
        <div class="footer-content-column">
          <div class="footer-menu">
            <h2 class="footer-menu-name"> Quick Links</h2>
            <ul id="menu-quick-links" class="footer-menu-list">
              <li class="menu-item menu-item-type-custom menu-item-object-custom">
                <a target="_blank" rel="noopener noreferrer" href="#">Home</a>
              </li>
              <li class="menu-item menu-item-type-custom menu-item-object-custom">
                <a target="_blank" rel="noopener noreferrer" href="/about">About</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="/Serivese">Serivese</a>
              </li>
              <li class="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                <a href="/Customers">Customers</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-content-column">
          <div class="footer-call-to-action">
            <h2 class="footer-call-to-action-title"> Let's Chat</h2>
            <p class="footer-call-to-action-description"> Have a support question?</p>
            <a class="footer-call-to-action-button button" href="/Contact" target="_self"> Get in Touch </a>
          </div>
          <div class="footer-call-to-action">
            <h2 class="footer-call-to-action-title"> You Call Us</h2>
            <p class="footer-call-to-action-link-wrapper"> <a class="footer-call-to-action-link" href="tel:7893163266" target="_self"> 7893163266 </a></p>
          </div>
        </div>
       
      </div>
      <div class="footer-copyright">
        <div class="footer-copyright-wrapper">
          <p class="footer-copyright-text">
            <a class="footer-copyright-link" href="#" target="_self"> ©2024. | Designed By : vijay | All rights reserved. </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
  )
}

export default Footer