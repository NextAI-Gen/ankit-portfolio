import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaBrain, FaShoppingCart } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Fras - Automated Attendance System',
      description: 'Built automated attendance system using computer vision and machine learning with KNN classifier for accurate face recognition and matching.',
      technologies: ['Python', 'HTML', 'Pandas', 'OpenCV', 'Flask'],
      category: 'ai-ml',
      github: 'https://github.com/NextAI-Gen/fras-attendance',
      demo: null,
      features: [
        'Computer Vision based face detection',
        'KNN Classifier for face recognition',
        'Real-time attendance tracking',
        'Web-based dashboard for monitoring'
      ],
      icon: <FaBrain />,
      color: 'linear-gradient(135deg, #667eea, #764ba2)'
    },
    {
      id: 2,
      title: 'Safar - Bus Ticket Booking System',
      description: 'Developed web application for real-time bus ticket booking with seat selection, secure payment processing and user authentication system.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'MongoDB'],
      category: 'web-dev',
      github: 'https://github.com/NextAI-Gen/safar-booking',
      demo: null,
      features: [
        'Real-time seat availability',
        'Interactive seat selection',
        'Secure payment gateway integration',
        'User account management',
        'Booking history and receipts'
      ],
      icon: <FaCode />,
      color: 'linear-gradient(135deg, #ffd89b, #19547b)'
    },
    {
      id: 3,
      title: 'AI-Powered Interview System',
      description: 'Built an AI platform using Python & NLP for real-time interview feedback and scoring with smart resume analysis for better job matching.',
      technologies: ['Python', 'Flask', 'Tailwind CSS', 'NLP'],
      category: 'ai-ml',
      github: 'https://github.com/NextAI-Gen/ai-interview-system',
      demo: null,
      features: [
        'Real-time interview feedback',
        'AI-powered scoring system',
        'Natural Language Processing',
        'Resume analysis and suggestions',
        'Job matching recommendations'
      ],
      icon: <FaBrain />,
      color: 'linear-gradient(135deg, #a8edea, #fed6e3)'
    },
    {
      id: 4,
      title: 'E-Commerce Footwear Website',
      description: 'Developed responsive footwear e-commerce website with product catalog, shopping cart functionality and MongoDB integration during internship.',
      technologies: ['React', 'MongoDB', 'Node.js', 'Express'],
      category: 'web-dev',
      github: 'https://github.com/NextAI-Gen/ecommerce-footwear',
      demo: null,
      features: [
        'Responsive product catalog',
        'Shopping cart functionality',
        'MongoDB database integration',
        'Product inventory management',
        'User-friendly interface'
      ],
      icon: <FaShoppingCart />,
      color: 'linear-gradient(135deg, #667eea, #764ba2)'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'ai-ml', label: 'AI/ML' },
    { key: 'web-dev', label: 'Web Development' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h1>My Projects</h1>
          <p className="projects-intro">
            Here are some of the key projects I've worked on, showcasing my skills in 
            web development, artificial intelligence, and machine learning.
          </p>
        </div>

        <div className="filter-tabs">
          {categories.map(category => (
            <button
              key={category.key}
              className={`filter-tab ${filter === category.key ? 'active' : ''}`}
              onClick={() => setFilter(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header" style={{ background: project.color }}>
                <div className="project-icon">
                  {project.icon}
                </div>
                <h3 className="project-title">{project.title}</h3>
              </div>
              
              <div className="project-content">
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  <h4>Technologies Used:</h4>
                  <div className="tech-stack">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-actions">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-btn primary"
                    >
                      <FaGithub /> View Code
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-btn secondary"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  {!project.demo && (
                    <span className="project-btn disabled">
                      <FaExternalLinkAlt /> Demo Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-stats">
          <div className="stat-item">
            <h3>4+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <h3>8+</h3>
            <p>Technologies Used</p>
          </div>
          <div className="stat-item">
            <h3>2</h3>
            <p>Internships</p>
          </div>
          <div className="stat-item">
            <h3>100+</h3>
            <p>Hours Coding</p>
          </div>
        </div>

        <div className="cta-section">
          <h2>Interested in collaborating?</h2>
          <p>I'm always open to discussing new opportunities and projects.</p>
          <a href="/contact" className="cta-button">Get In Touch</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;