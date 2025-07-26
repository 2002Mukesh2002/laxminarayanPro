import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";
 // make sure CSS file is imported

function Header() {
  return (
     <header className="temple-header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo-container">
          <img src="/img/png3.jpg" alt="Mandir Logo" className="site-logo" />
          <h3>Shree Laxmi Nath Ji Mandir</h3>
        </div>

        {/* Navigation + Button */}
        <nav className="nav-bar">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
           

            {/* Dropdown 1 */}
            <li className="dropdown">
              <span>Events</span>
              <ul className="dropdown-menu">
               <li>
  <a href="https://yourwebsite.com/gallery" target="_blank" rel="noopener noreferrer">
    Visit Gallery
  </a>
</li>

                <li><Link to="/events/functions">Functions</Link>http://localhost:5173/gallery</li>
                <li><Link to="/events/special">Special Pooja</Link>http://localhost:5173/gallery</li>
              </ul>
            </li>

            {/* Dropdown 2 */}
            <li className="dropdown">
              <span>Media</span>
              <ul className="dropdown-menu">
                <li><Link to="/media/photos">Photos</Link></li>
                <li><Link to="/media/videos">Videos</Link></li>
              </ul>
            </li>

            {/* Dropdown 3 */}
           
          </ul>
          <button className="button">Submit</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;