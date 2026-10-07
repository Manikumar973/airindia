import React from 'react';

export default function Ehs({ setPage }) {
  const pillars = [
    {
      title: 'Primary Responsibility',
      desc: 'Our primary responsibility is towards society and the environment. We prioritize Health, Safety, and Environmental protection in all our business activities. We do not allow economical considerations to override Environment, Health, and Safety parameters.',
      icon: '🌍'
    },
    {
      title: 'Compliance & Standards',
      desc: 'We are committed to comply with all relevant legislation, government directives, and global industries\' best standards concerning health safety, effluent treatments, and environmental conservation.',
      icon: '🛡️'
    },
    {
      title: 'Roles and Responsibilities',
      desc: 'We define the clear roles of each employee to adopt established EHS management guidelines. We proactively identify Near Miss incidents and investigate workplace/environmental deviations to rectify conditions and minimize operational risks.',
      icon: '⚙️'
    },
    {
      title: 'Safety Awareness & Training',
      desc: 'We promote awareness of Health, Safety, and Environment Sustainability by enhancing the skills of our workforce through regular training. We assess Process Safety Hazards and control risks using advanced technical and organizational measures.',
      icon: '🔬'
    },
    {
      title: 'Transparent Communication',
      desc: 'We enhance transparency with contract employees, suppliers, and stakeholders to encourage compliance. We proactively collaborate with neighboring communities through Mutual Aid Response Group (MARG) exercises to achieve social trust.',
      icon: '🗣️'
    }
  ];

  return (
    <div style={pageWrapperStyle}>
      
      {/* Banner / Header */}
      <section className="glass-panel" style={bannerSectionStyle}>
        <div className="container" style={bannerContainerStyle}>
          <div style={breadcrumbsStyle}>
            <span onClick={() => { setPage('home'); window.scrollTo(0, 0); }} style={breadcrumbLinkStyle}>Home</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}> &gt; </span>
            <span style={{ color: 'var(--color-gold-light)', fontWeight: '600' }}>EHS/CSR</span>
          </div>
          <h1 style={bannerTitleStyle}>EHS Policy</h1>
          <p style={bannerSubtitleStyle}>
            Environment (E), Health (H), Safety (S), and Corporate Social Responsibility (CSR)
          </p>
        </div>
      </section>

      {/* Main Philosophy statement */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container" style={philosophyGridStyle}>
          <div style={philosophyContentStyle}>
            <h6 style={preTitleStyle}>ENVIRONMENT, HEALTH & SAFETY</h6>
            <h2 style={sectionTitleStyle}>Creating a Safer and Sustainable Future Together</h2>
            <p style={textStyle}>
              AiraChem India Laboratories Pvt Ltd as a manufacturer of wide range of APIs and other raw materials for Human and Veterinary applications aims to be a leader in Environment (E), Health (H) and Safety (S) aspects. We are committed to achieve sustainable growth by fulfilling the environment, health and safety demands of society.
            </p>
            <p style={textStyle}>
              We recognize our responsibility towards the health and safety of our workforce as well as other beings surrounding us. Economic considerations do not override safety in our facility; we manage our footprint to support sustainability.
            </p>
          </div>
          
          <div style={philosophyVisualContainerStyle}>
            {/* Visual CSS-based circular pulse icon */}
            <div className="glass-card" style={safetyShieldBadgeStyle}>
              <div style={shieldRingStyle1}></div>
              <div style={shieldRingStyle2}></div>
              <span style={shieldTextStyle}>EHS Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid rgba(255, 255, 255, 0.03)' }}>
        <div className="container">
          <h6 style={preTitleCenteredStyle}>EHS PROTOCOLS</h6>
          <h2 className="section-title">Our Commitments</h2>
          <p className="section-subtitle">
            Our operational framework contains 5 fundamental commitments that drive our process engineering and daily compliance.
          </p>

          <div style={pillarsListStyle}>
            {pillars.map((p, idx) => (
              <div key={idx} className="glass-card animate-slide-up" style={pillarRowStyle}>
                <div style={pillarIconBoxStyle}>{p.icon}</div>
                <div style={pillarContentStyle}>
                  <h3 style={pillarTitleStyle}>{p.title}</h3>
                  <p style={pillarDescStyle}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
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

const philosophyGridStyle = {
  display: 'grid',
  gridTemplateColumns: '1.2fr 1fr',
  gap: '4rem',
  alignItems: 'center'
};

const philosophyContentStyle = {
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

const preTitleCenteredStyle = {
  ...preTitleStyle,
  textAlign: 'center'
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
  marginBottom: '1.25rem'
};

const philosophyVisualContainerStyle = {
  display: 'flex',
  justifyContent: 'center'
};

const safetyShieldBadgeStyle = {
  position: 'relative',
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  border: '2px solid var(--color-gold)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  boxShadow: '0 8px 30px var(--color-gold-glow)',
  overflow: 'hidden'
};

const shieldRingStyle1 = {
  position: 'absolute',
  top: '15px',
  left: '15px',
  right: '15px',
  bottom: '15px',
  borderRadius: '50%',
  border: '1px dashed rgba(6, 57, 76, 0.15)',
  animation: 'spin-slow 30s linear infinite'
};

const shieldRingStyle2 = {
  position: 'absolute',
  top: '30px',
  left: '30px',
  right: '30px',
  bottom: '30px',
  borderRadius: '50%',
  border: '2px solid rgba(177, 138, 54, 0.2)',
  background: 'rgba(255, 255, 255, 0.01)'
};

const shieldTextStyle = {
  color: 'var(--color-teal)',
  fontWeight: '700',
  fontSize: '1rem',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  zIndex: 5
};

const pillarsListStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  maxWidth: '900px',
  margin: '0 auto'
};

const pillarRowStyle = {
  padding: '2rem',
  borderRadius: 'var(--radius-md)',
  display: 'flex',
  gap: '2rem',
  alignItems: 'flex-start',
  border: '1px solid rgba(6, 57, 76, 0.08)',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)',
  background: '#ffffff'
};

const pillarIconBoxStyle = {
  fontSize: '2rem',
  backgroundColor: 'rgba(6, 57, 76, 0.04)',
  padding: '0.75rem',
  borderRadius: 'var(--radius-sm)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid rgba(6, 57, 76, 0.08)'
};

const pillarContentStyle = {
  display: 'flex',
  flexDirection: 'column'
};

const pillarTitleStyle = {
  color: 'var(--color-teal)',
  fontSize: '1.25rem',
  fontFamily: 'var(--font-heading)',
  marginBottom: '0.5rem',
  fontWeight: '600'
};

const pillarDescStyle = {
  color: 'var(--color-text-muted)',
  fontSize: '0.925rem',
  lineHeight: '1.6'
};

// CSS media query style append
const addEhsMediaStyles = () => {
  const styleId = 'ehs-media-queries';
  if (document.getElementById(styleId)) return;
  const sheet = document.createElement('style');
  sheet.id = styleId;
  sheet.innerHTML = `
    @media (max-width: 900px) {
      div[style*="philosophyGridStyle"] {
        grid-template-columns: 1fr !important;
        gap: 3rem !important;
      }
      div[style*="pillarRowStyle"] {
        flex-direction: column !important;
        gap: 1rem !important;
        align-items: flex-start !important;
      }
    }
  `;
  document.head.appendChild(sheet);
};

if (typeof window !== 'undefined') {
  addEhsMediaStyles();
}
