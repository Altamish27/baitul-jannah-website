"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Hasbi Haqqul Fikri",
    role: "Pengajar",
    content:
      "Mengajar di Baitul Jannah adalah pengalaman yang sangat bermakna. Melihat semangat belajar para santri dan transformasi positif dalam kehidupan mereka membuat saya semakin termotivasi untuk berkontribusi dalam pendidikan mereka. Setiap hari adalah kesempatan untuk menanamkan nilai-nilai keislaman dan ilmu pengetahuan.",
    image: "/hasbi.jpg",
  },
  {
    id: 2,
    name: "Siti Aminah",
    role: "Donatur Tetap",
    content:
      "Saya sangat terkesan dengan pengelolaan Baitul Jannah yang transparan dan profesional. Setiap kali berkunjung, saya melihat anak-anak yang bahagia dan berkembang dengan baik. Ini membuat saya yakin untuk terus mendukung pesantren ini.",
    image: "/SantriWati1.jpg",
  },
  {
    id: 3,
    name: "Rahmat Hidayat",
    role: "Santri Aktif",
    content:
      "Di Baitul Jannah, saya tidak hanya belajar ilmu agama dan akademik, tetapi juga keterampilan hidup yang sangat berharga. Para ustadz dan pengasuh sangat peduli dengan perkembangan kami.",
    image: "/PengajarBersamaSantri.jpg",
  },
  {
    id: 4,
    name: "Dewi Kartika",
    role: "Orang Tua Wali",
    content:
      "Sebagai bibi dari salah satu santri, saya sangat bersyukur keponakan saya bisa mendapatkan pendidikan di Baitul Jannah. Perubahan positif dalam sikapnya sangat terlihat sejak dia bergabung dengan pesantren ini.",
    image: "/UstadzahBareng1.jpg",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimoni" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-emerald-600 dark:text-emerald-400 font-medium"
          >
            Testimoni
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2"
          >
            Apa Kata Mereka
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-1 bg-amber-400 mx-auto my-6"
          ></motion.div>
        </div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div className="absolute -top-6 left-10 text-emerald-500 dark:text-emerald-400">
              <Quote className="h-12 w-12 rotate-180" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 flex flex-col items-center">
                <div className="relative h-24 w-24 rounded-full overflow-hidden border-4 border-emerald-100 dark:border-emerald-900">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 font-bold text-gray-900 dark:text-white text-lg">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-emerald-600 dark:text-emerald-400 text-sm">{testimonials[currentIndex].role}</p>
              </div>

              <div className="md:col-span-2">
                <p className="text-gray-700 dark:text-gray-300 text-lg italic">
                  "{testimonials[currentIndex].content}"
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === index
                      ? "w-8 bg-emerald-600 dark:bg-emerald-400"
                      : "w-2 bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-between mt-8"
          >
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
