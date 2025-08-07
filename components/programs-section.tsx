"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Book, GraduationCap, Home, Music, Heart, Users, MapPin, Activity } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export default function ProgramsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useLanguage()

  const programs = [
    {
      icon: <Heart className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: t("pesantrenYatim"),
      description: t("pesantrenYatimDesc"),
      image: "/KegiatanMengaji.jpg",
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: t("pantiAsuhan"),
      description: t("pantiAsuhanDesc"),
      image: "/MakanBarengPotrait.jpg",
    },
    {
      icon: <MapPin className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: t("masjidTraveller"),
      description: t("masjidTravellerDesc"),
      image: "/MasjidDariDalem.jpg",
    },
    {
      icon: <Activity className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: t("alFarisTherapy"),
      description: t("alFarisTherapyDesc"),
      image: "/Alfaris.jpg",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="program" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-emerald-600 dark:text-emerald-400 font-medium"
          >
            {t("featuredPrograms")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2"
          >
            {t("programsTitle")}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-1 bg-amber-400 mx-auto my-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-700 dark:text-gray-300"
          >
            {t("programsDescription")}
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {programs.map((program, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden group hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 p-2 rounded-full">{program.icon}</div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="font-playfair text-xl text-gray-900 dark:text-white">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 dark:text-gray-300">{program.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
