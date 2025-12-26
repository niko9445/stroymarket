import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Ruler, Drill, Hammer, Wrench, Package } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: Truck, title: 'Аренда манипулятора', price: 'от 3000₽/час', desc: 'Грузоподъемность до 15 тонн' },
    { icon: Ruler, title: 'Прокат дальномера', price: 'от 500₽/сутки', desc: 'Лазерный, точность ±1.5мм' },
    { icon: Drill, title: 'Строительный инструмент', price: 'от 800₽/день', desc: 'Дрели, перфораторы, болгарки' },
    { icon: Hammer, title: 'Демонтажные работы', price: 'от 2000₽/м²', desc: 'Профессиональный демонтаж' },
    { icon: Wrench, title: 'Монтаж конструкций', price: 'договорная', desc: 'Каркасы, перегородки, кровля' },
    { icon: Package, title: 'Доставка материалов', price: 'от 1500₽/рейс', desc: 'По Москве и области' },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-secondary mb-4">Наши услуги</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Полный спектр строительных услуг от аренды техники до профессионального монтажа
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-3">{service.desc}</p>
              <div className="text-lg font-bold text-primary">{service.price}</div>
              <button className="mt-4 w-full py-2 bg-gray-100 hover:bg-primary hover:text-white rounded-lg transition-colors">
                Подробнее
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;