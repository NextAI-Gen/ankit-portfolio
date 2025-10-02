import React from 'react';
import { FaCode, FaBrain, FaDatabase, FaCloud } from 'react-icons/fa';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import './About.css';

const About = () => {
  const skills = {
    languages: ['Java', 'Python', 'JavaScript', 'HTML', 'CSS'],
    technologies: ['React', 'Node.js', 'Flask', 'MongoDB', 'Express.js', 'Firebase'],
    concepts: ['Artificial Intelligence', 'Machine Learning', 'Computer Vision', 'NLP'],
    tools: ['VS Code', 'GitHub', 'AWS', 'Oracle', 'Pandas', 'OpenCV']
  };

  const experiences = [
    {
      title: 'Frontend Developer Intern',
      company: 'DevSkillhub',
      period: 'May 2024 – July 2024',
      description: [
        'Developed responsive footwear e-commerce website with product catalog and shopping cart functionality',
        'Implemented MongoDB integration for dynamic product management and inventory tracking'
      ]
    },
    {
      title: 'User Testing Intern',
      company: 'Sharma Industries',
      period: 'Oct 2023 – Dec 2023',
      description: [
        'Provided detailed feedback to development teams for product improvement',
        'Contributed to process optimization through systematic testing and analysis'
      ]
    }
  ];

  const certifications = [
    'IBM Machine Learning Professional Certificate (October 2024)',
    'IBM Linux Commands & Shell Scripting (March 2024)',
    'Google Solution Challenge Certificate (June 2024)',
    'Cisco CCNAv7 - Enterprise Networking, Security, and Automation (December 2024)',
    'AWS Cloud Practitioner Certification (September 2024)',
    'Oracle AI Foundations Professional Certificate (October 2024)'
  ];

  return (
    <div className="about">
      <div className="about-container">
        <div className="about-header">
          <h1>About Me</h1>
          <p className="about-intro">
            Innovative AI/ML Engineer with expertise in developing intelligent systems and web applications. 
            Passionate about leveraging machine learning algorithms and computer vision to create 
            impactful solutions that solve real-world problems.
          </p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <h2>🎓 Education</h2>
            <div className="education-card">
              <h3>Bachelor of Technology in Computer Science</h3>
              <p className="institution">Jain (Deemed-To-Be) University</p>
              <p className="duration">2022 - 2026</p>
              <p className="gpa">GPA: 7.9/10.0 (up to 6th Semester)</p>
            </div>
            <div className="education-card">
              <h3>Higher Secondary School</h3>
              <p className="institution">Jawaharlal Nehru School</p>
              <p className="duration">2020-2021</p>
              <p className="percentage">Percentage: 82%</p>
            </div>
          </div>

          <div className="about-section">
            <h2>💼 Experience</h2>
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="exp-header">
                  <h3>{exp.title}</h3>
                  <span className="period">{exp.period}</span>
                </div>
                <p className="company">{exp.company}</p>
                <ul>
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="about-section">
            <h2>🛠️ Technical Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <div className="skill-header">
                  <FaCode className="skill-icon" />
                  <h3>Languages</h3>
                </div>
                <div className="skills-list">
                  {skills.languages.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="skill-category">
                <div className="skill-header">
                  <FaDatabase className="skill-icon" />
                  <h3>Technologies</h3>
                </div>
                <div className="skills-list">
                  {skills.technologies.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <div className="skill-header">
                  <FaBrain className="skill-icon" />
                  <h3>Concepts</h3>
                </div>
                <div className="skills-list">
                  {skills.concepts.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <div className="skill-header">
                  <FaCloud className="skill-icon" />
                  <h3>Tools & Platforms</h3>
                </div>
                <div className="skills-list">
                  {skills.tools.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>🏆 Certifications</h2>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <p>{cert}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about-section">
            <h2>🎯 What I'm Passionate About</h2>
            <div className="passion-grid">
              <div className="passion-card">
                <h3>🤖 Artificial Intelligence</h3>
                <p>Building intelligent systems that can solve real-world problems through machine learning and computer vision.</p>
              </div>
              <div className="passion-card">
                <h3>🌐 Web Development</h3>
                <p>Creating responsive, user-friendly web applications with modern frameworks and technologies.</p>
              </div>
              <div className="passion-card">
                <h3>🚀 Innovation</h3>
                <p>Always looking for new ways to improve existing processes and create innovative solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Interactive Skills Section */}
      <Skills />
      
      {/* Timeline Section */}
      <Timeline />
    </div>
  );
};

export default About;