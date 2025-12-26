import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Ruler, ArrowRight, Phone, Zap, Shield, Clock } from 'lucide-react'; // Zap вместо Sparkles
import OrderModal from '../Modals/OrderModal';


const CompactHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: Truck,
      title: 'Аренда манипулятора',
      price: 'от 3 000₽/час',
      desc: 'Грузоподъемность до 25т',
      color: 'from-primary-500 to-orange-500',
    },
    {
      icon: Ruler,
      title: 'Прокат дальномера',
      price: 'от 500₽/сутки',
      desc: 'Лазерный, точность ±1мм',
      color: 'from-accent-500 to-emerald-500',
    },
  ];

  const features = [
    { icon: Shield, text: 'Гарантия качества', desc: 'Проверенная техника' },
    { icon: Clock, text: '24/7 Работаем', desc: 'Круглосуточная аренда' },
    { icon: Zap, text: 'Быстрая подача', desc: 'В течение 60 минут' }, // Изменено
  ];

  const handleOrderClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="hero" className="min-h-screen relative overflow-hidden pt-20">
        {/* Анимированный фон */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-accent-500/10 to-primary-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>

        <div className="relative section-padding py-12">
          <div className="max-w-6xl mx-auto">
            {/* Заголовок */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="inline-block mb-6"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-2xl">
                  <Truck className="w-10 h-10 text-white" />
                </div>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-white">Строительные </span>
                <span className="text-gradient">материалы</span>
                <br />
                <span className="text-white">и аренда </span>
                <span className="text-gradient">техники</span>
              </h1>
              
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                Всё для вашей стройки в одном месте. Быстро, надежно, выгодно.
              </p>
            </motion.div>

            {/* Услуги */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass-panel p-6 hover-lift cursor-pointer"
                  onClick={() => handleOrderClick(service)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">{service.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{service.desc}</p>
                      <div className="text-xl font-bold text-gradient">{service.price}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-500" />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Преимущества */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-dark-800/50"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <div className="font-medium text-white mb-1">{feature.text}</div>
                  <div className="text-sm text-gray-500">{feature.desc}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA кнопки */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedService(null);
                  setIsModalOpen(true);
                }}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Заказать звонок
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <ArrowRight className="w-5 h-5" />
                Все услуги
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Модальное окно заказа */}
      <OrderModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        service={selectedService}
      />
    </>
  );
};

export default CompactHero;