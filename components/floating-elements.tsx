"use client"

import { motion } from "framer-motion"
import { Star, Moon, Sparkles } from "lucide-react"

export default function FloatingElements() {
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.1, 1],
    },
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        variants={floatingVariants}
        animate="animate"
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 text-amber-400 opacity-60"
      >
        <Star className="w-8 h-8" />
      </motion.div>

      <motion.div
        variants={floatingVariants}
        animate="animate"
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-40 right-20 text-emerald-400 opacity-60"
      >
        <Moon className="w-6 h-6" />
      </motion.div>

      <motion.div
        variants={floatingVariants}
        animate="animate"
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-40 left-20 text-amber-500 opacity-60"
      >
        <Sparkles className="w-7 h-7" />
      </motion.div>

      <motion.div
        variants={floatingVariants}
        animate="animate"
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-20 right-10 text-emerald-500 opacity-60"
      >
        <Star className="w-5 h-5" />
      </motion.div>
    </div>
  )
}
