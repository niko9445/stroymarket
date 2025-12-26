import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Truck, Phone } from 'lucide-react'; // Добавили импорт иконок
import CompactHeader from './components/Layout/CompactHeader';
import CompactHero from './components/Sections/CompactHero';
import ServicesSection from './components/Sections/ServicesSection';

function App() {
  useEffect(() => {
    // Устанавливаем высоту для iOS
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);
    
    return () => {
      window.removeEventListener('resize', setVH);
      window.removeEventListener('orientationchange', setVH);
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-950 overflow-x-hidden" style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}>
      {/* Хедер */}
      <CompactHeader />

      {/* Hero секция */}
      <CompactHero />

      {/* Секция услуг */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ServicesSection />
      </motion.div>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-dark-950/50">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">СтройТех</div>
                  <div className="text-sm text-gray-400">Материалы & Аренда</div>
                </div>
              </div>
              <p className="text-gray-500 text-sm">
                Профессиональные строительные материалы и аренда техники с 2010 года
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-6">Контакты</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+78001234567">8 (800) 123-45-67</a>
                </li>
                <li className="text-gray-400">Москва, ул. Строителей, 15</li>
                <li className="text-gray-400">Пн-Вс: 8:00-22:00</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-6">Услуги</h4>
              <ul className="space-y-3">
                <li><a href="#services" className="text-gray-400 hover:text-primary-500 transition-colors">Аренда техники</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-primary-500 transition-colors">Строительные материалы</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-primary-500 transition-colors">Доставка</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-primary-500 transition-colors">Монтажные работы</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-6">Быстрая связь</h4>
              <p className="text-gray-400 text-sm mb-4">
                Оставьте заявку и мы перезвоним в течение 15 минут
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full btn-primary"
              >
                Заказать звонок
              </motion.button>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>© 2024 СтройТех. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;