import React from 'react'

function About() {
  return (
    <>
      {/* Intro Section */}
      <div className="about-page">
        <div className="about-hero">
          <h1>About Shree Laxmi Nath Ji Mandir</h1>
          <p>A divine place dedicated to devotion, peace, and service.</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h2>Our History</h2>
            <p>
              Shree Laxmi Nath Ji Mandir is one of the most revered temples in the region,
              known for its centuries-old traditions and spiritual significance.
              Thousands of devotees visit every year to seek blessings and participate in rituals,
              bhajans, and festivals.
            </p>

            <h2>Our Vision</h2>
            <p>
              To spread the message of devotion, love, and dharma to every corner of society.
              The temple also supports community development, free meals, and spiritual education.
            </p>
          </div>

          <div className="about-image">
            <img
              src="/img/png3.jpg"
              alt="Mandir"
            />
          </div>
        </div>
      </div>

      {/* Extra Sections */}
      <div className="about-page">
        <section id="about" className="section">
          <h2>About Us</h2>
          <p>
            Shanti Temple is a place of spiritual reflection, prayer, and cultural heritage.
            Join us for daily aarti, bhajans, and community events.
          </p>
        </section>

        <section id="schedule" className="section">
          <h2>Daily Schedule</h2>
          <ul>
            <li>5:30 AM – Morning Aarti</li>
            <li>6:00 PM – Evening Puja</li>
            <li>7:00 PM – Bhajan/Kirtan</li>
          </ul>
        </section>

        
        <div className="card-container">
      
      {/* About Mandir Card */}
      <div className="card">
        <img
          src="/img/png6.jpg" // change this to your image path
          alt="About Mandir"
          className="card-img"
        />
        <div className="card-body">
          <h2>About Mandir</h2>
          <p>
            Shree Shree 1008 Shree Laxmi Nath Ji Mandir is a spiritual center known for divine rituals,
            religious events, and cultural celebrations. Devotees from all over visit for blessings and peace.
          </p>
        </div>
      </div>
      

      {/* Pujari Card */}
      <div className="card">
        <img
          src="/img/png6.jpg" // change this to pujari image path
          alt="Pujari Ji"
          className="card-img"
        />
        <div className="card-body">
          <h2>Pujari Ji</h2>
          <p>
            Pandit amaechand dadhich Ji is the head priest of the Mandir, known for his devotion,
            rituals, and spiritual guidance. His daily Aartis and discourses uplift the hearts of devotees.
          </p>
        </div>
      </div>

    </div>
      {/* ===== Temple Card Section ===== */}
      <div className="card-container">
        <div className="card">
          <img src="/img/png3.jpg" alt="mandir" className="card-img" />
          <div className="card-body">
            <h2>Shree Laxmi Nath Ji Mandir</h2>
            <p>
              Yeh mandir bhakti aur shanti ka prateek hai. Har saal hazaron bhakt yahan darshan karne aate hain.
            </p>
            <button className="card-btn">Read More</button>
          </div>
        </div>
      </div>

      {/* ===== Welcome Section ===== */}
      <div className="welcome-section">
        <h1>🙏 Welcome to Shree Laxmi Nath Ji Mandir 🙏</h1>
        <p>
          Shree Laxmi Nath Ji Mandir is a spiritual center of peace and devotion. We invite you to experience the divine atmosphere, participate in daily rituals, and join us in festivals celebrated with great joy.
        </p>
      </div>

      {/* ===== Events Section ===== */}
      <div className="events-section">
        <h2>📅 Upcoming Events</h2>
        <ul className="event-list">
          <li><strong>27 July 2025:</strong>  shree Celebration</li>
          <li><strong>22 August 2025:</strong> Krishna Janmashtami</li>
          <li><strong>5 November 2025:</strong> Diwali Maha Aarti</li>
        </ul>
      </div>

      {/* ===== Contact/Seva Buttons ===== */}
      <div className="contact-seva-section">
        <button className="seva-btn">📩 Contact Pujari</button>
        <button className="seva-btn">🙏 Book Seva</button>
      </div>
      </div>
    </>
  );
}

export default About;