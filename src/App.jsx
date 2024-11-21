// App.jsx
import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import ContactForm2 from './components/ContactForm2.jsx';
import OurFooter from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Hero />
        <Features />
        <ContactForm2 />
        <OurFooter />
      </div>
    </div>
  );
}

export default App;
