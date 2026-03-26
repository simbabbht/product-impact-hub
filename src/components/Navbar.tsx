import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';
import { useLanguage } from '@/components/LanguageProvider';
import { Moon, Sun, Briefcase, Building2, Heart, Mail, Globe, Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

const navItems = [
  { id: 'accompagnement', icon: Briefcase, labelKey: 'nav.freelance' },
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <TooltipProvider delayDuration={200}>
      {/* Desktop Navbar - larger, more premium */}
      <nav 
        className={`hidden lg:block fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled ? 'top-3' : 'top-5'
        }`}
      >
        <div className="glass-card rounded-full px-4 py-2.5 flex items-center gap-1.5 border border-border/30 shadow-lg backdrop-blur-xl">
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
                className="px-3 py-1.5 rounded-full text-base font-semibold gradient-text hover:bg-surface-2/50 transition-colors"
              >
                SB
              </button>
            </TooltipTrigger>
            <TooltipContent side="bottom" sideOffset={8} className="text-xs">
              {t('nav.home')}
            </TooltipContent>
          </Tooltip>

          <div className="w-px h-5 bg-border/50 mx-1" />

          {/* Nav Items - larger icons */}
          {navItems.map((item) => (
            <Tooltip key={item.id}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-surface-2/50 transition-all duration-200"
                  aria-label={t(item.labelKey)}
                >
                  <item.icon className="w-[18px] h-[18px]" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={8} className="text-xs">
                {t(item.labelKey)}
              </TooltipContent>
            </Tooltip>
          ))}

          <div className="w-px h-5 bg-border/50 mx-1" />

          {/* Language Toggle */}
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-surface-2/50 transition-all duration-200 flex items-center gap-1"
                aria-label={language === 'fr' ? 'Switch to English' : 'Passer en français'}
              >
                <Globe className="w-[18px] h-[18px]" />
                <span className="text-xs font-medium uppercase">{language}</span>
              </button>
            </TooltipTrigger>
            <TooltipContent side="bottom" sideOffset={8} className="text-xs">
              {language === 'fr' ? 'English' : 'Français'}
            </TooltipContent>
          </Tooltip>

          {/* Theme Toggle */}
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-surface-2/50 transition-all duration-200"
                aria-label={theme === 'dark' ? 'Light mode' : 'Dark mode'}
              >
                {theme === 'dark' ? (
                  <Sun className="w-[18px] h-[18px]" />
                ) : (
                  <Moon className="w-[18px] h-[18px]" />
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent side="bottom" sideOffset={8} className="text-xs">
              {theme === 'dark' ? t('nav.lightMode') : t('nav.darkMode')}
            </TooltipContent>
          </Tooltip>
        </div>
      </nav>

      {/* Mobile Navbar - compact toolbar style */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50">
        <div className={`flex justify-center transition-all duration-300 ${isScrolled ? 'pt-2' : 'pt-3'}`}>
          <div className="glass-card rounded-full px-3 py-1.5 flex items-center gap-2 border border-border/30 shadow-lg backdrop-blur-xl">
            {/* Logo */}
            <button
              onClick={() => {
                if (isHomePage) {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  navigate('/');
                }
              }}
              className="px-2 py-1 text-sm font-semibold gradient-text"
            >
              SB
            </button>

            <div className="w-px h-4 bg-border/50" />

            {/* Theme */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full text-muted-foreground hover:text-foreground transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Burger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded-full text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="flex justify-center mt-2 px-4">
            <div className="glass-card rounded-2xl p-2 border border-border/30 shadow-xl backdrop-blur-xl animate-fade-in w-full max-w-xs">
              <div className="flex flex-col gap-0.5">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="flex items-center gap-3 px-3 py-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-surface-2/50 transition-all duration-200 text-left"
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{t(item.labelKey)}</span>
                  </button>
                ))}
                
                <div className="w-full h-px bg-border/30 my-1" />
                
                {/* Language toggle */}
                <button
                  onClick={() => {
                    setLanguage(language === 'fr' ? 'en' : 'fr');
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-surface-2/50 transition-all duration-200 text-left"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">{language === 'fr' ? 'English' : 'Français'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </TooltipProvider>
  );
}
