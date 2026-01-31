import React from 'react';
import { cvData } from '../data';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="experience-list">
                    {cvData.experience.map((exp, index) => (
                        <div key={index} className="experience-item card">
                            <div className="exp-header">
                                <div>
                                    <h3 className="exp-role">{exp.role}</h3>
                                    <h4 className="exp-company">{exp.company}</h4>
                                </div>
                                <div className="exp-meta">
                                    <span className="exp-date">{exp.duration}</span>
                                    {exp.location && <span className="exp-location">{exp.location}</span>}
                                </div>
                            </div>
                            {exp.description.length > 0 && (
                                <ul className="exp-details">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
