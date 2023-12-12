// Footer.js
import { Link } from 'react-router-dom';
import React from 'react';
import '../css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <Link to="/tos">Terms of Service</Link>
        </div>
        <div className="footer-section">
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-section">
          <Link to="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
