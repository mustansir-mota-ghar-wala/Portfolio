export const portfolioData = {
  hero: {
    greeting: "Hi, I'm Mustansir",
    headlineRole: "Software Engineer",
    headlineAccent: "DevOps Engineer",
    summary:
      "Full-Stack Developer with hands-on experience building and deploying production-grade web applications using Python, Django, FastAPI and React.js, backed by strong object-oriented fundamentals in Java. Comfortable across the delivery pipeline — Docker, GitHub Actions CI/CD, Linux shell and cloud deployments on Render — and skilled at integrating third-party APIs (Razorpay, Groq AI, Cloudinary, Fast2SMS). Currently running a live e-commerce platform at burhani.store.",
    techStack: ["Python", "Java", "FastAPI", "React.js", "PostgreSQL", "Docker", "CI/CD"],
    chips: [
      "Python",
      "Java",
      "Django 6.0",
      "FastAPI",
      "React.js",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
      "DevOps"
    ],
    status: "Open to opportunities",
    profileImage: "/images/profile.jpeg"
  },

  about: {
    sectionLabel: "ABOUT ME",
    title: "Who I Am",
    paragraphs: [
      "Full-Stack & DevOps Engineer specializing in resilient backend systems and responsive web applications using Python (Django, FastAPI), React, and Java.",
      "Experienced in architecting live commercial platforms like Burhani (burhani.store), integrating Razorpay and Groq AI, and setting up automated CI/CD pipelines. Currently pursuing MCA at Vishwakarma University, Pune."
    ],
    currentFocus: [
      "Django 6.0, FastAPI & High-Throughput REST APIs",
      "React.js & Modern Component Architecture",
      "Automated Accounting & Statutory GST Engines",
      "PostgreSQL Query Optimization & Database Design",
      "DevOps, Docker & Automated CI/CD Pipelines",
      "Cloud Deployments (Render) & Groq LLM Integrations"
    ],
    highlights: [
      { label: "Education", value: "MCA (Pursuing)", detail: "Vishwakarma Univ." },
      { label: "Commercial", value: "burhani.store", detail: "Live Platform" },
      { label: "Specialty", value: "Backend & DevOps", detail: "Python · React · CI/CD" }
    ]
  },

  skills: {
    sectionLabel: "WHAT I WORK WITH",
    title: "Technical Skills",
    subtitle: "A curated overview of my engineering toolkit across backend, frontend, databases, and DevOps.",
    categories: [
      {
        id: "backend",
        title: "Backend & Frameworks",
        icon: "⚙️",
        skills: ["Python 3", "Django 6.0", "Django REST Framework", "FastAPI", "Java", "C / C++", "Gunicorn", "RESTful APIs"]
      },
      {
        id: "frontend",
        title: "Frontend & UI",
        icon: "🖥️",
        skills: ["JavaScript (ES6+)", "React.js", "HTML5", "CSS3 / Vanilla CSS", "Bootstrap 5.3", "JSX", "Responsive UI", "CSS Tokens"]
      },
      {
        id: "databases",
        title: "Databases & Storage",
        icon: "🗄️",
        skills: ["PostgreSQL (Neon DB)", "SQL", "SQLite", "Cloudinary CDN", "FileSystemStorage", "ORM Modeling"]
      },
      {
        id: "ai-integrations",
        title: "AI & Integrations",
        icon: "🤖",
        skills: ["Razorpay Gateway", "Groq AI / LLM", "SpeechRecognition", "pyttsx3", "Google OAuth", "Fast2SMS OTP", "Web Speech API"]
      },
      {
        id: "devops",
        title: "DevOps & Cloud",
        icon: "🛠️",
        skills: ["Git", "GitHub", "Render Cloud", "GitHub Actions CI", "Linux Shell", "Docker Basics", "Postman", "Vite"]
      },
      {
        id: "fundamentals",
        title: "CS Fundamentals & Practices",
        icon: "📐",
        skills: ["Object-Oriented Design (OOP)", "Data Structures", "Database Normalization", "Double-Entry Accounting", "SEO & Schema.org", "OWASP Security"]
      }
    ]
  },

  projects: {
    sectionLabel: "FEATURED WORK",
    title: "Featured Projects",
    subtitle: "Real-world production platforms, statutory compliance systems, and AI-driven applications.",
    filters: ["All", "Full Stack", "Backend", "Team Project"],
    items: [
      {
        id: "mediprep",
        title: "MediPrep",
        subtitle: "Smart Pharmacy Dispensing & Clinical Safety Ecosystem",
        status: "SIH 2026 | Team Project | In Development",
        category: "Team Project",
        description:
          "An intelligent, hardware-integrated medicine dispensing and CDSCO regulatory compliance platform built for Smart India Hackathon 2026. Features physical barcode scan verification, automated Drug-Drug Interaction (DDI) alerts, and statutory Schedule H1 narcotics tracking.",
        techStack: ["Python", "FastAPI", "React.js", "SQLAlchemy", "PostgreSQL", "Web Speech API", "Barcode Scanner API"],
        features: [
          "Zero-Error Physical Verification: Barcode and weight scanning station instantly catches drug and dosage strength mismatches (e.g. 500mg vs 650mg) before dispensing.",
          "Clinical DDI Rule Engine: Automated screening for severe drug-drug contraindications and cumulative dose limits with mandatory pharmacist audit overrides.",
          "Schedule H1 & CDSCO Compliance: Digital statutory register with one-click CSV export for Drug Inspector audits and emergency batch quarantine lockouts.",
          "Statutory GST Billing & FEFO: Automated 5% pharma tax invoice generation (HSN 3004), double-billing prevention, and cold-chain return safety protocols."
        ],
        githubUrl: "https://github.com/mustansir-mota-ghar-wala/MediPrep-SIH26",
        liveUrl: null,
        image: null
      },
      {
        id: "burhani",
        title: "BURHANI Hardware & Machinery",
        subtitle: "E-Commerce + Business Management + Delivery Logistics System",
        status: "Live Startup Platform",
        category: "Full Stack",
        description:
          "A unified enterprise platform combining customer-facing commerce, back-office inventory management, and real-time fleet delivery logistics. A single product entry automatically syncs storefront catalog, warehouse stock, statutory GST records, and delivery manifests.",
        techStack: [
          "Django 6.0",
          "PostgreSQL",
          "Python",
          "React",
          "Bootstrap 5.3",
          "Razorpay",
          "Groq AI",
          "Cloudinary",
          "Fast2SMS",
          "Render",
          "Gunicorn"
        ],
        features: [
          "Zero-Touch Inventory Sync: Automated stock deduction on purchase orders and replenishment on supplier fulfillment.",
          "Automated GST & Accounting: Real-time CGST & SGST separation, weighted-average costing, and double-entry general ledger tracking.",
          "Live Delivery Logistics Interface: Transporter portal with GPS location updates, dynamic ETA calculation, and dispatch tracking.",
          "Fintech & LLM Integration: Razorpay payment gateway with cryptographic signature validation, plus Groq LLM-powered chatbot & voice search."
        ],
        githubUrl: "https://github.com/mustansir-mota-ghar-wala/BURHANI-Hardware-Machinery",
        liveUrl: "https://burhani.store",
        image: "/images/burhani.png"
      },
      {
        id: "job-portal",
        title: "Job Portal – Web Application",
        subtitle: "Role-Based Career Hub & Recruitment Management System",
        status: "Featured DRF Web App",
        category: "Backend",
        description:
          "Full-featured recruitment platform designed with modular Django apps (accounts, jobs, applications). Features robust role-based access control (RBAC), multi-criteria filtering, and automated candidate application pipelines.",
        techStack: ["Python 3.11", "Django 5.2", "Django REST Framework", "SQLite", "Bootstrap 5", "Cloudinary"],
        features: [
          "Dual Role Workflows: Tailored interfaces for Employers (job management, candidate evaluation) and Job Seekers (profile creation, application tracking).",
          "REST API Suite: Built 10+ relational models with complex ORM queries, pagination, and saved job bookmarks.",
          "Hybrid Cloud Storage: Resilient resume and company branding storage with Cloudinary CDN fallback.",
          "CI/CD Automation: GitHub Actions continuous integration with automated database migrations and test suites."
        ],
        githubUrl: "https://github.com/mustansir-mota-ghar-wala/JOBIFY--Job-Portal-Django",
        liveUrl: null,
        image: "/images/job_portal.png"
      },
      {
        id: "penguin-ai",
        title: "Penguin AI Assistant",
        subtitle: "Voice-Activated Desktop Automation & Intelligent Command Engine",
        status: "AI Voice Tool",
        category: "Backend",
        description:
          "Interactive desktop voice assistant built in Python. Employs speech recognition and text-to-speech engines to execute system-level operations, browse the web, and answer questions hands-free via wake-word detection.",
        techStack: ["Python", "SpeechRecognition", "pyttsx3", "Wikipedia API", "Web Automation"],
        features: [
          "Wake-Word Voice Activation: Real-time speech-to-text processing for hands-free command execution.",
          "Dynamic Knowledge Retrieval: Instant Wikipedia summaries, live time/date updates, and weather summaries.",
          "System & Web Automation: Voice-triggered application launching, YouTube search queries, and browser tab navigation.",
          "Modular Command Architecture: Easily extensible plugin architecture for adding custom voice-driven actions."
        ],
        githubUrl: "https://github.com/mustansir-mota-ghar-wala/Penguin-AI-Assistant-OR-Your-Personal-Assistant",
        liveUrl: null,
        image: "/images/ai_assistant.png"
      }
    ]
  },

  experience: {
    sectionLabel: "WORK HISTORY",
    title: "Experience",
    subtitle: "Hands-on engineering experience building production systems, lead roles, and startup development.",
    timeline: [
      {
        id: "burhani-founder",
        role: "Founder & Lead Full-Stack Engineer",
        company: "Burhani Hardware & Machinery",
        companyUrl: "https://burhani.store",
        duration: "March 2026 - Present",
        startYear: "2026",
        endYear: "Present",
        location: "Pune, Maharashtra",
        projectTag: "Live Commercial Startup",
        description:
          "Architected and deployed an end-to-end e-commerce and business automation platform powering live operations.",
        responsibilities: [
          "Built full-stack architecture with Django, PostgreSQL (Neon DB), and React.",
          "Created automated double-entry accounting and real-time ledger tracking.",
          "Integrated secure Razorpay payments with cryptographic webhook verification.",
          "Managed production cloud deployments on Render with CI/CD automation."
        ]
      },
      {
        id: "sih-lead",
        role: "Lead Backend Architect (SIH 2026)",
        company: "Smart India Hackathon Team",
        companyUrl: null,
        duration: "2026",
        startYear: "2026",
        endYear: "2026",
        location: "Pune, Maharashtra",
        projectTag: "MediPrep System",
        description:
          "Led backend engineering for a hardware-integrated smart pharmacy dispensing and compliance platform.",
        responsibilities: [
          "Developed Drug-Drug Interaction (DDI) rule engine to flag contraindications.",
          "Engineered CDSCO digital registers, audit trails, and batch quarantine locks.",
          "Built statutory 5% pharma GST billing engine with double-billing prevention."
        ]
      }
    ]
  },

  education: {
    sectionLabel: "ACADEMIC BACKGROUND",
    title: "Education",
    subtitle: "Formal academic qualifications in computer applications and science.",
    items: [
      {
        id: "mca",
        degree: "Master of Computer Applications (MCA)",
        monogram: "MCA",
        institution: "Vishwakarma University",
        location: "Pune, Maharashtra",
        duration: "2025 - 2027",
        status: "Pursuing",
        cgpa: "CGPA: 8.5",
        description:
          "Specializing in advanced software engineering, cloud systems, distributed databases, and full-stack enterprise development."
      },
      {
        id: "bsc",
        degree: "Bachelor of Science in Computer Science (B.Sc CS)",
        monogram: "B.Sc",
        institution: "IPS Academy",
        location: "Indore, Madhya Pradesh",
        duration: "2021 - 2024",
        status: "Completed",
        cgpa: "First Class with Distinction",
        description:
          "Rigorous foundation in Object-Oriented Programming (Java, C++), Data Structures & Algorithms, Relational Databases, and Operating Systems."
      }
    ]
  },

  certifications: {
    sectionLabel: "CREDENTIALS",
    title: "Certifications",
    subtitle: "Professional certifications and technical credentials.",
    items: [
      {
        id: "devops",
        name: "DevOps & Cloud Engineering Certification",
        issuer: "DevOps & Cloud Academy",
        issuerBadge: "DevOps",
        year: "2026",
        status: "Completed",
        link: "#",
        note: "Recently Completed — CI/CD Pipelines, Docker, Containerization & Cloud Deployment"
      },
      {
        id: "python-ai",
        name: "Python using AI",
        issuer: "AI for Techies",
        issuerBadge: "AI for Techies",
        year: "2026",
        status: "Certified",
        link: "#",
        note: "AI-accelerated Python engineering, automated code workflows, and LLM integrations"
      },
      {
        id: "chatgpt-be10x",
        name: "AI Tools and ChatGPT",
        issuer: "BE10X",
        issuerBadge: "BE10X",
        year: "2026",
        status: "Certified",
        link: "#",
        note: "Generative AI tools, prompt engineering, productivity automation, and workflow acceleration"
      },
      {
        id: "java-samyak",
        name: "Core & Advanced Java Training with Project Work",
        issuer: "Samyak Classes",
        issuerBadge: "Samyak Classes",
        year: "2023",
        status: "Completed",
        link: "#",
        note: "Enterprise Java architecture, OOP concepts, multi-threading, and JDBC project development"
      },
      {
        id: "cpp-samyak",
        name: "C/C++ Training with Project Work",
        issuer: "Samyak Classes",
        issuerBadge: "Samyak Classes",
        year: "2023",
        status: "Completed",
        link: "#",
        note: "Low-level memory management, pointers, data structures, and algorithm design"
      }
    ]
  },

  activities: {
    sectionLabel: "EXTRACURRICULAR & LEADERSHIP",
    title: "Activities & Leadership",
    subtitle: "Collaborative initiatives, hackathons, and community contributions.",
    items: [
      {
        id: "sih26",
        title: "Smart India Hackathon (SIH 2026)",
        badge: "Hackathon Lead",
        icon: "🏆",
        description:
          "Led backend engineering and system design for MediPrep, building hardware-assisted prescription validation to eliminate dispensing mistakes and ensure CDSCO compliance."
      },
      {
        id: "startup",
        title: "Commercial Systems & Startup Operations",
        badge: "Founder",
        icon: "🚀",
        description:
          "Founded and actively operating burhani.store, handling real-time sales transactions, delivery driver logistics, and automated GST reconciliation."
      },
      {
        id: "community",
        title: "Open Source & Developer Mentorship",
        badge: "Community",
        icon: "🤝",
        description:
          "Actively publishing and maintaining well-documented repositories, helping fellow students master Django, DRF, and database architecture."
      }
    ]
  }
};
