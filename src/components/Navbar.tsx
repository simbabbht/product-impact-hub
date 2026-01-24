import { useState, useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';
import { Moon, Sun, Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#competences', label: 'Compétences' },
  { href: '#experience', label: 'Expériences' },
  { href: '#freelance', label: 'Freelance' },
  { href: '#contact', label: 'Contact' },
];

const projectLinks = [
  { href: '/work/refonte-home-espace-client', label: 'Refonte Home Espace Client' },
  { href: '/work/declaration-sinistre-en-ligne', label: 'Déclaration de sinistre en ligne' },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProjectsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsProjectsDropdownOpen(false);
        setIsMobileProjectsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
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
          SB
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {/* Services link */}
          <a
            href="#services"
            className="text-small font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Services
          </a>
          
          {/* Projects Dropdown - after Services */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsProjectsDropdownOpen(!isProjectsDropdownOpen)}
              aria-expanded={isProjectsDropdownOpen}
              aria-haspopup="true"
              className="text-small font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-1"
            >
              Projets
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProjectsDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isProjectsDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 glass-card rounded-lg p-2 animate-fade-in border border-border bg-background shadow-lg z-50">
                {projectLinks.map((project) => (
                  <Link
                    key={project.href}
                    to={project.href}
                    onClick={() => setIsProjectsDropdownOpen(false)}
                    className="block px-3 py-2 text-small text-muted-foreground hover:text-foreground hover:bg-surface-2 rounded-md transition-colors duration-200"
                  >
                    {project.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          {/* Rest of nav links (after Projets) */}
          {navLinks.slice(1).map((link) => (
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
            
            {/* Mobile Projects Accordion */}
            <div>
              <button
                onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)}
                aria-expanded={isMobileProjectsOpen}
                className="w-full text-left text-body font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 py-2 flex items-center justify-between"
              >
                Projets
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileProjectsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileProjectsOpen && (
                <div className="pl-4 flex flex-col gap-2 mt-2 border-l border-border">
                  {projectLinks.map((project) => (
                    <Link
                      key={project.href}
                      to={project.href}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileProjectsOpen(false);
                      }}
                      className="text-small text-muted-foreground hover:text-foreground transition-colors duration-200 py-1"
                    >
                      {project.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
