import { PersonalInfo, EducationItem, SkillItem, ExperienceItem, ProjectItem, CertificationItem } from '../types';

export const personalInfo: PersonalInfo = {
  fullName: "Ayan Biswas",
  title: "Software Engineer | Odoo Developer | CSE Graduate (AIUB)",
  shortIntro: "Welcome to my interactive E-Portfolio. I am Ayan Biswas, a Computer Science and Engineering graduate from American International University-Bangladesh (AIUB) specializing in enterprise application architecture, Python backend automation, and Odoo ERP development. With a strong foundation in relational database design, XML data structures, and web security principles, I engineer scalable business modules that bridge complex operational needs with sleek, efficient code. My practical focus includes developing custom Odoo modules, automated reporting engines, and robust REST APIs. Explore my portfolio to discover my academic capstone, technical competencies, and passion for building high-impact enterprise software solutions.",
  aboutMe: {
    personalIntroduction: "I am a dedicated and detail-oriented Computer Science and Engineering graduate from American International University-Bangladesh (AIUB), majoring in Software Engineering. Based in Dhaka, Bangladesh, I specialize in building enterprise-grade applications, business logic automation, and custom Odoo ERP solutions. I thrive on translating intricate business workflows into modular, secure, and maintainable software architectures.",
    careerInterests: [
      "Enterprise Resource Planning (ERP) Systems & Odoo Module Development",
      "Python Backend Engineering & RESTful / XML-RPC Web Services",
      "Enterprise Database Management & SQL Query Optimization",
      "Web Security Paradigms, SQL Injection Prevention & Data Validation",
      "Automated Business Analytics & XLSX / QWeb Reporting Layouts",
      "Modern JavaScript Frameworks & Odoo OWL Architecture"
    ],
    professionalStrengths: [
      "Deep understanding of Odoo architecture (Models, Views, Security Rules, Controllers)",
      "Strong Python development skills tailored for enterprise application design",
      "Proficient in web security principles including SQL injection mitigation and automated input validation",
      "Expertise in analytical reporting via QWeb and XLSX automated templates",
      "Disciplined Git workflow with structured branching, pull requests, and clean code versioning",
      "Quick learner capable of rapidly adapting to enterprise frameworks and complex SDLC environments"
    ],
    careerObjectives: "Recent Computer Science and Engineering graduate with a strong academic foundation in Python development, RESTful APIs, XML data structures, and enterprise application design. Seeking to join Sysnova Information Systems Limited as an Odoo Developer to apply my project experience in business-logic automation, backend development, and analytics reporting to real-world ERP implementations."
  },
  contact: {
    email: "ayanb8626@gmail.com",
    phone: "+880 1572-917277",
    location: "112/2, Balurmath Road, Kuril, Khilkhet, Dhaka, Bangladesh",
    linkedin: "https://linkedin.com/in/ayan-biswas-dev",
    github: "https://github.com/ayan-biswas",
    facebook: "https://facebook.com/ayan.biswas.official"
  },
  videoPitch: {
    title: "2-Minute Professional Introduction & Career Pitch",
    duration: "02:00",
    youtubeUrl: "https://www.youtube.com/embed/TNEsskV2eTk",
    script: "Hello! I am Ayan Biswas, a Computer Science and Engineering graduate majoring in Software Engineering from American International University-Bangladesh (AIUB). Driven by a passion for enterprise software architecture, I specialize in Python backend engineering, RESTful APIs, and custom Odoo ERP development. During my capstone project at AIUB, I engineered an open-source customized business application module, constructing modular backend layers in Python, mapping structured XML data, and building automated XLSX analytics reporting for corporate decision-making. In addition to backend logic, I apply modern security practices like SQL injection mitigation and structured Git version control. I am eager to contribute my technical skills and dedication as an Odoo Developer at Sysnova Information Systems Limited. Thank you for viewing my E-Portfolio!",
    keyTakeaways: [
      "Academic Background: B.Sc. in CSE from AIUB with CGPA 3.40",
      "Core Expertise: Odoo Development, Python, OWL Framework, REST/RPC APIs",
      "Capstone Showcase: Customized Business Application Module with XML & XLSX analytics",
      "Target Role: Odoo Developer at Sysnova Information Systems Limited"
    ],
    presentationTips: [
      "Dressed in professional dark executive attire with clean lighting",
      "Maintained confident eye contact and steady 120 WPM speaking cadence",
      "Clear articulation of technical terms (Odoo, XML, QWeb, SQLi mitigation)",
      "Presents clear value proposition for enterprise business logic automation"
    ],
    chapters: [
      { time: "00:00 - 00:25", title: "Introduction & Academic Foundation", description: "B.Sc. in CSE (Software Engineering) at AIUB with CGPA 3.40." },
      { time: "00:25 - 00:55", title: "Technical Core & Odoo Specialization", description: "Python backend, OWL framework, RESTful APIs & XML data structures." },
      { time: "00:55 - 01:30", title: "Capstone Project & Business Impact", description: "Enterprise application module, QWeb & XLSX automated reporting layouts." },
      { time: "01:30 - 02:00", title: "Career Goals & Value Proposition", description: "Seeking Odoo Developer position at Sysnova Information Systems Limited." }
    ]
  },
  coverLetter: {
    recipientName: "Hiring Manager / Managing Director",
    recipientCompany: "Sysnova Information Systems Limited",
    recipientAddress: "House # 35, Road # 2, Dhanmondi, Dhaka-1205, Bangladesh",
    subject: "APPLICATION FOR ODOO DEVELOPER POSITION",
    date: "June 29, 2026",
    paragraphs: [
      "Dear Sir,",
      "I am writing to apply for the Odoo Developer position at Sysnova Information Systems Limited, as advertised on Bdjobs.com. Having recently completed my Bachelor of Science in Computer Science and Engineering (major in Software Engineering) from American International University-Bangladesh (AIUB), I possess a solid foundation in Python, relational databases, and enterprise application architectures, making me eager to contribute productively to your ERP development cycles.",
      "My education and rigorous practical training at AIUB focused heavily on scalable business logic automation. Specifically, for my software engineering project, I engineered an open-source customized business application module by constructing modular backend layers in Python, mapping data structures via XML, and integrating XLSX reporting layouts to align seamlessly with corporate management systems.",
      "In addition to back-end engineering, my curriculum bridged robust web services with advanced corporate security, giving me extensive experience with modular web frameworks, modern JavaScript architectures, and Odoo's OWL framework. Furthermore, my strong background in web security paradigms, including SQL Injection mitigation and automated data validation, is complemented by a disciplined use of Git for version control and clean code history.",
      "Sysnova's legacy as an open-source ERP pioneer in Bangladesh makes this opportunity highly exciting. Despite being a fresh graduate, my complete immersion in enterprise software design principles and standard SDLC processes ensures that I can adapt rapidly to your technical environment.",
      "Thank you for considering my application; I look forward to your response and can be reached at +880157291277 or ayanb8626@gmail.com."
    ]
  }
};

