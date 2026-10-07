import React, { useState } from 'react';

export default function Contact({ setPage }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Message Submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div style={pageWrapperStyle}>
      
      {/* Banner / Header */}
      <section className="glass-panel" style={bannerSectionStyle}>
        <div className="container" style={bannerContainerStyle}>
          <div style={breadcrumbsStyle}>
            <span onClick={() => { setPage('home'); window.scrollTo(0, 0); }} style={breadcrumbLinkStyle}>Home</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}> &gt; </span>
            <span style={{ color: 'var(--color-gold-light)', fontWeight: '600' }}>Contact Us</span>
          </div>
          <h1 style={bannerTitleStyle}>Contact Us</h1>
          <p style={bannerSubtitleStyle}>
            Reach out to us for any assistance, requests, or regulatory files inquiries.
          </p>
        </div>
      </section>

      {/* Info & Form Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container" style={contactGridStyle}>
          
          {/* Contact Details */}
          <div style={detailsColStyle}>
            <h6 style={preTitleStyle}>GET IN TOUCH</h6>
            <h2 style={sectionTitleStyle}>We're Here to Assist You</h2>
            <p style={textStyle}>
              Have questions about our APIs, cosmetic compounds, validation status, or R&D capabilities? Get in touch with our team of experts.
            </p>

            <div style={infoListStyle}>
              <div className="glass-card" style={infoCardStyle}>
                <span style={infoIconStyle}>📞</span>
                <div>
                  <h4 style={infoTitleStyle}>Call Us</h4>
                  <a href="tel:+919619854049" style={infoLinkStyle}>+91-961-9854-049</a>
                </div>
              </div>

              <div className="glass-card" style={infoCardStyle}>
                <span style={infoIconStyle}>✉️</span>
                <div>
                  <h4 style={infoTitleStyle}>Email Us</h4>
                  <a href="mailto:info@airachemindia.com" style={infoLinkStyle}>info@airachemindia.com</a>
                </div>
              </div>

              <div className="glass-card" style={infoCardStyle}>
                <span style={infoIconStyle}>📍</span>
                <div>
                  <h4 style={infoTitleStyle}>Manufacturing Site</h4>
                  <p style={infoAddressStyle}>
                    AiraChem India Laboratories Pvt. Ltd.<br />
                    Plot no – D62, CDSCO/MIDC, Village Birwadi, District Raigad, Mahad, Maharashtra – 402302
                  </p>
                </div>
              </div>

              <div className="glass-card" style={infoCardStyle}>
                <span style={infoIconStyle}>⏰</span>
                <div>
                  <h4 style={infoTitleStyle}>Business Hours</h4>
                  <p style={infoHoursStyle}>
                    Monday to Saturday: 9:00 AM – 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="glass-panel" style={formCardStyle}>
            {isSubmitted ? (
              <div style={successMessageStyle}>
                <div style={successIconStyle}>✓</div>
                <h2 style={{ color: 'var(--color-teal)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Message Sent!</h2>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
                  Thank you for contacting us. We have received your query and will reply shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={formStyle}>
                <h3 style={formTitleStyle}>Send a Message</h3>
                
                <div style={formRowStyle}>
                  <div style={{ flex: 1 }}>
                    <label style={labelStyle}>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Name"
                      className="input-field"
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={labelStyle}>Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company"
                      className="input-field"
                    />
                  </div>
                </div>

                <div style={{ ...formRowStyle, marginTop: '1rem' }}>
                  <div style={{ flex: 1 }}>
                    <label style={labelStyle}>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Phone"
                      className="input-field"
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={labelStyle}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email"
                      className="input-field"
                    />
                  </div>
                </div>

                <div style={{ marginTop: '1rem' }}>
                  <label style={labelStyle}>Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject"
                    className="input-field"
                  />
                </div>

                <div style={{ marginTop: '1rem' }}>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Write your message here..."
                    className="input-field"
                    style={{ resize: 'none' }}
                  ></textarea>
                </div>

                <button type="submit" className="glow-btn-gold" style={submitBtnStyle}>
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Map Embed Section */}
      <section style={mapSectionStyle}>
        <iframe 
          title="AiraChem India Site Map"
          src="https://maps.google.com/maps?q=Plot%20no%20%E2%80%93%20D62%2C%20MIDC%2C%20Village%20Birwadi%2C%20District%20Raigad%2C%20Mahad%2C%20Maharastra%20%E2%80%93%20402302&t=m&z=14&output=embed&iwloc=near"
          style={mapIframeStyle}
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </section>

    </div>
  );
}

// Styling definitions
const pageWrapperStyle = {
  width: '100%'
};

const bannerSectionStyle = {
  padding: '5rem 0',
  background: 'linear-gradient(135deg, var(--color-teal) 0%, var(--color-teal-light) 100%)',
  borderBottom: '1px solid var(--glass-border)'
};

const bannerContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center'
};

const breadcrumbsStyle = {
  fontSize: '0.85rem',
  marginBottom: '1rem'
};

const breadcrumbLinkStyle = {
  color: 'rgba(255, 255, 255, 0.7)',
  cursor: 'pointer',
  fontWeight: '500',
  transition: 'var(--transition-smooth)'
};

