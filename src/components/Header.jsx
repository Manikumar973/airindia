import React, { useState } from 'react';

export default function Header({ currentPage, setPage, onOpenEnquiry }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Product List' },
    { id: 'news', label: 'News' },
    { id: 'ehs', label: 'EHS/CSR' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (id) => {
    setPage(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="glass-panel" style={headerStyle}>
      <div className="container" style={headerContainerStyle}>
        
        {/* Stylized Chemistry/Biotech Logo */}
        <div onClick={() => handleNavClick('home')} style={logoContainerStyle}>
          <svg viewBox="0 0 100 100" style={logoSvgStyle} xmlns="http://www.w3.org/2000/svg">
            {/* Hexagon Chemistry Structure */}
            <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" fill="none" stroke="var(--color-teal-light)" strokeWidth="6" />
            {/* Inner Molecular bonds */}
            <circle cx="50" cy="15" r="8" fill="var(--color-gold-light)" />
            <circle cx="80" cy="32" r="8" fill="var(--color-teal-light)" />
            <circle cx="80" cy="68" r="8" fill="var(--color-teal-light)" />
            <circle cx="50" cy="85" r="8" fill="var(--color-gold-light)" />
            <circle cx="20" cy="68" r="8" fill="var(--color-teal-light)" />
            <circle cx="20" cy="32" r="8" fill="var(--color-teal-light)" />
            <circle cx="50" cy="50" r="14" fill="var(--color-teal)" opacity="0.8" />
            <line x1="50" y1="50" x2="50" y2="15" stroke="var(--color-teal-light)" strokeWidth="3" />
            <line x1="50" y1="50" x2="80" y2="68" stroke="var(--color-teal-light)" strokeWidth="3" />
            <line x1="50" y1="50" x2="20" y2="68" stroke="var(--color-teal-light)" strokeWidth="3" />
          </svg>
          <div style={logoTextStyle}>
            <span style={logoMainText}>AIRACHEM</span>
            <span style={logoSubText}>INDIA</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav style={desktopNavStyle}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={currentPage === item.id ? activeNavLinkStyle : navLinkStyle}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Enquire Now & Hamburger Button */}
        <div style={actionWrapperStyle}>
          <button 
            className="glow-btn-gold" 
            onClick={onOpenEnquiry} 
            style={headerEnquireBtnStyle}
          >
            Enquire Now
          </button>

          {/* Mobile hamburger menu */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)} 
            style={hamburgerStyle}
            aria-label="Toggle navigation menu"
          >
            <div style={mobileOpen ? { ...barStyle, transform: 'rotate(45deg) translate(5px, 6px)' } : barStyle}></div>
            <div style={mobileOpen ? { ...barStyle, opacity: 0 } : barStyle}></div>
            <div style={mobileOpen ? { ...barStyle, transform: 'rotate(-45deg) translate(5px, -6px)' } : barStyle}></div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="glass-panel animate-fade-in" style={mobileNavContainerStyle}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={currentPage === item.id ? activeMobileNavLinkStyle : mobileNavLinkStyle}
            >
              {item.label}
            </button>
          ))}
          <button 
            className="glow-btn-gold" 
            onClick={() => { setMobileOpen(false); onOpenEnquiry(); }}
            style={mobileEnquireBtnStyle}
          >
            Enquire Now
          </button>
        </div>
      )}
    </header>
  );
}

// Styles
const headerStyle = {
  position: 'sticky',
  top: 0,
  zIndex: 900,
  width: '100%',
  borderBottom: '1px solid var(--glass-border)',
  backdropFilter: 'blur(20px)',
  background: 'rgba(255, 255, 255, 0.92)'
};

const headerContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '80px'
};

const logoContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  gap: '0.75rem',
  userSelect: 'none'
};

const logoSvgStyle = {
  width: '45px',
  height: '45px',
  filter: 'drop-shadow(0 0 4px rgba(6, 57, 76, 0.1))'
};

const logoTextStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};

const logoMainText = {
  fontSize: '1.25rem',
  fontWeight: '800',
  color: 'var(--color-teal)',
  fontFamily: 'var(--font-heading)',
  letterSpacing: '0.05em',
  lineHeight: '1'
};

const logoSubText = {
  fontSize: '0.75rem',
  fontWeight: '600',
  color: 'var(--color-gold)',
  fontFamily: 'var(--font-primary)',
  letterSpacing: '0.4em',
  marginTop: '0.15rem',
  lineHeight: '1'
};

const desktopNavStyle = {
  display: 'flex',
  gap: '1.75rem'
};

const navLinkStyle = {
  background: 'none',
  border: 'none',
  color: 'var(--color-text-muted)',
  fontSize: '0.95rem',
  fontWeight: '500',
  cursor: 'pointer',
  padding: '0.5rem 0',
  position: 'relative',
  transition: 'var(--transition-smooth)'
};

const activeNavLinkStyle = {
  ...navLinkStyle,
  color: 'var(--color-gold)',
  fontWeight: '600'
};

const actionWrapperStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem'
};

const headerEnquireBtnStyle = {
  padding: '0.6rem 1.25rem',
  borderRadius: 'var(--radius-sm)',
  fontSize: '0.9rem',
  cursor: 'pointer'
};

const hamburgerStyle = {
  background: 'none',
  border: 'none',
  display: 'none',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '26px',
  height: '20px',
  cursor: 'pointer',
  padding: '0'
};

const barStyle = {
  width: '100%',
  height: '3px',
  backgroundColor: 'var(--color-teal)',
  borderRadius: '2px',
  transition: 'var(--transition-bounce)'
};

const mobileNavContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '80px',
  left: 0,
  width: '100%',
  backgroundColor: '#ffffff',
  borderBottom: '1px solid var(--glass-border)',
  padding: '1.5rem',
  gap: '1.25rem',
  zIndex: 899
};

const mobileNavLinkStyle = {
  background: 'none',
  border: 'none',
  color: 'var(--color-text-muted)',
  fontSize: '1.1rem',
  fontWeight: '500',
  cursor: 'pointer',
  textAlign: 'left',
  width: '100%',
  padding: '0.5rem 0'
};

const activeMobileNavLinkStyle = {
  ...mobileNavLinkStyle,
  color: 'var(--color-gold)',
  fontWeight: '600'
};

const mobileEnquireBtnStyle = {
  width: '100%',
  padding: '0.8rem',
  borderRadius: 'var(--radius-sm)',
  fontSize: '1rem',
  marginTop: '0.5rem'
};

// CSS media queries simulation for display logic
const addMediaStyles = () => {
  const styleId = 'header-media-queries';
  if (document.getElementById(styleId)) return;
  const sheet = document.createElement('style');
  sheet.id = styleId;
  sheet.innerHTML = `
    @media (max-width: 1024px) {
      nav { display: none !important; }
      header button.glow-btn-teal { display: none !important; }
      header button[aria-label="Toggle navigation menu"] { display: flex !important; }
    }
  `;
  document.head.appendChild(sheet);
};

if (typeof window !== 'undefined') {
  addMediaStyles();
}
