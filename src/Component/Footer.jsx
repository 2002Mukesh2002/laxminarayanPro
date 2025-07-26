// components/Footer.js
import React from 'react';

function Footer() {
  return (
  <footer className="footer">
  <div className="footer-content">

    {/* Temple Info */}
    <div className="footer-section">
      <h3>Shree Laxmi Nath Ji Mandir</h3>
      <p>Bhakti, Seva, and Shanti ka Prateek</p>
    </div>

    {/* Quick Links */}
    <div className="footer-section">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div className="footer-section">
      <h4>Contact Us</h4>
      <ul className="contact-list">
        <li>
          <a href="example@gmail.com">
             <i className="fa fa-envelope-o" aria-hidden="true"></i>example@gmail.com
</a>
        </li>
        <li>
          <a href="tel:+916378390169">
            <i className="fa fa-volume-control-phone" aria-hidden="true"></i> 6378390169
          </a>
        </li>
        <li>
          <i className="fa fa-map-marker" aria-hidden="true"></i> Govindgarh Malikpur, Toran Man Market
        </li>
      </ul>
      <h4>Follow Us</h4>
      <div className="social-i">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
      </div>
    </div>

    
    

  </div>

  <div className="footer-bottom">
    <p>&copy; {new Date().getFullYear()} Shree Laxmi Nath Ji Mandir. All Rights Reserved.</p>
  </div>
</footer>

  );
}

export default Footer;
