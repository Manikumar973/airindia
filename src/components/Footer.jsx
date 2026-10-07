import React from 'react';

export default function Footer({ setPage, onOpenEnquiry }) {
  const handleNavClick = (id) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={footerStyle}>
      <div className="container" style={footerContainerStyle}>
        
        {/* Brand Column */}
        <div style={brandColStyle}>
          <div style={logoContainerStyle}>
            <svg viewBox="0 0 100 100" style={logoSvgStyle} xmlns="http://www.w3.org/2000/svg">
              <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" fill="none" stroke="var(--color-teal-light)" strokeWidth="6" />
              <circle cx="50" cy="15" r="8" fill="var(--color-gold-light)" />
              <circle cx="80" cy="32" r="8" fill="var(--color-teal-light)" />
              <circle cx="80" cy="68" r="8" fill="var(--color-teal-light)" />
              <circle cx="50" cy="85" r="8" fill="var(--color-gold-light)" />
              <circle cx="20" cy="68" r="8" fill="var(--color-teal-light)" />
              <circle cx="20" cy="32" r="8" fill="var(--color-teal-light)" />
              <circle cx="50" cy="50" r="14" fill="var(--color-teal)" opacity="0.8" />
            </svg>
            <div style={logoTextStyle}>
              <span style={logoMainText}>AIRACHEM</span>
              <span style={logoSubText}>INDIA</span>
            </div>
          </div>
          <p style={brandDescStyle}>
            AiraChem India – Transforming innovation into excellence, one molecule at a time. Manufacturer of premium quality bulk drug intermediates, APIs, and cosmetics.
          </p>
        </div>

        {/* Links Column 1: Company */}
        <div style={linkColStyle}>
          <h4 style={colTitleStyle}>Company</h4>
          <ul style={linkListStyle}>
            <li><button onClick={() => handleNavClick('about')} style={linkStyle}>About Us</button></li>
            <li><button onClick={() => handleNavClick('products')} style={linkStyle}>Product List</button></li>
            <li><button onClick={() => handleNavClick('news')} style={linkStyle}>Latest News</button></li>
            <li><button onClick={() => handleNavClick('ehs')} style={linkStyle}>EHS Policy</button></li>
            <li><button onClick={() => handleNavClick('contact')} style={linkStyle}>Contact Us</button></li>
          </ul>
        </div>

        {/* Links Column 2: Operations */}
        <div style={linkColStyle}>
          <h4 style={colTitleStyle}>Operations</h4>
          <ul style={linkListStyle}>
            <li><a href="#R&D" onClick={() => handleNavClick('home')} style={linkStyle}>Process R&D</a></li>
            <li><a href="#Manufacturing" onClick={() => handleNavClick('home')} style={linkStyle}>GMP Manufacturing</a></li>
            <li><a href="#QMS" onClick={() => handleNavClick('home')} style={linkStyle}>Quality Control</a></li>
            <li><a href="#Regulatory" onClick={() => handleNavClick('products')} style={linkStyle}>Regulatory Support</a></li>
          </ul>
        </div>

        {/* Links Column 3: Brochure & Quick Contact */}
        <div style={brochureColStyle}>
          <h4 style={colTitleStyle}>Support</h4>
          <p style={supportTextStyle}>
            Have inquiries? Get in touch with us at any time.
          </p>
          <a href="mailto:info@airachemindia.com" style={supportEmailStyle}>
            info@airachemindia.com
          </a>
          <button 
            className="glow-btn-gold" 
            onClick={onOpenEnquiry}
            style={footerBtnStyle}
          >
            Download Brochure
          </button>
        </div>

      </div>

      {/* Footer Bottom Bar */}
      <div style={bottomBarStyle}>
        <div className="container" style={bottomBarContainerStyle}>
          <p>© 2024 AiraChem India Laboratories Pvt. Ltd. All rights reserved.</p>
          <div style={legalLinksStyle}>
            <a href="#" style={legalLinkStyle}>Privacy Policy</a>
            <span style={{ color: 'var(--color-text-muted)', opacity: 0.3 }}>|</span>
            <a href="#" style={legalLinkStyle}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Styling
const footerStyle = {
  backgroundColor: 'var(--bg-secondary)',
  borderTop: '1px solid var(--glass-border)',
  paddingTop: '5rem',
  color: 'var(--color-text-muted)',
  fontFamily: 'var(--font-primary)'
};

const footerContainerStyle = {
  display: 'grid',
  gridTemplateColumns: '1.5fr 1fr 1fr 1.5fr',
  gap: '3rem',
  paddingBottom: '4rem'
};

const brandColStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem'
};

const logoContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem'
};

const logoSvgStyle = {
  width: '40px',
  height: '40px',
  filter: 'drop-shadow(0 0 6px var(--color-teal-glow))'
};

const logoTextStyle = {
  display: 'flex',
  flexDirection: 'column'
};

const logoMainText = {
  fontSize: '1.15rem',
  fontWeight: '800',
  color: 'var(--color-teal)',
  fontFamily: 'var(--font-heading)',
  letterSpacing: '0.05em',
  lineHeight: '1'
};

const logoSubText = {
  fontSize: '0.7rem',
  fontWeight: '600',
  color: 'var(--color-gold)',
  fontFamily: 'var(--font-primary)',
  letterSpacing: '0.4em',
  marginTop: '0.15rem',
  lineHeight: '1'
};

const brandDescStyle = {
  fontSize: '0.9rem',
  lineHeight: '1.6',
  color: 'var(--color-text-muted)'
};

const linkColStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem'
};

const colTitleStyle = {
  color: 'var(--color-teal)',
  fontSize: '1.1rem',
  fontFamily: 'var(--font-heading)',
  position: 'relative',
  paddingBottom: '0.5rem',
  fontWeight: '700'
};

const linkListStyle = {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem'
};

const linkStyle = {
  background: 'none',
  border: 'none',
  color: 'var(--color-text-muted)',
  fontSize: '0.9rem',
  cursor: 'pointer',
  textAlign: 'left',
  padding: '0',
  transition: 'var(--transition-smooth)'
};

const brochureColStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem'
};

const supportTextStyle = {
  fontSize: '0.9rem',
  lineHeight: '1.5'
};

const supportEmailStyle = {
  color: 'var(--color-gold)',
  fontWeight: '600',
  fontSize: '1.05rem',
  textDecoration: 'underline',
  marginBottom: '0.5rem'
};

const footerBtnStyle = {
  padding: '0.75rem 1.25rem',
  borderRadius: 'var(--radius-sm)',
  fontSize: '0.9rem',
  alignSelf: 'flex-start',
  cursor: 'pointer'
};

const bottomBarStyle = {
  borderTop: '1px solid var(--glass-border)',
  padding: '1.5rem 0',
  fontSize: '0.85rem'
};

const bottomBarContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '1rem'
};

const legalLinksStyle = {
  display: 'flex',
  gap: '1rem',
  alignItems: 'center'
};

const legalLinkStyle = {
  color: 'var(--color-text-muted)',
  transition: 'var(--transition-smooth)'
};

// CSS media queries injection for responsive grid
const addFooterStyles = () => {
  const styleId = 'footer-media-queries';
  if (document.getElementById(styleId)) return;
  const sheet = document.createElement('style');
  sheet.id = styleId;
  sheet.innerHTML = `
    @media (max-width: 900px) {
      footer > div.container {
        grid-template-columns: 1fr 1fr !important;
        gap: 2.5rem !important;
      }
    }
    @media (max-width: 600px) {
      footer > div.container {
        grid-template-columns: 1fr !important;
        gap: 2rem !important;
      }
      footer div {
        text-align: center;
      }
      footer button {
        align-self: center !important;
        margin: 0 auto;
      }
      footer a {
        align-self: center !important;
      }
      footer div div {
        justify-content: center !important;
      }
    }
  `;
  document.head.appendChild(sheet);
};

if (typeof window !== 'undefined') {
  addFooterStyles();
}
