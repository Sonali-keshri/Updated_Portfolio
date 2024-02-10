import React from "react";
import "./footer.css";
import { AiFillGithub } from "react-icons/ai";
import { SiInstagram } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    
    <footer>
      <a href="#" className="footer_logo">
        SONALI
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://github.com/Sonali-keshri">
          <AiFillGithub />
        </a>
        <a href="https://www.instagram.com/mahi.ra45/">
          <SiInstagram />
        </a>
        <a href="https://www.linkedin.com/in/sonali-keshri-322875225">
          <AiFillLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
