

import { useState } from "react";

const navLinks = ["Home", "Studio", "Services", "Contact", "FAQs"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5">
      
      {/* Container */}
      <div className="flex   items-center justify-between px-4 py-4 md:px-10">
        
        {/* Logo */}
        <div className="text-[16px] md:text-[18px] font-medium tracking-tight text-[#111]">
          Elementum
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-9 list-none">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-[13px] text-[#111] no-underline transition-opacity hover:opacity-50"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger (Mobile only) */}
        <button
          aria-label="Menu"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2"
        >
          <span className="block w-[22px] h-[2px] bg-[#111] rounded-sm" />
          <span className="block w-[22px] h-[2px] bg-[#111] rounded-sm" />
          <span className="block w-[22px] h-[2px] bg-[#111] rounded-sm" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-4 pb-4 gap-4">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="block text-[15px] text-[#111] py-2"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}