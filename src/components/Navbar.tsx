"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, MessageCircle, Radio, Twitter } from "lucide-react";

const navLinks = [
  { label: "Smart Contracts", href: "#features" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#reviews" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Whitepaper", href: "#footer" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-[1370px] mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-semibold tracking-tight">
          <span className="text-gradient-primary">Serendale</span>
          <span className="text-white">.ai</span>
        </a>

        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="#" aria-label="Discord" className="text-gray-400 hover:text-white transition-colors">
            <MessageCircle size={20} />
          </a>
          <a href="#" aria-label="Reddit" className="text-gray-400 hover:text-white transition-colors">
            <Radio size={20} />
          </a>
          <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
            <Twitter size={20} />
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/5 bg-black/95 backdrop-blur-md"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block text-gray-300 hover:text-white transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#features"
                  className="inline-block px-5 py-2 text-sm rounded-full border border-primary text-white mt-2"
                  onClick={() => setIsOpen(false)}
                >
                  Get started
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
