"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navigation() {  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
    useEffect(() => {
    const handleScroll = () => {
      const newScrolled = window.scrollY > 50;
      setScrolled(newScrolled);
      
      // Active section detection
      const sections = ["home", "about", "music", "members", "events", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);  const navItems = [
    { href: "#home", label: "Ana Sayfa", id: "home" },
    { href: "#about", label: "Hakkımızda", id: "about" },
    { href: "#music", label: "Müzik", id: "music" },
    { href: "#members", label: "Grup Üyeleri", id: "members" },
    { href: "#events", label: "Etkinlikler", id: "events" },
    { href: "#contact", label: "İletişim", id: "contact" },
  ];
  return (
    <>      {/* Mobile Menu Button - Always visible on mobile, outside navbar */}
      <motion.div 
        className="md:hidden fixed z-[100]"
        style={{
          top: scrolled ? '8px' : '12px',
          left: 'calc(100vw - 52px)', // Viewport width eksi buton genişliği eksi margin
        }}
        transition={{ duration: 0.3 }}
      >        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className={`
            text-white cursor-pointer rounded-lg border transition-all duration-300 relative
            ${scrolled 
              ? 'bg-black/40 backdrop-blur-md border-white/30 shadow-lg' 
              : 'bg-black/25 backdrop-blur-sm border-white/25'
            }
          `}
          style={{ 
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0',
            margin: '0',
            boxSizing: 'border-box'
          }}
        ><motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center"
            style={{
              width: '18px',
              height: '18px'
            }}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.div>
        </motion.button>
      </motion.div>      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "top-0"
            : "top-0"
        }`}
      >      <div className={`
        max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500
        ${scrolled ? 'py-1' : 'py-0'}
      `}>
        {/* Mobile Menu Button - Container içinde güvenli */}
        <motion.div 
          className="md:hidden absolute z-[100]"
          style={{
            top: scrolled ? '8px' : '12px',
            right: '8px',
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            className={`
              text-white cursor-pointer rounded-lg border transition-all duration-300 relative
              ${scrolled 
                ? 'bg-black/40 backdrop-blur-md border-white/30 shadow-lg' 
                : 'bg-black/25 backdrop-blur-sm border-white/25'
              }
            `}
            style={{ 
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0',
              margin: '0',
              boxSizing: 'border-box'
            }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center"
              style={{
                width: '18px',
                height: '18px'
              }}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.div>
          </motion.button>
        </motion.div>

        <div className={`
          flex items-center h-16 transition-all duration-500
          ${scrolled 
            ? 'justify-center' 
            : 'justify-between'
          }
        `}>
          {/* Logo - visible only when not scrolled */}
          <motion.div
            animate={{
              opacity: scrolled ? 0 : 1,
              scale: scrolled ? 0.8 : 1,
              x: scrolled ? -100 : 0
            }}
            transition={{ duration: 0.5 }}
            className={`
              flex items-center absolute left-4 sm:left-6 lg:left-8
              ${scrolled ? 'pointer-events-none' : 'pointer-events-auto'}
            `}
          >
            <span 
              className="text-2xl font-bold text-white font-display"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Issızlar
            </span>
          </motion.div>          {/* Desktop Menu - Normal state */}
          {!scrolled && (
            <div className="hidden md:flex items-center space-x-1 relative">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    px-4 py-2 rounded-lg transition-colors duration-200 relative z-10 cursor-pointer
                    ${activeSection === item.id 
                      ? 'text-white font-medium' 
                      : 'text-slate-300 hover:text-white'
                    }
                  `}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(item.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {item.label}
                  
                  {/* Active tab indicator */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-blue-600/25 border border-blue-500/40 rounded-lg shadow-lg"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30
                      }}
                    />
                  )}
                </motion.a>              ))}
            </div>
          )}
        </div>{/* Scrolled state - Compact oval center menu */}
        {scrolled && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-full px-4 py-2 border border-white/20 shadow-2xl">
              <div className="flex items-center space-x-0.5">
                {navItems.map((item) => (                  <motion.a
                    key={item.href}
                    href={item.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      px-3 py-1.5 rounded-lg transition-colors duration-200 relative z-10 cursor-pointer text-sm
                      ${activeSection === item.id 
                        ? 'text-white font-medium' 
                        : 'text-slate-300 hover:text-white'
                      }
                    `}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(item.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {item.label}
                    
                    {/* Active tab indicator */}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeTabScrolled"
                        className="absolute inset-0 bg-blue-600/25 border border-blue-500/40 rounded-lg shadow-lg"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30
                        }}
                      />
                    )}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}        {/* Mobile Menu - Bottom slide-up overlay */}
        <AnimatePresence>
          {isOpen && (
            <>              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[90]"
              />
              
              {/* Mobile Menu Panel */}
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30 
                }}
                className="md:hidden fixed bottom-0 left-0 right-0 z-[95] bg-slate-900/95 backdrop-blur-xl rounded-t-3xl border-t border-white/20 shadow-2xl"
              >
              {/* Handle bar */}
              <div className="flex justify-center pt-4 pb-2">
                <div className="w-12 h-1 bg-slate-400 rounded-full"></div>
              </div>
              
              {/* Menu header */}
              <div className="px-6 pb-4">
                <h3 className="text-lg font-semibold text-white text-center">
                  Menü
                </h3>
              </div>
              
              {/* Menu items */}
              <div className="px-6 pb-8 space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                      flex items-center justify-between px-4 py-4 rounded-xl transition-all duration-200 cursor-pointer
                      ${activeSection === item.id 
                        ? 'text-white bg-blue-600/20 border border-blue-500/40' 
                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                      }
                    `}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      const element = document.getElementById(item.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <span className="text-lg font-medium">{item.label}</span>
                    {activeSection === item.id && (
                      <motion.div
                        className="w-2 h-2 bg-blue-500 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.a>
                ))}
              </div>
                {/* Safe area for mobile bottom bar */}
              <div className="h-8"></div>
            </motion.div>
          </>
        )}
        </AnimatePresence>
      </div>
      
      {/* Mobile Menu - Old version (hidden) */}
      <div className="hidden">
        {isOpen && !scrolled && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-md rounded-lg mt-2"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  whileHover={{ x: 10 }}
                  className={`
                    block px-3 py-2 rounded-lg transition-colors duration-200 cursor-pointer relative
                    ${activeSection === item.id 
                      ? 'text-white bg-blue-600/20 border-l-2 border-blue-500' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }
                  `}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    const element = document.getElementById(item.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>        )}
      </div>
    </motion.nav>
    </>
  );
}
