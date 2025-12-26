import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Ruler, ArrowRight, Phone } from 'lucide-react';
import Button from '../UI/Button';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen relative overflow-hidden safe-area-top"
      style={{
        background: 'linear-gradient(135deg, #1F2937 0%, #374151 100%)',
      }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full animate-pulse blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full animate-float blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-danger flex items-center justify-center shadow-2xl">
              <Truck className="w-10 h-10 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            СтройМатериалы & <span className="text-primary">Техника</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Всё для стройки в одном месте. Аренда манипуляторов, доставка материалов, профессиональное оборудование
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-2xl p-6 text-left"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Аренда манипулятора</h3>
                  <p className="text-gray-400 text-sm">от 3000₽/час</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-2xl p-6 text-left"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Ruler className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Прокат дальномера</h3>
                  <p className="text-gray-400 text-sm">от 500₽/сутки</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              variant="primary"
              icon={Phone}
              className="text-lg py-4 px-8"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Заказать звонок
            </Button>
            
            <Button
              variant="outline"
              icon={ArrowRight}
              className="text-lg py-4 px-8 border-white text-white hover:bg-white/10"
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
            >
              Все услуги
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-6 max-w-md mx-auto"
          >
            {[
              { value: '500+', label: 'Клиентов' },
              { value: '50+', label: 'Единиц техники' },
              { value: '24/7', label: 'Работаем' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/80 to-transparent" />
    </section>
  );
};

export default Hero;