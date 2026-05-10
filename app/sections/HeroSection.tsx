"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 text-center overflow-hidden">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />

      <div className="relative z-10 max-w-5xl pt-32">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="tracking-[0.45em] text-neutral-300 text-sm mb-6"
        >
          EXPERIENCIAS DIGITALES PREMIUM
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-5xl md:text-8xl font-black leading-none mb-8"
        >
          Invitaciones
          <span className="block text-yellow-400">
            Cinematográficas
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-200 leading-relaxed mb-12"
        >
          Experiencias digitales premium con diseño luxury,
          motion cinematográfico y storytelling inmersivo.
        </motion.p>

      </div>

    </section>
  );
}