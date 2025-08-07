"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Book, GraduationCap, Home, Music, Users, Award, Clock, Heart, MapPin, Activity } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import PageTransition from "@/components/page-transition"

const programs = [
  {
    icon: <Heart className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
    title: "Pesantren Yatim Dhuafa & Broken Home",
    description: "Pendidikan gratis untuk anak yatim, dhuafa, dan keluarga broken home dengan lingkungan yang mendukung.",
    image: "/KegiatanMengaji.jpg",
    features: ["Pendidikan Gratis", "Asrama", "Makan 3x Sehari", "Bimbingan Rohani"],
    duration: "6-12 Tahun",
    capacity: "150 Santri",
  },
  {
    icon: <Users className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
    title: "Panti Asuhan / Lembaga Kesejahteraan Sosial Anak",
    description: "Fasilitas pengasuhan dan pembinaan anak-anak terlantar dengan pendampingan profesional.",
    image: "/MakanBarengPotrait.jpg",
    features: ["Pengasuhan 24 Jam", "Pendidikan", "Kesehatan", "Konseling"],
    duration: "Hingga Mandiri",
    capacity: "100 Anak",
  },
  {
    icon: <MapPin className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
    title: "Masjid Traveller Ramah Musafir",
    description: "Masjid yang menyediakan fasilitas gratis untuk musafir: ngopi, makan, dan nginap.",
    image: "/MasjidDariDalem.jpg",
    features: ["Ngopi Gratis", "Makan Gratis", "Nginap Gratis", "Ruang Istirahat"],
    duration: "24 Jam",
    capacity: "50 Musafir",
  },
  {
    icon: <Activity className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
    title: "Sekolah Alam Al Faris Therapy",
    description: "Pusat terapi dan pelatihan untuk pengembangan kemampuan dan rehabilitasi holistik.",
    image: "/Alfaris.jpg",
    features: ["Terapi Fisik", "Terapi Mental", "Pelatihan Skill", "Rehabilitasi"],
    duration: "Sesuai Kebutuhan",
    capacity: "30 Pasien/Hari",
  },
]

const achievements = [
  { icon: <Award className="h-6 w-6" />, title: "Juara 1 Olimpiade Matematika Tingkat Provinsi", year: "2024" },
  { icon: <Award className="h-6 w-6" />, title: "Juara 2 Lomba Tahfidz Nasional", year: "2024" },
  { icon: <Award className="h-6 w-6" />, title: "Juara 1 Festival Hadroh Se-Jawa Barat", year: "2023" },
  { icon: <Award className="h-6 w-6" />, title: "Akreditasi A untuk Semua Jenjang", year: "2023" },
]

export default function ProgramPage() {
  const { t } = useLanguage()

  return (
    <PageTransition>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-amber-50 dark:from-emerald-900/20 dark:to-amber-900/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Program Unggulan Kami
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Kami menyediakan berbagai program pendidikan yang komprehensif untuk memastikan santri mendapatkan
                pendidikan terbaik dan pengembangan karakter yang holistik.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className="relative h-64">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 p-3 rounded-full">
                      {program.icon}
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {program.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">{program.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-emerald-600" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-emerald-600" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{program.capacity}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">Fitur Program:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {program.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Prestasi Terbaru
              </h2>
              <div className="w-20 h-1 bg-amber-400 mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">{achievement.title}</h3>
                      <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                        {achievement.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Bergabunglah dengan Keluarga Besar Baitul Jannah
              </h2>
              <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                Daftarkan anak yatim piatu untuk mendapatkan pendidikan berkualitas dan masa depan yang cerah
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-400 hover:bg-amber-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-colors"
              >
                Daftar Sekarang
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
