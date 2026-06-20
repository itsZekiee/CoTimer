"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 max-w-7xl">
        <Link href="/" className="flex items-center gap-1 text-sm font-bold text-gray-900">
          <span className="text-[#006d6d]">▶</span> CoTimer
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="/#home" 
            onClick={(e) => scrollToSection(e, "home")}
            className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] hover:text-[#006d6d] transition-colors"
          >
            Home
          </Link>
          
          <div 
            className="relative group py-2"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] group-hover:text-[#006d6d] transition-colors">
              Services <ChevronDown className={`ml-1 h-3 w-3 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`absolute top-full left-0 w-48 bg-white border border-slate-200 shadow-none rounded-none py-2 z-50 transition-all duration-200 origin-top ${isDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
              <Link href="/services/integration" className="block px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:bg-slate-50 hover:text-[#006d6d]">Integration</Link>
              <Link href="/services/state-sync" className="block px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:bg-slate-50 hover:text-[#006d6d]">State Sync</Link>
              <Link href="/services/analytics" className="block px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:bg-slate-50 hover:text-[#006d6d]">Analytics</Link>
            </div>
          </div>

          <Link href="/#features" onClick={(e) => scrollToSection(e, "features")} className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] hover:text-[#006d6d] transition-colors">Features</Link>
          <Link href="/#pricing" onClick={(e) => scrollToSection(e, "pricing")} className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] hover:text-[#006d6d] transition-colors">Pricing</Link>
          <Link href="/#faqs" onClick={(e) => scrollToSection(e, "faqs")} className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] hover:text-[#006d6d] transition-colors">FAQs</Link>
          <Link href="/#contact" onClick={(e) => scrollToSection(e, "contact")} className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] hover:text-[#006d6d] transition-colors">Contact Us</Link>
        </nav>
        <button className="bg-[#006d6d] text-white px-6 py-2 rounded-none text-[10px] font-bold uppercase tracking-widest hover:bg-[#005a5a] transition-all">
          Book a Demo
        </button>
      </div>
    </header>
  );
}
