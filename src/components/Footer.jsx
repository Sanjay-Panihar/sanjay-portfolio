import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { cvData } from '../data';

const Footer = () => {
    const { socials } = cvData.personalInfo;

    return (
        <footer style={{
            borderTop: '1px solid var(--border)',
            padding: '2rem 0',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            marginTop: '4rem',
            background: 'var(--bg-card)'
        }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div className="social-links" style={{ display: 'flex', gap: '1.5rem', fontSize: '1.5rem' }}>
                    <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} className="social-icon">
                        <FaLinkedin />
                    </a>
                    <a href={socials.instagram} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} className="social-icon">
                        <FaInstagram />
                    </a>
                    <a href={socials.facebook} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} className="social-icon">
                        <FaFacebook />
                    </a>
                    <a href={socials.youtube} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} className="social-icon">
                        <FaYoutube />
                    </a>
                </div>
                <div>
                    <p>© {new Date().getFullYear()} Sanjay Panihar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
