import type { PortfolioData } from '../types'

// Everything visible on the site is edited here.
// Items marked "placeholder" should be replaced with your own information or files.
export const portfolio: PortfolioData = {
  name: 'Raymund Sismundo',
  initials: 'RS',
  role: 'Full-Stack Developer | Freelance Software Developer',
  tagline: 'Building practical digital solutions through technology.',
  intro:
    'I build modern websites and custom software solutions that help businesses simplify their operations, improve workflows, and manage their daily activities more efficiently.',
  location: 'Based in Cebu, Philippines',
  availability: 'Open to Freelance Projects',
  email: 'raymund@example.com', // placeholder — replace with your email
  facebook: 'https://www.facebook.com/raysha23', // placeholder — replace with your profile
  github: 'https://github.com/raysha23',
  portrait: undefined, // add a path like '/images/raymund.jpg' when ready
  resumeFile: '/resume/Raymund-Sismundo-Resume.pdf',

  about: [
    `Hi! I'm Raymund, a Full-Stack Developer based in Cebu, Philippines.`,
    `I enjoy developing software solutions that solve real-world problems. My experience includes building business management systems, developing frontend and backend applications, designing databases, and deploying applications for actual business operations.`,
    `One of my most valuable experiences has been independently developing and maintaining a production booking and management system for a real business.`,
    `I am continuously improving my technical skills, exploring new technologies, and looking for opportunities to collaborate with businesses and fellow developers.`,
  ],
  characteristics: [
    'Full-Stack Development',
    'Problem Solving',
    'Database Design',
    'Business Process Automation',
    'System Deployment and Maintenance',
  ],

  socials: [
    { label: 'GitHub', url: 'https://github.com/raysha23', icon: 'github' },
    { label: 'Facebook', url: 'https://www.facebook.com/', icon: 'facebook' },
    { label: 'Email', url: 'mailto:raymund@example.com', icon: 'mail' },
  ],

  services: [
    {
      title: 'Website Development',
      description:
        'Develop responsive and modern websites for businesses, organizations, and individuals.',
      icon: 'globe',
    },
    {
      title: 'Custom Business Systems',
      description:
        'Build customized systems for booking, inventory, sales, financial monitoring, and business management.',
      icon: 'layers',
    },
    {
      title: 'Database Development',
      description:
        'Design, structure, and integrate databases for reliable and organized business applications.',
      icon: 'database',
    },
    {
      title: 'System Maintenance and Improvement',
      description:
        'Provide technical support, bug fixing, feature improvements, and ongoing system maintenance.',
      icon: 'tools',
    },
  ],

  projects: [
    {
      id: 'jojos-lechon',
      title: "Jojo's Lechon Booking and Management System",
      category: 'Real Business Deployment',
      summary:
        "Developed and deployed a booking and management system for Jojo's Lechon, helping the business manage customer bookings, orders, payments, inventory, and daily operations.",
      functionalities: [
        'Booking and order management',
        'Customer and payment management',
        'Inventory management for lechon and belly products',
        'Daily settlement and financial monitoring',
        'Order tracking and management workflows',
        'Administrative and encoder functionalities',
      ],
      responsibilities: [
        'Full-stack development',
        'Frontend development using React',
        'Backend API development using ASP.NET Core Web API',
        'Database design and management using SQL Server',
        'Production deployment and system maintenance',
      ],
      technologies: [
        'React',
        'JavaScript',
        'Tailwind CSS',
        'C#',
        'ASP.NET Core Web API',
        'Entity Framework Core',
        'SQL Server',
      ],
      note: 'Screenshot placeholder — replace with a real capture of the system.',
    },
    {
      id: 'daily-settlement',
      title: 'Daily Settlement Management Module',
      category: 'Business Management System Feature',
      summary:
        'Developed a daily settlement module to help organize business sales, previous payments, actual collections, expenses, and daily financial summaries.',
      functionalities: [
        'Daily sales monitoring',
        'Expense recording and categorization',
        'Collection tracking',
        'Previous payment monitoring',
        'Settlement summaries and history',
      ],
      note: "A major module of the Jojo's Lechon system, not an unrelated client project.",
      technologies: ['React', 'ASP.NET Core Web API', 'C#', 'SQL Server'],
    },
    {
      id: 'server-monitoring',
      title: 'Server Monitoring System',
      category: 'Internship / OJT Project — CoreDev Solutions Inc.',
      summary:
        'Participated in the development of a server monitoring system during my internship at CoreDev Solutions Inc., working with frontend and backend technologies to build system functionalities and manage server-related information.',
      contributions: [
        'Developed frontend interfaces using React',
        'Worked on backend functionalities using Laravel',
        'Integrated application data with PostgreSQL',
        'Participated in system development, testing, and improvements',
      ],
      technologies: ['Laravel', 'React', 'PostgreSQL'],
    },
    {
      id: 'truck-sales',
      title: 'Truck Sales Management System',
      category: 'Academic / Thesis Project — In Development',
      summary:
        'A thesis project focused on developing a truck sales management system with Linear Regression forecasting for JP Razzaq International Corporation.',
      planned: [
        'Truck inventory management',
        'Vehicle sales monitoring',
        'Customer information management',
        'Registration and payment monitoring',
        'Accessories inventory monitoring',
        'Sales forecasting using Linear Regression',
      ],
      note: 'Academic project currently in development. Not a completed commercial deployment.',
      technologies: ['Linear Regression', 'Full-Stack Development', 'Database Design'],
    },
  ],

  skillGroups: [
    {
      title: 'Frontend',
      icon: 'code',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      icon: 'server',
      skills: ['C#', 'ASP.NET Core Web API', 'Laravel'],
    },
    {
      title: 'Database',
      icon: 'database',
      skills: ['Microsoft SQL Server', 'PostgreSQL', 'MySQL'],
    },
    {
      title: 'Tools and Development',
      icon: 'tools',
      skills: ['Git', 'GitHub', 'Visual Studio Code', 'Postman', 'Vite'],
    },
  ],

  experience: [
    {
      role: 'Software Developer',
      organization: "Jojo's Lechon",
      period: '20XX – Present', // placeholder dates
      context: 'Real Business System Development',
      points: [
        'Developed and deployed a booking and management system.',
        'Developed inventory and daily settlement functionalities.',
        'Managed frontend, backend, and database development.',
        'Handled production deployment and system maintenance.',
        'Worked with actual business requirements and operational workflows.',
      ],
    },
    {
      role: 'Intern Developer',
      organization: 'CoreDev Solutions Inc.',
      period: '20XX – 20XX', // placeholder dates
      context: '250 Hours of Internship',
      points: [
        'Developed a server monitoring system using Laravel, React, and PostgreSQL.',
        'Built frontend interfaces and backend functionalities.',
        'Designed and integrated database structures.',
        'Participated in system testing and feature improvements.',
      ],
    },
  ],

  education: {
    school: 'Asian College of Technology',
    degree: 'Bachelor of Science in Computer Science',
    period: 'Expected Graduation: 2027',
  },

  achievements: [
    {
      title: "Dean's Lister",
      detail: '2025',
      icon: 'award',
    },
    {
      title: 'Champion — School Programming Competition',
      detail: '2025',
      icon: 'trophy',
    },
    {
      title: 'Participant — Cash 30 Hackathon',
      detail: 'Professional activity',
      icon: 'users',
    },
  ],

  navigation: [
    { label: 'Home', href: '#home', icon: 'home' },
    { label: 'About', href: '#about', icon: 'user' },
    { label: 'Services', href: '#services', icon: 'layers' },
    { label: 'Projects', href: '#projects', icon: 'grid' },
    { label: 'Skills', href: '#skills', icon: 'code' },
    { label: 'Experience', href: '#experience', icon: 'briefcase' },
    { label: 'Achievements', href: '#achievements', icon: 'award' },
    { label: 'Contact', href: '#contact', icon: 'mail' },
  ],
}
