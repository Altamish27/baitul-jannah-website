"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown, Play } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import CalligraphyAnimation from "./calligraphy-animation"
import ParticleBackground from "./particle-background"
import FloatingElements from "./floating-elements"

export default function HeroSection() {
  const { t } = useLanguage()

  const scrollToPrograms = () => {
    const programsSection = document.getElementById("program")
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <ParticleBackground />
      <CalligraphyAnimation />
      <FloatingElements />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-transparent to-amber-50/50 dark:from-emerald-900/20 dark:via-transparent dark:to-amber-900/20"></div>

      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col space-y-8"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-emerald-600 dark:text-emerald-400 font-medium text-lg"
            >
              ✨ {t("heroSubtitle")}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              {t("heroTitle")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed"
            >
              {t("heroDescription")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={scrollToPrograms}
                  className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-6 rounded-xl flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  {t("seePrograms")}
                  <ArrowDown className="h-5 w-5" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-2 border-amber-400 text-amber-600 hover:bg-amber-50 dark:border-amber-500 dark:text-amber-400 dark:hover:bg-amber-900/20 px-8 py-6 rounded-xl text-lg flex items-center gap-3 shadow-lg hover:shadow-xl transition-all"
                  onClick={() => window.open('https://youtu.be/f_gxDNRfgPM?si=E6jBOAKfhpl1t-_A', '_blank')}
                >
                  <Play className="h-5 w-5" />
                  {t("watchVideo")}
                </Button>
              </motion.div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center gap-8 pt-4"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">70</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t("activeStudents")}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">2019</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t("yearsEstablished")}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">30+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t("alumni")}</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/PesantrenDariDepan1.jpg"
                alt="Santri Baitul Jannah"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-6 left-6"
              >
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                    🏆 Mendidik Sejak 2019
                  </span>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full opacity-80"
              ></motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full opacity-80"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center cursor-pointer"
          onClick={scrollToPrograms}
        >
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">{t("scrollToExplore")}</span>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg"
          >
            <ArrowDown className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
