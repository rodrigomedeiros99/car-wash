"use client";

import { useState, useEffect } from "react";
import { Menu, X, Instagram} from "lucide-react";
import { PiTiktokLogo } from "react-icons/pi";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Membership", href: "#membership" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <nav 
      className={cn(
        "fixed top-1 left-1/2 transform -translate-x-1/2 w-full  rounded-3xl max-w-[85rem] z-50 px-4 transition-all duration-300 bg-gray-800/80 backdrop-blur-md border border-neutral-950/30",
        scrolled 
          ? "bg-gray-800/80 backdrop-blur-lg shadow-md py-2" 
          : "bg-gray-800/80 py-2"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link 
            href="#home" 
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-100 to-blue-500 bg-clip-text text-transparent"
          >
            PureGleam
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "transition-all duration-200",
                  scrolled ? "text-gray-100/80 hover:text-blue-400" : "text-white hover:text-white/80"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "transition-all duration-200",
                  scrolled ? "text-gray-100 hover:text-primary" : "text-white hover:text-white/80"
                )}
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "transition-all duration-200 ",
                  scrolled ? "text-gray-100 hover:text-primary" : "text-white hover:text-white/80"
                )}
              >
                <PiTiktokLogo  size={20} />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden",
              scrolled ? "text-gray-100" : "text-white"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-gray-800/30 text-gray-100 rounded-xl backdrop-blur-lg shadow-lg py-4 px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-100 hover:text-primary transition-all py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex space-x-4 py-2">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-all"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-all"
              >
                <PiTiktokLogo size={20} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}