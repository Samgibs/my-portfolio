import React, { useState } from 'react';
import './App.css';

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files.length > 0) {
      setFormData((prevData) => ({ ...prevData, [name]: URL.createObjectURL(files[0]) }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.message && formData.image) {
      setTestimonials([...testimonials, formData]);
      setFormData({ name: '', message: '', image: null });
    }
  };

  return (
    <div className="testimonials-container">
      <h2>Client Testimonials</h2>
      <form onSubmit={handleSubmit} className="testimonial-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Testimonial"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <img src={testimonial.image} alt={`${testimonial.name}'s profile`} className="profile-pic" />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.message}</p>
          </div>
        ))}
      </div>
      <button className="slide-button" onClick={() => setTestimonials((prev) => [...prev.slice(1), prev[0]])}>
        Next
      </button>
    </div>
  );
};

export default TestimonialsPage;

