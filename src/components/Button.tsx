import React from 'react';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  as?: 'button' | 'a';
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

export function Button({ children, as = 'button', href, onClick, className = '', icon, ...props }: ButtonProps) {
  const content = (
    <div className="relative w-full cursor-pointer group">
      {/* Weighted 3D Button Body */}
      <div className="relative flex w-full items-center justify-center py-4 px-8 text-[1.1rem] font-bold text-white bg-gradient-to-b from-[#ff3333] to-[#cc0000] rounded-xl overflow-hidden border-b-[6px] border-[#8a0000] shadow-[0_10px_30px_rgba(204,0,0,0.4)] transition-all duration-150 ease-out active:border-b-[0px] active:translate-y-[6px] active:shadow-[0_2px_10px_rgba(204,0,0,0.6)] group-hover:brightness-110">
        
        <span className="relative z-10 tracking-[0.15em] uppercase font-sans drop-shadow-md">
          {children}
        </span>
      </div>
    </div>
  );

  const baseClasses = `relative group border-none bg-transparent p-0 outline-none cursor-pointer font-sans uppercase text-base inline-block ${className}`;

  if (as === 'a') {
    return (
      <a href={href} onClick={onClick} className={baseClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses} {...(props as any)}>
      {content}
    </button>
  );
}
