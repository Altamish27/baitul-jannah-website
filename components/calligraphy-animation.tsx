"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const arabicTexts = [
  "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ",
  "وَقُل رَّبِّ زِدْنِي عِلْمًا",
  "إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ",
]

export default function CalligraphyAnimation() {
  const [currentText, setCurrentText] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % arabicTexts.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Calligraphy */}
      <motion.div
        key={currentText}
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 0.1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -50, scale: 0.8 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div className="text-6xl md:text-8xl lg:text-9xl font-bold text-emerald-600 dark:text-emerald-400 opacity-20 whitespace-nowrap">
          {arabicTexts[currentText]}
        </div>
      </motion.div>

      {/* Moving Geometric Patterns */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        className="absolute top-10 right-10 w-32 h-32 opacity-10"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-amber-500">
          <polygon points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35" />
        </svg>
      </motion.div>

      <motion.div
        animate={{
          rotate: -360,
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          x: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          y: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        className="absolute bottom-20 left-10 w-24 h-24 opacity-10"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-emerald-500">
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="10" />
        </svg>
      </motion.div>
    </div>
  )
}
