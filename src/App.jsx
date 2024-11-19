import React from 'react';
import './styles/App.css';
import Hero from './components/Hero.jsx';
import Features from "./components/Features.jsx";
import ContactForm2 from './components/ContactForm2.jsx';
import OurFooter from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      {/* Container to center the content */}
      <div className="container">
        {/* Company Name and Logo */}
        {/*  <img src="/path-to-logo.png" alt="FocusFlow Logo" className="logo" />*/}
            <Hero />
            <Features />
            <ContactForm2 />
            <OurFooter />

      </div>
    </div>
  );
}

export default App;
