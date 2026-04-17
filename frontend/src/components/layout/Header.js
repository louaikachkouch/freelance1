import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Hexagon, Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../ui/Button';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-white">
            <Hexagon size={20} className="fill-white/20" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">Novaflow</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                  {link.href.startsWith('/#') ? (
                    <a
                      href={link.href}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <NavLink
                      to={link.href}
                      className={({ isActive }) =>
                        `text-sm font-medium transition-colors ${
                          isActive
                            ? 'text-foreground'
                            : 'text-muted-foreground hover:text-foreground'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="font-medium">
              Log in
            </Button>
            <Button>Get Started</Button>
          </div>
        </nav>

        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-border/50 shadow-xl md:hidden p-4 flex flex-col gap-4"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('/#') ? (
                    <a
                      href={link.href}
                      className="block py-2 text-base font-medium text-muted-foreground hover:text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <NavLink
                      to={link.href}
                      className={({ isActive }) =>
                        `block py-2 text-base font-medium ${
                          isActive
                            ? 'text-foreground'
                            : 'text-muted-foreground hover:text-foreground'
                        }`
                      }
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
              <Button variant="outline" className="w-full">
                Log in
              </Button>
              <Button className="w-full">Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
