import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import Home from './pages/Home';
import About from './pages/About';
import ProductList from './pages/ProductList';
import News from './pages/News';
import Ehs from './pages/Ehs';
import Contact from './pages/Contact';

export default function App() {
  const [page, setPage] = useState('home');
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home setPage={setPage} onOpenEnquiry={() => setEnquiryOpen(true)} />;
      case 'about':
        return <About setPage={setPage} />;
      case 'products':
        return <ProductList setPage={setPage} onOpenEnquiry={() => setEnquiryOpen(true)} />;
      case 'news':
        return <News setPage={setPage} />;
      case 'ehs':
        return <Ehs setPage={setPage} />;
      case 'contact':
        return <Contact setPage={setPage} />;
      default:
        return <Home setPage={setPage} onOpenEnquiry={() => setEnquiryOpen(true)} />;
    }
  };

  return (
    <div style={appLayoutContainerStyle}>
      <Header 
        currentPage={page} 
        setPage={setPage} 
        onOpenEnquiry={() => setEnquiryOpen(true)} 
      />
      
      <main style={mainContentAreaStyle}>
        {renderPage()}
      </main>

      <Footer 
        setPage={setPage} 
        onOpenEnquiry={() => setEnquiryOpen(true)} 
      />

      <EnquiryModal 
        isOpen={enquiryOpen} 
        onClose={() => setEnquiryOpen(false)} 
      />
    </div>
  );
}

// Styling for global page layout
const appLayoutContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  width: '100%'
};

const mainContentAreaStyle = {
  flexGrow: 1,
  width: '100%'
};
