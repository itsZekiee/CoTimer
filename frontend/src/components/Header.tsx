"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky-header flex items-center justify-between px-10 py-4">
      <div className="text-2xl font-bold text-primary">
        <Link href="/#home">CoTimer</Link>
      </div>
      
      <nav className="flex items-center gap-8">
        <Link href="/#home" className="hover:text-primary transition-colors">Home</Link>
        
        <div className="relative group">
          <button className="flex items-center gap-1 hover:text-primary transition-colors py-2">
            Services <ChevronDown size={16} />
          </button>
          
          <div className="absolute top-full left-0 w-48 bg-white border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 flex flex-col gap-2">
            <Link href="/services/data-analytics" className="hover:bg-gray-50 p-2 rounded transition-colors">Data Analytics</Link>
            <Link href="/services/integration" className="hover:bg-gray-50 p-2 rounded transition-colors">Integration</Link>
            <Link href="/services/state-sync" className="hover:bg-gray-50 p-2 rounded transition-colors">State Sync</Link>
          </div>
        </div>

        <Link href="/#features" className="hover:text-primary transition-colors">Features</Link>
        <Link href="/#pricing" className="hover:text-primary transition-colors">Pricing</Link>
        <Link href="/#faqs" className="hover:text-primary transition-colors">FAQs</Link>
        <Link href="/#contact" className="hover:text-primary transition-colors">Contact Us</Link>
      </nav>

      <button className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all">
        Book a Demo
      </button>
    </header>
  );
};

export default Header;
