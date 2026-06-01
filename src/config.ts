export const config = {
    developer: {
        name: "Dhruv",
        fullName: "Dhruv Gupta",
        title: "Python & Full-Stack Developer",
        taglines: ["Python Developer", "Full-Stack Developer"],
        description: "Python & Full-Stack Developer building AI-powered and real-time systems with FastAPI, React, WebSockets, and Docker. Interested in backend engineering, automation, and product-focused development."
    },
    social: {
        github: "guptadhruv780",
        email: "guptadhruv780@gmail.com",
        location: "Gwalior, India"
    },
    about: {
        title: "About Me",
        description: "I am a Python and Full-Stack Developer focused on AI-driven systems, real-time applications, and clean backend architecture. I am pursuing an MCA at RGPV University (2025 - present, expected 2027) and completed my BCA at ITM Gwalior (2022 - 2025, CGPA 7.42). I enjoy building multi-agent workflows, network analyzers, and collaborative AI tools using FastAPI, React, WebSockets, and LLM APIs. I am seeking a Software Engineer or Full-Stack Developer role in a product-based company."
    },
    projects: [
        {
            id: 1,
            title: "Multi-Agent Orchestration System",
            category: "AI Automation",
            technologies: "Python, LangGraph, FastAPI, WebSockets, React, Docker",
            image: "/images/project-1.png",
            description: "Built an AI system that reads GitHub issues, writes code fixes, runs tests in a Docker sandbox, and opens a pull request with no manual steps. Includes a self-correcting loop that analyzes test failures and retries fixes with LangGraph."
        },
        {
            id: 2,
            title: "DPI Engine - Network Traffic Analyzer",
            category: "Network Monitoring",
            technologies: "Python, FastAPI, Scapy, WebSockets, Vanilla JS",
            image: "/images/project-2.png",
            description: "Built a packet inspection tool that reads .pcap files and identifies application traffic without decrypting it. Added a live dashboard streaming packet data under 1s latency and anomaly detection for traffic spikes."
        },
        {
            id: 3,
            title: "SmartArch Board",
            category: "Collaborative AI",
            technologies: "React, FastAPI, Socket.IO, Supabase, Redis, Fabric.js, Groq API",
            image: "/images/project-3.png",
            description: "Created a real-time collaborative system design whiteboard with sub-1s sync using Socket.IO and Redis. Added AI feedback on architecture diagrams and saved boards to Supabase Postgres."
        },
        {
            id: 4,
            title: "TeamFlow",
            category: "Project Management",
            technologies: "React.js, JavaScript, JWT, REST API, CoreUI",
            image: "/images/project-4.png",
            description: "A full-stack project management application featuring a dynamic Kanban board, interactive dashboard, and JWT authentication for secure team collaboration.",
            link: ""
        },
        {
            id: 5,
            title: "Navgrah Mandir Dabra",
            category: "Web Development",
            technologies: "Frontend, UI/UX, Netlify",
            image: "/images/project-5.png",
            description: "Developed the official trust website for Navgrah Mandir, Dabra. Features the founder's vision, temple details, and a serene digital presence for the local community.",
            link: "https://navgrahmandirdabra.netlify.app"
        }
    ],
    contact: {
        email: "guptadhruv780@gmail.com",
        github: "https://github.com/guptadhruv780",
        linkedin: "https://linkedin.com/in/dhruvgupta780",
        twitter: "",
        facebook: "",
        instagram: "",
        resume: "/dhruvgupta_CV.pdf"
    },
    skills: {
        develop: {
            title: "BACKEND & AI",
            description: "AI-powered services and real-time systems",
            details: "Building FastAPI backends, WebSocket pipelines, and multi-agent workflows with LangGraph, Docker, and LLM APIs.",
            tools: ["Python", "FastAPI", "WebSockets", "LangGraph", "Docker", "Scapy", "Redis", "PostgreSQL", "OpenAI API", "Groq API"]
        },
        design: {
            title: "FULL-STACK",
            description: "Modern web apps and dashboards",
            details: "Creating responsive React interfaces and real-time dashboards with Socket.IO and modern UI tooling.",
            tools: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap", "Supabase", "Fabric.js", "REST APIs", "Git", "Linux"]
        }
    }
};


