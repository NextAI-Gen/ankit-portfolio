import React from 'react';
import { FaGraduationCap, FaBriefcase, FaCertificate, FaTrophy } from 'react-icons/fa';
import './Timeline.css';

const Timeline = () => {
  const timelineData = [
    {
      year: '2026',
      title: 'BTech Computer Science (Expected)',
      subtitle: 'Jain (Deemed-to-be) University',
      description: 'Expected graduation with strong focus on AI/ML and software development.',
      type: 'education',
      icon: <FaGraduationCap />,
      status: 'future'
    },
    {
      year: '2024',
      title: 'Oracle AI Foundations Professional Certificate',
      subtitle: 'Oracle Corporation',
      description: 'Advanced certification in AI foundations and Oracle AI services.',
      type: 'certification',
      icon: <FaCertificate />,
      status: 'completed'
    },
    {
      year: '2024',
      title: 'AWS Cloud Practitioner Certification',
      subtitle: 'Amazon Web Services',
      description: 'Foundational certification in AWS cloud computing and services.',
      type: 'certification',
      icon: <FaCertificate />,
      status: 'completed'
    },
    {
      year: '2024',
      title: 'Google Solution Challenge Certificate',
      subtitle: 'Google Developers',
      description: 'Recognized for innovative solution development and technical excellence.',
      type: 'achievement',
      icon: <FaTrophy />,
      status: 'completed'
    },
    {
      year: '2024',
      title: 'IBM Linux Commands & Shell Scripting',
      subtitle: 'IBM Professional Certificate',
      description: 'Advanced certification in Linux system administration and shell scripting.',
      type: 'certification',
      icon: <FaCertificate />,
      status: 'completed'
    },
    {
      year: '2024',
      title: 'Cisco CCNAv7 Certification',
      subtitle: 'Enterprise Networking, Security, and Automation',
      description: 'Comprehensive networking certification covering enterprise-level solutions.',
      type: 'certification',
      icon: <FaCertificate />,
      status: 'completed'
    },
    {
      year: '2024',
      title: 'IBM Machine Learning Professional Certificate',
      subtitle: 'IBM Professional Development',
      description: 'Advanced certification in machine learning algorithms and practical applications.',
      type: 'certification',
      icon: <FaCertificate />,
      status: 'completed'
    },
    {
      year: '2024',
      title: 'Frontend Developer Intern',
      subtitle: 'DevSkillhub',
      description: 'Developed responsive e-commerce website with React and MongoDB integration. Built product catalog and shopping cart functionality.',
      type: 'work',
      icon: <FaBriefcase />,
      status: 'completed'
    },
    {
      year: '2023',
      title: 'User Testing Intern',
      subtitle: 'Sharma Industries',
      description: 'Conducted systematic testing and provided detailed feedback for product improvement. Contributed to process optimization.',
      type: 'work',
      icon: <FaBriefcase />,
      status: 'completed'
    },
    {
      year: '2022',
      title: 'Started BTech Computer Science',
      subtitle: 'Jain (Deemed-to-be) University',
      description: 'Began comprehensive computer science education with focus on programming, algorithms, and emerging technologies.',
      type: 'education',
      icon: <FaGraduationCap />,
      status: 'completed'
    },
    {
      year: '2021',
      title: 'Higher Secondary Completion',
      subtitle: 'Jawaharlal Nehru School - 82%',
      description: 'Completed higher secondary education with excellent academic performance, setting foundation for engineering studies.',
      type: 'education',
      icon: <FaGraduationCap />,
      status: 'completed'
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'education':
        return '#4299e1';
      case 'work':
        return '#48bb78';
      case 'certification':
        return '#ed8936';
      case 'achievement':
        return '#9f7aea';
      default:
        return '#718096';
    }
  };

  const getStatusClass = (status) => {
    return status === 'future' ? 'timeline-item future' : 'timeline-item';
  };

  return (
    <div className="timeline-section">
      <div className="timeline-container">
        <div className="timeline-header">
          <h2>My Journey</h2>
          <p>A timeline of my educational background, professional experience, and key achievements</p>
        </div>

        <div className="timeline">
          <div className="timeline-line"></div>
          
          {timelineData.map((item, index) => (
            <div key={index} className={getStatusClass(item.status)}>
              <div className="timeline-marker" style={{ backgroundColor: getTypeColor(item.type) }}>
                <div className="timeline-icon">
                  {item.icon}
                </div>
              </div>
              
              <div className="timeline-content">
                <div className="timeline-card">
                  <div className="timeline-header-card">
                    <span className="timeline-year">{item.year}</span>
                    <span className={`timeline-type ${item.type}`}>{item.type}</span>
                  </div>
                  
                  <h3 className="timeline-title">{item.title}</h3>
                  <h4 className="timeline-subtitle">{item.subtitle}</h4>
                  <p className="timeline-description">{item.description}</p>
                  
                  {item.status === 'future' && (
                    <div className="future-badge">
                      <span>Upcoming</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="timeline-stats">
          <div className="stat-card">
            <h3>4+</h3>
            <p>Years in Tech</p>
          </div>
          <div className="stat-card">
            <h3>6+</h3>
            <p>Certifications</p>
          </div>
          <div className="stat-card">
            <h3>2</h3>
            <p>Internships</p>
          </div>
          <div className="stat-card">
            <h3>7.9/10</h3>
            <p>Current GPA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;