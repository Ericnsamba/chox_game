import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  className?: string;
  onClick: any;
  disabled?: boolean; 

}

const Button: React.FC<ButtonProps> = ({ children, variant, className = '', onClick, disabled = false}) => {
  const baseClasses = 'overflow-hidden gap-2.5 self-stretch px-4 py-4 text-sm font-medium tracking-tighter leading-snug rounded';
  const variantClasses = {
    primary: 'text-black  w-full ',
    secondary: 'text-white border border-white border-solid w-full w-full rounded'
  };

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;