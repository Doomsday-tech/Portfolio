// Centralized content for the portfolio.
// Update this file to change site-wide information.

export const profile = {
  name: 'Aryan Ahire',
  title: 'Computer Science Engineer | Full Stack Developer | AI/ML Enthusiast',
  location: 'Maharashtra, India',
  email: 'aryanahire462@gmail.com',
  phone: '+91 9022686758',
  linkedin: 'https://www.linkedin.com/in/aryan-ahire-424684292',
  github: 'https://github.com/Doomsday-tech',
  resumeUrl: '/resume.pdf',
  intro:
    'Passionate Computer Science student focused on Full Stack Development, Artificial Intelligence, and Cybersecurity. I enjoy building impactful software products and solving real-world problems through technology.',
  education: {
    degree: 'BE Computer Science',
    institute: 'Nutan Maharashtra Institute of Engineering and Technology',
    university: 'SPPU University',
  },
}

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
]

export const aboutHighlights = [
  {
    title: '3rd Year CS Student',
    description:
      'Currently pursuing my BE in Computer Science at NMIET, SPPU, building a strong foundation in core CS concepts and software engineering practices.',
    icon: 'FaGraduationCap',
  },
  {
    title: 'Full Stack Development',
    description:
      'Designing and building end-to-end web applications with the MERN stack — from responsive UIs to scalable, secure backend APIs.',
    icon: 'FaLayerGroup',
  },
  {
    title: 'AI & Machine Learning',
    description:
      'Exploring machine learning and NLP to build intelligent systems — from text classification models to AI-powered platforms.',
    icon: 'FaBrain',
  },
  {
    title: 'Cybersecurity',
    description:
      'Investigating security vulnerabilities, analyzing simulated incidents, and building tools that strengthen digital safety.',
    icon: 'FaShieldAlt',
  },
  {
    title: 'Problem Solving',
    description:
      'Strong foundation in Data Structures & Algorithms, with a focus on writing efficient, scalable, and maintainable solutions.',
    icon: 'FaPuzzlePiece',
  },
  {
    title: 'Continuous Learning',
    description:
      'Constantly exploring new tools, frameworks and research to stay ahead — and turning that learning into real projects.',
    icon: 'FaSeedling',
  },
]

export const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'Python', 'C++', 'C', 'SQL', 'JavaScript'],
  },
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'MongoDB'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Postman'],
  },
  {
    title: 'Domains',
    skills: [
      'Data Structures & Algorithms',
      'Full Stack Development',
      'Machine Learning',
      'NLP',
      'Cybersecurity',
    ],
  },
]

export const projects = [
  {
    id: 'interviewa',
    title: 'Interviewa',
    description:
      'AI-powered mock interview preparation platform featuring authentication, interview sessions, performance feedback, question generation, answer tracking, automated evaluation, and rank progression.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
    liveUrl: 'https://interviewa-kappa.vercel.app/',
    githubUrl: 'https://github.com/Doomsday-tech/Interviewa',
    accent: 'from-accent-blue to-accent-cyan',
  },
  {
    id: 'reviewshield',
    title: 'ReviewShield',
    description:
      'NLP-powered fake review detection system using TF-IDF vectorization and Logistic Regression trained on 500K+ Amazon reviews. Features confidence scoring, text preprocessing, and real-time review analysis.',
    tech: ['Python', 'NLP', 'Scikit-Learn', 'Streamlit'],
    liveUrl: 'https://reviewshield.streamlit.app/',
    githubUrl: 'https://github.com/Doomsday-tech/ReviewShield',
    accent: 'from-accent-cyan to-accent-blue',
  },
  {
     id: 'habitflow',
  title: 'HabitFlow',
  description:
    'Modern habit tracking web application that helps users build consistency, track daily habits, monitor progress through analytics, and stay accountable with an intuitive and responsive interface.',
  tech: ['React', 'Node.js', 'MongoDB'],
  liveUrl: 'https://habitflow-one-sigma.vercel.app/',
  githubUrl: 'https://github.com/Doomsday-tech/Habitflow',
  accent: 'from-accent-blue to-accent-cyan',
  },
]

export const experiences = [
  {
    id: 'tata',
    role: 'Data Visualization Virtual Intern',
    company: 'Tata Group',
    period: 'August 2025',
    points: [
      'Presented complex datasets through interactive dashboards',
      'Generated strategic insights for business growth',
    ],
  },
  {
    id: 'deloitte',
    role: 'Cybersecurity Virtual Intern',
    company: 'Deloitte',
    period: 'August 2025',
    points: [
      'Investigated simulated cyber incidents',
      'Produced security analysis and recommendations',
    ],
  },
]

export const achievements = [
  {
    title: 'Hackathon Participant — IIIT Delhi',
    description:
      'Participated in a national-level hackathon hosted at IIIT Delhi, collaborating under time constraints to design and build a working solution.',
    icon: 'FaTrophy',
  },
  {
    title: 'Top 50 of 2000+ Teams',
    description:
      'Our team was shortlisted in the Top 50 among over 2000 participating teams, recognized for innovation and execution.',
    icon: 'FaMedal',
  },
  {
    title: 'Multiple Full Stack & AI Projects',
    description:
      'Built and shipped multiple full-stack and AI-based projects spanning web development, NLP, and security tooling.',
    icon: 'FaRocket',
  },
]
