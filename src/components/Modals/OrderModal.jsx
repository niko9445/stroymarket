import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, Clock, User, Check } from 'lucide-react';
import Modal from '../UI/Modal';

const OrderModal = ({ isOpen, onClose, service }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    details: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет отправка формы
    console.log('Форма отправлена:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', date: '', time: '', details: '' });
    }, 2000);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Заказ услуги">
      {isSubmitted ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-center py-8"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-500/20 to-primary-500/20 flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-accent-500" />
          </div>
          <h4 className="text-2xl font-bold mb-2">Заявка отправлена!</h4>
          <p className="text-gray-400">Мы свяжемся с вами в течение 15 минут</p>
        </motion.div>
      ) : (
        <>
          {service && (
            <div className="mb-6 p-4 rounded-xl bg-dark-800/50">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <h4 className="font-bold text-white">{service.title}</h4>
                  <p className="text-sm text-gray-400">{service.price}</p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Ваше имя
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                placeholder="Иван Иванов"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                <Phone className="w-4 h-4 inline mr-2" />
                Телефон
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                placeholder="+7 (999) 123-45-67"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Дата
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  <Clock className="w-4 h-4 inline mr-2" />
                  Время
                </label>
                <input
                  type="time"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Дополнительные детали
              </label>
              <textarea
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors h-32"
                placeholder="Адрес, особые требования и т.д."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full btn-primary py-4 mt-6"
            >
              Заказать услугу
            </motion.button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </form>
        </>
      )}
    </Modal>
  );
};

export default OrderModal;