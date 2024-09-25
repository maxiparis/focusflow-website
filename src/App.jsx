import React from 'react';
import './App.css';
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
          <section>
            <Hero />
          </section>

          <section>
            <Features />
          </section>

          <section>
            <ContactForm2 />
          </section>

      </div>
    </div>
  );
}

export default App;
