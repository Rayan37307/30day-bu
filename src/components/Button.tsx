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
    <span className="relative inline-flex items-center gap-2 px-6 py-3 border-1 border-red-500 font-semibold text-red-50 bg-gradient-to-tr from-red-900/50 via-red-900/90 to-red-900/50 ring-4 ring-red-900/20 rounded-full overflow-hidden hover:opacity-90 transition-opacity before:absolute before:top-4 before:left-1/2 before:-translate-x-1/2 before:w-[100px] before:h-[100px] before:rounded-full before:bg-gradient-to-b before:from-red-50/10 before:blur-xl cursor-pointer">
      {icon && <span className="relative z-10">{icon}</span>}
      <span className="relative z-10">{children}</span>
    </span>
  );

  const baseClasses = `border-none bg-transparent p-0 outline-none font-sans inline-block ${className}`;

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
