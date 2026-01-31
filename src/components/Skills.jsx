import React from 'react';
import { cvData } from '../data';
import './Skills.css';
import {
    FaHtml5, FaCss3Alt, FaJs, FaVuejs, FaReact, FaBootstrap, FaPhp,
    FaLaravel, FaNodeJs, FaDocker, FaJenkins, FaLinux, FaAws,
    FaGithub, FaGitAlt
} from 'react-icons/fa';
import {
    SiTypescript, SiGraphql, SiMysql, SiMongodb, SiNginx,
    SiPostman, SiJquery, SiExpress
} from 'react-icons/si';
import { VscAzure, VscVscode } from 'react-icons/vsc';

const iconMapping = {
    // Frontend
    "HTML": <FaHtml5 color="#E34F26" />,
    "CSS": <FaCss3Alt color="#1572B6" />,
    "JavaScript": <FaJs color="#F7DF1E" />,
    "Vue.js": <FaVuejs color="#4FC08D" />,
    "React": <FaReact color="#61DAFB" />,
    "Bootstrap": <FaBootstrap color="#7952B3" />,
    "jQuery": <SiJquery color="#0769AD" />,

    // Backend
    "PHP": <FaPhp color="#777BB4" />,
    "Laravel": <FaLaravel color="#FF2D20" />,
    "Node.js": <FaNodeJs color="#339933" />,
    "Express.js": <SiExpress />,
    "TypeScript": <SiTypescript color="#3178C6" />,
    "GraphQL": <SiGraphql color="#E10098" />,

    // Database
    "MySQL": <SiMysql color="#4479A1" />,
    "MongoDB": <SiMongodb color="#47A248" />,

    // Tools
    "VS Code": <VscVscode color="#007ACC" />,
    "Git/GitHub": <FaGithub />,
    "Docker": <FaDocker color="#2496ED" />,
    "Jenkins": <FaJenkins />,
    "Linux": <FaLinux />,
    "Nginx": <SiNginx color="#009639" />,
    "AWS": <FaAws color="#FF9900" />,
    "Azure": <VscAzure color="#007FFF" />,
    "Postman": <SiPostman color="#FF6C37" />,
};

const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-container">
                    {Object.entries(cvData.skills).map(([category, items]) => (
                        <div key={category} className="skill-row">
                            <h3 className="category-label">{category}</h3>
                            <div className="skill-icons-list">
                                {items.map((skill) => (
                                    <div key={skill} className="skill-icon-item">
                                        <div className="icon-wrapper">
                                            {iconMapping[skill]}
                                        </div>
                                        <span className="skill-name">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
