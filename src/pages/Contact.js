import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'Ankitchoudhary7100@gmail.com',
      link: 'mailto:Ankitchoudhary7100@gmail.com',
      color: '#EA4335'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 7987241082',
      link: 'tel:+917987241082',
      color: '#34A853'
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'ankit-choudhary-aanku',
      link: 'https://linkedin.com/in/ankit-choudhary-aanku',
      color: '#0A66C2'
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: 'NextAI-Gen',
      link: 'https://github.com/NextAI-Gen',
      color: '#333'
    }
  ];

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p className="contact-intro">
            I'm always open to discussing new opportunities, collaborations, or just having a chat 
            about technology and innovation. Feel free to reach out!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Let's Connect</h2>
            <p>
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'd love to hear from you. Here are the best ways to reach me:
            </p>
            
            <div className="contact-methods">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.link}
                  className="contact-method"
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div 
                    className="contact-icon" 
                    style={{ backgroundColor: `${info.color}15`, color: info.color }}
                  >
                    {info.icon}
                  </div>
                  <div className="contact-details">
                    <h3>{info.title}</h3>
                    <p>{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="availability">
              <h3>🗓️ Availability</h3>
              <p>I'm currently available for:</p>
              <ul>
                <li>Full-time opportunities</li>
                <li>Internships</li>
                <li>Freelance projects</li>
                <li>Open source collaboration</li>
              </ul>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Send Me a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project, idea, or just say hi!"
                />
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  ✅ Thank you! Your message has been sent successfully. I'll get back to you soon!
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="response-time">
          <div className="response-card">
            <h3>📬 Response Time</h3>
            <p>
              I typically respond within <strong>24-48 hours</strong>. If you have an urgent 
              matter, feel free to call me directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
