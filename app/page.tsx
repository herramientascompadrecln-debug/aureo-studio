"use client";

import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import ContactSection from "./sections/ContactSection";
export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      <Navbar />

      <HeroSection />
<ContactSection />
    </main>
  );
}