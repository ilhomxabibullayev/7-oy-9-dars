import React from 'react'
import './contact.css'

const page = () => {
    return (
        <div className="container contact__container">
            <h1 className="contact-title">Contact Us</h1>
            <form method="POST" action="/api/contact" className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required className="form-input" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required className="form-input" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required className="form-textarea"></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
            </form>
        </div>
    )
}

export default page
