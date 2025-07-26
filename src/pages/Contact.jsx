import React, { useEffect, useState } from 'react';

function Contact() {
  const [pujariList, setPujariList] = useState([]);

  useEffect(() => {
    fetch('/pujari.json') // ✅ public folder se data le raha hai
      .then(res => res.json())
      .then(data => setPujariList(data.pujaris)) // ✅ data.pujaris use karna zaroori hai
      .catch(err => console.error('Error fetching pujari data:', err));
  }, []);

  return (
    <div className="contact-page">
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <form id="contactForm">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Your Mobile Number" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      <div className="pujari-container">
        {pujariList.map((pujari) => (
          <div className="pujari-card" key={pujari.id}>
            <img src={pujari.img} alt={pujari.name} />
            <h3>{pujari.name}</h3>
            <p>Mobile: {pujari.mobile}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
