import { useState, useEffect } from 'react';
import { Home, Briefcase, Sparkles, Building2, Mail } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Moon, Sun } from 'lucide-react';

const navItems = [
  { id: 'hero', icon: Home, label: 'Accueil' },
  { id: 'core-studio', icon: Briefcase, label: 'Freelance' },
  { id: 'approche', icon: Sparkles, label: 'Approche' },
  { id: 'experience', icon: Building2, label: 'Expériences' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

export function BottomNav() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
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
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-md">
      <div className="glass-card rounded-full px-2 py-2 flex items-center justify-between gap-1 border border-border/50 shadow-lg">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`group relative flex items-center justify-center p-3 rounded-full transition-all duration-200 ${
              activeSection === item.id
                ? 'bg-accent text-accent-foreground'
                : 'hover:bg-surface-2 text-muted-foreground hover:text-foreground'
            }`}
            aria-label={item.label}
          >
            <item.icon className="w-5 h-5" />
            {/* Tooltip - desktop only */}
            <span className="absolute bottom-full mb-2 px-2 py-1 text-xs font-medium bg-surface border border-border rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none hidden md:block">
              {item.label}
            </span>
          </button>
        ))}
        
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="p-3 rounded-full hover:bg-surface-2 text-muted-foreground hover:text-foreground transition-all duration-200"
          aria-label={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
      </div>
    </nav>
  );
}
