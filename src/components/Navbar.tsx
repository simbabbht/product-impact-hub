import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { Moon, Sun, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#competences', label: 'Compétences' },
  { href: '#experience', label: 'Expérience' },
  { href: '#projets', label: 'Projets' },
  { href: '#freelance', label: 'Freelance' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-card py-2 border-b border-border/50' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-h3 font-semibold gradient-text">
          PO
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-small font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-surface-2 transition-colors duration-200"
            aria-label={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-surface-2 transition-colors duration-200"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card mt-2 mx-2 rounded-lg p-4 animate-fade-in">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-body font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
