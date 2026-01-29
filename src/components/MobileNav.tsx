import { useState, useEffect } from 'react';
import { Home, Briefcase, Compass, Building2, Heart, Mail, Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useLanguage } from './LanguageProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { id: 'hero', icon: Home, labelKey: 'nav.home' },
  { id: 'core-studio', icon: Briefcase, labelKey: 'nav.freelance' },
  { id: 'approche', icon: Compass, labelKey: 'nav.approach' },
  { id: 'experience', icon: Building2, labelKey: 'nav.experience' },
  { id: 'about', icon: Heart, labelKey: 'nav.hobbies' },
  { id: 'contact', icon: Mail, labelKey: 'nav.contact' },
];

export function MobileNav() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (!isHomePage) return;
    
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const handleNavClick = (id: string) => {
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/#' + id;
    }
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-2 pb-safe">
      <div className="glass-card rounded-2xl px-2 py-2 flex items-center justify-between border border-border/30 shadow-xl backdrop-blur-xl mx-2">
        {/* Main nav items */}
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`flex flex-col items-center gap-0.5 p-2 rounded-xl transition-all duration-200 min-w-[44px] ${
              activeSection === item.id && isHomePage
                ? 'bg-accent/20 text-accent'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            aria-label={t(item.labelKey)}
          >
            <item.icon className="w-4 h-4" />
            <span className="text-[9px] font-medium leading-none">{t(item.labelKey).slice(0, 6)}</span>
          </button>
        ))}

        {/* Divider */}
        <div className="w-px h-8 bg-border/50" />

        {/* Language toggle */}
        <button
          onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
          className="flex flex-col items-center gap-0.5 p-2 rounded-xl text-muted-foreground hover:text-foreground transition-all duration-200 min-w-[44px]"
          aria-label={language === 'fr' ? 'Switch to English' : 'Passer en français'}
        >
          <Globe className="w-4 h-4" />
          <span className="text-[9px] font-medium leading-none uppercase">{language}</span>
        </button>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="flex flex-col items-center gap-0.5 p-2 rounded-xl text-muted-foreground hover:text-foreground transition-all duration-200 min-w-[44px]"
          aria-label={theme === 'dark' ? 'Light mode' : 'Dark mode'}
        >
          {theme === 'dark' ? (
            <Sun className="w-4 h-4" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
          <span className="text-[9px] font-medium leading-none">
            {theme === 'dark' ? 'Light' : 'Dark'}
          </span>
        </button>
      </div>
    </nav>
  );
}
