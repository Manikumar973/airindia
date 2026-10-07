import React from 'react';

export default function About({ setPage }) {
  const values = [
    { title: 'Professional Experts', desc: 'Led by industry veterans with an average R&D experience of 20+ years.' },
    { title: 'Certified Technicians', desc: 'GMP-certified operations matching strict regulatory protocols.' },
    { title: 'Top Quality Materials', desc: 'Pure compounds, APIs, and excipients manufactured under strict guidelines.' },
    { title: 'Premium Support', desc: 'Offering comprehensive documentation, validations, and DMF files.' }
  ];

  return (
    <div style={pageWrapperStyle}>
      
      {/* Banner / Header */}
      <section className="glass-panel" style={bannerSectionStyle}>
        <div className="container" style={bannerContainerStyle}>
          <div style={breadcrumbsStyle}>
            <span onClick={() => { setPage('home'); window.scrollTo(0, 0); }} style={breadcrumbLinkStyle}>Home</span>
            <span style={{ color: 'var(--color-text-muted)', opacity: 0.5 }}> &gt; </span>
            <span style={{ color: 'var(--color-gold)', fontWeight: '600' }}>About Us</span>
          </div>
          <h1 style={bannerTitleStyle}>About Us</h1>
          <p style={bannerSubtitleStyle}>
            Trusted partner for innovative and quality pharmaceutical and chemical solutions.
          </p>
        </div>
      </section>

      {/* Corporate Description & Video Placeholder */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container" style={corporateGridStyle}>
          
          <div style={corporateContentStyle}>
            <h6 style={preTitleStyle}>CORPORATE OVERVIEW</h6>
            <h2 style={sectionTitleStyle}>Committed to Excellence</h2>
            <p style={textStyle}>
              AiraChem India Laboratories Pvt. Ltd. specializes in the development and manufacturing of a wide range of Active Pharmaceutical Ingredients (APIs), bulk drug intermediates, and fine chemical raw materials. We specialize in creating innovative chemical synthesis pathways, optimizing product efficiency, and scaling production through advanced process R&D expertise.
            </p>
            <p style={textStyle}>
              Our leadership is composed of industry technocrats who hold a combined experience of over 45 years in the global generic pharmaceutical industry. This rich background powers our capability to supply regulated and developing international markets.
            </p>
            <p style={textStyle}>
              We are dedicated to advancing pharmaceutical manufacturing with a state-of-the-art facility located in India, maintaining a strong commitment to environment safety, clinical purity, affordability, and regulatory compliance at every step.
            </p>
          </div>

          <div style={visualContainerStyle}>
            <div className="glass-card" style={photoPlaceholderStyle}>
              {/* Graphic Molecule Pattern */}
              <div style={moleculeGraphicWrapperStyle}>
                <div className="animate-spin-slow" style={moleculeGraphicStyle}></div>
              </div>
              {/* Experience Badge overlay */}
              <div style={expBadgeStyle}>
                <span style={expNumStyle}>45+</span>
                <span style={expTitleStyle}>Years Experience</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Values Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <h6 style={preTitleCenteredStyle}>OUR CORE STRENGTHS</h6>
          <h2 className="section-title">Driving Excellence</h2>
          <p className="section-subtitle">
            We follow strict operational protocols to ensure our chemical processes are sustainable, efficient, and of the highest purity grade.
          </p>

          <div className="grid-cols-4" style={{ gap: '1.5rem' }}>
            {values.map((val, idx) => (
              <div key={idx} className="glass-card" style={valueCardStyle}>
                <div style={valueIconBoxStyle}>
                  <span style={{ fontSize: '1.5rem', color: 'var(--color-gold)' }}>✓</span>
                </div>
                <h3 style={valueCardTitleStyle}>{val.title}</h3>
                <p style={valueCardDescStyle}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container" style={missionVisionGridStyle}>
          
          <div className="glass-card" style={mvCardStyle}>
            <div style={mvIconStyle}>
              {/* Vision SVG */}
              <svg fill="none" stroke="var(--color-teal-light)" strokeWidth="2" viewBox="0 0 24 24" width="40" height="40">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
              </svg>
            </div>
            <h3 style={mvTitleStyle}>Our Vision</h3>
            <p style={mvDescStyle}>
              To establish ourselves as a high-quality and customer-centric manufacturer of bulk drugs, APIs, supplements and fine chemicals, following innovation, the latest technologies, and regulatory compliance, thereby providing competitive products and services to the global pharmaceutical industry.
            </p>
          </div>

          <div className="glass-card" style={mvCardStyle}>
            <div style={mvIconStyle}>
              {/* Mission SVG */}
              <svg fill="none" stroke="var(--color-gold)" strokeWidth="2" viewBox="0 0 24 24" width="40" height="40">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 style={mvTitleStyle}>Our Mission</h3>
            <p style={mvDescStyle}>
              To provide the highest levels of customer services through technical excellence, high-quality standards, timely regulatory compliance, and process safety hazard assessment for all operational levels.
            </p>
          </div>

        </div>
      </section>

      {/* Statistics Teaser Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container" style={statsRowStyle}>
          <div style={statBoxStyle}>
            <span style={statBoxNumStyle}>110 KL</span>
            <span style={statBoxTitleStyle}>Installed Reactor Volume</span>
          </div>
          <div style={statBoxStyle}>
            <span style={statBoxNumStyle}>Zero</span>
            <span style={statBoxTitleStyle}>Liquid Discharge Policy</span>
          </div>
          <div style={statBoxStyle}>
            <span style={statBoxNumStyle}>3 Blocks</span>
            <span style={statBoxTitleStyle}>New Dedicated Production Suites</span>
          </div>
          <div style={statBoxStyle}>
            <span style={statBoxNumStyle}>WHO-GMP</span>
            <span style={statBoxTitleStyle}>Facility Accreditation</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={ctaSectionStyle}>
        <div style={ctaOverlayStyle}></div>
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <h2 style={ctaTitleStyle}>Partner with Us Today</h2>
          <p style={ctaDescStyle}>
            Discover innovative chemical processes, regulatory compliance support, and uncompromised quality tailored to your business metrics. Let's shape a better future together.
          </p>
          <button onClick={() => { setPage('contact'); window.scrollTo(0, 0); }} className="glow-btn-gold" style={ctaBtnStyle}>
            Contact Our Team
          </button>
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

const corporateGridStyle = {
  display: 'grid',
  gridTemplateColumns: '1.2fr 1fr',
  gap: '4rem',
  alignItems: 'center'
};

const corporateContentStyle = {
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

const visualContainerStyle = {
  display: 'flex',
  justifyContent: 'center'
};

const photoPlaceholderStyle = {
  position: 'relative',
  width: '100%',
  maxWidth: '420px',
  height: '380px',
  borderRadius: 'var(--radius-lg)',
  background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)',
  border: '1px solid rgba(6, 57, 76, 0.08)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.02)'
};

const moleculeGraphicWrapperStyle = {
  position: 'relative',
  width: '200px',
  height: '200px'
};

const moleculeGraphicStyle = {
  width: '100%',
  height: '100%',
  border: '2px dashed var(--color-gold-glow)',
  borderRadius: '50%',
  position: 'relative',
  boxShadow: '0 0 30px rgba(177, 138, 54, 0.05)'
};

const expBadgeStyle = {
  position: 'absolute',
  bottom: '1.5rem',
  right: '-1.5rem',
  padding: '1.25rem 1.5rem',
  borderRadius: 'var(--radius-md)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: 'linear-gradient(135deg, var(--color-gold-light) 0%, var(--color-gold) 100%)',
  border: 'none',
  boxShadow: '0 10px 30px var(--color-gold-glow)'
};

const expNumStyle = {
  fontSize: '2.5rem',
  fontWeight: '800',
  color: 'white',
  fontFamily: 'var(--font-heading)',
  lineHeight: '1'
};

const expTitleStyle = {
  fontSize: '0.75rem',
  fontWeight: '600',
  color: 'white',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  marginTop: '0.25rem',
  textAlign: 'center'
};

const valueCardStyle = {
  padding: '2rem',
  borderRadius: 'var(--radius-md)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  height: '100%',
  border: '1px solid rgba(6, 57, 76, 0.08)',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)'
};

const valueIconBoxStyle = {
  width: '45px',
  height: '45px',
  borderRadius: 'var(--radius-sm)',
  backgroundColor: 'rgba(177, 138, 54, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '1.25rem'
};

const valueCardTitleStyle = {
  color: 'var(--color-teal)',
  fontSize: '1.2rem',
  fontFamily: 'var(--font-heading)',
  marginBottom: '0.75rem',
  fontWeight: '600'
};

const valueCardDescStyle = {
  color: 'var(--color-text-muted)',
  fontSize: '0.85rem',
  lineHeight: '1.5'
};

const missionVisionGridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '3rem'
};

const mvCardStyle = {
  padding: '3rem 2.5rem',
  borderRadius: 'var(--radius-lg)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  height: '100%',
  border: '1px solid rgba(6, 57, 76, 0.08)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
};

const mvIconStyle = {
  marginBottom: '1.5rem',
  filter: 'drop-shadow(0 0 10px rgba(177, 138, 54, 0.05))'
};

const mvTitleStyle = {
  color: 'var(--color-teal)',
  fontSize: '1.75rem',
  fontFamily: 'var(--font-heading)',
  marginBottom: '1rem',
  fontWeight: '700'
};

const mvDescStyle = {
  color: 'var(--color-text-muted)',
  fontSize: '0.95rem',
  lineHeight: '1.6'
};

const statsRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '2rem',
  flexWrap: 'wrap'
};

const statBoxStyle = {
  flex: '1 1 200px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center'
};

const statBoxNumStyle = {
  fontSize: '2.25rem',
  fontWeight: '800',
  color: 'var(--color-teal-light)',
  fontFamily: 'var(--font-heading)',
  marginBottom: '0.5rem'
};

const statBoxTitleStyle = {
  color: 'var(--color-text-muted)',
  fontSize: '0.85rem',
  fontWeight: '500',
  textTransform: 'uppercase',
  letterSpacing: '0.05em'
};

const ctaSectionStyle = {
  position: 'relative',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, var(--color-teal) 0%, var(--color-teal-light) 100%)'
};

const ctaOverlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'radial-gradient(circle at center, rgba(177, 138, 54, 0.1) 0%, transparent 60%)',
  pointerEvents: 'none'
};

const ctaTitleStyle = {
  fontSize: '2.5rem',
  color: 'white',
  fontFamily: 'var(--font-heading)',
  marginBottom: '1rem'
};

const ctaDescStyle = {
  color: 'rgba(255, 255, 255, 0.8)',
  maxWidth: '700px',
  margin: '0 auto 2.5rem auto',
  lineHeight: '1.6',
  fontSize: '1.05rem'
};

const ctaBtnStyle = {
  padding: '0.9rem 2.25rem',
  borderRadius: 'var(--radius-sm)',
  fontSize: '1rem',
  cursor: 'pointer'
};

// CSS media query style append
const addAboutMediaStyles = () => {
  const styleId = 'about-media-queries';
  if (document.getElementById(styleId)) return;
  const sheet = document.createElement('style');
  sheet.id = styleId;
  sheet.innerHTML = `
    @media (max-width: 1024px) {
      div[style*="corporateGridStyle"] {
        grid-template-columns: 1fr !important;
        gap: 3rem !important;
      }
      div[style*="missionVisionGridStyle"] {
        grid-template-columns: 1fr !important;
        gap: 2.5rem !important;
      }
      div[style*="expBadgeStyle"] {
        right: 0px !important;
      }
    }
  `;
  document.head.appendChild(sheet);
};

if (typeof window !== 'undefined') {
  addAboutMediaStyles();
}
