"use client";

import { motion, type Variants } from "framer-motion";
import { Zap, Shield, BarChart3, Globe, Cpu, Lock } from "lucide-react";

const advantages = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "120,000 transactions per second with sub-second finality, outperforming traditional blockchains.",
  },
  {
    icon: Shield,
    title: "AI-Powered Security",
    description: "Advanced artificial intelligence monitors and protects every transaction in real-time.",
  },
  {
    icon: BarChart3,
    title: "Scalable Infrastructure",
    description: "Horizontal scaling architecture that grows with your needs without compromising performance.",
  },
  {
    icon: Globe,
    title: "Decentralized Network",
    description: "Truly distributed network with thousands of validators ensuring maximum uptime and reliability.",
  },
  {
    icon: Cpu,
    title: "Smart Contracts",
    description: "Deploy intelligent contracts with built-in AI optimization for gas efficiency and execution speed.",
  },
  {
    icon: Lock,
    title: "Proof of Stake",
    description: "Energy-efficient consensus mechanism that secures the network while minimizing environmental impact.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Advantages() {
  return (
    <section id="features" className="relative py-24 md:py-32 px-4 section-glow">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5C24FF]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-[#5C24FF] font-semibold px-4 py-1.5 rounded-full border border-[#5C24FF]/20 bg-[#5C24FF]/5 mb-6">
            Why choose us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
            Built for the <span className="text-gradient-primary">Future</span>
          </h2>
          <p className="mt-5 text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Experience next-generation blockchain technology powered by artificial intelligence
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {advantages.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="card-glow rounded-2xl p-6 md:p-8 group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-[#5C24FF]/10 border border-[#5C24FF]/20 flex items-center justify-center mb-5 group-hover:bg-[#5C24FF]/20 group-hover:border-[#5C24FF]/30 transition-all duration-300">
                <item.icon size={22} className="text-[#5C24FF]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2.5">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
