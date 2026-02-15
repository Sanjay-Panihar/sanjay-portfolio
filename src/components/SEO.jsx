import React from 'react';
import { Helmet } from 'react-helmet-async';
import { cvData } from '../data';

const SEO = ({ title, description, keywords, name, type, url, image }) => {
    const siteTitle = title ? `${title} | Sanjay Panihar` : 'Sanjay Panihar | Portfolio';
    const siteDescription = description || cvData.personalInfo.objective;
    const siteKeywords = keywords || "Sanjay Panihar, Web Developer, Portfolio, React Developer";
    const siteUrl = url || window.location.href;
    const siteImage = image || "https://your-portfolio-url.com/og-image.jpg"; // Replace with actual image URL
    const twitterHandle = "@sanjay_panihar"; // Add if available

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{siteTitle}</title>
            <meta name='description' content={siteDescription} />
            <meta name='keywords' content={siteKeywords} />
            <meta name='author' content={cvData.personalInfo.name} />
            <link rel="canonical" href={siteUrl} />

            {/* Facebook tags */}
            <meta property="og:type" content={type || 'website'} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:image" content={siteImage} />

            {/* Twitter tags */}
            <meta name="twitter:creator" content={twitterHandle} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={siteDescription} />
            <meta name="twitter:image" content={siteImage} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": cvData.personalInfo.name,
                    "url": siteUrl,
                    "sameAs": [
                        "https://www.linkedin.com/in/sanjay-panihar",
                        // Add other social links here
                    ],
                    "jobTitle": cvData.personalInfo.title,
                    "image": siteImage,
                    "description": siteDescription
                })}
            </script>
        </Helmet>
    );
}

export default SEO;
