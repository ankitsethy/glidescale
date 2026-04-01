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
    primary: `
      bg-gradient-to-b from-electric-400 to-electric-500 text-white rounded-[6px] px-[30px] py-[14px] min-h-[48px] font-semibold text-base
      shadow-[0_0_24px_-4px_rgba(99,102,241,0.55),inset_0_1px_0_rgba(255,255,255,0.18)]
      hover:shadow-[0_0_44px_-4px_rgba(99,102,241,0.75),inset_0_1px_0_rgba(255,255,255,0.25)]
      border border-electric-400/30
      hover:brightness-110
      hover:scale-[1.02] active:scale-[0.98]
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/15 before:to-transparent before:-translate-x-full hover:before:animate-[shimmer_1.5s_infinite]
    `,

    secondary: `
      bg-white/[0.04] border border-white/12 text-gray-300
      hover:text-white hover:border-white/25 hover:bg-white/[0.08]
      rounded-[6px] px-[30px] py-[14px] min-h-[48px] font-semibold text-base backdrop-blur-md
      shadow-sm hover:shadow-[0_0_20px_-8px_rgba(255,255,255,0.15)]
      transition-all duration-300
    `,

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
