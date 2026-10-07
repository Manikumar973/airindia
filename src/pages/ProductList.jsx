import React, { useState } from 'react';

export default function ProductList({ setPage, onOpenEnquiry }) {
  const [activeTab, setActiveTab] = useState('commercial');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'commercial', label: 'Commercial Products' },
    { id: 'cosmetics', label: 'Commercial Cosmetics' },
    { id: 'validation', label: 'Under Validation' },
    { id: 'development', label: 'Under Development' }
  ];

  const productsData = {
    commercial: [
      { name: 'Alsept (Methylparaben + Ethylparaben + Propylparaben)', app: 'Preservative' },
      { name: 'Calcium Carbonate', app: 'Supplement' },
      { name: 'Halquinol', app: 'Antimicrobial (Veterinary)' },
      { name: 'Iron Aspartate', app: 'Iron supplement' },
      { name: 'Iron Polymaltose Complex', app: 'Hematinic' },
      { name: 'Iron Sucrose', app: 'Hematinic' },
      { name: 'Sodium Citrate Dihydrate', app: 'Anticoagulant' },
      { name: 'Zinc Ascorbate', app: 'Nutritional supplement' }
    ],
    cosmetics: [
      { name: 'Avobenzone', app: 'Sunscreen agent' },
      { name: 'Homosalate', app: 'Sunscreen agent' },
      { name: 'Octyl Salicylate / Octisilate Octocrylene', app: 'Sunscreen agent' },
      { name: 'Phenyl Benzimidazole Sulphonic Acid (PBSA)', app: 'Sunscreen agent' },
      { name: 'Sodium PCA (Sodium Pyrrolidone Carboxylic Acid)', app: 'Sunscreen agent / Humectant' },
      { name: 'Sodium Salicylate', app: 'Humectant' },
      { name: 'Zinc PCA (Zinc Pyrrolidone Carboxylic Acid)', app: 'Sebum regulator and antibacterial' }
    ],
    validation: [
      { name: 'Amprolium', app: 'Antiprotozoal' },
      { name: 'Baricitinib', app: 'Immunomodulator' },
      { name: 'Magnesium Aspartate Trihydrate HCL', app: 'Mineral supplement' },
      { name: 'Magnesium L Aspartate', app: 'Mineral supplement' },
      { name: 'Magnesium Pidolate', app: 'Mineral supplement' },
      { name: 'Melatonin', app: 'Hormone' },
      { name: 'Meloxicam', app: 'Nonsteroidal anti-inflammatory drug (NSAID)' },
      { name: 'Minoxidil', app: 'Vasodilator' },
      { name: 'Piroxicam', app: 'Nonsteroidal anti-inflammatory drug (NSAID)' },
      { name: 'Simethicone', app: 'Antiflatulent' },
      { name: 'Sulfaquinoxaline Sodium', app: 'Antimicrobial' },
      { name: 'Tylosin', app: 'Antibiotic' },
      { name: 'Vadadustat', app: 'HIF-PH inhibitor' },
      { name: 'Zinc Lactate Dihydrate', app: 'Nutritional supplement' }
    ],
    development: [
      { name: 'Ambroxol HCL', app: 'Mucolytic agent' },
      { name: 'Ammonium Iron (III) Citrate', app: 'Iron supplement' },
      { name: 'Beta Cyclodextrin', app: 'Pharmaceutical excipient' },
      { name: 'Bronopol', app: 'Preservative and antimicrobial agent' },
      { name: 'Cynacobalmine 1%', app: 'Vitamin B12 supplement' },
      { name: 'Elagolix Sodium', app: 'GnRH receptor antagonist' },
      { name: 'Elobixibat Hydrate', app: 'Bile acid transporter inhibitor' },
      { name: 'Ferric Ammonium Citrate', app: 'Iron supplement' },
      { name: 'Fesoterodine Fumarate', app: 'Antimuscarinic agent' },
      { name: 'Fezolinetant', app: 'Neurokinin-3 receptor antagonist' },
      { name: 'Flumequine Hydroxypropyl', app: 'Antibiotic' },
      { name: 'Hydroxypropyl Beta Cyclodextrin', app: 'Pharmaceutical excipient' },
      { name: 'L Lysine HCL', app: 'Nutritional supplement' },
      { name: 'Macitentan', app: 'Endothelin receptor antagonist' },
      { name: 'Methyl Salicylate', app: 'Topical analgesic' },
      { name: 'Methylcobalamin', app: 'Vitamin B12 supplement' },
      { name: 'Propyl Gallate', app: 'Antioxidant' },
      { name: 'Salcaprozate Sodium', app: 'Absorption enhancer' },
      { name: 'Salicylic Acid', app: 'Keratolytic agent' },
      { name: 'Sodium Benzoate', app: 'Preservative and alkalizer' },
      { name: 'Sodium Citrate', app: 'Alkalizing agent and anticoagulant' },
      { name: 'Sodium Lauryl Ethyle Sulphate', app: 'Surfactant' },
      { name: 'Sodium Lauryl Sulphate', app: 'Surfactant' }
    ]
  };

  const activeProducts = productsData[activeTab] || [];
  
  const filteredProducts = activeProducts.filter(prod => 
    prod.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    prod.app.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={pageWrapperStyle}>
      
      {/* Banner / Header */}
      <section className="glass-panel" style={bannerSectionStyle}>
        <div className="container" style={bannerContainerStyle}>
          <div style={breadcrumbsStyle}>
            <span onClick={() => { setPage('home'); window.scrollTo(0, 0); }} style={breadcrumbLinkStyle}>Home</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}> &gt; </span>
            <span style={{ color: 'var(--color-gold-light)', fontWeight: '600' }}>Product List</span>
          </div>
          <h1 style={bannerTitleStyle}>Product List</h1>
          <p style={bannerSubtitleStyle}>
            Wide range of premium raw materials, cosmetics, and Active Pharmaceutical Ingredients (APIs)
          </p>
        </div>
      </section>

      {/* Intro info */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', paddingBottom: '3rem' }}>
        <div className="container" style={introContainerStyle}>
          <div style={introContentStyle}>
            <h2 style={sectionTitleStyle}>AiraChem India Products</h2>
            <p style={textStyle}>
              At AiraChem India, we are continuously innovating and developing new raw materials to meet the evolving needs of the industry. Please get in touch with us for more details and comprehensive regulatory support for the products that interest you.
            </p>
            <p style={patentNoticeStyle}>
              * Disclaimer: Products protected by patents are not available in countries where they would infringe on patent rights. We strictly respect intellectual property compliance.
            </p>
          </div>
          <div style={introLogoBoxStyle}>
            {/* Styled molecular hexagon border */}
            <div className="glass-card" style={logoBadgeStyle}>
              <span style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-gold)' }}>GMP</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-main)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Products Section */}
      <section style={{ backgroundColor: 'var(--bg-primary)', paddingBottom: '6rem' }}>
        <div className="container">
          
          {/* Tab Navigation */}
          <div className="glass-panel" style={tabsContainerStyle}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveTab(cat.id); setSearchTerm(''); }}
                style={activeTab === cat.id ? activeTabBtnStyle : tabBtnStyle}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div style={searchWrapperStyle}>
            <input
              type="text"
              placeholder="Search products by name or application..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field"
              style={searchInputStyle}
            />
          </div>

          {/* Table list */}
          <div className="glass-card" style={tableCardStyle}>
            {filteredProducts.length > 0 ? (
              <table style={tableStyle}>
                <thead>
                  <tr style={tableHeaderRowStyle}>
                    <th style={tableHeaderCellStyle}>Product Name</th>
                    <th style={tableHeaderCellStyle}>Application / Category</th>
                    <th style={{ ...tableHeaderCellStyle, textAlign: 'center' }}>Inquire</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((prod, idx) => (
                    <tr 
                      key={idx} 
                      style={idx % 2 === 0 ? tableRowStyleEven : tableRowStyleOdd}
                      className="table-row-hover"
                    >
                      <td style={tableCellStyle}>{prod.name}</td>
                      <td style={tableCellStyle}>{prod.app}</td>
                      <td style={{ ...tableCellStyle, textAlign: 'center' }}>
                        <button 
                          onClick={onOpenEnquiry}
                          style={tableBtnStyle}
                        >
                          Enquire
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div style={noProductsStyle}>
                <p>No products found matching your search term.</p>
              </div>
            )}
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

const introContainerStyle = {
  display: 'grid',
  gridTemplateColumns: '1.5fr 1fr',
  gap: '4rem',
  alignItems: 'center'
};

const introContentStyle = {
  display: 'flex',
  flexDirection: 'column'
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

const patentNoticeStyle = {
  fontSize: '0.85rem',
  fontStyle: 'italic',
  color: 'var(--color-gold)',
  lineHeight: '1.5'
};

const introLogoBoxStyle = {
  display: 'flex',
  justifyContent: 'center'
};

const logoBadgeStyle = {
  width: '180px',
  height: '180px',
  borderRadius: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  border: '2px solid var(--color-gold)',
  boxShadow: '0 8px 30px var(--color-gold-glow)'
};

const tabsContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  borderRadius: 'var(--radius-md)',
  padding: '0.5rem',
  marginBottom: '2rem',
  backgroundColor: 'var(--bg-secondary)',
  border: '1px solid var(--glass-border)',
  flexWrap: 'wrap',
  gap: '0.5rem'
};

const tabBtnStyle = {
  flex: '1 1 180px',
  background: 'none',
  border: 'none',
  color: 'var(--color-text-muted)',
  padding: '1rem',
  fontSize: '0.95rem',
  fontWeight: '600',
  borderRadius: 'var(--radius-sm)',
  cursor: 'pointer',
  transition: 'var(--transition-smooth)'
};

const activeTabBtnStyle = {
  ...tabBtnStyle,
  background: 'linear-gradient(135deg, var(--color-gold-light), var(--color-gold))',
  color: 'white',
  boxShadow: '0 4px 15px var(--color-gold-glow)'
};

const searchWrapperStyle = {
  marginBottom: '1.5rem'
};

const searchInputStyle = {
  fontSize: '1rem',
  padding: '1rem 1.5rem',
  border: '1px solid #cbd5e1'
};

const tableCardStyle = {
  borderRadius: 'var(--radius-lg)',
  overflow: 'hidden',
  border: '1px solid var(--glass-border)',
  boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  textAlign: 'left'
};

const tableHeaderRowStyle = {
  background: 'var(--color-teal)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
};

const tableHeaderCellStyle = {
  padding: '1.25rem 1.5rem',
  color: 'white',
  fontWeight: '600',
  fontSize: '0.95rem',
  textTransform: 'uppercase',
  letterSpacing: '0.05em'
};

const tableRowStyleEven = {
  background: '#ffffff',
  borderBottom: '1px solid var(--glass-border)'
};

const tableRowStyleOdd = {
  background: 'var(--bg-secondary)',
  borderBottom: '1px solid var(--glass-border)'
};

const tableCellStyle = {
  padding: '1.15rem 1.5rem',
  fontSize: '0.925rem',
  color: 'var(--color-text-main)',
  lineHeight: '1.5'
};

const tableBtnStyle = {
  backgroundColor: 'rgba(177, 138, 54, 0.1)',
  border: '1px solid var(--color-gold)',
  color: 'var(--color-gold)',
  padding: '0.45rem 1rem',
  borderRadius: 'var(--radius-sm)',
  fontSize: '0.85rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'var(--transition-smooth)'
};

const noProductsStyle = {
  padding: '4rem',
  textAlign: 'center',
  color: 'var(--color-text-muted)',
  fontSize: '1rem'
};

// CSS media query style append
const addProductMediaStyles = () => {
  const styleId = 'product-media-queries';
  if (document.getElementById(styleId)) return;
  const sheet = document.createElement('style');
  sheet.id = styleId;
  sheet.innerHTML = `
    @media (max-width: 900px) {
      div[style*="introContainerStyle"] {
        grid-template-columns: 1fr !important;
        gap: 3rem !important;
      }
      .table-row-hover td:nth-child(3) button {
        padding: 0.6rem 1.2rem !important;
      }
    }
    @media (max-width: 600px) {
      table th:nth-child(2), table td:nth-child(2) {
        display: none !important;
      }
      table th, table td {
        padding: 1rem !important;
      }
    }
  `;
  document.head.appendChild(sheet);
};

if (typeof window !== 'undefined') {
  addProductMediaStyles();
}
