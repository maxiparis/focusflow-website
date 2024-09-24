import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  // State variables to hold form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State variable to hold the form submission status
  const [submitted, setSubmitted] = useState(false);

  // Handler function to update state when input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Example: Send form data to backend API
    fetch('https://your-backend-api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Form submitted successfully:', data);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  return (
    <div className="contact-form-container" >
      {submitted ? (
        <p className='thank-you-message'>Thank you for contacting us!</p>
      ) : (
        <form onSubmit={handleSubmit} className='contact-form'>
          <div className='form-group'>
            <label htmlFor="name" className='form-label'>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder='Enter your name'
            />
          </div>
          <div className='form-group'>
            <label htmlFor="email" className='form-label'>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder='Enter your email'
            />
          </div>
          <div className='form-group'>
            <label htmlFor="message" className='form-label'>Message:</label>
            <textarea
              id="message"
              name="message"
              className="form-input"
              value={formData.message}
              onChange={handleChange}
              placeholder='Enter your message'
              rows={5}
            ></textarea>
          </div>
          <button type="submit" className='submit-button'>Submit</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
