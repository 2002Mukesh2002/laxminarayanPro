import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"; // ✅ Correct import
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import "./App.css";
import ContactPage from './pages/ContactPage';









function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Gallery" element={<Gallery />} />
    <Route path="/contact" element={<ContactPage />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
