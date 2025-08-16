"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

const categories = ["Semua", "Kegiatan Belajar", "Acara"]

const galleryItems = [
  // Kegiatan Belajar
  {
    id: 1,
    src: "/KegiatanBelajar/KegiatanMengaji.jpg",
    alt: "",
    category: "Kegiatan Belajar",
  },
  {
    id: 2,
    src: "/KegiatanBelajar/NgajiBareng1.jpg",
    alt: "",
    category: "Kegiatan Belajar",
  },
  {
    id: 3,
    src: "/KegiatanBelajar/SantriWatiNgajiBareng.jpg",
    alt: "",
    category: "Kegiatan Belajar",
  },
  {
    id: 4,
    src: "/KegiatanBelajar/SantriWatiNgajiBareng2.jpg",
    alt: "",
    category: "Kegiatan Belajar",
  },
  {
    id: 5,
    src: "/KegiatanBelajar/FotoSantri1.jpg",
    alt: "",
    category: "Kegiatan Belajar",
  },
  {
    id: 6,
    src: "/KegiatanBelajar/SantriWati1.jpg",
    alt: "",
    category: "Kegiatan Belajar",
  },
  // Acara
  {
    id: 7,
    src: "/Acara/AcaraSantri1.jpg",
    alt: "",
    category: "Acara",
  },
  {
    id: 8,
    src: "/Acara/MakanBarengPotrait.jpg",
    alt: "",
    category: "Acara",
  },
  {
    id: 9,
    src: "/Acara/SantriBersamaRidwanKamil.jpg",
    alt: "",
    category: "Acara",
  },
  {
    id: 10,
    src: "/Acara/UstadzahBareng1.jpg",
    alt: "",
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
                  alt={`Foto ${item.category}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
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
                    alt={`Foto ${selectedImage.category}`}
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
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
