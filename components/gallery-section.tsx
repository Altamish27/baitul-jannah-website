"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

const categories = ["Semua", "Kegiatan Belajar", "Ekstrakurikuler", "Asrama", "Acara"]

const galleryItems = [
  {
    id: 1,
    src: "/KegiatanMengaji.jpg",
    alt: "Kegiatan Belajar di Kelas",
    category: "Kegiatan Belajar",
  },
  {
    id: 2,
    src: "/AcaraSantri1.jpg",
    alt: "Latihan Hadroh",
    category: "Ekstrakurikuler",
  },
  {
    id: 3,
    src: "/MakanBarengPotrait.jpg",
    alt: "Kegiatan di Asrama",
    category: "Asrama",
  },
  {
    id: 4,
    src: "/SantriBersamaRidwanKamil.jpg",
    alt: "Wisuda Santri",
    category: "Acara",
  },
  {
    id: 5,
    src: "/NgajiBareng1.jpg",
    alt: "Belajar Komputer",
    category: "Kegiatan Belajar",
  },
  {
    id: 6,
    src: "/FotoSantri1.jpg",
    alt: "Olahraga Bersama",
    category: "Ekstrakurikuler",
  },
  {
    id: 7,
    src: "/SantriWatiNgajiBareng.jpg",
    alt: "Makan Bersama",
    category: "Asrama",
  },
  {
    id: 8,
    src: "/UstadzahBareng1.jpg",
    alt: "Peringatan Hari Besar",
    category: "Acara",
  },
  {
    id: 9,
    src: "/SantriWatiNgajiBareng2.jpg",
    alt: "Kegiatan Santri Wati",
    category: "Kegiatan Belajar",
  },
  {
    id: 10,
    src: "/SantriWati1.jpg",
    alt: "Santri Wati",
    category: "Asrama",
  },
  {
    id: 11,
    src: "/PesantrenDariDepan2.jpg",
    alt: "Gedung Pesantren",
    category: "Asrama",
  },
  {
    id: 12,
    src: "/MasjidDariDalem.jpg",
    alt: "Masjid Pesantren",
    category: "Acara",
  },
]

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("Semua")
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const filteredItems =
    activeCategory === "Semua" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section id="galeri" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-emerald-600 dark:text-emerald-400 font-medium"
          >
            Galeri Kami
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2"
          >
            Momen-Momen Berharga
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
            Lihat berbagai kegiatan dan momen berharga di Pesantren Baitul Jannah melalui galeri foto kami.
          </motion.p>
        </div>

        <div ref={ref} className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-emerald-600 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer group"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium text-center px-4">
                    {item.alt}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-white/20 p-2 rounded-full text-white hover:bg-white/40 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <span className="bg-black/60 text-white px-4 py-2 rounded-lg">{selectedImage.alt}</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
