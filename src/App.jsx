import React from 'react';
import './App.css';
import ContactForm from './ContactForm';
import Hero from './components/Hero.jsx';
import Features from "./components/Features.jsx";

function App() {
  return (
    <div className="App">
      {/* Container to center the content */}
      <div className="container">
        {/* Company Name and Logo */}
          {/*<img src="/path-to-logo.png" alt="FocusFlow Logo" className="logo" />*/}
          <Hero />

          <Features />
        {/* Description */}
        <section className="about">
          <h2>About FocusFlow</h2>
          <p>
            FocusFlow is a productivity tool designed to help individuals and teams manage their tasks
            and stay focused. Whether you're working on a solo project or collaborating with a team,
            FocusFlow provides you with the tools you need to optimize your workflow.
          </p>
        </section>

        {/* Contact Form Component */}
        <section className="contact">
          <h2>Contact Us</h2>
          <ContactForm /> {/* This is where contact form will be rendered */}
        </section>

        {/* Link to Survey */}
        <footer className="footer">
          <p>
            Participate in our survey: <a href="https://link-to-your-survey.com" target="_blank" rel="noopener noreferrer">Click here</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
