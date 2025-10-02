import React, { useState, useEffect } from 'react';
import { 
  FaReact, 
  FaPython, 
  FaJsSquare, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaNodeJs, 
  FaDatabase,
  FaCode
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiFlask, 
  SiTailwindcss, 
  SiOpenai,
  SiTensorflow,
  SiOpencv
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationTriggered(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const skillsData = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', level: 85, icon: <FaPython />, color: '#3776ab' },
        { name: 'JavaScript', level: 80, icon: <FaJsSquare />, color: '#f7df1e' },
        { name: 'Java', level: 75, icon: <FaJsSquare />, color: '#007396' },
        { name: 'HTML5', level: 90, icon: <FaHtml5 />, color: '#e34f26' },
        { name: 'CSS3', level: 85, icon: <FaCss3Alt />, color: '#1572b6' },
      ]
    },
    {
      category: 'Frameworks & Libraries',
      skills: [
        { name: 'React', level: 82, icon: <FaReact />, color: '#61dafb' },
        { name: 'Flask', level: 75, icon: <SiFlask />, color: '#000000' },
        { name: 'Node.js', level: 70, icon: <FaNodeJs />, color: '#339933' },
        { name: 'Tailwind CSS', level: 80, icon: <SiTailwindcss />, color: '#06b6d4' },
        { name: 'React Native', level: 65, icon: <FaReact />, color: '#61dafb' },
      ]
    },
    {
      category: 'AI/ML & Data Science',
      skills: [
        { name: 'Machine Learning', level: 78, icon: <SiTensorflow />, color: '#ff6f00' },
        { name: 'Computer Vision', level: 75, icon: <SiOpencv />, color: '#5c3ee8' },
        { name: 'NLP', level: 70, icon: <SiOpenai />, color: '#412991' },
        { name: 'OpenCV', level: 72, icon: <SiOpencv />, color: '#5c3ee8' },
        { name: 'Pandas', level: 80, icon: <FaPython />, color: '#150458' },
      ]
    },
    {
      category: 'Databases & Tools',
      skills: [
        { name: 'MongoDB', level: 75, icon: <SiMongodb />, color: '#47a248' },
        { name: 'SQL', level: 70, icon: <FaDatabase />, color: '#336791' },
        { name: 'Git', level: 85, icon: <FaGitAlt />, color: '#f05032' },
        { name: 'VS Code', level: 90, icon: <FaCode />, color: '#007acc' },
        { name: 'AWS', level: 60, icon: <FaDatabase />, color: '#ff9900' },
      ]
    }
  ];

  const SkillBar = ({ skill, animated }) => (
    <div className="skill-item">
      <div className="skill-header">
        <div className="skill-name">
          <span className="skill-icon" style={{ color: skill.color }}>
            {skill.icon}
          </span>
          <span>{skill.name}</span>
        </div>
        <span className="skill-percentage">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress"
          style={{ 
            width: animated ? `${skill.level}%` : '0%',
            backgroundColor: skill.color,
            transition: 'width 1.5s ease-in-out'
          }}
        />
      </div>
    </div>
  );

  return (
    <div className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2>Technical Skills</h2>
          <p>Here's a comprehensive overview of my technical expertise and proficiency levels</p>
        </div>

        <div className="skills-grid">
          {skillsData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex} 
                    skill={skill} 
                    animated={animationTriggered}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-item">
            <h4>5+</h4>
            <p>Programming Languages</p>
          </div>
          <div className="summary-item">
            <h4>10+</h4>
            <p>Frameworks & Tools</p>
          </div>
          <div className="summary-item">
            <h4>3+</h4>
            <p>Years Learning</p>
          </div>
          <div className="summary-item">
            <h4>AI/ML</h4>
            <p>Specialization</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;