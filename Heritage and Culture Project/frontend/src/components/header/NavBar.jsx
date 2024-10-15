import React, { useState, useEffect } from "react";
import {FaSearch} from 'react-icons/fa';
import { Link } from "react-router-dom"; // Import Link for routing
import "./NavBar.css";
import logo from "../../assets/images/logo.png";

export default function NavBar({ exploreRef }) {
  const [isResponsive, setIsResponsive] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  const toggleIcon = () => {
    setIsResponsive(!isResponsive);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setBackgroundColor("rgba(255, 255, 255, 0.3)");
    } else {
      setBackgroundColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="NavBar"
      style={{ backgroundColor, transition: "background-color 0.5s ease" }}
    >
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="search">
      <form action="">
        <input type="text" placeholder="Search anything..." />
        <FaSearch/>
      </form>
      </div>

      <ul className={isResponsive ? "navlink mobile" : "navlink"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li> 
          <Link to="/signin">Sign In</Link>
        </li>
        <li> 
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
      
      <button className="menu-icon" onClick={toggleIcon}>
        {isResponsive ? <>&#10005;</> : <>&#9776;</>}
      </button>
    </div>
  );
}