export const educationData: EducationItem[] = [
  {
    id: "edu-1",
    institution: "American International University-Bangladesh (AIUB)",
    location: "Dhaka, Bangladesh",
    degree: "B.Sc. in Computer Science and Engineering",
    major: "Software Engineering",
    cgpaOrGpa: "3.40",
    maxScore: "4.00",
    completionYear: "Completed 2026",
    type: "university",
    highlights: [
      "Specialized in Software Engineering, Enterprise Application Architecture & Odoo Framework",
      "Completed Capstone Project on Business Application Module with Distinction",
      "Relevant Coursework: Enterprise Software Design, Web Security, Database Systems, Web APIs"
    ]
  },
  {
    id: "edu-2",
    institution: "Noapara Govt. College",
    location: "Jessore / Dhaka, Bangladesh",
    degree: "Higher Secondary Certificate (HSC)",
    cgpaOrGpa: "5.00",
    maxScore: "5.00",
    completionYear: "2022",
    type: "college",
    highlights: [
      "Achieved Golden GPA 5.00 / 5.00 in Science Group",
      "Received College Academic Excellence Certificate & Higher Studies Merit Scholarship"
    ]
  },
  {
    id: "edu-3",
    institution: "Computer Little Jewels' School",
    location: "Bangladesh",
    degree: "Secondary School Certificate (SSC)",
    cgpaOrGpa: "5.00",
    maxScore: "5.00",
    completionYear: "2020",
    type: "school",
    highlights: [
      "Achieved Perfect GPA 5.00 / 5.00 in Science Curriculum",
      "Excellence Award in Mathematics and Computer Science Foundations"
    ]
  }
];

