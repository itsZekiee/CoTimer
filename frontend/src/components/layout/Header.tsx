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
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 max-w-7xl">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-slate-800">
          <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rounded-full border-t-transparent animate-spin-slow" />
          </div>
          CoTimer
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="/#home" 
            onClick={(e) => scrollToSection(e, "home")}
            className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors"
          >
            Home
          </Link>
          
          <div 
            className="relative group py-2"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center text-sm font-medium text-gray-600 group-hover:text-teal-600 transition-colors">
              Services <ChevronDown className={`ml-1 h-3 w-3 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`absolute top-full left-0 w-48 bg-white border border-gray-100 shadow-xl rounded-xl py-2 z-50 transition-all duration-200 origin-top ${isDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
              <Link href="/services/integration" className="block px-4 py-2 text-sm text-gray-600 hover:bg-teal-50 hover:text-teal-600">Integration</Link>
              <Link href="/services/state-sync" className="block px-4 py-2 text-sm text-gray-600 hover:bg-teal-50 hover:text-teal-600">State Sync</Link>
              <Link href="/services/analytics" className="block px-4 py-2 text-sm text-gray-600 hover:bg-teal-50 hover:text-teal-600">Analytics</Link>
            </div>
          </div>

          <Link href="/#features" onClick={(e) => scrollToSection(e, "features")} className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors">Features</Link>
          <Link href="/#pricing" onClick={(e) => scrollToSection(e, "pricing")} className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors">Pricing</Link>
          <Link href="/#faqs" onClick={(e) => scrollToSection(e, "faqs")} className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors">FAQs</Link>
          <Link href="/#contact" onClick={(e) => scrollToSection(e, "contact")} className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors">Contact Us</Link>
        </nav>
        <button className="bg-[#006d6d] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#005a5a] transition-all shadow-sm">
          Book a Demo
        </button>
      </div>
    </header>
  );
}
