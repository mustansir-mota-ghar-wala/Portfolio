PROFILE = {
    "name": "Mustansir Mota Gharwala",
    "headline": "Software Engineer & DevOps Engineer",
    "location": "Pune, Maharashtra, India",
    "email": "mustansir604@gmail.com",
    "description": (
        "Full-Stack Developer with hands-on experience building and deploying production-grade web applications "
        "using Python, Django, FastAPI and React.js, backed by strong object-oriented fundamentals in Java. "
        "Comfortable across the delivery pipeline — Docker, GitHub Actions CI/CD, Linux shell and cloud deployments "
        "on Render — and skilled at integrating third-party APIs (Razorpay, Groq AI, Cloudinary, Fast2SMS). "
        "Currently running a live e-commerce platform at burhani.store."
    ),
    "tech_line": ["Python", "Java", "FastAPI", "React.js", "PostgreSQL", "Docker", "CI/CD"],
    "github": "https://github.com/mustansir-mota-ghar-wala",
    "linkedin": "https://www.linkedin.com/in/mustansir-mota-ghar-wala/",
    "resume": "/resume/Mustansir_Resume.pdf",
}

SKILLS = [
    {
        "category": "Backend & Frameworks",
        "skills": [
            "Python 3",
            "Django 6.0",
            "Django REST Framework",
            "FastAPI",
            "Java",
            "C / C++",
            "Gunicorn",
            "RESTful APIs"
        ]
    },
    {
        "category": "Frontend & UI",
        "skills": [
            "JavaScript (ES6+)",
            "React.js",
            "HTML5",
            "CSS3 / Vanilla CSS",
            "Bootstrap 5.3",
            "JSX",
            "Responsive UI",
            "CSS Tokens"
        ]
    },
    {
        "category": "Databases & Storage",
        "skills": [
            "PostgreSQL (Neon DB)",
            "SQL",
            "SQLite",
            "Cloudinary CDN",
            "FileSystemStorage",
            "ORM Modeling"
        ]
    },
    {
        "category": "AI & Integrations",
        "skills": [
            "Razorpay Gateway",
            "Groq AI / LLM",
            "SpeechRecognition",
            "pyttsx3",
            "Google OAuth",
            "Fast2SMS OTP",
            "Web Speech API"
        ]
    },
    {
        "category": "DevOps & Cloud",
        "skills": [
            "Docker",
            "Kubernetes",
            "AWS",
            "CI/CD Pipelines",
            "GitHub Actions",
            "GitOps",
            "Prometheus & Grafana",
            "Linux Shell",
            "Render Cloud"
        ]
    },
    {
        "category": "CS Fundamentals & Practices",
        "skills": [
            "Object-Oriented Design (OOP)",
            "Data Structures",
            "Database Normalization",
            "Double-Entry Accounting",
            "SEO & Schema.org",
            "OWASP Security"
        ]
    }
]

