"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Users, GraduationCap, Heart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { t } = useLanguage()

  const stats = [
    {
      icon: <Users className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
      value: 70,
      label: "Santri Aktif",
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
      value: 70,
      label: "Santri Menginap",
    },
    {
      icon: <Heart className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
      value: 12,
      label: "Relawan Pengajar",
    },
  ]

  return (
    <section id="tentang" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-emerald-600 dark:text-emerald-400 font-medium"
          >
            {t("aboutUs")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2"
          >
            {t("aboutTitle")}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-1 bg-amber-400 mx-auto my-6"
          ></motion.div>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/FotoKeluargaBesarBaituljannahPengajar.jpg"
              alt="Sejarah Baitul Jannah"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white">{t("ourJourney")}</h3>
            <p className="text-gray-700 dark:text-gray-300">{t("aboutDescription1")}</p>
            <p className="text-gray-700 dark:text-gray-300">{t("aboutDescription2")}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center"
                >
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <h4 className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}+</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
