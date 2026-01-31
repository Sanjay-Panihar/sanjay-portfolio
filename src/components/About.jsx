import React from 'react';
import { cvData } from '../data';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section bg-gradient">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <h2 className="section-title left-align">About Me</h2>
                        <div className="about-text">
                            <p className="lead-text">
                                Hi, I'm <span className="highlight-text">{cvData.personalInfo.name}</span>.
                            </p>
                            <p>
                                {cvData.personalInfo.objective}
                            </p>
                        </div>
                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">
                                    {new Date().getFullYear() - 2021}+
                                </span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Projects Completed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
