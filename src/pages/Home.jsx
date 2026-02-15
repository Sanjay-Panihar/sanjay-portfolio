import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';
import SEO from '../components/SEO';
import { cvData } from '../data';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <>
            <SEO
                title="Sanjay Panihar | Portfolio"
                description={cvData.personalInfo.objective}
                keywords="Sanjay Panihar, Web Developer, Portfolio"
                name={cvData.personalInfo.name}
                type="website"
            />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
        </>
    );
};

export default Home;
