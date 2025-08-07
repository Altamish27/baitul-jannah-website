"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

const islamicTexts = [
  {
    arabic: "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ",
    translation: {
      id: "Dan tiadalah Kami mengutus kamu, melainkan untuk (menjadi) rahmat bagi semesta alam",
      en: "And We have not sent you, [O Muhammad], except as a mercy to the worlds",
    },
    reference: "QS. Al-Anbiya: 107",
  },
  {
    arabic: "وَقُل رَّبِّ زِدْنِي عِلْمًا",
    translation: {
      id: "Dan katakanlah: 'Ya Tuhanku, tambahkanlah kepadaku ilmu pengetahuan'",
      en: "And say: 'My Lord, increase me in knowledge'",
    },
    reference: "QS. Taha: 114",
  },
  {
    arabic: "إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ",
    translation: {
      id: "Sesungguhnya yang takut kepada Allah di antara hamba-hamba-Nya, hanyalah ulama",
      en: "Only those fear Allah, from among His servants, who have knowledge",
    },
    reference: "QS. Fatir: 28",
  },
  {
    arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
    translation: {
      id: "Dan barangsiapa yang bertakwa kepada Allah niscaya Dia akan mengadakan baginya jalan keluar",
      en: "And whoever fears Allah - He will make for him a way out",
    },
    reference: "QS. At-Talaq: 2",
  },
  {
    arabic: "مَثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ",
    translation: {
      id: "Perumpamaan (nafkah yang dikeluarkan oleh) orang-orang yang menafkahkan hartanya di jalan Allah",
      en: "The example of those who spend their wealth in the way of Allah",
    },
    reference: "QS. Al-Baqarah: 261",
  },
  {
    arabic: "وَأَحْسِنُوا إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ",
    translation: {
      id: "Dan berbuat baiklah, karena sesungguhnya Allah menyukai orang-orang yang berbuat baik",
      en: "And do good; indeed, Allah loves the doers of good",
    },
    reference: "QS. Al-Baqarah: 195",
  },
  {
    arabic: "وَمَا تُنفِقُوا مِنْ خَيْرٍ فَلِأَنفُسِكُمْ",
    translation: {
      id: "Dan apa saja harta yang baik yang kamu nafkahkan (di jalan Allah), maka pahalanya itu untuk kamu sendiri",
      en: "And whatever you spend of good - it is for yourselves",
    },
    reference: "QS. Al-Baqarah: 272",
  },
  {
    arabic: "وَالْيَتَامَىٰ وَالْمَسَاكِينِ وَابْنِ السَّبِيلِ",
    translation: {
      id: "Dan (berikanlah) kepada anak-anak yatim, orang-orang miskin dan ibnu sabil",
      en: "And (give) to the orphans, the needy, and the traveler",
    },
    reference: "QS. Al-Baqarah: 177",
  },
  {
    arabic: "فَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ",
    translation: {
      id: "Adapun terhadap anak yatim, maka janganlah kamu berlaku sewenang-wenang",
      en: "So as for the orphan, do not oppress [him]",
    },
    reference: "QS. Ad-Duha: 9",
  },
  {
    arabic: "وَيُطْعِمُونَ الطَّعَامَ عَلَىٰ حُبِّهِ مِسْكِينًا وَيَتِيمًا",
    translation: {
      id: "Dan mereka memberikan makanan yang disukainya kepada orang miskin, anak yatim",
      en: "And they give food in spite of love for it to the needy, the orphan",
    },
    reference: "QS. Al-Insan: 8",
  },
]

export default function MovingCalligraphy() {
  const [currentText, setCurrentText] = useState(0)
  const { language } = useLanguage()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % islamicTexts.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Elegant Background */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 dark:from-emerald-950 dark:via-emerald-900 dark:to-emerald-950"></div>

        {/* Islamic Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="islamic-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <polygon points="10,2 18,10 10,18 2,10" fill="currentColor" opacity="0.3" />
                <circle cx="10" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#islamic-pattern)" className="text-amber-400" />
          </svg>
        </div>

        {/* Subtle Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-emerald-600/5 to-transparent"></div>
      </div>

      {/* Moving Calligraphy Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* First Layer - Moving Right */}
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 40,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 whitespace-nowrap"
        >
          <div className="inline-flex items-center space-x-20 text-white/5">
            {islamicTexts.map((text, index) => (
              <span key={index} className="text-6xl md:text-8xl lg:text-9xl font-bold font-arabic">
                {text.arabic}
              </span>
            ))}
            {islamicTexts.map((text, index) => (
              <span key={`dup1-${index}`} className="text-6xl md:text-8xl lg:text-9xl font-bold font-arabic">
                {text.arabic}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Second Layer - Moving Left */}
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            duration: 50,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/4 whitespace-nowrap"
        >
          <div className="inline-flex items-center space-x-16 text-white/3">
            {islamicTexts
              .slice()
              .reverse()
              .map((text, index) => (
                <span key={index} className="text-4xl md:text-6xl lg:text-7xl font-bold font-arabic">
                  {text.arabic}
                </span>
              ))}
            {islamicTexts
              .slice()
              .reverse()
              .map((text, index) => (
                <span key={`dup2-${index}`} className="text-4xl md:text-6xl lg:text-7xl font-bold font-arabic">
                  {text.arabic}
                </span>
              ))}
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex items-center justify-center min-h-[400px]">
          <motion.div
            key={currentText}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center max-w-5xl"
          >
            {/* Decorative Top Border */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mb-8"
            ></motion.div>

            {/* Arabic Text */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-arabic text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-relaxed text-right"
              style={{ lineHeight: "1.8" }}
            >
              {islamicTexts[currentText].arabic}
            </motion.h2>

            {/* Translation */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-amber-100 mb-4 font-medium italic leading-relaxed"
            >
              "{islamicTexts[currentText].translation[language]}"
            </motion.p>

            {/* Reference */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-amber-300 font-semibold text-sm md:text-base"
            >
              {islamicTexts[currentText].reference}
            </motion.p>

            {/* Decorative Bottom Border */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 1.2 }}
              className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mt-8"
            ></motion.div>
          </motion.div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {islamicTexts.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentText(index)}
              className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                currentText === index ? "w-8 h-3" : "w-3 h-3"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <div
                className={`w-full h-full transition-all duration-300 ${
                  currentText === index ? "bg-amber-400" : "bg-white/30 hover:bg-white/50"
                }`}
              ></div>
              {currentText === index && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                  className="absolute top-0 left-0 h-full bg-amber-300"
                ></motion.div>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        className="absolute top-10 right-10 w-16 h-16 opacity-20"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-amber-400">
          <polygon points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35" />
        </svg>
      </motion.div>

      <motion.div
        animate={{
          rotate: -360,
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          x: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          y: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        className="absolute bottom-10 left-10 w-12 h-12 opacity-20"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-amber-400">
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="50" cy="50" r="10" />
        </svg>
      </motion.div>
    </section>
  )
}
