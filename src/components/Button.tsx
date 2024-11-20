import React from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-6 py-2 rounded-full transition text-lg';
  const variants = {
    primary: 'bg-[#546cfc] text-white hover:bg-[#546cfc]/90',
    secondary: 'bg-white text-[#546cfc] border-2 border-white hover:bg-gray-100 hover:border-gray-100'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}