import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="logo">
          <img src="/General Images/IUBDNC-Logo.png" alt="IUBDNC Logo" />
          <span>IUBDNC</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#events">Events</a>
          <a href="#team">Team</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