export const skillsData: SkillItem[] = [
  // Technical
  { id: "sk-1", name: "Odoo Development", category: "Odoo & Enterprise", level: 92, iconName: "Boxes", description: "Custom Odoo module creation, ORM models, views, access control security rules, workflow automation.", isCore: true },
  { id: "sk-2", name: "Odoo OWL Framework", category: "Odoo & Enterprise", level: 88, iconName: "Layers", description: "Component-based front-end development using Odoo JavaScript Web Library (OWL).", isCore: true },
  { id: "sk-3", name: "Python", category: "Languages", level: 95, iconName: "Code2", description: "Backend business logic development, object-oriented programming, data automation.", isCore: true },
  { id: "sk-4", name: "JavaScript & TypeScript", category: "Languages", level: 90, iconName: "FileCode", description: "Modern ES6+ frontend development, modular web architectures, interactive DOM components.", isCore: true },
  { id: "sk-5", name: "XML Data Structuring", category: "Languages", level: 92, iconName: "FileJson", description: "Odoo UI view definitions, data initialization, security group mappings, menu trees.", isCore: true },
  { id: "sk-6", name: "RESTful & XML-RPC APIs", category: "APIs & Integration", level: 90, iconName: "Network", description: "Odoo External/Internal APIs, JSON/XML web services, third-party system integrations.", isCore: true },
  { id: "sk-7", name: "QWeb & XLSX Analytics", category: "Odoo & Enterprise", level: 91, iconName: "BarChart3", description: "QWeb PDF template design & XLSX Writer integration for corporate business analytics.", isCore: true },
  { id: "sk-8", name: "Relational Databases (PostgreSQL)", category: "Databases & Security", level: 89, iconName: "Database", description: "Complex SQL query design, index optimization, relational integrity, ORM mapping.", isCore: true },
  { id: "sk-9", name: "Web Security & SQLi Mitigation", category: "Databases & Security", level: 93, iconName: "ShieldCheck", description: "SQL injection prevention, input sanitization, automated data validation, OWASP principles.", isCore: true },
  { id: "sk-10", name: "Git Version Control", category: "Tools & Versioning", level: 94, iconName: "GitBranch", description: "Structured branching, merging, pull requests, conflict resolution, clean commit logs.", isCore: true },
  { id: "sk-11", name: "Linux & Enterprise Hosting", category: "Tools & Versioning", level: 85, iconName: "Server", description: "Basic Linux administration, deployment scripts, environment setup.", isCore: false },

  // Soft Skills
  { id: "sk-12", name: "Communication Skills", category: "Soft Skills", level: 92, iconName: "MessageSquare", description: "Clear technical documentation, requirement gathering, professional stakeholder interaction." },
  { id: "sk-13", name: "Leadership & Mentorship", category: "Soft Skills", level: 88, iconName: "Users", description: "Leading team capstone initiatives, peer programming mentorship at AIUB." },
  { id: "sk-14", name: "Teamwork & Collaboration", category: "Soft Skills", level: 95, iconName: "Handshake", description: "Cross-functional Agile development, code reviews, collaborative problem solving." },
  { id: "sk-15", name: "Public Speaking & Presentation", category: "Soft Skills", level: 86, iconName: "Mic", description: "Technical presentations, capstone defense, project demonstrations." },
  { id: "sk-16", name: "Problem Solving & Analytical Thinking", category: "Soft Skills", level: 96, iconName: "Cpu", description: "Algorithmic thinking, debugging complex ERP workflows, security risk evaluation." }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    title: "Software Engineering Capstone Developer",
    organization: "American International University-Bangladesh (AIUB)",
    location: "Dhaka, Bangladesh",
    period: "2025 - 2026",
    roleType: "Academic Capstone",
    description: "Engineered an open-source customized business application module designed to align with corporate management systems as part of the software engineering capstone.",
    responsibilities: [
      "Constructed modular backend business logic layers using Python and Odoo enterprise patterns.",
      "Mapped and structured application data models using XML formatting for seamless workflow automation.",
      "Designed automated enterprise analytics templates using integrated XLSX reporting layouts.",
      "Applied modern object-oriented JavaScript architecture to build interactive frontend components.",
      "Practiced web security principles including SQL injection prevention and rigorous automated data validation.",
      "Maintained all development under Git version control with structured branching and clean code history."
    ],
    technologies: ["Python", "Odoo", "OWL Framework", "XML", "QWeb", "XLSX Writer", "PostgreSQL", "Git"]
  },
  {
    id: "exp-2",
    title: "Open-Source Odoo Developer & Contributor",
    organization: "Independent & Academic Projects",
    location: "Dhaka, Bangladesh",
    period: "2024 - Present",
    roleType: "Open-Source & Development",
    description: "Developed custom business logic modules, external API integrations, and analytics dashboards.",
    responsibilities: [
      "Built custom Odoo apps for inventory management, sales automation, and automated reporting.",
      "Integrated REST/RPC web APIs allowing third-party web apps to sync data bi-directionally with Odoo database.",
      "Optimized PostgreSQL queries for complex financial statements and inventory ledger reports."
    ],
    technologies: ["Odoo 17/18", "Python", "XML-RPC", "PostgreSQL", "REST APIs", "Tailwind CSS"]
  },
  {
    id: "exp-3",
    title: "Member & Technical Seminar Coordinator",
    organization: "AIUB Computer Club (ACC)",
    location: "AIUB, Dhaka",
    period: "2023 - 2026",
    roleType: "Leadership & Extracurricular",
    description: "Active organizer for campus technical events, coding bootcamps, and software development workshops.",
    responsibilities: [
      "Coordinated technical seminars on modern web development, Git best practices, and enterprise frameworks.",
      "Assisted junior students in object-oriented programming concepts and software engineering fundamentals.",
      "Managed logistics and registration portals for intra-university programming contests."
    ],
    technologies: ["Event Management", "Technical Training", "Public Speaking", "Community Leadership"]
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Business Application Module",
    subtitle: "Software Engineering Capstone Project, AIUB 2026",
    category: "ERP & Odoo",
    briefDescription: "Engineered an open-source, customized business application module designed to align with corporate management systems and automate enterprise workflows.",
    objective: "To create a scalable, modular enterprise backend with custom business logic, secure XML data mapping, and automated reporting templates.",
    role: "Lead Backend Engineer & Systems Architect",
    skillsApplied: ["Python", "Odoo Framework", "OWL", "XML", "QWeb", "XLSX Writer", "PostgreSQL", "Git"],
    outcome: "Successfully delivered an enterprise-ready module that automates multi-department approval flows, generates real-time XLSX financial reports, and passed AIUB capstone evaluation with top distinction.",
    keyFeatures: [
      "Modular backend architecture in Python following enterprise OOP design principles.",
      "Declarative XML view mappings and granular security access control rules.",
      "Automated XLSX reporting engine producing instant executive summaries.",
      "Interactive front-end controls powered by JavaScript & Odoo OWL framework.",
      "Strict web security rules preventing SQL Injection and malicious data payload execution."
    ],
    architectureDiagram: [
      "Client UI (OWL / Web UI)",
      " -> REST / XML-RPC Router",
      " -> Python Business Logic Layer (Models / Actions)",
      " -> Security & Validation Middleware (SQLi Mitigation)",
      " -> PostgreSQL Database & QWeb/XLSX Reporting Generator"
    ],
    codeSnippet: `# Odoo Model Business Logic Example
from odoo import models, fields, api
from odoo.exceptions import ValidationError

class BusinessModuleRecord(models.Model):
    _name = 'business.module.record'
    _description = 'Enterprise Business Logic Automation Record'

    name = fields.Char(string='Module Title', required=True)
    state = fields.Selection([
        ('draft', 'Draft'),
        ('approved', 'Approved'),
        ('done', 'Completed')
    ], default='draft')
    amount = fields.Float(string='Total Budget', required=True)

    @api.constrains('amount')
    def _check_amount(self):
        for record in self:
            if record.amount <= 0:
                raise ValidationError("Budget amount must be strictly positive.")

    def action_approve(self):
        self.ensure_one()
        # Secure business logic execution
        self.state = 'approved'`,
    githubUrl: "https://github.com/ayan-biswas/business-application-module-aiub",
    demoUrl: "https://demo.odoo.com",
    imageBg: "from-blue-600/20 via-indigo-900/30 to-purple-900/40"
  },
  {
    id: "proj-2",
    title: "Automated Enterprise Analytics & XLSX Engine",
    subtitle: "Business Decision Analytics & Reporting Tool",
    category: "Analytics & Reporting",
    briefDescription: "Integrated automated business analytics generator producing QWeb PDF reports and XLSX dynamic spreadsheets directly from relational database streams.",
    objective: "To eliminate manual spreadsheet compilation and provide executive management with instant, error-free financial and operational reports.",
    role: "Full Stack Developer & Data Analyst",
    skillsApplied: ["Python", "QWeb Reports", "XLSX Writer", "PostgreSQL", "REST APIs"],
    outcome: "Reduced monthly reporting generation time by over 65%, enabling real-time analytics exports for management review.",
    keyFeatures: [
      "Dynamic cell formatting and formulas built dynamically in Python via XLSXWriter.",
      "Custom QWeb PDF layouts optimized for corporate print standards.",
      "Automated scheduled cron triggers for daily email dispatch of PDF/XLSX summaries.",
      "Optimized SQL join queries handling 100,000+ transaction rows in under 1.2 seconds."
    ],
    architectureDiagram: [
      "Trigger Event / Schedule",
      " -> SQL Aggregation Query (PostgreSQL)",
      " -> Python Data Parser",
      " -> XLSX Writer / QWeb Engine",
      " -> Generated PDF/XLSX File"
    ],
    codeSnippet: `import xlsxwriter
import io

def generate_excel_report(data_rows):
    output = io.BytesIO()
    workbook = xlsxwriter.Workbook(output)
    worksheet = workbook.add_worksheet('Analytics')
    
    header_format = workbook.add_format({'bold': True, 'bg_color': '#1E293B', 'font_color': '#FFFFFF'})
    worksheet.write_row(0, 0, ['Date', 'Module', 'Revenue ($)', 'Status'], header_format)
    
    for idx, row in enumerate(data_rows, start=1):
        worksheet.write_row(idx, 0, [row['date'], row['module'], row['revenue'], row['status']])
        
    workbook.close()
    return output.getvalue()`,
    githubUrl: "https://github.com/ayan-biswas/xlsx-qweb-analytics-engine",
    demoUrl: "https://analytics-demo.ayanbiswas.dev",
    imageBg: "from-cyan-600/20 via-teal-900/30 to-slate-900/40"
  },
  {
    id: "proj-3",
    title: "Enterprise Web Security & SQLi Mitigation Shield",
    subtitle: "Automated Data Validation & Defense Middleware",
    category: "Web Security",
    briefDescription: "A lightweight Python security middleware that inspects web requests, validates input payloads against strict schemas, and mitigates SQL Injection risks.",
    objective: "To protect enterprise web services and Odoo API endpoints against unauthorized payload injection and OWASP Top 10 vulnerabilities.",
    role: "Security & Backend Engineer",
    skillsApplied: ["Python", "Web Security Paradigms", "SQLi Prevention", "Automated Validation", "Git"],
    outcome: "Achieved 100% pass rate in simulated penetration tests with zero overhead delay on API responses.",
    keyFeatures: [
      "Parameterized query enforcement across all database queries.",
      "Regex-based automated payload sanitizer inspecting incoming JSON/XML payloads.",
      "Detailed audit logging for suspicious request patterns and rate-limiting alerts.",
      "Seamless integration with Python Web / Odoo request controllers."
    ],
    architectureDiagram: [
      "Incoming HTTP Request",
      " -> Security Shield Middleware",
      " -> Automated Schema Validator & SQLi Detector",
      " -> Passed: Controller Logic / Blocked: 403 Forbidden Audit Log"
    ],
    codeSnippet: `import re

def sanitize_input_param(user_input: str) -> str:
    # SQLi prevention pattern check
    forbidden_sql_patterns = [
        r"(?i)UNION\\s+SELECT",
        r"(?i)DROP\\s+TABLE",
        r"(?i)OR\\s+1=1",
        r"(?i)--"
    ]
    for pattern in forbidden_sql_patterns:
        if re.search(pattern, user_input):
            raise ValueError("Potential SQL Injection detected!")
    return user_input.strip()`,
    githubUrl: "https://github.com/ayan-biswas/sqli-mitigation-shield",
    demoUrl: "https://security-shield.ayanbiswas.dev",
    imageBg: "from-emerald-600/20 via-slate-900/40 to-teal-900/40"
  },
  {
    id: "proj-4",
    title: "Bike Buy and Sale System",
    subtitle: "Desktop Inventory & Transaction Management System",
    category: "Desktop & Java OOP",
    briefDescription: "A desktop-based inventory and sales management system built with Java, Swing GUI, and Object-Oriented Programming (OOP) principles, providing real-time stock updates, transaction processing, and user/admin authentication.",
    objective: "To design and develop a robust desktop solution streamlining bike sales operations, inventory tracking, role-based authorization, and receipt generation.",
    role: "Lead Desktop Developer & System Architect",
    skillsApplied: ["Java", "Swing GUI", "Object-Oriented Programming (OOP)", "AWT", "File I/O", "Data Structures", "Git"],
    outcome: "Delivered a feature-rich multi-user desktop application with role-based access controls, interactive Swing UI, and reliable record persistence.",
    keyFeatures: [
      "Role-based authentication system distinguishing Admin capabilities from Customer/User views.",
      "Real-time bike inventory tracking with full CRUD operations, categorization, and search filters.",
      "Automated transaction calculation, invoice generation, and sales ledger record storage.",
      "Custom Swing GUI designed with responsive layouts and event-driven user interactions.",
      "Structured Java OOP architecture enforcing data encapsulation and modular code maintainability."
    ],
    architectureDiagram: [
      "User Input (Java Swing GUI)",
      " -> Event Listener & UI Controller Layer",
      " -> OOP Business Logic (Inventory & User Managers)",
      " -> Data Persistence & File I/O Stream",
      " -> Sales Records & Inventory State Database"
    ],
    codeSnippet: `// Sample Java Swing Event Handler for Bike Inventory Transaction
public class TransactionController implements ActionListener {
    private InventoryModel inventory;
    private TransactionView view;

    public TransactionController(InventoryModel inventory, TransactionView view) {
        this.inventory = inventory;
        this.view = view;
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        String bikeId = view.getSelectedBikeId();
        int quantity = view.getRequestedQuantity();
        
        if (inventory.hasStock(bikeId, quantity)) {
            double total = inventory.processSale(bikeId, quantity);
            view.showReceipt(bikeId, quantity, total);
            inventory.saveState();
        } else {
            view.showError("Insufficient inventory stock!");
        }
    }
}`,
    githubUrl: "https://github.com/ayan-biswas007/Bike-Buy-And-Sale-System",
    imageBg: "from-amber-600/20 via-orange-900/30 to-slate-900/40"
  },
  {
    id: "proj-5",
    title: "Insta AutoMate System",
    subtitle: "C# & ASP.NET Core Instagram Workflow Automation Engine",
    category: "Automation & ASP.NET Core",
    briefDescription: "An automated full-stack workflow management system engineered with C# and ASP.NET Core REST APIs to automate Instagram tasks, message queues, and scheduled content routines.",
    objective: "To build a scalable backend automation platform handling multi-threaded task dispatching, REST API interactions, and automated Instagram workflow management.",
    role: "Full-Stack C# / ASP.NET Core Developer",
    skillsApplied: ["C#", "ASP.NET Core", "REST APIs", "Automation Engine", "Entity Framework", "LINQ", "Async/Await", "Git"],
    outcome: "Streamlined repetitive social media workflows, reducing manual account management effort by 80% with robust exception handling and rate-limiting safeguards.",
    keyFeatures: [
      "ASP.NET Core Web API architecture with RESTful endpoints for task scheduling and monitoring.",
      "Automation workflow engine managing task queues, messaging, and post management routines.",
      "Configurable rate-limiting, delay jittering, and session security to comply with API boundaries.",
      "Asynchronous job execution leveraging C# Task Parallel Library (TPL) and async/await paradigms.",
      "Comprehensive activity logging and exception recovery middleware for continuous uptime."
    ],
    architectureDiagram: [
      "REST API Client / Dashboard",
      " -> ASP.NET Core Controller",
      " -> Task Scheduler & Automation Queue Service",
      " -> Async Worker Threads (TPL)",
      " -> External Instagram API Web Requests"
    ],
    codeSnippet: `// ASP.NET Core Controller Endpoint for Task Automation Queue
[ApiController]
[Route("api/[controller]")]
public class WorkflowController : ControllerBase 
{
    private readonly IAutomationEngine _automationEngine;

    public WorkflowController(IAutomationEngine automationEngine) {
        _automationEngine = automationEngine;
    }

    [HttpPost("execute-task")]
    public async Task<IActionResult> ExecuteTask([FromBody] TaskRequestDto request) 
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);

        var result = await _automationEngine.EnqueueTaskAsync(request.AccountId, request.TaskType, request.Parameters);
        return Ok(new { success = true, taskId = result.Id, status = result.Status });
    }
}`,
    githubUrl: "https://github.com/ayan-biswas007/Insta-AutoMate-System",
    imageBg: "from-purple-600/20 via-pink-900/30 to-slate-900/40"
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-1",
    title: "Odoo Development & Framework Architecture",
    issuer: "Odoo Enterprise Academy / Online Certification",
    date: "2025",
    type: "Online Course",
    description: "Comprehensive mastery of Odoo 17/18 ORM models, views, OWL frontend components, security rules, and business workflow actions."
  },
  {
    id: "cert-2",
    title: "Python Enterprise Architecture & REST API Design",
    issuer: "Tech Development Institute",
    date: "2025",
    type: "Online Course",
    description: "Advanced object-oriented programming, design patterns, microservices architecture, and secure RESTful Web API development."
  },
  {
    id: "cert-3",
    title: "AIUB Software Engineering Capstone Showcase 2026",
    issuer: "American International University-Bangladesh",
    date: "2026",
    type: "Competition",
    description: "Awarded Distinction for engineering an open-source, customized enterprise business application module with integrated XML and XLSX reporting."
  },
  {
    id: "cert-4",
    title: "Web Security Paradigms & OWASP Top 10 Mitigation",
    issuer: "Cyber Security Workshop Series",
    date: "2024",
    type: "Workshop",
    description: "Practical training in SQL Injection mitigation, XSS prevention, automated input validation, and secure session management."
  },
  {
    id: "cert-5",
    title: "Academic Excellence Merit Scholarship",
    issuer: "AIUB & Education Board Bangladesh",
    date: "2022 - 2026",
    type: "Scholarship",
    description: "Merit recognition for outstanding academic performance, maintaining CGPA 3.40 at AIUB and Perfect GPA 5.00 in HSC & SSC."
  }
];
