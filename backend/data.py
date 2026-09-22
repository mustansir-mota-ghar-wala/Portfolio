PROFILE = {
    "name": "Mustansir Mota Gharwala",
    "headline": "Full Stack Developer & Backend Architect",
    "location": "Pune, Maharashtra, India",
    "email": "mustansir604@gmail.com",
    "description": (
        "Full-Stack Developer with hands-on experience building and deploying production-grade web applications "
        "using Django, Python, PostgreSQL, and React.js. Skilled in integrating third-party APIs (Razorpay, Groq AI, "
        "Cloudinary, Fast2SMS), building AI-powered features, and deploying live on cloud platforms like Render. "
        "Currently running a live e-commerce platform at burhani.store."
    ),
    "tech_line": ["Python", "Django 6.0", "REST APIs", "React.js", "PostgreSQL", "FastAPI", "Docker"],
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
            "Git",
            "GitHub",
            "Render Cloud",
            "GitHub Actions CI",
            "Linux Shell",
            "Docker Basics",
            "Postman",
            "Vite"
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
        "description": (
            "Architected, built, and launched an end-to-end commercial e-commerce and inventory automation system "
            "from the ground up, currently serving real business operations and logistics."
        ),
        "responsibilities": [
            "Engineered full-stack web architecture using Django 6.0, PostgreSQL (Neon DB), and responsive React/JavaScript frontends.",
            "Created an automated double-entry accounting engine recording debit/credit entries for transactions, generating live balance sheets.",
            "Implemented secure Razorpay payment gateway integration with cryptographic webhook verification for online and COD orders.",
            "Deployed and maintain production cloud infrastructure on Render using Gunicorn, WhiteNoise, and automated PostgreSQL backups."
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
        "description": (
            "Led system architecture and backend engineering for an innovative hardware-integrated medicine dispensing "
            "and pharmacy compliance solution."
        ),
        "responsibilities": [
            "Designed and validated a 50-test end-to-end verification suite covering prescription ingestion, barcode validation, and billing.",
            "Implemented a high-accuracy Drug-Drug Interaction (DDI) rule engine flagging severe pharmacological contraindications.",
            "Built CDSCO regulatory modules including Schedule H1 digital register, CSV export for Drug Inspectors, and batch quarantine locks.",
            "Engineered statutory 5% pharma GST billing engine with HSN 3004 tagging and double-billing prevention mechanisms."
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
        "name": "DevOps & Cloud Engineering Certification",
        "issuer": "DevOps & Cloud Academy",
        "url": None
    },
    {
        "name": "Python using AI",
        "issuer": "AI for Techies",
        "url": None
    },
    {
        "name": "AI Tools and ChatGPT",
        "issuer": "BE10X",
        "url": None
    },
    {
        "name": "Core & Advanced Java Training with Project Work",
        "issuer": "Samyak Classes",
        "url": None
    },
    {
        "name": "C/C++ Training with Project Work",
        "issuer": "Samyak Classes",
        "url": None
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
