import Header from './Header';
import Footer from './Footer';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ServicesPage from '../pages/ServicesPage';
import BlogPage from '../pages/BlogPage';
import ContactPage from '../pages/ContactPage';
import RegistrationPage from '../pages/RegistrationPage';
import { useRouter } from '../hooks/useRouter';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function Router() {
  const { currentPage } = useRouter();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'blog':
        return <BlogPage />;
      case 'contact':
        return <ContactPage />;
      case 'register':
        return <RegistrationPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {renderPage()}
      </main>
      <Footer />
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 mx-auto" />
        </button>
      )}
    </div>
  );
}
