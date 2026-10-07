import React, { useState } from 'react';

export default function EnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    productInterest: 'Commercial Products',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    console.log('Enquiry Submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        productInterest: 'Commercial Products',
        subject: '',
        message: ''
      });
      onClose();
    }, 2500);
  };

  return (
    <div style={modalOverlayStyle}>
      <div className="glass-panel" style={modalContentStyle}>
        <button onClick={onClose} style={closeBtnStyle} aria-label="Close modal">×</button>
        
        {isSubmitted ? (
          <div style={successMessageStyle}>
            <div style={successIconStyle}>✓</div>
            <h2 style={{ color: 'var(--color-teal)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Thank You!</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>Your enquiry has been received successfully. Our team will get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={formStyle}>
            <h2 style={{ color: 'var(--color-teal)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
              Enquire Now
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Please fill out the form below to enquire about our products and services.
            </p>
            
            <div style={formGridStyle}>
              <div>
                <label style={labelStyle}>Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="input-field"
                />
              </div>
              
              <div>
                <label style={labelStyle}>Company Name</label>
                <input 
                  type="text" 
                  name="company" 
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="input-field"
                />
              </div>
              
              <div>
                <label style={labelStyle}>Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Your Phone Number"
                  className="input-field"
                />
              </div>
              
              <div>
                <label style={labelStyle}>Email Address *</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="input-field"
                />
              </div>
            </div>
 
            <div style={{ marginTop: '1rem' }}>
              <label style={labelStyle}>Product Category of Interest</label>
              <select 
                name="productInterest" 
                value={formData.productInterest}
                onChange={handleChange}
                className="input-field"
                style={{ appearance: 'none', background: '#ffffff url("data:image/svg+xml;utf8,<svg fill=\'%230f172a\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/><path d=\'M0 0h24v24H0z\' fill=\'none\'/></svg>") no-repeat 97% center' }}
              >
                <option value="Commercial Products" style={optionStyle}>Commercial Products (APIs/Supplements)</option>
                <option value="Commercial Cosmetics" style={optionStyle}>Commercial Cosmetics</option>
                <option value="Under Validation" style={optionStyle}>Products Under Validation</option>
                <option value="Under Development" style={optionStyle}>Products Under Development</option>
              </select>
            </div>
 
            <div style={{ marginTop: '1rem' }}>
              <label style={labelStyle}>Subject *</label>
              <input 
                type="text" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Enquiry Subject"
                className="input-field"
              />
            </div>
 
            <div style={{ marginTop: '1rem' }}>
              <label style={labelStyle}>Message</label>
              <textarea 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Write your message here..."
                className="input-field"
                style={{ resize: 'none' }}
              ></textarea>
            </div>
 
            <button type="submit" className="glow-btn-gold" style={submitBtnStyle}>
              Submit Enquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

// Inline Styles for overlay and popups
const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(15, 23, 42, 0.45)',
  backdropFilter: 'blur(8px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  animation: 'fadeIn 0.3s ease-out forwards',
  padding: '1.5rem'
};

const modalContentStyle = {
  position: 'relative',
  width: '100%',
  maxWidth: '650px',
  borderRadius: 'var(--radius-lg)',
  padding: '2.5rem',
  background: '#ffffff',
  border: '1px solid rgba(6, 57, 76, 0.1)',
  boxShadow: '0 25px 60px rgba(15, 23, 42, 0.12)',
  maxHeight: '90vh',
  overflowY: 'auto'
};

const closeBtnStyle = {
  position: 'absolute',
  top: '1.25rem',
  right: '1.5rem',
  background: 'none',
  border: 'none',
  color: 'var(--color-text-muted)',
  fontSize: '2rem',
  cursor: 'pointer',
  transition: 'var(--transition-smooth)',
  zIndex: 10
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column'
};

const formGridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1rem'
};

const labelStyle = {
  display: 'block',
  fontSize: '0.85rem',
  fontWeight: '500',
  color: 'var(--color-text-muted)',
  marginBottom: '0.5rem'
};

const optionStyle = {
  backgroundColor: '#ffffff',
  color: '#0f172a'
};

const submitBtnStyle = {
  marginTop: '1.5rem',
  padding: '0.85rem',
  borderRadius: 'var(--radius-sm)',
  fontSize: '1rem',
  width: '100%'
};

const successMessageStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '3rem 1.5rem',
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
