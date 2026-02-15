import React from 'react';
import { cvData } from '../data';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = React.useState(null); // null, 'submitting', 'success', 'error'

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const encode = (data) => {
            return Object.keys(data)
                .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
                .join("&");
        };

        try {
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", ...formData })
            });
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-wrapper">
                    <div className="contact-info card">
                        <h3 className="contact-heading">Contact Information</h3>
                        <p className="contact-text">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="info-item">
                            <span className="info-label">Email:</span>
                            <a href={`mailto:${cvData.personalInfo.email}`} className="info-value">{cvData.personalInfo.email}</a>
                        </div>

                        <div className="info-item">
                            <span className="info-label">Phone:</span>
                            <a href={`tel:${cvData.personalInfo.phone.replace(/\s/g, '')}`} className="info-value">+91 {cvData.personalInfo.phone}</a>
                        </div>

                        <div className="info-item">
                            <span className="info-label">Location:</span>
                            <span className="info-value">{cvData.personalInfo.location}</span>
                        </div>

                        <div className="social-links-contact" style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                            <a href="https://www.linkedin.com/in/sanjay-panihar" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.3s' }}>
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.3s' }}>
                                <FaGithub />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.3s' }}>
                                <FaInstagram />
                            </a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.3s' }}>
                                <FaFacebook />
                            </a>
                            <a href="https://www.youtube.com/@SanjayPanihar" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.3s' }}>
                                <FaYoutube />
                            </a>
                        </div>
                    </div>

                    <form
                        className="contact-form card"
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        onSubmit={handleSubmit}
                    >
                        <input type="hidden" name="form-name" value="contact" />

                        <h3 className="contact-heading">Send me a Message</h3>

                        {status === 'success' && (
                            <div className="alert success">Message sent successfully! I'll get back to you soon.</div>
                        )}

                        {status === 'error' && (
                            <div className="alert error">Something went wrong. Please try again or email me directly.</div>
                        )}

                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="form-input"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="form-input"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Message"
                                rows="5"
                                className="form-input"
                                required
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button className="btn btn-primary" disabled={status === 'submitting'}>
                            {status === 'submitting' ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
