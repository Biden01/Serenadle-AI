"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-glow pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 md:w-96 h-64 md:h-96 bg-[#5C24FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/3 w-48 md:w-72 h-48 md:h-72 bg-[#FF3BFF]/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[80px] font-medium leading-[1.1] tracking-tight">
          <span className="text-gradient-primary">A Fast Blockchain.</span>
          <br />
          <span className="text-white">Scalable AI.</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 md:mt-10 text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Our technology performing fast blockchain (120K TPS) and it has guaranteed
          AI-based data security. Proof of Stake, its consensus algorithm enables
          unlimited speeds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 md:mt-10 px-4"
        >
          <a
            href="#features"
            className="btn-glow w-full sm:w-auto px-8 py-3 rounded-full border border-[#5C24FF] text-white hover:bg-[#5C24FF]/15 transition-all duration-300 text-sm font-medium text-center"
          >
            Get started
          </a>
          <a
            href="#reviews"
            className="w-full sm:w-auto px-8 py-3 rounded-full border border-white/20 text-white hover:border-white/50 hover:bg-white/5 transition-all duration-300 text-sm font-medium text-center"
          >
            Ecosystems
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        className="relative z-10 mt-8 md:mt-16 w-full max-w-5xl mx-auto"
      >
        <Image
          src="/images/hero-robots.webp"
          alt="AI-powered blockchain robots"
          width={1200}
          height={500}
          priority
          className="w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(92,36,255,0.3)]"
        />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
    </section>
  );
}
