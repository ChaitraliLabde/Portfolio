import React, { useState } from 'react';
import './ContactMe.css';
import * as Yup from 'yup'; // Import Yup for validation

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({}); // State to hold validation errors

  // Define Yup schema for validation
  const schema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate the form data against the schema
      await schema.validate({ name, email, message }, { abortEarly: false });

      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
      setErrors({}); // Clear any previous errors
    } catch (err) {
      // If validation fails, set the validation errors
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
    }
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          {errors.message && <p className="error-message">{errors.message}</p>}
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default ContactMe;
