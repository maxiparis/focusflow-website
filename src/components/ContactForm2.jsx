import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { Container, Form, Button } from 'react-bootstrap';

function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    message: '',
  });

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(
                (result) => {
                    console.log('Success:', result.text);
                    alert('Message sent successfully!');
                    // Clear form after submission
                    setFormData({ name: '', email: '', message: '' });
                },
                (error) => {
                    console.log('Error:', error.text);
                    alert('Failed to send the message, please try again.');
                }
            );
    };

    return (
        <Container className="py-5" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="text-left mb-4">Contact Us</h2>
            <Form ref={form} onSubmit={handleSubmit}>
                <Form.Group controlId="formName" className="text-start">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formEmail" className="text-start">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formMessage" className="text-start">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter your message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default ContactForm;
