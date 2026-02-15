import React, { useEffect } from 'react';
import { cvData } from '../data';
import SEO from '../components/SEO';
import './AboutPage.css';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <SEO
                title="About Sanjay Panihar | Web Developer"
                description={`Learn more about Sanjay Panihar, a dedicated ${cvData.personalInfo.title} with expertise in ${cvData.skills.backend.join(', ')}.`}
                keywords="About Sanjay Panihar, Web Developer Biography, Sanjay Panihar Experience, Sanjay Panihar Education"
                name={cvData.personalInfo.name}
                type="profile"
                url={`${window.location.origin}/about`}
            />
            <div className="about-page pt-24 pb-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-8 text-center section-title">About Sanjay Panihar</h1>

                    <div className="bg-white/5 p-8 rounded-lg shadow-lg backdrop-blur-sm max-w-4xl mx-auto">
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Professional Summary</h2>
                            <p className="text-lg leading-relaxed text-gray-300">
                                {cvData.personalInfo.objective}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-2xl font-semibold mb-4 text-primary">Contact Information</h2>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong>Email:</strong> {cvData.personalInfo.email}</li>
                                    <li><strong>Phone:</strong> {cvData.personalInfo.phone}</li>
                                    <li><strong>Location:</strong> {cvData.personalInfo.location}</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-4 text-primary">Connect</h2>
                                <div className="flex gap-4">

                                    {Object.entries(cvData.personalInfo.socials).map(([platform, url]) => (
                                        url && (
                                            <a
                                                key={platform}
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="capitalize text-primary hover:text-white transition-colors"
                                            >
                                                {platform}
                                            </a>
                                        )
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
