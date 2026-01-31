import React from 'react';
import { cvData } from '../data';
import './Education.css';
import { FaUserGraduate } from 'react-icons/fa';

const Education = () => {
    return (
        <section id="education" className="section">
            <div className="container">
                <h2 className="section-title">Education</h2>
                <div className="education-grid">
                    {cvData.education.map((edu, index) => (
                        <div key={index} className="education-card card">
                            <div className="edu-icon">
                                <FaUserGraduate />
                            </div>
                            <div className="edu-content">
                                <span className="edu-year">{edu.year}</span>
                                <h3 className="edu-degree">{edu.degree}</h3>
                                <p className="edu-institution">{edu.institution}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
