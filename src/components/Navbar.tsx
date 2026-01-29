import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';
import { useLanguage } from './LanguageProvider';
import { Moon, Sun, Briefcase, Compass, Building2, Heart, Mail, Globe, Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

const navItems = [
  { id: 'core-studio', icon: Briefcase, labelKey: 'nav.freelance' },
  { id: 'approche', icon: Compass, labelKey: 'nav.approach' },
  { id: 'experience', icon: Building2, labelKey: 'nav.experience' },
  { id: 'about', icon: Heart, labelKey: 'nav.hobbies' },
  { id: 'contact', icon: Mail, labelKey: 'nav.contact' },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  const handleNavClick = (id: string) => {
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/#' + id;
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <TooltipProvider delayDuration={200}>
      {/* Desktop Navbar */}
      <nav 
        className={`hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled ? 'top-3' : 'top-4'
        }`}
      >
        <div className="glass-card rounded-full px-2.5 py-1 flex items-center gap-0.5 border border-border/30 shadow-lg backdrop-blur-xl">
          {/* Logo */}
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => {
                  if (isHomePage) {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    navigate('/');
                  }
                }}
                className="px-2.5 py-1.5 rounded-full text-sm font-semibold gradient-text hover:bg-surface-2/50 transition-colors"
              >
                SB
              </button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="text-xs">
              {t('nav.home')}
            </TooltipContent>
          </Tooltip>

          <div className="w-px h-3.5 bg-border/50 mx-0.5" />

          {/* Nav Items */}
          {navItems.map((item) => (
            <Tooltip key={item.id}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-surface-2/50 transition-all duration-200"
                  aria-label={t(item.labelKey)}
                >
                  <item.icon className="w-3.5 h-3.5" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="text-xs">
                {t(item.labelKey)}
              </TooltipContent>
            </Tooltip>
          ))}

          <div className="w-px h-3.5 bg-border/50 mx-0.5" />

          {/* Language Toggle */}
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-surface-2/50 transition-all duration-200 flex items-center gap-0.5"
                aria-label={language === 'fr' ? 'Switch to English' : 'Passer en français'}
              >
                <Globe className="w-3.5 h-3.5" />
                <span className="text-[10px] font-medium uppercase">{language}</span>
              </button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="text-xs">
              {language === 'fr' ? 'English' : 'Français'}
            </TooltipContent>
          </Tooltip>

          {/* Theme Toggle */}
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={toggleTheme}
                className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-surface-2/50 transition-all duration-200"
                aria-label={theme === 'dark' ? 'Light mode' : 'Dark mode'}
              >
                {theme === 'dark' ? (
                  <Sun className="w-3.5 h-3.5" />
                ) : (
                  <Moon className="w-3.5 h-3.5" />
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="text-xs">
              {theme === 'dark' ? t('nav.lightMode') : t('nav.darkMode')}
            </TooltipContent>
          </Tooltip>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50">
        <div className={`transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
          <div className="mx-3 glass-card rounded-2xl px-3 py-2 flex items-center justify-between border border-border/30 shadow-lg backdrop-blur-xl">
            {/* Logo */}
            <button
              onClick={() => {
                if (isHomePage) {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  navigate('/');
                }
              }}
              className="text-base font-semibold gradient-text"
            >
              SB
            </button>

            {/* Right side controls */}
            <div className="flex items-center gap-1">
              {/* Theme */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Burger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="mx-3 mt-1 glass-card rounded-2xl p-3 border border-border/30 shadow-xl backdrop-blur-xl animate-fade-in">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-surface-2/50 transition-all duration-200 text-left"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{t(item.labelKey)}</span>
                </button>
              ))}
              
              {/* Language toggle in mobile menu */}
              <button
                onClick={() => {
                  setLanguage(language === 'fr' ? 'en' : 'fr');
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-surface-2/50 transition-all duration-200 text-left"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{language === 'fr' ? 'English' : 'Français'}</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </TooltipProvider>
  );
}
