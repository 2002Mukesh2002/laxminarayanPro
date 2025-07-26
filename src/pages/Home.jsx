

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// import './Home.css'; // ✅ Ensure your styles are imported

function Home() {
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
};

  return (
    <div className="home-page">
      {/* ===== News Banner Image ===== */}
      <img src="/img/png3.jpg" alt="Temple News Banner" className="news-banner-img" />

      {/* ===== News Bar ===== */}
      <div className="news-bar">
        <span className="news-title">📰 NewspaperTemple News:</span>
        <marquee className="news-marquee" behavior="scroll" direction="left">
          Click on link <a href="https://swarnandhra.ap.gov.in/Suggestions" target="_blank" rel="noopener noreferrer">
         
          </a>"हम परम पूज्य श्री श्री 10008 श्री लक्ष्मी नाथ जी महाराज का मंदिर जो मलिकपुर, तोरन, जयपुर में स्थित है
        </marquee>
        <button className="view-all-btn">View All</button>
      </div>

      {/* ===== Slider Section ===== */}
   <div className="slider-container">
      <h2 style={{ textAlign: "center", color: "white", paddingBottom: "10px" }}>📸 मंदिर स्लाइडर</h2>
      <Slider {...settings}>
        <div className="slider-item">
          <img src="/img/png.jpg" alt="mandir1" />
        </div>
        <div className="slider-item">
          <img src="/img/png10.jpg" alt="mandir2" />
        </div>
        <div className="slider-item">
          <img src="/img/png6.jpg" alt="event" />
        </div>
      </Slider>
    </div>

    </div>
  );
}

export default Home;

