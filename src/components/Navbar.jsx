import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { cvData } from '../data';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { socials } = cvData.personalInfo;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigation = (e, href) => {
        e.preventDefault();
        setMobileMenuOpen(false);

        if (href.startsWith('#')) {
            if (location.pathname === '/') {
                const element = document.getElementById(href.substring(1));
                if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            } else {
                navigate(`/${href}`);
            }
        } else {
            navigate(href);
            window.scrollTo(0, 0);
        }
    };

    const navLinks = [
        { name: 'Home', href: '/#hero' },
        { name: 'About', href: '/about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <Link to="/" className="logo" onClick={() => window.scrollTo(0, 0)}>
                    Sanjay<span className="dot">.</span>
                </Link>

                <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavigation(e, link.href)}
                            className={location.pathname === link.href ? 'active-link' : ''}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="nav-socials-mobile">
                        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href={socials.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href={socials.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href={socials.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href={socials.youtube} target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                    </div>
                </div>

                <div className="nav-socials-desktop">
                    <a href={socials.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href={socials.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href={socials.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href={socials.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href={socials.youtube} target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                </div>

                <button
                    className="mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
