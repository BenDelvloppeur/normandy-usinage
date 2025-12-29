"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-slate-950/95 backdrop-blur-md border-slate-800 py-2 shadow-lg"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-orange-600 w-10 h-10 flex items-center justify-center rounded-sm rotate-3 transition-transform group-hover:rotate-0">
            <span className="text-slate-950 font-oswald font-bold text-xl">N</span>
          </div>
          <div className="flex flex-col">
            <span className="font-oswald font-bold text-xl uppercase tracking-wider text-slate-100 leading-none">
              Normandy
            </span>
            <span className="font-oswald font-medium text-sm uppercase tracking-[0.2em] text-orange-500 leading-none">
              Usinage
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors uppercase tracking-wide"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-slate-300 hover:text-orange-500 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm font-medium">{siteConfig.contact.phone}</span>
          </a>
          <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white border-none">
            <Link href="/devis">Demander un devis</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-100 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-oswald font-medium text-slate-300 hover:text-orange-500 transition-colors uppercase tracking-wide"
                >
                  {item.label}
                </Link>
              ))}
              <div className="h-px bg-slate-800 w-full my-2" />
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-slate-300 hover:text-orange-500"
              >
                <Phone className="w-5 h-5" />
                <span className="text-lg">{siteConfig.contact.phone}</span>
              </a>
              <Button asChild size="lg" className="w-full">
                <Link href="/devis" onClick={() => setIsOpen(false)}>
                  Demander un devis
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

