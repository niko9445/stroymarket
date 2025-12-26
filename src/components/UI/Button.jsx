import React from 'react';
import { clsx } from 'clsx';

const Button = ({ children, variant = 'primary', className, icon: Icon, ...props }) => {
  const variants = {
    primary: 'bg-primary text-white hover:bg-orange-600 active:bg-orange-700',
    secondary: 'bg-secondary text-white hover:bg-gray-800 active:bg-gray-900',
    outline: 'border-2 border-primary text-primary hover:bg-primary/10',
    danger: 'bg-danger text-white hover:bg-red-600',
  };

  return (
    <button
      className={clsx(
        'ios-button px-6 py-3 rounded-xl font-semibold transition-all duration-200',
        'flex items-center justify-center gap-2 active:scale-95 shadow-md hover:shadow-lg',
        variants[variant],
        className
      )}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
};

export default Button;