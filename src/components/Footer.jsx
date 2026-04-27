import { FaFacebook, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/General Images/IUBDNC-Logo.png" alt="IUBDNC Logo" />
          <h2>IUB Dance Club</h2>
        </div>
        
        <div className="footer-social">
          <h3>Connect With Us</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/IUBDnC" target="_blank" rel="noopener noreferrer" className="social-btn facebook">
              <FaFacebook />
            </a>
            <a href="https://www.youtube.com/@iubdanceclub634" target="_blank" rel="noopener noreferrer" className="social-btn youtube">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>IUB Dance Club Website | Designed By Faruque Azam Alvee</p>
      </div>
    </footer>
  );
};

export default Footer;
