import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaDownload, 
  FaRocket,
  FaBrain,
  FaChevronRight
} from 'react-icons/fa';
import { SiReact, SiPython, SiJavascript, SiMongodb, SiNodedotjs } from 'react-icons/si';
import './Home-clean.css';

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const roles = [
    "AI/ML Engineer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    { name: "React", level: 90, icon: <SiReact /> },
    { name: "Python", level: 85, icon: <SiPython /> },
    { name: "JavaScript", level: 88, icon: <SiJavascript /> },
    { name: "AI/ML", level: 80, icon: <FaBrain /> },
    { name: "MongoDB", level: 75, icon: <SiMongodb /> },
    { name: "Node.js", level: 82, icon: <SiNodedotjs /> }
  ];

  return (
    <div className="modern-portfolio">
      {/* Animated Background */}
      <div 
        className="animated-bg"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 119, 198, 0.3), transparent 50%)`
        }}
      ></div>
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            {/* Status Badge */}
            <div className="status-badge">
              <div className="status-dot"></div>
              Available for Hire
            </div>
            
            {/* Main Title */}
            <h1 className="hero-title">
              Hi, I'm{' '}
              <span className="name-highlight">Ankit Choudhary</span>
            </h1>
            
            {/* Dynamic Role */}
            <div className="role-display">
              <span className="role-text">{roles[currentRole]}</span>
              <span className="cursor">|</span>
            </div>
            
            {/* Description */}
            <p className="hero-description">
              Innovative Computer Science student crafting intelligent{' '}
              <span className="highlight">AI/ML solutions</span> and developing modern{' '}
              <span className="highlight">web applications</span> that transform ideas into reality.
            </p>
            
            {/* Stats */}
            <div className="quick-stats">
              <div className="stat">
                <span className="stat-number">7.9/10</span>
                <span className="stat-label">GPA</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">2</span>
                <span className="stat-label">Internships</span>
              </div>
              <div className="stat">
                <span className="stat-number">6+</span>
                <span className="stat-label">Certifications</span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="hero-actions">
              <Link to="/projects" className="btn-primary">
                <FaRocket className="btn-icon" />
                View My Work
              </Link>
              <Link to="/contact" className="btn-secondary">
                <FaEnvelope className="btn-icon" />
                Let's Connect
              </Link>
            </div>
            
            {/* Social Links */}
            <div className="social-links">
              <a href="https://github.com/NextAI-Gen" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/ankit-choudhary-aanku" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="mailto:Ankitchoudhary7100@gmail.com" className="social-link">
                <FaEnvelope />
              </a>
            </div>
          </div>
          
          {/* Skills Showcase */}
          <div className="skills-showcase">
            <div className="skills-header">
              <h3>Technical Expertise</h3>
              <p>My core technologies & proficiency levels</p>
            </div>
            
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar">
                      <div 
                        className="skill-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Featured Project Card */}
            <div className="featured-project">
              <div className="project-header">
                <div className="project-icon-wrapper">
                  <FaBrain className="project-icon" />
                </div>
                <div>
                  <h4>🚀 Spotlight Project</h4>
                  <p>Smart AI Assistant</p>
                </div>
              </div>
              <div className="project-description">
                <p>Intelligent chatbot with natural language processing capabilities</p>
              </div>
              <div className="project-tags">
                <span className="tag">Python</span>
                <span className="tag">Machine Learning</span>
                <span className="tag">React</span>
              </div>
              <Link to="/projects" className="project-link">
                Explore Project <FaChevronRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Timeline */}
      <section className="experience">
        <div className="container">
          <h2 className="section-title">Professional Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2024</div>
              <div className="timeline-content">
                <h3>Frontend Developer Intern</h3>
                <p>DevSkillhub</p>
                <span className="timeline-tech">React • MongoDB • JavaScript</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2023</div>
              <div className="timeline-content">
                <h3>User Testing Intern</h3>
                <p>Sharma Industries</p>
                <span className="timeline-tech">Testing • Analysis • Optimization</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2022</div>
              <div className="timeline-content">
                <h3>Started BTech</h3>
                <p>Jain (Deemed-to-be) University</p>
                <span className="timeline-tech">Computer Science • AI/ML Focus</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Build Something Amazing Together</h2>
            <p>I'm always excited to work on innovative projects and contribute to meaningful solutions.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn-primary">
                <FaRocket className="btn-icon" />
                Start a Project
              </Link>
              <a href="/Ankit_Choudhary_Resume.pdf.pdf" download="Ankit_Choudhary_Resume.pdf" className="btn-secondary">
                <FaDownload className="btn-icon" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;