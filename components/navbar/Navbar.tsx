"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const sections = [
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = section.id;
          }
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight hover:opacity-80 transition"
        >
          ZUBINMEHTA
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm text-neutral-600">

          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`relative transition ${
                active === section.id
                  ? "text-black"
                  : "hover:text-black"
              }`}
            >
              {section.label}

              <span
                className={`absolute left-0 -bottom-1 h-[1px] bg-black transition-all duration-300 ${
                  active === section.id ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}

          {/* Blog Link */}
          <Link
            href="/blog"
            className="hover:text-black transition"
          >
            Blog
          </Link>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="ml-4 bg-black text-white px-5 py-2 rounded-xl text-sm font-medium tracking-wide hover:opacity-90 transition"
          >
            Download CV
          </a>

        </nav>
      </div>
    </header>
  );
}