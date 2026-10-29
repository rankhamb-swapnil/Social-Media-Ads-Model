
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../../css/style.css";



const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
     
      setScrolled(window.scrollY > 0);
    };

  
    window.addEventListener("scroll", handleScroll);

   
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-logo">
        <Link to="/dashboard">AdVision</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/logout" className="nav-link logout-link">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
