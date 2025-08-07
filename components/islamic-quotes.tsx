"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const islamicQuotes = [
  {
    arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
    translation: "Dan barangsiapa yang bertakwa kepada Allah niscaya Dia akan mengadakan baginya jalan keluar",
    reference: "QS. At-Talaq: 2",
  },
  {
    arabic: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
    translation: "Dan barangsiapa yang bertawakkal kepada Allah niscaya Allah akan mencukupkan (keperluan)nya",
    reference: "QS. At-Talaq: 3",
  },
  {
    arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "Sesungguhnya sesudah kesulitan itu ada kemudahan",
    reference: "QS. Ash-Sharh: 6",
  },
]

export default function IslamicQuotes() {
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % islamicQuotes.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          key={currentQuote}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-8">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-right leading-relaxed">
              {islamicQuotes[currentQuote].arabic}
            </h3>
            <p className="text-xl md:text-2xl text-emerald-100 mb-4">"{islamicQuotes[currentQuote].translation}"</p>
            <p className="text-amber-300 font-medium">{islamicQuotes[currentQuote].reference}</p>
          </div>
        </motion.div>

        <div className="flex justify-center space-x-2 mt-8">
          {islamicQuotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuote(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentQuote === index ? "bg-amber-400" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
