"use client";

import { FaGithub, FaLinkedin, FaYoutube, FaFacebook } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top */}

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo */}

          <div>
            <h2 className="text-3xl font-bold text-cyan-400">
              SunilAcharya3
            </h2>

            <p className="mt-4 text-gray-400">
              AI Engineer • Data Scientist • Full Stack Developer
            </p>

            <p className="mt-3 text-gray-500">
              Building intelligent software for the future.
            </p>
          </div>

          {/* Navigation */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="space-y-3">

              <a href="#about" className="block hover:text-cyan-400">
                About
              </a>

              <a href="#skills" className="block hover:text-cyan-400">
                Skills
              </a>

              <a href="#projects" className="block hover:text-cyan-400">
                Projects
              </a>

              <a href="#blogs" className="block hover:text-cyan-400">
                Blog
              </a>

              <a href="#contact" className="block hover:text-cyan-400">
                Contact
              </a>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Follow Me
            </h3>

            <div className="flex gap-5 text-3xl">

              <a href="https://github.com/" target="_blank">
                <FaGithub className="hover:text-cyan-400 transition" />
              </a>

              <a href="https://linkedin.com/" target="_blank">
                <FaLinkedin className="hover:text-cyan-400 transition" />
              </a>

              <a href="https://youtube.com/" target="_blank">
                <FaYoutube className="hover:text-red-500 transition" />
              </a>

              <a href="https://facebook.com/" target="_blank">
                <FaFacebook className="hover:text-blue-500 transition" />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500">
            © 2026 Sunil Acharya. All Rights Reserved.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="mt-6 md:mt-0 rounded-full bg-cyan-500 p-4 hover:bg-cyan-400 transition"
          >
            <ArrowUp className="text-black" />
          </button>

        </div>

      </div>

    </footer>
  );
}