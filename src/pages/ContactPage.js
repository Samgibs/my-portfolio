import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const Container = styled.div`
  background: #EEF2F0;
  color: #282828;
  padding: 50px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;

  input, textarea {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #15696F;
    border-radius: 5px;
  }

  button {
    background: #15696F;
    color: #EEF2F0;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const emailData = {
        from_name: formData.name,
        message: formData.message,
        to_name: 'Samuel Gichohi', 
        reply_to: formData.email,
      };

      await emailjs.send('service_lc2qmma', 'template_jcbp96v', emailData, 'eL5aJfCyVQi7AAz6H');
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending message!');
    }
  };

  return (
    <Container>
      <h1>Contact Me</h1>
      <ContactForm onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </ContactForm>
    </Container>
  );
};

export default ContactPage;