PROJECTS = [
    {
        "id": "mediprep",
        "name": "MediPrep",
        "subtitle": "Smart Pharmacy Dispensing & Clinical Safety Ecosystem",
        "status": "SIH 2026 | Team Project | In Development",
        "description": (
            "An intelligent, hardware-integrated medicine dispensing and CDSCO regulatory compliance platform "
            "built for Smart India Hackathon 2026. Features physical barcode scan verification, automated Drug-Drug "
            "Interaction (DDI) alerts, and statutory Schedule H1 narcotics tracking."
        ),
        "technologies": [
            "Python",
            "FastAPI",
            "React.js",
            "SQLAlchemy",
            "PostgreSQL",
            "Web Speech API",
            "Barcode Scanner API"
        ],
        "features": [
            "Zero-Error Physical Verification: Barcode and weight scanning station instantly catches drug and dosage strength mismatches (e.g. 500mg vs 650mg) before dispensing.",
            "Clinical DDI Rule Engine: Automated screening for severe drug-drug contraindications and cumulative dose limits with mandatory pharmacist audit overrides.",
            "Schedule H1 & CDSCO Compliance: Digital statutory register with one-click CSV export for Drug Inspector audits and emergency batch quarantine lockouts.",
            "Statutory GST Billing & FEFO: Automated 5% pharma tax invoice generation (HSN 3004), double-billing prevention, and cold-chain return safety protocols."
        ],
        "github_url": "https://github.com/mustansir-mota-ghar-wala/MediPrep-SIH26",
        "live_url": None,
        "category": "team"
    },
    {
        "id": "burhani",
        "name": "BURHANI Hardware & Machinery",
        "subtitle": "E-Commerce + Business Management + Delivery Logistics System",
        "status": "Live Startup Platform",
        "description": (
            "A unified enterprise platform combining customer-facing commerce, back-office inventory management, "
            "and real-time fleet delivery logistics. A single product entry automatically syncs storefront catalog, "
            "warehouse stock, statutory GST records, and delivery manifests."
        ),
        "technologies": [
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
        "features": [
            "Zero-Touch Inventory Sync: Automated stock deduction on purchase orders and replenishment on supplier fulfillment.",
            "Automated GST & Accounting: Real-time CGST & SGST separation, weighted-average costing, and double-entry general ledger tracking.",
            "Live Delivery Logistics Interface: Transporter portal with GPS location updates, dynamic ETA calculation, and dispatch tracking.",
            "Fintech & LLM Integration: Razorpay payment gateway with cryptographic signature validation, plus Groq LLM-powered chatbot & voice search."
        ],
        "github_url": "https://github.com/mustansir-mota-ghar-wala/BURHANI-Hardware-Machinery",
        "live_url": "https://burhani.store",
        "category": "fullstack"
    },
    {
        "id": "job-portal",
        "name": "Job Portal – Web Application",
        "subtitle": "Role-Based Career Hub & Recruitment Management System",
        "status": "Featured DRF Web App",
        "description": (
            "Full-featured recruitment platform designed with modular Django apps (accounts, jobs, applications). "
            "Features robust role-based access control (RBAC), multi-criteria filtering, and automated candidate "
            "application pipelines."
        ),
        "technologies": [
            "Python 3.11",
            "Django 5.2",
            "Django REST Framework",
            "SQLite",
            "Bootstrap 5",
            "Cloudinary"
        ],
        "features": [
            "Dual Role Workflows: Tailored interfaces for Employers (job management, candidate evaluation) and Job Seekers (profile creation, application tracking).",
            "REST API Suite: Built 10+ relational models with complex ORM queries, pagination, and saved job bookmarks.",
            "Hybrid Cloud Storage: Resilient resume and company branding storage with Cloudinary CDN fallback.",
            "CI/CD Automation: GitHub Actions continuous integration with automated database migrations and test suites."
        ],
        "github_url": "https://github.com/mustansir-mota-ghar-wala/JOBIFY--Job-Portal-Django",
        "live_url": None,
        "category": "backend"
    },
    {
        "id": "penguin-ai",
        "name": "Penguin AI Assistant",
        "subtitle": "Voice-Activated Desktop Automation & Intelligent Command Engine",
        "status": "AI Voice Tool",
        "description": (
            "Interactive desktop voice assistant built in Python. Employs speech recognition and text-to-speech "
            "engines to execute system-level operations, browse the web, and answer questions hands-free via wake-word detection."
        ),
        "technologies": [
            "Python",
            "SpeechRecognition",
            "pyttsx3",
            "Wikipedia API",
            "Web Automation"
        ],
        "features": [
            "Wake-Word Voice Activation: Real-time speech-to-text processing for hands-free command execution.",
            "Dynamic Knowledge Retrieval: Instant Wikipedia summaries, live time/date updates, and weather summaries.",
            "System & Web Automation: Voice-triggered application launching, YouTube search queries, and browser tab navigation.",
            "Modular Command Architecture: Easily extensible plugin architecture for adding custom voice-driven actions."
        ],
        "github_url": "https://github.com/mustansir-mota-ghar-wala/Penguin-AI-Assistant-OR-Your-Personal-Assistant",
        "live_url": None,
        "category": "backend"
    }
]

EXPERIENCE = [
    {
        "company": "Burhani Hardware & Machinery",
        "location": "Pune, Maharashtra",
        "position": "Founder & Lead Full-Stack Engineer",
        "duration": "March 2026 - Present",
        "project_name": "Live Commercial Startup",
        "description": "Architected and deployed an end-to-end e-commerce and business automation platform powering live operations.",
        "responsibilities": [
            "Built full-stack architecture with Django, PostgreSQL (Neon DB), and React.",
            "Created automated double-entry accounting and real-time ledger tracking.",
            "Integrated secure Razorpay payments with cryptographic webhook verification.",
            "Managed production cloud deployments on Render with CI/CD automation."
        ],
        "start_year": "2026",
        "end_year": "Present"
    },
    {
        "company": "Smart India Hackathon Team",
        "location": "Pune, Maharashtra",
        "position": "Lead Backend Architect (SIH 2026)",
        "duration": "2026",
        "project_name": "MediPrep System",
        "description": "Led backend engineering for a hardware-integrated smart pharmacy dispensing and compliance platform.",
        "responsibilities": [
            "Developed Drug-Drug Interaction (DDI) rule engine to flag contraindications.",
            "Engineered CDSCO digital registers, audit trails, and batch quarantine locks.",
            "Built statutory 5% pharma GST billing engine with double-billing prevention."
        ],
        "start_year": "2026",
        "end_year": "2026"
    }
]

EDUCATION = [
    {
        "degree": "MCA",
        "full_degree": "Master of Computer Applications (MCA)",
        "university": "Vishwakarma University",
        "location": "Pune, Maharashtra",
        "duration": "2025 - 2027",
        "cgpa": "CGPA: 8.5",
        "status": "Pursuing"
    },
    {
        "degree": "B.Sc",
        "full_degree": "Bachelor of Science in Computer Science (B.Sc CS)",
        "university": "IPS Academy",
        "location": "Indore, Madhya Pradesh",
        "duration": "2021 - 2024",
        "cgpa": "First Class with Distinction",
        "status": "Completed"
    }
]

CERTIFICATIONS = [
    {
        "name": "Practical DevOps Bootcamp for All (3 Courses)",
        "issuer": "Coursera · Packt",
        "url": "https://coursera.org/verify/specialization/DHNB31FGUVAR"
    },
    {
        "name": "Learn Python Specialization (3 Courses)",
        "issuer": "Coursera",
        "url": "https://coursera.org/verify/specialization/HBUQGYWUT4WT"
    },
    {
        "name": "Python using AI Workshop",
        "issuer": "AI for Techies",
        "url": "/images/certificates/python_ai_certificate.pdf"
    },
    {
        "name": "AI Tools and ChatGPT Workshop",
        "issuer": "be10x",
        "url": "/images/certificates/be10x_ai_tools_certificate.pdf"
    },
    {
        "name": "Certificate of Excellence in Core & Adv. Java",
        "issuer": "Samyak Computer Classes (ISO 9001:2015)",
        "url": "/images/certificates/samyak_java_certificate.jpg"
    },
    {
        "name": "Certificate of Excellence in C/C++",
        "issuer": "Samyak Computer Classes (ISO 9001:2015)",
        "url": "/images/certificates/samyak_cpp_certificate.jpg"
    }
]

ACTIVITIES = [
    {
        "title": "Smart India Hackathon (SIH 2026)",
        "description": "Led backend engineering and system design for MediPrep, building hardware-assisted prescription validation to eliminate dispensing mistakes and ensure CDSCO compliance."
    },
    {
        "title": "Commercial Systems & Startup Operations",
        "description": "Founded and actively operating burhani.store, handling real-time sales transactions, delivery driver logistics, and automated GST reconciliation."
    },
    {
        "title": "Open Source & Developer Mentorship",
        "description": "Actively publishing and maintaining well-documented repositories, helping fellow students master Django, DRF, and database architecture."
    }
]
