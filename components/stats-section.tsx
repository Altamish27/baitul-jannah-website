"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Users, GraduationCap, Heart, Award } from "lucide-react"

const stats = [
  {
    icon: <Users className="h-8 w-8" />,
    value: 70,
    label: "Santri Aktif",
    suffix: "",
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    value: 70,
    label: "Santri Menginap",
    suffix: "",
  },
  {
    icon: <Heart className="h-8 w-8" />,
    value: 12,
    label: "Relawan Pengajar",
    suffix: "",
  },
  {
    icon: <Award className="h-8 w-8" />,
    value: 2019,
    label: "Tahun Berdiri",
    suffix: "",
  },
]

function CountUp({ end, duration = 2000, isInView }: { end: number; duration?: number; isInView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const startCount = 0

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      setCount(Math.floor(progress * (end - startCount) + startCount))

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      }
    }

    requestAnimationFrame(updateCount)
  }, [end, duration, isInView])

  return <span>{count}</span>
}

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-playfair text-3xl md:text-4xl font-bold mb-4"
          >
            Pencapaian Kami
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-emerald-100 text-lg"
          >
            Angka-angka yang menunjukkan dedikasi kami dalam mendidik anak yatim piatu
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 text-amber-300 group-hover:bg-white/30 transition-colors"
              >
                {stat.icon}
              </motion.div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={stat.value} isInView={isInView} />
                {stat.suffix}
              </div>
              <p className="text-emerald-100 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
