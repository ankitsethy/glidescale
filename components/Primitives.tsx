import React from 'react';

interface SectionEyebrowProps {
  children: React.ReactNode;
  className?: string;
  center?: boolean;
}

export const SectionEyebrow: React.FC<SectionEyebrowProps> = ({ children, className = '', center }) => (
  <span className={`eyebrow ${center ? 'eyebrow-center' : ''} ${className}`}>{children}</span>
);

interface PrimaryCTAProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulse?: boolean;
}

export const PrimaryCTA: React.FC<PrimaryCTAProps> = ({ children, className = '', pulse, ...props }) => (
  <button {...props} className={`btn-primary ${pulse ? 'btn-shimmer-pulse' : ''} ${className}`}>
    <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
  </button>
);

export const SecondaryCTA: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <button {...props} className={`btn-secondary ${className}`}>
    <span className="inline-flex items-center gap-2">{children}</span>
  </button>
);

interface GradientBorderCardProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'article';
}

export const GradientBorderCard: React.FC<GradientBorderCardProps> = ({
  children,
  className = '',
  as: Tag = 'div',
}) => (
  <Tag className={`gradient-border-card ${className}`}>{children}</Tag>
);
