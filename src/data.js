export const cvData = {
  personalInfo: {
    name: "Sanjay Panihar",
    title: "Software Developer",
    email: "sanjaypanihar@gmail.com",
    phone: "9728044885",
    location: "#280, Sohna Distt. Gurgaon (HARYANA)",
    objective: "Dedicated Software Developer with a passion for crafting efficient and scalable web applications. Seeking to leverage my expertise in Laravel framework and Node js to contribute to innovative projects, collaborate with cross-functional teams, and drive impactful results. Committed to staying updated with emerging technologies and continuously enhancing my skills to deliver high-quality solutions that meet client objectives.",
    socials: {
      github: "https://github.com/", // Placeholder
      linkedin: "https://linkedin.com/", // Placeholder
    }
  },
  experience: [
    {
      company: "Wroffy Technology",
      role: "Software Developer",
      duration: "Aug 2024 - Present",
      location: "Gurgaon",
      description: [
        "Architecting and developing scalable web applications using modern Javascript frameworks and PHP backend solutions.",
        "Collaborating with cross-functional teams to define requirements and deliver user-centric features.",
        "Optimizing application performance and ensuring code quality through rigorous testing and code reviews.",
        "Implementing best practices in API design and database management for robust data handling."
      ]
    },
    {
      company: "Kataria Software Solutions",
      role: "Laravel Developer",
      duration: "Oct 2023 - Jul 2024",
      location: "Gurgaon",
      description: [
        "Spearheaded the development of a comprehensive Transport Management System (TMS), covering vehicle tracking, project management, and sales automation.",
        "Seamlessly integrated third-party tracking APIs to provide real-time vehicle location updates, utilizing background cron jobs for data synchronization.",
        "Engineered a dynamic, no-code project module that allowed for flexible project creation and management.",
        "Streamlined the sales workflow by implementing bulk Excel uploads and automated lead generation from social media channels.",
        "Enhanced administrative control by implementing granular user permissions and automated email notification systems."
      ]
    },
    {
      company: "Digital fox",
      role: "Laravel Developer",
      duration: "Dec 2021 - Sept 2023",
      location: "Mohali",
      description: [
        "Developed and maintained high-performance web applications using the Laravel framework.",
        "Designed and implemented RESTful APIs to support mobile and frontend interactions.",
        "Collaborated with the design team to translate UI/UX wireframes into responsive, interactive web interfaces.",
        "Troubleshot and resolved complex bugs, ensuring application stability and reliability.",
        "Participated in agile development processes, including daily stand-ups and sprint planning."
      ]
    }
  ],
  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "Vue.js", "React", "Bootstrap", "jQuery", "AJAX"],
    backend: ["PHP", "Laravel", "Node.js", "Express.js", "TypeScript", "GraphQL"],
    database: ["MySQL", "MongoDB"],
    tools: ["VS Code", "Git/GitHub", "Docker", "Jenkins", "Linux", "Nginx", "AWS", "Azure", "Postman", "Cursor AI"]
  },
  projects: [
    {
      title: "Apna Mechanic",
      description: "A scalable, asset-light mobile REST API for an on-demand two-wheeler service and repair platform.",
      techStack: ["Node.js", "TypeScript", "MySQL", "Sequelize"],
      link: null,
      details: [
        "Implemented user authentication, real-time service updates, and roadside assistance.",
        "Focused on creating a reliable and user-friendly experience."
      ]
    },
    {
      title: "Petspace",
      description: "Dubai-based eCommerce platform for pets.",
      techStack: ["Laravel", "Blade Templates", "Telr Payment Gateway"],
      link: "https://petspace.app",
      details: [
        "Built robust backend functionalities and integrated seamless user experiences.",
        "Handled user authentication, product listings, payment gateways, and admin dashboards.",
        "Analyzed and integrated Telr Payment Gateway API."
      ]
    },
    {
      title: "Doctalkgo",
      description: "US-based telemedicine platform for virtual appointments.",
      techStack: ["Laravel", "Vue.js", "MySQL"],
      link: null, // Multiple links listed in CV, kept generic
      details: [
        "Implemented appointment scheduling, secure communication, and prescription management.",
        "Integrated pharmacy processing.",
        "Ensured compliance with healthcare regulations (HIPAA implied)."
      ]
    },
    {
      title: "MyIHR",
      description: "US based project used to manage data.",
      techStack: [],
      link: "https://www.myihr.com/",
      details: []
    },
    {
      title: "Wroffy CRM",
      description: "A comprehensive Customer Relationship Management system designed to streamline business operations.",
      techStack: ["Node.js", "Express.js", "TypeScript", "GraphQL", "Jest", "MySQL", "Sequelize"],
      link: null,
      details: [
        "Developed modules for lead management, customer tracking, and sales reporting.",
        "Implemented role-based access control for secure data management.",
        "Optimized database queries for faster reporting and analytics."
      ]
    }
  ],
  education: [
    {
      degree: "MCA",
      institution: "MDU, Rohtak",
      year: "2016"
    },
    {
      degree: "BCA",
      institution: "MDU, Rohtak",
      year: "2013"
    }
  ]
};
