import React from 'react';
import Contact from './Contact';

function ContactPage() {
  const pujariList = [
    { id: 1, name: "Amar Chand Dadhich", mobile: "6378930169", img: "/img/png4.jpg" },
    { id: 2, name: "Mulchand Dadhich", mobile: "6378930169", img: "/img/png5.jpg" },
    { id: 3, name: "Laxman Pujari", mobile: "6378930169", img: "/img/png3.jpg" },
    { id: 4, name: "Mukesh Pujari", mobile: "6378930169", img: "/img/png3.jpg" },
  ];

  return <Contact pujariList={pujariList} />;
}

export default ContactPage;
