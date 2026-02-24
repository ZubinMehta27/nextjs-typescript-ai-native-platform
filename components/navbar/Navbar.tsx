"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const sections = ["experience", "services", "contact"];

export default function Navbar() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = section;
          }
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link
          href="/"
          className="text-lg font-semibold tracking-tight"
        >
          ZUBINMEHTA
        </Link>

        <nav className="hidden md:flex gap-8 text-sm text-neutral-600">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`relative transition ${
                active === section ? "text-black" : "hover:text-black"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span
                className={`absolute left-0 -bottom-1 h-[1px] bg-black transition-all duration-300 ${
                  active === section ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}

          <a
            href="/resume.pdf"
            className="ml-6 bg-black text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}