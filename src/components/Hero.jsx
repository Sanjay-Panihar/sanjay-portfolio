import React from 'react';
import { cvData } from '../data';
import './Hero.css';
import profileImg from '../assets/profile_professional.png';

const Hero = () => {
    const { name, title, objective } = cvData.personalInfo;

    return (
        <section className="hero">
            <div className="hero-bg-glow"></div>
            <div className="container hero-container">
                <div className="hero-text-content">
                    <h2 className="greeting animate-fade-in" style={{ animationDelay: '0.1s' }}>Hello, I'm</h2>
                    <h1 className="name animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <span className="gradient-text">{name}</span>
                    </h1>
                    <h2 className="title animate-fade-in" style={{ animationDelay: '0.3s' }}>{title}</h2>
                    <p className="description animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        {objective.split('.')[0]}.
                    </p>

                    <div className="hero-btns animate-fade-in" style={{ animationDelay: '0.6s' }}>
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </div>
                <div className="hero-image-content animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    <div className="image-wrapper">
                        <img src={profileImg} alt={name} className="profile-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
