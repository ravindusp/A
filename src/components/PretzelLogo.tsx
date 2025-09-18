import React from 'react';

interface PretzelLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  logoSrc?: string; // optional external logo image (e.g., Adobe Express PNG)
}

const PretzelLogo: React.FC<PretzelLogoProps> = ({ className = '', size = 'md', logoSrc }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`${sizeClasses[size]} relative`}>
        {logoSrc ? (
          <img src={logoSrc} alt="Pretzels & Co. logo" className="w-full h-full object-contain" />
        ) : (
          <svg viewBox="0 0 40 40" className="w-full h-full">
            {/* Pretzel Icon */}
            <path d="M20 8 C12 8, 8 12, 8 16 C8 18, 10 20, 12 20 C10 20, 8 22, 8 24 C8 28, 12 32, 20 32 C28 32, 32 28, 32 24 C32 22, 30 20, 28 20 C30 20, 32 18, 32 16 C32 12, 28 8, 20 8 Z" 
                  fill="hsl(var(--primary))" className="opacity-90" stroke="hsl(var(--secondary))" strokeWidth="2" />
            <circle cx="16" cy="16" r="2" fill="hsl(var(--accent))" />
            <circle cx="24" cy="24" r="2" fill="hsl(var(--accent))" />
            <circle cx="20" cy="20" r="1.5" fill="hsl(var(--secondary))" />
          </svg>
        )}
      </div>
      <span className={`font-bold tracking-wide ${
        size === 'sm' ? 'text-lg' : size === 'md' ? 'text-2xl' : 'text-4xl'
      } bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent`}>
        Pretzels <span className="text-primary">&</span> Co.
      </span>
    </div>
  );
};

export default PretzelLogo;