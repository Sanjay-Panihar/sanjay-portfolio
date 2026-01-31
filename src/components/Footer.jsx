import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            borderTop: '1px solid var(--border)',
            padding: '2rem 0',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            marginTop: '4rem',
            background: 'var(--bg-card)'
        }}>
            <div className="container">
                <p>© {new Date().getFullYear()} Sanjay Panihar. All rights reserved.</p>
                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Built with React & Vite</p>
            </div>
        </footer>
    );
};

export default Footer;
