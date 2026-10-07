import React, { useState } from 'react';

export default function News({ setPage }) {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const newsArticles = [
    {
      id: 1,
      title: 'CPHI Frankfurt – 28 Oct 2025 to 30 Oct 2025',
      date: 'January 6, 2025',
      category: 'Exhibition',
      excerpt: 'AiraChem India is gearing up to participate in the prestigious CPHI Frankfurt event this October...',
      content: 'AiraChem India is proud to announce its participation in CPHI Frankfurt, the premier global event for the pharmaceutical industry. From October 28 to 30, 2025, our team of technical experts and executives will showcase our premium catalog of bulk drug intermediates, APIs, and fine chemicals at our custom exhibition pavilion.\n\nWe welcome clients, distributors, and scientific partners to visit us, discuss validation documentation, and explore process synthesis collaborations.',
      color: 'var(--color-teal)'
    },
    {
      id: 2,
      title: 'Asia Expo – February 12 to 14, 2025 Dhaka BANGLADESH',
      date: 'January 2, 2025',
      category: 'Exhibition',
      excerpt: 'AiraChem India is excited to announce the launch of our products at the Asia Expo in Dhaka...',
      content: 'Expanding our footprint across South Asia, AiraChem India is exhibiting at the Asia Expo in Dhaka, Bangladesh, from February 12 to 14, 2025. This summit represents a vital bridge to partner with the fast-growing Bangladeshi pharmaceutical sector.\n\nWe will present our specialized therapeutic category molecules, veterinary APIs (such as Halquinol), and validation-stage compounds.',
      color: 'var(--color-gold)'
    },
    {
      id: 3,
      title: 'DUPHAT, UAE – 7 – 9 January 2025, Dubai World Trade Center',
      date: 'January 2, 2025',
      category: 'R&D Summit',
      excerpt: 'Innovation took center stage at AiraChem India’s Annual R&D Summit during DUPHAT UAE...',
      content: 'At DUPHAT UAE, hosted in the Dubai World Trade Center from January 7 to 9, 2025, AiraChem India showcased its robust pipeline of molecules under validation and development.\n\nOur R&D team presented advanced process pathways for immunomodulators and hormone supplements, attracting substantial interest from Middle Eastern generic manufacturers.',
      color: 'var(--color-blue)'
    },
    {
      id: 4,
      title: 'Our facility is WHO GMP approved',
      date: 'January 2, 2025',
      category: 'Accreditation',
      excerpt: 'We have officially obtained WHO-GMP compliance certification approval for our manufacturing facility...',
      content: 'Following a comprehensive audit by state and national regulatory inspectors, we are pleased to confirm that the AiraChem India manufacturing plant has received WHO-GMP certification compliance. This benchmark approval reflects our high standards of quality assurance, equipment validation, documentation, and operational hygiene.',
      color: 'var(--color-teal)'
    },
    {
      id: 5,
      title: 'Applied for Written confirmation',
      date: 'January 2, 2025',
      category: 'Regulatory',
      excerpt: 'AiraChem India has officially submitted the application files for Written Confirmation (WC) validation...',
      content: 'As part of our commitment to supplying premium raw materials globally, AiraChem India has formally applied for Written Confirmation (WC) from the Central Drugs Standard Control Organisation (CDSCO). This validation will facilitate exports of our Active Pharmaceutical Ingredients to the European Union (EU) markets, matching European GMP rules.',
      color: 'var(--color-gold)'
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
            <span style={{ color: 'var(--color-gold-light)', fontWeight: '600' }}>News</span>
          </div>
          <h1 style={bannerTitleStyle}>News & Events</h1>
          <p style={bannerSubtitleStyle}>
            Stay updated with our latest achievements, certifications, global expos, and industry insights.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="grid-cols-3" style={{ gap: '2.5rem' }}>
            {newsArticles.map((article) => (
              <div 
                key={article.id} 
                className="glass-card" 
                style={articleCardStyle}
                onClick={() => setSelectedArticle(article)}
              >
                <div style={{ ...categoryBadgeStyle, backgroundColor: article.color }}>
                  {article.category}
                </div>
                <div style={cardContentStyle}>
                  <span style={dateStyle}>{article.date}</span>
                  <h3 style={articleTitleStyle}>{article.title}</h3>
                  <p style={articleExcerptStyle}>{article.excerpt}</p>
                  <span style={readMoreLinkStyle}>Read Full Article →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Popup Modal */}
      {selectedArticle && (
        <div style={overlayStyle} onClick={() => setSelectedArticle(null)}>
          <div 
            className="glass-panel animate-slide-up" 
            style={modalStyle}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setSelectedArticle(null)} style={closeBtnStyle}>×</button>
            <span style={{ ...categoryBadgeStyle, backgroundColor: selectedArticle.color, display: 'inline-block', position: 'static', marginBottom: '1rem' }}>
              {selectedArticle.category}
            </span>
            <span style={modalDateStyle}>{selectedArticle.date}</span>
            <h2 style={modalTitleStyle}>{selectedArticle.title}</h2>
            <p style={modalContentTextStyle}>{selectedArticle.content}</p>
          </div>
        </div>
      )}

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

const articleCardStyle = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 'var(--radius-lg)',
  overflow: 'hidden',
  cursor: 'pointer',
  height: '100%',
  border: '1px solid var(--glass-border)',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)',
  background: '#ffffff'
};

const categoryBadgeStyle = {
  position: 'absolute',
  top: '1.25rem',
  left: '1.5rem',
  padding: '0.35rem 0.8rem',
  borderRadius: 'var(--radius-full)',
  color: 'white',
  fontSize: '0.75rem',
  fontWeight: '600',
  textTransform: 'uppercase',
  letterSpacing: '0.05em'
};

const cardContentStyle = {
  padding: '4rem 2rem 2.5rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
};

const dateStyle = {
  fontSize: '0.8rem',
  color: 'var(--color-text-muted)',
  marginBottom: '0.75rem',
  display: 'block'
};

const articleTitleStyle = {
  fontSize: '1.25rem',
  color: 'var(--color-teal)',
  lineHeight: '1.4',
  marginBottom: '1rem',
  fontFamily: 'var(--font-heading)',
  flexGrow: 0,
  fontWeight: '700'
};

const articleExcerptStyle = {
  fontSize: '0.9rem',
  color: 'var(--color-text-muted)',
  lineHeight: '1.5',
  marginBottom: '1.5rem',
  flexGrow: 1
};

const readMoreLinkStyle = {
  fontSize: '0.9rem',
  fontWeight: '600',
  color: 'var(--color-gold)'
};

const overlayStyle = {
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
  padding: '1.5rem'
};

const modalStyle = {
  position: 'relative',
  width: '100%',
  maxWidth: '600px',
  borderRadius: 'var(--radius-lg)',
  padding: '3rem 2.5rem',
  border: '1px solid rgba(6, 57, 76, 0.1)',
  boxShadow: '0 25px 60px rgba(15, 23, 42, 0.12)',
  backgroundColor: '#ffffff'
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

const modalDateStyle = {
  fontSize: '0.85rem',
  color: 'var(--color-text-muted)',
  display: 'block',
  marginBottom: '0.5rem'
};

const modalTitleStyle = {
  fontSize: '1.8rem',
  color: 'var(--color-teal)',
  fontFamily: 'var(--font-heading)',
  marginBottom: '1.5rem',
  lineHeight: '1.25',
  fontWeight: '700'
};

const modalContentTextStyle = {
  color: 'var(--color-text-muted)',
  fontSize: '0.95rem',
  lineHeight: '1.6',
  whiteSpace: 'pre-line'
};
