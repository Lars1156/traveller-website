// components/ContactUs.js
import React from 'react';
import './cssFiles/contact.css'

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic for handling form submission (e.g., sending data to server)
        alert('Form submitted!');
    };

    return (
        <div className="contact-us">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Your Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Your Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
