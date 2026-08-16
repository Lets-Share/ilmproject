"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-parchment/95 backdrop-blur-xl z-50 border-b border-coffee/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a
          href="#"
          className="flex items-center gap-2 font-serif font-bold text-coffee text-xl hover:text-terracotta transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity }}
            className="w-8 h-8 relative"
          >
            <Image src="/icon.jpeg" alt="Logo" fill className="object-contain rounded-2xl" />
          </motion.div>
          ILM HUB
        </motion.a>

        <div className="hidden md:flex gap-8 font-medium text-coffee text-sm uppercase tracking-widest">
          {["Library", "Installation", "FAQ", "Contact"].map((item, i) => (
            <motion.a
              key={i}
              href={`#${item.toLowerCase()}`}
              className="relative group"
              whileHover={{ color: "#D97706" }}
            >
              {item}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-terracotta"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        <motion.a
          href="#install"
          whileHover={{ scale: 1.08, boxShadow: "0 10px 25px rgba(217, 119, 6, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-coffee text-white px-6 py-2 rounded-xl font-bold text-sm shadow-lg transition-all"
        >
          Get APK
        </motion.a>
      </div>
    </nav>
  );
}
