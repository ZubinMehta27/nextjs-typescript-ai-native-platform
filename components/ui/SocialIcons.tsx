"use client";

import { Linkedin, Github, Mail } from "lucide-react";

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-6 mt-8">

      <a
        href="https://www.linkedin.com/in/iamzubinmehta/"
        target="_blank"
        className="text-neutral-600 hover:text-black transition"
      >
        <Linkedin size={22} />
      </a>

      <a
        href="https://github.com/ZubinMehta27"
        target="_blank"
        className="text-neutral-600 hover:text-black transition"
      >
        <Github size={22} />
      </a>

      <a
        href="mailto:zubin.mehta11@gmail.com"
        className="text-neutral-600 hover:text-black transition"
      >
        <Mail size={22} />
      </a>

    </div>
  );
}