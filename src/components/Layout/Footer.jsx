import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import MobileMenu from './MobileMenu';

const Footer = () => {
  return (
    <>
      <MobileMenu />

      <footer className="bg-secondary text-white safe-area-bottom">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Контакты
              </h3>
              <div className="space-y-2">
                <a href="tel:+78001234567" className="block hover:text-primary transition-colors">
                  📞 8 (800) 123-45-67
                </a>
                <a href="mailto:info@stroymarket.ru" className="block hover:text-primary transition-colors">
                  ✉️ info@stroymarket.ru
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Адрес
              </h3>
              <p className="text-gray-300">
                г. Москва, ул. Строителей, 15<br />
                Стройпарк "Металлург"
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Режим работы
              </h3>
              <p className="text-gray-300">
                Пн-Пт: 8:00-20:00<br />
                Сб-Вс: 9:00-18:00<br />
                <span className="text-accent font-semibold">Круглосуточная аренда</span>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Соцсети</h3>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 my-6"></div>

          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© 2024 СтройМатериалы & Техника. Все права защищены.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Договор оферты</a>
            </div>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-24 right-6 z-30 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center ios-button shadow-lg"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;