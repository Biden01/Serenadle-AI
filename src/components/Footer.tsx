import { Github, MessageCircle, Twitter } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Smart Contracts", href: "#" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Whitepaper", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#footer" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Community", href: "#" },
    { label: "Support", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer id="footer" className="relative border-t border-white/5 bg-black">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#5C24FF]/30 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          <div>
            <a href="/" className="text-xl font-semibold tracking-tight inline-block">
              <span className="text-gradient-primary">Serendale</span>
              <span className="text-white">.ai</span>
            </a>
            <p className="mt-4 text-gray-500 text-sm leading-relaxed max-w-xs">
              Next-generation AI-powered blockchain platform delivering 120K TPS with unmatched security.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="GitHub" className="text-gray-500 hover:text-[#5C24FF] transition-colors duration-300">
                <Github size={18} />
              </a>
              <a href="#" aria-label="Discord" className="text-gray-500 hover:text-[#5C24FF] transition-colors duration-300">
                <MessageCircle size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-[#5C24FF] transition-colors duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-sm mb-5">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-500 text-sm hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Serendale.ai. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 text-sm hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-600 text-sm hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
