"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-5"
    >

      <div className="max-w-7xl mx-auto flex items-center justify-between backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-6 py-4">

        <Link href="/">
          <h1 className="text-lg tracking-[0.35em] font-semibold">
            AUREO
          </h1>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">

          <Link href="/">
            Inicio
          </Link>

          <Link href="/weddings">
            Weddings
          </Link>

          <Link href="/kids">
            Kids
          </Link>

          <Link href="/black">
            Black
          </Link>

        </nav>

        <button className="bg-yellow-400 text-black px-5 py-2 rounded-full font-medium hover:scale-105 transition">
          Cotizar
        </button>

      </div>

    </motion.header>
  );
}