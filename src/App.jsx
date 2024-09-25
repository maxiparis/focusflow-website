import React from 'react';
import './App.css';
import ContactForm from './ContactForm';
import Hero from './components/Hero.jsx';
import Features from "./components/Features.jsx";
import ContactForm2 from './components/ContactForm2.jsx';

function App() {
  return (
    <div className="App">
      {/* Container to center the content */}
      <div className="container">
        {/* Company Name and Logo */}
          {/*<img src="/path-to-logo.png" alt="FocusFlow Logo" className="logo" />*/}
          <Hero />
          <Features />
          <ContactForm2 />
      </div>
    </div>
  );
}

export default App;
