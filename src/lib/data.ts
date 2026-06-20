import { resumeVersion } from "@/lib/resume-version";

export const profile = {
  name: "Md Faizal Razza",
  headline: "Software & Data Science Enthusiast",
  tagline:
    "Computer Science graduate building simple, functional applications with Python, Java and data.",
  location: "Cuttack, Odisha, India",
  email: "faizalrazza756@gmail.com",
  phone: "+91 7008255675",
  github: "https://github.com/fgdhs788687", // update with real profile
  linkedin: "https://www.linkedin.com/in/md-faizal-razza-a15098325", // update with real profile
  resume: `/Faizal_Razza_Resume.pdf?v=${resumeVersion}`,
  status: "Open to entry-level Software Development & Data Science roles",
};

export const summary = `I'm a Computer Science graduate who enjoys turning ideas into simple, functional applications with Python and Java. I have hands-on experience in software development, data analysis and machine learning — from OOP and SQL to Pandas, NumPy and Scikit-learn. I'm eager to keep learning and contribute to real-world projects that value clean, reliable code.`;

export const highlights = [
  { value: "4+", label: "Hands-on projects" },
  { value: "2", label: "Core languages" },
  { value: "B.Tech", label: "Computer Science" },
  { value: "2024", label: "Python internship" },
];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { title: "Programming Languages", items: ["Python", "Java"] },
  {
    title: "Concepts & Fundamentals",
    items: ["Object-Oriented Programming (OOP)", "Data Structures & Algorithms"],
  },
  {
    title: "Data Analysis & Visualization",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "MS Excel"],
  },
  { title: "Machine Learning", items: ["Scikit-learn", "Linear Regression", "Regularization"] },
  { title: "Databases", items: ["MySQL"] },
  {
    title: "Tools & Platforms",
    items: ["Jupyter Notebook", "VS Code", "Eclipse"],
  },
  { title: "Web Development", items: ["React", "Flask", "REST APIs", "SQLite", "HTML", "CSS"] },
  { title: "DevOps & Deployment", items: ["Docker", "Git", "GitHub", "Hugging Face Spaces"] },
];

export type Project = {
  title: string;
  blurb: string;
  description: string[];
  tech: string[];
};

export const projects: Project[] = [
  {
  title: "Aethro AI — Full Stack AI Chatbot",
  blurb: "A full-stack AI chatbot with real-time streaming, persistent memory, and an animated day/night sky UI.",
  description: [
    "Built a full-stack web application with a React/Vite frontend and a Python Flask backend.",
    "Integrated OpenRouter API (GPT OSS 120B — 120 billion parameter LLM) for AI-powered responses.",
    "Implemented real-time streaming using Server-Sent Events so responses appear word by word.",
    "Designed a SQLite database to persist conversation history across sessions.",
    "Built an animated day/night sky UI with drifting clouds, glowing stars, and shooting stars using pure CSS animations.",
    "Containerized the full application with Docker and deployed on Hugging Face Spaces.",
    "Followed security best practices — API keys stored as environment variables, never hardcoded.",
  ],
  tech: ["React", "Vite", "Python", "Flask", "SQLite", "Docker", "OpenRouter API", "CSS Animations"],
  },
  {
  title: "CGPA Calculator",
  blurb: "A React + Vite web app to calculate CGPA, percentage, and grades instantly.",
  description: [
    "Built a fully functional CGPA calculator using React and Vite.",
    "Handles grade conversion, percentage calculation, and CGPA computation.",
    "Uses modular logic with separate calculation helpers (calc.js).",
    "Responsive UI with clean design using CSS.",
    "Fast client-side calculations with no backend required."
  ],
  tech: ["React", "Vite", "JavaScript", "CSS"],
  },
  {
    title: "Library Management System",
    blurb:
      "A Java desktop system that automates book inventory, member registration and issue/return workflows.",
    description: [
      "Built an automated system to handle book inventory, member registration and issue/return operations.",
      "Applied core OOP principles to keep functionality modular and maintainable.",
      "Integrated a MySQL backend to store and retrieve user and book records.",
      "Reduced manual effort while improving accuracy and efficiency.",
    ],
    tech: ["Java", "OOP", "MySQL"],
  },
  {
    title: "Exploratory Data Analysis with Python",
    blurb:
      "An end-to-end EDA on structured datasets to surface patterns, correlations and insights.",
    description: [
      "Performed feature engineering and data cleaning with Pandas and NumPy.",
      "Created visualizations with Matplotlib and Seaborn to identify correlations and trends.",
      "Extracted meaningful patterns and laid the groundwork for future ML work.",
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    title: "Algerian Forest Fires — FWI Prediction",
    blurb:
      "A machine learning model that predicts the Fire Weather Index from meteorological data.",
    description: [
      "Predicted the Fire Weather Index (FWI) using the Algerian forest fires dataset.",
      "Handled missing values, feature scaling and categorical encoding for model readiness.",
      "Compared Linear Regression with Ridge, Lasso and ElasticNet regularization.",
      "Visualized performance metrics and published the full workflow on GitHub.",
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Python Programming Intern",
    company: "Motion Cut Private Limited",
    location: "Lucknow, India (Virtual)",
    period: "Jul 2024 – Aug 2024",
    points: [
      "Completed a virtual internship focused on Python programming and data analytics.",
      "Worked on projects involving data preprocessing, feature engineering and visualization.",
      "Strengthened skills in data manipulation, EDA and problem-solving with Python.",
    ],
  },
];

export type Education = {
  degree: string;
  school: string;
  location: string;
  period: string;
};

export const education: Education[] = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    school: "Gandhi Institute for Technological Advancement (GITA), Autonomous College",
    location: "Bhubaneswar",
    period: "Jun 2022 – Apr 2025",
  },
  {
    degree: "Diploma in Engineering — Computer Science",
    school: "Dhaneswar Rath Institute of Engineering and Management Studies",
    location: "Tangi",
    period: "Sep 2019 – Mar 2022",
  },
  {
    degree: "Secondary Education (10th Board)",
    school: "DAV Public School",
    location: "Cuttack, CDA",
    period: "Apr 2014 – Mar 2019",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];
