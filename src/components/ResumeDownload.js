import React from 'react';
import { FaDownload, FaFilePdf, FaEye } from 'react-icons/fa';
import './ResumeDownload.css';

const ResumeDownload = () => {
  const handleDownload = () => {
    // Download the actual resume file
    const link = document.createElement('a');
    link.href = '/Ankit_Choudhary_Resume.pdf.pdf'; // Your actual resume file
    link.download = 'Ankit_Choudhary_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    // Open resume in a new tab for viewing
    window.open('/Ankit_Choudhary_Resume.pdf.pdf', '_blank'); // Your actual resume file
  };

  return (
    <div className="resume-section">
      <div className="resume-container">
        <div className="resume-content">
          <div className="resume-info">
            <h2>📄 My Resume</h2>
            <p>
              Download my complete resume to see my detailed educational background, 
              professional experience, technical skills, and project portfolio.
            </p>
            
            <div className="resume-highlights">
              <div className="highlight-item">
                <span className="highlight-number">7.9/10</span>
                <span className="highlight-text">Current GPA</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">6+</span>
                <span className="highlight-text">Certifications</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">2</span>
                <span className="highlight-text">Internships</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">5+</span>
                <span className="highlight-text">Projects</span>
              </div>
            </div>

            <div className="resume-actions">
              <button onClick={handleDownload} className="resume-btn primary">
                <FaDownload />
                <span>Download PDF</span>
              </button>
              <button onClick={handleView} className="resume-btn secondary">
                <FaEye />
                <span>View Online</span>
              </button>
            </div>
          </div>

          <div className="resume-preview">
            <div className="pdf-preview">
              <div className="pdf-header">
                <FaFilePdf className="pdf-icon" />
                <div className="pdf-info">
                  <h3>Ankit_Choudhary_Resume.pdf</h3>
                  <p>Last updated: January 2025</p>
                </div>
              </div>
              
              <div className="pdf-content">
                <div className="resume-section-preview">
                  <h4>Professional Summary</h4>
                  <div className="content-lines">
                    <div className="line"></div>
                    <div className="line short"></div>
                    <div className="line"></div>
                  </div>
                </div>
                
                <div className="resume-section-preview">
                  <h4>Education</h4>
                  <div className="content-lines">
                    <div className="line"></div>
                    <div className="line short"></div>
                  </div>
                </div>
                
                <div className="resume-section-preview">
                  <h4>Experience</h4>
                  <div className="content-lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line short"></div>
                  </div>
                </div>
                
                <div className="resume-section-preview">
                  <h4>Skills</h4>
                  <div className="content-lines">
                    <div className="line short"></div>
                    <div className="line"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="download-stats">
          <div className="stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Downloads</span>
          </div>
          <div className="stat">
            <span className="stat-number">95%</span>
            <span className="stat-label">Response Rate</span>
          </div>
          <div className="stat">
            <span className="stat-number">24h</span>
            <span className="stat-label">Avg Response Time</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeDownload;