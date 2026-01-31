import React from 'react';
import { cvData } from '../data';
import './Projects.css';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-container">
                    {cvData.projects.map((project, index) => (
                        <div key={index} className="project-row">
                            <div className="project-info">
                                <h3 className="project-title">
                                    {project.title}
                                    <span className="project-number">0{index + 1}</span>
                                </h3>
                                <p className="project-desc">{project.description}</p>

                                {project.details.length > 0 && (
                                    <ul className="project-bullets">
                                        {project.details.slice(0, 3).map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                )}

                                <div className="project-links">
                                    {project.link ? (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-text">
                                            View Live Project <FaExternalLinkAlt className="link-icon" />
                                        </a>
                                    ) : (
                                        <span className="status-badge">Internal / Private</span>
                                    )}
                                </div>
                            </div>

                            <div className="project-tech-wrapper">
                                <h4 className="tech-heading" >Technologies</h4>
                                <div className="tech-tags-cloud">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="tech-pill">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
