import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Home, Package, Wrench, Star, MessageCircle, Truck } from 'lucide-react'; // MessageCircle вместо MessageSquare

const CompactHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const menuItems = [
        { icon: Home, label: 'Главная', id: 'hero' },
        { icon: Package, label: 'Материалы', id: 'products' },
        { icon: Truck, label: 'Техника', id: 'equipment' },
        { icon: Wrench, label: 'Услуги', id: 'services' },
        { icon: Star, label: 'Отзывы', id: 'testimonials' },
        { icon: MessageCircle, label: 'Контакты', id: 'contact' }, // Изменено
    ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Компактный хедер */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'glass-panel mx-4 mt-4 rounded-2xl' 
            : 'bg-transparent'
        }`}
      >
        <div className="section-padding py-4">
          <div className="flex items-center justify-between">
            {/* Логотип */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold text-white">СтройТех</div>
                <div className="text-xs text-gray-400">Материалы & Аренда</div>
              </div>
            </motion.div>

            {/* Телефон и меню */}
            <div className="flex items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+78001234567"
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-800 hover:bg-dark-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-primary-500" />
                <span className="font-medium">8 (800) 123-45-67</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(true)}
                className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center"
              >
                <Menu className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Полноэкранное меню */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark-950/95 backdrop-blur-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Кнопка закрытия */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full glass-panel flex items-center justify-center"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Навигация */}
              <div className="grid grid-cols-2 gap-4 max-w-md">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.id)}
                    className="gradient-border p-4 text-center hover-lift"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div className="text-lg font-semibold">{item.label}</div>
                  </motion.button>
                ))}
              </div>

              {/* Контакты в меню */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-12 text-center"
              >
                <div className="text-2xl font-bold text-gradient mb-2">Звоните 24/7</div>
                <a href="tel:+78001234567" className="text-3xl font-bold hover:text-primary-400 transition-colors">
                  8 (800) 123-45-67
                </a>
                <div className="mt-4 text-gray-400">Москва, ул. Строителей, 15</div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CompactHeader;