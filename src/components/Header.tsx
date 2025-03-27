
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Resume', path: '/#resume' },
    { name: 'Contact', path: '/#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when changing route
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/' && !location.hash;
    }
    
    // For hash links
    if (path.includes('#')) {
      return location.hash === path.substring(path.indexOf('#'));
    }
    
    return location.pathname === path;
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || mobileMenuOpen ? 'glass-morphism py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="font-display text-xl font-semibold tracking-tight transition-opacity hover:opacity-80"
          onClick={() => setMobileMenuOpen(false)}
        >
          Het Patel
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn('nav-link', isActive(item.path) && 'active')}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center justify-center w-10 h-10 text-foreground/70"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Navigation */}
        {isMobile && (
          <div 
            className={cn(
              'fixed inset-0 z-40 bg-background/98 backdrop-blur-lg pt-24 px-6 transition-transform duration-300',
              mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            )}
          >
            <nav className="flex flex-col space-y-6 items-center">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    'text-xl font-medium transition-all duration-300',
                    isActive(item.path) ? 'text-primary' : 'text-foreground/70',
                    mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  )}
                  style={{ 
                    transitionDelay: `${100 + index * 50}ms`,
                    animationDelay: `${100 + index * 50}ms`
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
