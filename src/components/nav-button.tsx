import Link from "next/link";
import { ReactNode } from "react";

interface NavButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function NavButton({
  href,
  children,
  className = "",
}: NavButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-block px-4 py-3 md:px-8 md:py-4 font-bold text-sm md:text-lg 
                 border-0 md:border-2 md:border-white text-white bg-transparent 
                 hover:bg-white hover:text-black transition-all duration-200
                 transform hover:scale-105 active:scale-95 cursor-pointer ${className}`}
      style={{
        fontFamily: "inherit",
        letterSpacing: "0.05em",
      }}
    >
      {children}
    </Link>
  );
}
