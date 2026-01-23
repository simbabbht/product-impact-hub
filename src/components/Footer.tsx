import { Leaf } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          {/* Copyright */}
          <p className="text-small text-muted-foreground">
            © {currentYear} Portfolio PO. Tous droits réservés.
          </p>

          {/* Green IT callout */}
          <div className="flex items-center gap-2 text-small text-muted-foreground">
            <Leaf className="w-4 h-4 text-accent" />
            <span>Site léger & sobre — Green IT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
