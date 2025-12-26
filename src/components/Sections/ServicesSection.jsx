import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, Ruler, Drill, Hammer, Wrench, Package, 
  Building, PaintBucket, Warehouse, Circle 
} from 'lucide-react';
import OrderModal from '../Modals/OrderModal';

const ServicesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { icon: Truck, title: 'Аренда манипулятора', price: 'от 3 000₽/час', category: 'Техника', color: 'from-primary-500 to-orange-500' },
    { icon: Circle, title: 'Аренда крана', price: 'от 5 000₽/час', category: 'Техника', color: 'from-amber-500 to-yellow-500' }, // Заменили Crane на Circle
    { icon: Ruler, title: 'Прокат дальномера', price: 'от 500₽/сутки', category: 'Инструменты', color: 'from-accent-500 to-emerald-500' },
    { icon: Drill, title: 'Строительный инструмент', price: 'от 800₽/день', category: 'Инструменты', color: 'from-blue-500 to-cyan-500' },
    { icon: Hammer, title: 'Демонтажные работы', price: 'от 2 000₽/м²', category: 'Услуги', color: 'from-red-500 to-pink-500' },
    { icon: Building, title: 'Бетонные работы', price: 'от 4 000₽/м³', category: 'Услуги', color: 'from-gray-500 to-slate-500' }, // Building вместо Concrete
    { icon: Wrench, title: 'Монтаж конструкций', price: 'договорная', category: 'Услуги', color: 'from-violet-500 to-purple-500' },
    { icon: PaintBucket, title: 'Отделочные работы', price: 'от 1 500₽/м²', category: 'Услуги', color: 'from-indigo-500 to-blue-500' },
    { icon: Package, title: 'Доставка материалов', price: 'от 1 500₽/рейс', category: 'Доставка', color: 'from-green-500 to-teal-500' },
    { icon: Warehouse, title: 'Складское хранение', price: 'от 200₽/м²', category: 'Дополнительно', color: 'from-rose-500 to-red-500' },
  ];

  const categories = ['Все', 'Техника', 'Инструменты', 'Услуги', 'Доставка', 'Дополнительно'];
  const [activeCategory, setActiveCategory] = useState('Все');

  const filteredServices = activeCategory === 'Все' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="services" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950"></div>
        
        <div className="relative section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
              <span className="text-primary-500 font-medium">Наши услуги</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Полный спектр <span className="text-gradient">строительных услуг</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              От аренды техники до профессионального монтажа - всё для вашего проекта
            </p>
          </motion.div>

          {/* Фильтры категорий */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 justify-center mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                    : 'bg-dark-800 text-gray-400 hover:text-white hover:bg-dark-700'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Сетка услуг */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => handleServiceClick(service)}
              >
                <div className="h-full gradient-border overflow-hidden">
                  <div className="h-full p-6 bg-dark-900/50 group-hover:bg-dark-800/70 transition-all duration-300">
                    {/* Иконка */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Контент */}
                    <div className="mb-4">
                      <div className="inline-block px-3 py-1 rounded-full bg-dark-800 text-xs text-gray-400 mb-3">
                        {service.category}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gradient transition-colors">
                        {service.title}
                      </h3>
                      <div className="text-2xl font-bold text-gradient mb-3">{service.price}</div>
                    </div>

                    {/* Кнопка */}
                    <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm text-primary-500 font-medium">Заказать</span>
                      <div className="w-8 h-8 rounded-full bg-primary-500/10 flex items-center justify-center">
                        <div className="w-4 h-4 border-r-2 border-t-2 border-primary-500 rotate-45 translate-x-[-2px]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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

export default ServicesSection;