import React from 'react';

export default function Home({ setPage, onOpenEnquiry }) {
  const capabilities = [
    {
      num: '01.',
      title: 'R&D',
      desc: 'Advanced labs for process and analytical method development, driven by an experienced team of scientists.'
    },
    {
      num: '02.',
      title: 'Manufacturing',
      desc: 'Equipped with world-class, GMP-compliant API and bulk drug manufacturing reactors and suites.'
    },
    {
      num: '03.',
      title: 'QMS',
      desc: 'Rigorous quality management systems matching international guidelines for safety and performance.'
    },
    {
      num: '04.',
      title: 'CRAMS',
      desc: 'Contract Research and Manufacturing Services compliant with WHO-GMP, ICH, and global standards.'
    }
  ];

  const scopeCards = [
    {
      title: 'Human API',
      desc: 'Delivering high-quality Active Pharmaceutical Ingredients (APIs) tailored for human health and therapeutic excellence.',
      bg: 'rgba(6, 57, 76, 0.03)',
      borderColor: 'rgba(6, 57, 76, 0.08)'
    },
    {
      title: 'Veterinary API',
      desc: 'Advanced APIs designed for animal health, supporting the veterinary pharmaceutical industry with precision and care.',
      bg: 'rgba(177, 138, 54, 0.04)',
      borderColor: 'rgba(177, 138, 54, 0.12)'
    },
    {
      title: 'Fine Chemicals & Cosmetics',
      desc: 'Specialized chemical compounds, sunscreen agents, humectants, and sebum regulators for advanced cosmetic care.',
      bg: 'rgba(13, 92, 117, 0.03)',
      borderColor: 'rgba(13, 92, 117, 0.08)'
    }
  ];

  return (
    <div style={homeWrapperStyle}>
      
      {/* Hero Banner with Chemical Overlay */}
      <section style={heroSectionStyle}>
        <div style={heroBgGlowStyle}></div>
        <div className="container" style={heroContainerStyle}>
          <div className="animate-slide-up" style={heroContentStyle}>
            <h4 style={heroPreTitleStyle}>Welcome to AiraChem India</h4>
            <h1 style={heroTitleStyle}>
              Shaping the Future of <span style={{ color: 'var(--color-gold-light)' }}>Pharmaceuticals</span> & Fine Chemicals
            </h1>
            <p style={heroDescStyle}>
              Delivering excellence through innovation and manufacturing of premium-quality bulk drug intermediates, APIs, and fine chemicals at our state-of-the-art facility.
            </p>
            <div style={heroBtnGroupStyle}>
              <button onClick={() => { setPage('about'); window.scrollTo(0, 0); }} className="glow-btn-gold" style={heroBtnStyle}>
                Discover More
              </button>
              <button onClick={onOpenEnquiry} className="glass-card" style={heroSecBtnStyle}>
                Contact Expert
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Teaser Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container" style={aboutTeaserContainerStyle}>
          <div style={aboutTeaserContentStyle}>
            <h6 style={preTitleStyle}>ABOUT US</h6>
            <h2 style={{ ...sectionTitleStyle, color: 'var(--color-teal)' }}>Committed to Excellence</h2>
            <p style={textStyle}>
              AiraChem India Laboratories Pvt. Ltd. specializes in the development and manufacturing of a wide range of APIs and other raw materials for Human and Veterinary applications. We specialize in creating innovative processes and optimizing product efficiency through advanced R&D expertise.
            </p>
            <p style={textStyle}>
              AiraChem India is headed by a team of technocrats with over 45 years of experience and knowledge in the global generic pharmaceutical industry, thereby fostering our presence and growth in the regulated and international sectors. Each individual of our R&D team has an average industry experience of 20 years that further augments our product handling capabilities.
            </p>
            <div style={bulletListStyle}>
              <div style={{ ...bulletItemStyle, color: 'var(--color-text-main)' }}>
                <span style={bulletIconStyle}>✓</span>
                <span>Dedicated process safety assessments and hazard identification.</span>
              </div>
              <div style={{ ...bulletItemStyle, color: 'var(--color-text-main)' }}>
                <span style={bulletIconStyle}>✓</span>
                <span>Commitment to safety, sustainability, and quality compliance.</span>
              </div>
            </div>
          </div>

          <div style={aboutTeaserVisualStyle}>
            <div className="glass-card" style={photoPlaceholderStyle}>
              {/* Graphic Molecule Pattern */}
              <div style={moleculeGraphicWrapperStyle}>
                <div className="animate-spin-slow" style={moleculeGraphicStyle}></div>
              </div>
              {/* Experience Badge overlay */}
              <div style={expBadgeStyle}>
                <span style={expNumStyle}>45+</span>
                <span style={expTitleStyle}>Years of Pharma Expertise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-padding">
        <div className="container">
          <h6 style={preTitleCenteredStyle}>CAPABILITIES</h6>
          <h2 className="section-title" style={{ color: 'var(--color-teal)' }}>Technical Expertise</h2>
          <p className="section-subtitle">
            At AiraChem India, we believe in our multi-talented team with capabilities in different areas with a thirst for innovation and excellence. We strive to offer the best possible solutions by virtue of the pure knowledge and vast experience of our team.
          </p>

          <div className="grid-cols-4" style={{ gap: '2rem' }}>
            {capabilities.map((cap, index) => (
              <div key={index} className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front glass-panel">
                    <span style={capNumStyle}>{cap.num}</span>
                    <h3 style={capTitleStyle}>{cap.title}</h3>
                    <p style={{ color: 'var(--color-gold)', fontSize: '0.85rem', marginTop: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Hover to explore
                    </p>
                  </div>
                  <div className="flip-card-back">
                    <h3 style={capBackTitleStyle}>{cap.title}</h3>
                    <p style={capDescStyle}>{cap.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section (Air Chem at a Glance) */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, var(--color-teal) 0%, var(--color-teal-light) 100%)', color: 'white' }}>
        <div className="container" style={glanceGridStyle}>
          <div style={glanceHeaderStyle}>
            <h6 style={{ ...preTitleStyle, color: 'var(--color-gold-light)' }}>AIR CHEM AT A GLANCE</h6>
            <h2 style={{ fontSize: '2.5rem', color: 'white', fontFamily: 'var(--font-heading)', marginBottom: '1.5rem', lineHeight: '1.2' }}>
              Driving Excellence with Proven Results.
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6' }}>
              Providing the highest level of customer service through technical excellence, high quality standards, and regulatory compliance.
            </p>
            <div style={whoGmpBadgeStyle}>
              <div style={whoIconStyle}>WHO</div>
              <div>
                <h4 style={{ color: 'white', fontSize: '1rem', fontWeight: '700' }}>WHO-GMP Approved</h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.8rem' }}>Facility compliant with international standards</p>
              </div>
            </div>
          </div>

          <div style={statsGridStyle}>
            <div style={statCardStyle}>
              <span style={statNumStyle}>110 <span style={{ fontSize: '1.5rem' }}>KL</span></span>
              <span style={statTitleStyle}>Installed Capacity</span>
            </div>
            <div style={statCardStyle}>
              <span style={statNumStyle}>ZERO</span>
              <span style={statTitleStyle}>Liquid Discharge Unit</span>
            </div>
            <div style={statCardStyle}>
              <span style={statNumStyle}>3</span>
              <span style={statTitleStyle}>New Production Blocks</span>
            </div>
            <div style={statCardStyle}>
              <span style={statNumStyle}>20+ <span style={{ fontSize: '1.5rem' }}>Years</span></span>
              <span style={statTitleStyle}>Average Team Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence section */}
      <section className="section-padding">
        <div className="container" style={globalSectionContainerStyle}>
          <div style={globalContentStyle}>
            <h6 style={preTitleStyle}>GLOBAL NETWORK</h6>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-teal)', fontFamily: 'var(--font-heading)', marginBottom: '1.5rem', lineHeight: '1.2' }}>
              Reaching Customers Worldwide with Quality and Trust.
            </h2>
            <p style={textStyle}>
              Operating through a wide network of customers as well as distributors, our market positioning is customized to suit the dynamics of each country individually.
            </p>
            <p style={textStyle}>
              We have a strong presence in many regulated and developing markets across countries and are focused on adding more clients to our network, promoting our raw materials for the various industries that we cater to.
            </p>
            <button onClick={() => { setPage('contact'); window.scrollTo(0, 0); }} className="glow-btn-gold" style={{ padding: '0.8rem 1.75rem', borderRadius: 'var(--radius-sm)', cursor: 'pointer', marginTop: '1rem', alignSelf: 'flex-start' }}>
              Global Enquiry
            </button>
          </div>

          <div style={globalVisualContainerStyle}>
            <div className="glass-card" style={worldMapMockStyle}>
              {/* stylized global locations graph */}
              <div style={locationDotStyle1}></div>
              <div style={locationDotStyle2}></div>
              <div style={locationDotStyle3}></div>
              <div style={locationDotStyle4}></div>
              <div style={locationDotStyle5}></div>
              <div style={{ color: 'var(--color-teal)', fontWeight: '600', position: 'absolute', bottom: '1.5rem', left: '1.5rem', fontSize: '0.9rem' }}>
                ✓ Exporting to 25+ Countries
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope Section (Human, Veterinary, Cosmetics) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <h6 style={preTitleCenteredStyle}>OUR SCOPE</h6>
          <h2 className="section-title" style={{ color: 'var(--color-teal)' }}>Industry Applications</h2>
          <p className="section-subtitle">
            We cater to a wide range of industry applications, providing premium raw materials and APIs designed with precision.
          </p>

          <div className="grid-cols-3" style={{ gap: '2rem' }}>
            {scopeCards.map((card, idx) => (
              <div key={idx} className="glass-card" style={{ ...scopeCardWrapperStyle, backgroundColor: card.bg, borderColor: card.borderColor }}>
                <h3 style={scopeCardTitleStyle}>{card.title}</h3>
                <p style={scopeCardDescStyle}>{card.desc}</p>
                <button onClick={() => { setPage('products'); window.scrollTo(0, 0); }} style={scopeCardBtnStyle}>
                  Learn more →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

// Styling definitions
const homeWrapperStyle = {
  width: '100%'
};

const heroSectionStyle = {
  position: 'relative',
  padding: '10rem 0 8rem 0',
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, var(--color-teal) 0%, var(--color-teal-light) 100%)'
};

const heroBgGlowStyle = {
  position: 'absolute',
  top: '-150px',
  right: '-150px',
  width: '500px',
  height: '500px',
  background: 'radial-gradient(circle, var(--color-gold-glow) 0%, transparent 70%)',
  pointerEvents: 'none',
  zIndex: 1
};

const heroContainerStyle = {
  position: 'relative',
  zIndex: 10
};

const heroContentStyle = {
  maxWidth: '750px'
};

const heroPreTitleStyle = {
  fontSize: '1rem',
  color: 'var(--color-gold-light)',
  fontWeight: '600',
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  marginBottom: '1rem'
};

const heroTitleStyle = {
  fontSize: '3.75rem',
  color: 'white',
  lineHeight: '1.15',
  marginBottom: '1.5rem',
  fontFamily: 'var(--font-heading)'
};

const heroDescStyle = {
  fontSize: '1.15rem',
  color: 'rgba(255, 255, 255, 0.8)',
  lineHeight: '1.6',
  marginBottom: '2.5rem'
};

const heroBtnGroupStyle = {
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap'
};

const heroBtnStyle = {
  padding: '0.9rem 2rem',
  borderRadius: 'var(--radius-sm)',
  fontSize: '1rem',
  cursor: 'pointer'
};

const heroSecBtnStyle = {
  padding: '0.9rem 2rem',
  borderRadius: 'var(--radius-sm)',
  fontSize: '1rem',
  background: 'rgba(255, 255, 255, 0.08)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  color: 'white',
  cursor: 'pointer',
  transition: 'var(--transition-smooth)'
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

const preTitleCenteredStyle2 = {
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

const bulletListStyle = {
  marginTop: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem'
};

const bulletItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  color: 'var(--color-text-main)',
  fontWeight: '500',
  fontSize: '0.95rem'
};

const bulletIconStyle = {
  color: 'var(--color-gold)',
  fontWeight: 'bold',
  fontSize: '1.1rem'
};

const aboutTeaserContainerStyle = {
  display: 'grid',
  gridTemplateColumns: '1.2fr 1fr',
  gap: '4rem',
  alignItems: 'center'
};

const aboutTeaserContentStyle = {
  display: 'flex',
  flexDirection: 'column'
};

const aboutTeaserVisualStyle = {
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

const capNumStyle = {
  fontSize: '3rem',
  fontWeight: '800',
  color: 'rgba(6, 57, 76, 0.05)',
  fontFamily: 'var(--font-heading)',
  position: 'absolute',
  top: '1rem',
  left: '1.5rem'
};

const capTitleStyle = {
  color: 'var(--color-teal)',
  fontSize: '1.5rem',
  fontFamily: 'var(--font-heading)',
  fontWeight: '600'
};

const capBackTitleStyle = {
  color: 'var(--color-gold-light)',
  fontSize: '1.35rem',
  fontFamily: 'var(--font-heading)',
  marginBottom: '0.75rem',
  fontWeight: '600'
};

const capDescStyle = {
  color: 'white',
  fontSize: '0.9rem',
  lineHeight: '1.5'
};

const glanceGridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1.2fr',
  gap: '4rem',
  alignItems: 'center'
};

const glanceHeaderStyle = {
  display: 'flex',
  flexDirection: 'column'
};

const whoGmpBadgeStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  marginTop: '2.5rem',
  padding: '1rem',
  borderRadius: 'var(--radius-md)',
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  alignSelf: 'flex-start'
};

const whoIconStyle = {
  background: 'linear-gradient(135deg, var(--color-gold-light), var(--color-gold))',
  color: 'white',
  fontWeight: '800',
  fontSize: '0.85rem',
  width: '45px',
  height: '45px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 0 10px rgba(177, 138, 54, 0.25)'
};

const statsGridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1.5rem'
};

const statCardStyle = {
  padding: '2rem',
  borderRadius: 'var(--radius-md)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  background: 'linear-gradient(135deg, var(--color-gold-light) 0%, var(--color-gold) 100%)',
  border: 'none',
  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.12)',
  color: 'white'
};

const statNumStyle = {
  fontSize: '2.5rem',
  fontWeight: '800',
  color: 'white',
  fontFamily: 'var(--font-heading)',
  marginBottom: '0.5rem'
};

const statTitleStyle = {
  color: 'rgba(255, 255, 255, 0.85)',
  fontSize: '0.85rem',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  fontWeight: '600'
};

const globalSectionContainerStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1.2fr',
  gap: '4rem',
  alignItems: 'center'
};

const globalContentStyle = {
  display: 'flex',
  flexDirection: 'column'
};

const globalVisualContainerStyle = {
  display: 'flex',
  justifyContent: 'center'
};

const worldMapMockStyle = {
  position: 'relative',
  width: '100%',
  maxWidth: '480px',
  height: '320px',
  borderRadius: 'var(--radius-lg)',
  background: 'rgba(6, 57, 76, 0.02) url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'60\' viewBox=\'0 0 100 60\' opacity=\'0.08\'><circle cx=\'20\' cy=\'20\' r=\'1\' fill=\'%2306394c\'/><circle cx=\'50\' cy=\'30\' r=\'1\' fill=\'%2306394c\'/><circle cx=\'80\' cy=\'25\' r=\'1\' fill=\'%2306394c\'/><circle cx=\'35\' cy=\'45\' r=\'1\' fill=\'%2306394c\'/><circle cx=\'70\' cy=\'40\' r=\'1\' fill=\'%2306394c\'/></svg>") repeat',
  border: '1px solid rgba(6, 57, 76, 0.08)',
  boxShadow: 'inset 0 0 30px rgba(6, 57, 76, 0.04)',
  overflow: 'hidden'
};

const baseDotStyle = {
  position: 'absolute',
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  backgroundColor: 'var(--color-gold)',
  boxShadow: '0 0 15px var(--color-gold-glow)'
};

const locationDotStyle1 = { ...baseDotStyle, top: '30%', left: '25%' };
const locationDotStyle2 = { ...baseDotStyle, top: '45%', left: '50%', backgroundColor: 'var(--color-teal-light)', boxShadow: '0 0 15px var(--color-teal-glow)' };
const locationDotStyle3 = { ...baseDotStyle, top: '25%', left: '75%' };
const locationDotStyle4 = { ...baseDotStyle, top: '65%', left: '45%' };
const locationDotStyle5 = { ...baseDotStyle, top: '55%', left: '80%' };

const scopeCardWrapperStyle = {
  padding: '2.5rem 2rem',
  borderRadius: 'var(--radius-lg)',
  border: '1px solid',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  transition: 'var(--transition-smooth)'
};

const scopeCardTitleStyle = {
  color: 'var(--color-teal)',
  fontSize: '1.5rem',
  fontFamily: 'var(--font-heading)',
  marginBottom: '1rem',
  fontWeight: '700'
};

const scopeCardDescStyle = {
  color: 'var(--color-text-muted)',
  fontSize: '0.95rem',
  lineHeight: '1.6',
  marginBottom: '2rem',
  flexGrow: 1
};

const scopeCardBtnStyle = {
  alignSelf: 'flex-start',
  background: 'none',
  border: 'none',
  color: 'var(--color-gold)',
  fontSize: '0.95rem',
  fontWeight: '600',
  cursor: 'pointer',
  padding: '0',
  transition: 'var(--transition-smooth)'
};

// CSS media query style append
const addHomeMediaStyles = () => {
  const styleId = 'home-media-queries';
  if (document.getElementById(styleId)) return;
  const sheet = document.createElement('style');
  sheet.id = styleId;
  sheet.innerHTML = `
    @media (max-width: 1024px) {
      #home-wrapper, section {
        text-align: left;
      }
      div[style*="aboutTeaserContainerStyle"] {
        grid-template-columns: 1fr !important;
        gap: 3rem !important;
      }
      div[style*="glanceGridStyle"] {
        grid-template-columns: 1fr !important;
        gap: 3rem !important;
      }
      div[style*="globalSectionContainerStyle"] {
        grid-template-columns: 1fr !important;
        gap: 3rem !important;
      }
      div[style*="expBadgeStyle"] {
        right: 0px !important;
      }
    }
    @media (max-width: 600px) {
      h1[style*="heroTitleStyle"] {
        font-size: 2.5rem !important;
      }
      div[style*="statsGridStyle"] {
        grid-template-columns: 1fr !important;
      }
    }
  `;
  document.head.appendChild(sheet);
};

if (typeof window !== 'undefined') {
  addHomeMediaStyles();
}