const bannerTitleStyle = {
  fontSize: '3rem',
  color: 'white',
  fontFamily: 'var(--font-heading)',
  marginBottom: '0.5rem'
};

const bannerSubtitleStyle = {
  fontSize: '1.1rem',
  color: 'rgba(255, 255, 255, 0.8)',
  maxWidth: '600px',
  lineHeight: '1.5'
};

const contactGridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1.1fr',
  gap: '4rem',
  alignItems: 'flex-start'
};

const detailsColStyle = {
  display: 'flex',
  flexDirection: 'column'
};

const preTitleStyle = {
  fontSize: '0.85rem',
  color: 'var(--color-gold)',
  fontWeight: '600',
  letterSpacing: '0.15em',
  marginBottom: '0.75rem'
};

const sectionTitleStyle = {
  fontSize: '2.5rem',
  color: 'var(--color-teal)',
  fontFamily: 'var(--font-heading)',
  marginBottom: '1.5rem',
  lineHeight: '1.2'
};

const textStyle = {
  color: 'var(--color-text-muted)',
  fontSize: '0.975rem',
  lineHeight: '1.6',
  marginBottom: '2.5rem'
};

const infoListStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem'
};

const infoCardStyle = {
  display: 'flex',
  gap: '1.5rem',
  padding: '1.5rem',
  borderRadius: 'var(--radius-md)',
  alignItems: 'flex-start',
  backgroundColor: '#ffffff',
  border: '1px solid rgba(6, 57, 76, 0.08)',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)'
};

const infoIconStyle = {
  fontSize: '1.75rem',
  backgroundColor: 'rgba(6, 57, 76, 0.04)',
  padding: '0.5rem',
  borderRadius: 'var(--radius-sm)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid rgba(6, 57, 76, 0.08)'
};

const infoTitleStyle = {
  color: 'var(--color-teal)',
  fontSize: '1.05rem',
  fontFamily: 'var(--font-heading)',
  marginBottom: '0.35rem',
  fontWeight: '600'
};

const infoLinkStyle = {
  color: 'var(--color-gold)',
  fontSize: '0.95rem',
  fontWeight: '500',
  textDecoration: 'underline'
};

const infoAddressStyle = {
  color: 'var(--color-text-muted)',
  fontSize: '0.9rem',
  lineHeight: '1.5'
};

const infoHoursStyle = {
  color: 'var(--color-text-muted)',
  fontSize: '0.9rem',
  lineHeight: '1.5'
};

const formCardStyle = {
  borderRadius: 'var(--radius-lg)',
  padding: '2.5rem',
  border: '1px solid rgba(6, 57, 76, 0.1)',
  boxShadow: '0 20px 45px rgba(15, 23, 42, 0.08)',
  backgroundColor: '#ffffff'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column'
};

const formTitleStyle = {
  color: 'var(--color-teal)',
  fontSize: '1.5rem',
  fontFamily: 'var(--font-heading)',
  marginBottom: '1.5rem',
  fontWeight: '600'
};

const formRowStyle = {
  display: 'flex',
  gap: '1rem'
};

const labelStyle = {
  display: 'block',
  fontSize: '0.85rem',
  fontWeight: '500',
  color: 'var(--color-text-muted)',
  marginBottom: '0.5rem'
};

const submitBtnStyle = {
  marginTop: '1.5rem',
  padding: '0.9rem',
  borderRadius: 'var(--radius-sm)',
  fontSize: '1rem',
  fontWeight: '600',
  cursor: 'pointer'
};

const mapSectionStyle = {
  width: '100%',
  height: '400px',
  borderTop: '1px solid var(--glass-border)'
};

const mapIframeStyle = {
  width: '100%',
  height: '100%',
  border: 'none',
  filter: 'grayscale(10%) contrast(90%)'
};

const successMessageStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4rem 1.5rem',
  textAlign: 'center',
  animation: 'slideUp 0.5s ease-out'
};

const successIconStyle = {
  width: '70px',
  height: '70px',
  borderRadius: '50%',
  backgroundColor: 'rgba(177, 138, 54, 0.1)',
  border: '2px solid var(--color-gold)',
  color: 'var(--color-gold)',
  fontSize: '2.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '1.5rem',
  boxShadow: '0 0 20px rgba(177, 138, 54, 0.15)'
};

// CSS media query style append
const addContactMediaStyles = () => {
  const styleId = 'contact-media-queries';
  if (document.getElementById(styleId)) return;
  const sheet = document.createElement('style');
  sheet.id = styleId;
  sheet.innerHTML = `
    @media (max-width: 900px) {
      div[style*="contactGridStyle"] {
        grid-template-columns: 1fr !important;
        gap: 3.5rem !important;
      }
    }
    @media (max-width: 600px) {
      div[style*="formRowStyle"] {
        flex-direction: column !important;
        gap: 1rem !important;
      }
    }
  `;
  document.head.appendChild(sheet);
};

if (typeof window !== 'undefined') {
  addContactMediaStyles();
}
