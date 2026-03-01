"use client";

import { motion, type Variants } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Alex Chen",
    role: "CTO at TechFusion",
    rating: 5,
    text: "Serendale has completely transformed how we handle blockchain transactions. The speed is unmatched.",
    avatar: "AC",
  },
  {
    name: "Maria Rodriguez",
    role: "Lead Developer at DeFi Labs",
    rating: 5,
    text: "The AI-powered security gives us confidence that our smart contracts are protected at all times.",
    avatar: "MR",
  },
  {
    name: "David Kim",
    role: "Founder of CryptoVault",
    rating: 5,
    text: "120K TPS isn't just a number — we've tested it under real-world conditions and it delivers consistently.",
    avatar: "DK",
  },
  {
    name: "Sarah Mitchell",
    role: "Blockchain Architect",
    rating: 4,
    text: "The Proof of Stake mechanism is elegant and efficient. A significant leap forward in blockchain tech.",
    avatar: "SM",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Reviews() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Serendale.ai",
    "description": "AI-powered blockchain platform with 120K TPS",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": reviews.length.toString(),
      "bestRating": "5",
    },
    "review": reviews.map((review) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.name,
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5",
      },
      "reviewBody": review.text,
    })),
  };

  return (
    <section id="reviews" className="relative py-24 md:py-32 px-4 section-glow">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF3BFF]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-[#FF3BFF] font-semibold px-4 py-1.5 rounded-full border border-[#FF3BFF]/20 bg-[#FF3BFF]/5 mb-6">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
            What People <span className="text-gradient-primary">Say</span>
          </h2>
          <p className="mt-5 text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Trusted by developers and companies building the future of decentralized technology
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          {reviews.map((review) => (
            <motion.article
              key={review.name}
              variants={itemVariants}
              className="card-glow rounded-2xl p-6 md:p-8 relative"
            >
              <Quote size={32} className="absolute top-6 right-6 text-[#5C24FF]/10" />

              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5C24FF]/30 to-[#FF3BFF]/20 border border-[#5C24FF]/30 flex items-center justify-center text-sm font-bold text-white">
                  {review.avatar}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-[15px]">{review.name}</h3>
                  <p className="text-gray-500 text-sm">{review.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    size={15}
                    className={
                      i < review.rating
                        ? "text-yellow-400 fill-yellow-400 star-filled"
                        : "text-gray-700 fill-gray-700"
                    }
                  />
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">{review.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
