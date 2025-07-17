import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { animated, useSpring } from '@react-spring/web';
import { Menu, X, Code2, Home, User, Briefcase, Mail, Settings } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerSpring = useSpring({
    backgroundColor: scrolled 
      ? 'rgba(15, 23, 42, 0.95)' 
      : 'rgba(15, 23, 42, 0)',
    backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
    borderColor: scrolled 
      ? 'rgba(255, 255, 255, 0.1)' 
      : 'rgba(255, 255, 255, 0)',
    transform: scrolled ? 'translateY(0px)' : 'translateY(0px)',
    config: { tension: 300, friction: 30 }
  });

  const mobileMenuSpring = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0px)' : 'translateY(-20px)',
    config: { tension: 300, friction: 25 }
  });

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Services', href: '#services', icon: Settings },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <animated.header
      style={headerSpring}
      className="fixed top-0 w-full z-50 border-b transition-all duration-300"
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                Amusan Kayode
              </span>
              <div className="text-xs text-gray-400 font-mono">
                MERN • DevOps • ERP
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }
                }}
                className="group relative px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/5"
              >
                <div className="flex items-center space-x-2">
                  <item.icon className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                    {item.name}
                  </span>
                </div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></div>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300"
          >
            <div className="relative w-5 h-5">
              <span className={`absolute block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 top-2' : 'top-1'}`}></span>
              <span className={`absolute block w-5 h-0.5 bg-white transition-all duration-300 top-2 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 top-2' : 'top-3'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <animated.nav
            style={mobileMenuSpring}
            className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl mx-4 mt-2 p-6 shadow-2xl"
          >
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith('#')) {
                      e.preventDefault();
                      handleNavClick(item.href);
                    } else {
                      setIsOpen(false);
                    }
                  }}
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <item.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
          </animated.nav>
        )}
      </div>
    </animated.header>
  );
};

export default Header;