import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group tracking-wide";
  
  const variants = {
    // Visuo-style Glow Button
    primary: `
      bg-electric-500 text-white rounded-full px-8 py-4 text-base 
      shadow-[0_0_20px_-5px_rgba(99,102,241,0.4)]
      hover:shadow-[0_0_40px_-5px_rgba(99,102,241,0.6)]
      border border-electric-400/20
      hover:scale-[1.02] active:scale-[0.98]
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full hover:before:animate-[shimmer_1.5s_infinite]
    `,
    
    // Glass Secondary
    secondary: `
      bg-white/[0.03] border border-white/10 text-gray-300 
      hover:text-white hover:border-white/30 hover:bg-white/[0.08]
      rounded-full px-8 py-4 text-base backdrop-blur-md
      shadow-sm hover:shadow-md
    `,
    
    // Text Link
    text: "text-gray-400 hover:text-white text-base hover:translate-x-1 transition-transform"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </span>
    </button>
  );
};