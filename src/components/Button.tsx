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
    <>
      <span
        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-lg transform translate-y-0.5 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px"
      ></span>

      <span
        className="absolute top-0 left-0 w-full h-full rounded-lg bg-[#5a0000]"
      ></span>

      <div
        className="relative flex w-full items-center justify-center py-3 px-6 text-lg text-white rounded-lg transform -translate-y-1 bg-electric-blue gap-3 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110"
      >
        <span className="select-none font-bold tracking-wide font-sans">{children}</span>
      </div>
    </>
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
