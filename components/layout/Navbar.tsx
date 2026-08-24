"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Blogs", href: "#blogs" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08131f]/80 backdrop-blur-xl border-b border-cyan-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}

        <Link href="/" className="flex items-center">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-4xl font-extrabold"
          >
            <span className="text-cyan-400">&lt;</span>
            <span className="text-white">Sunil</span>
            <span className="text-white">Acharya</span>
            <span className="text-cyan-400">/&gt;</span>
          </motion.h1>
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-8">

          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              {item.name}
            </Link>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            className="flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
          >
            <Download size={18} />
            Resume
          </a>

        </nav>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-cyan-400"
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#08131f] border-t border-cyan-500/20"
          >

            <div className="flex flex-col items-center py-6">

              {navLinks.map((item) => (

                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-center py-4 text-lg text-gray-300 hover:text-cyan-400 transition"
                >
                  {item.name}
                </Link>

              ))}

              <a
                href="/resume.pdf"
                target="_blank"
                className="mt-6 flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black hover:bg-cyan-400"
              >
                <Download size={18} />
                Download Resume
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}