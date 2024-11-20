import React from 'react';

type NavigationProps = {
  items: string[];
  variant?: 'header' | 'footer' | 'transparent';
};

export function Navigation({ items, variant = 'header' }: NavigationProps) {
  const baseStyles = "transition-colors duration-200";
  const styles = {
    header: "text-white hover:text-white/80 text-sm font-medium",
    footer: "text-white hover:text-white/80 text-sm",
    transparent: "text-gray-900 hover:text-gray-600 text-sm font-medium"
  };

  return (
    <nav className={`flex ${variant === 'footer' ? 'flex-wrap justify-center gap-6' : 'gap-8'}`}>
      {items.map((item) => (
        <a
          key={item}
          href="#"
          className={`${baseStyles} ${styles[variant]} ${
            item === 'Contact' && variant === 'transparent'
              ? 'bg-[#A2A2A2] px-6 py-2 rounded-full text-white hover:text-white hover:bg-[#A2A2A2]/90'
              : ''
          }`}
        >
          {item}
        </a>
      ))}
    </nav>
  );
}