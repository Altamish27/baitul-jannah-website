"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Users, GraduationCap, Heart, Award, Target, Eye } from "lucide-react"

const stats = [
  { icon: <Users className="h-8 w-8" />, value: 70, label: "Santri Aktif", suffix: "" },
  { icon: <GraduationCap className="h-8 w-8" />, value: 70, label: "Santri Menginap", suffix: "" },
  { icon: <Heart className="h-8 w-8" />, value: 12, label: "Relawan Pengajar", suffix: "" },
  { icon: <Award className="h-8 w-8" />, value: 2019, label: "Tahun Berdiri", suffix: "" },
]

const timeline = [
  { year: "2019", event: "Pendirian Pesantren Baitul Jannah oleh Yopi Firmansyah dan Ustaz Irfan Nur Ulum pada Januari 2019 dengan mengontrak bangunan bekas rumah makan" },
  { year: "2020", event: "Peningkatan jumlah santri dan pembentukan program tahfidz Al-Quran dengan bantuan 7 relawan pengajar" },
  { year: "2021", event: "Pengembangan program wirausaha santri dengan penjualan surabi dan bros setiap Sabtu-Ahad" },
  { year: "2022", event: "Perluasan program untuk menampung 60 santri dengan 30 anak menginap dan 30 mengikuti kegiatan harian" },
  { year: "2023", event: "Pencapaian beberapa santri yang telah hafal 3 juz Al-Quran dan pengembangan fasilitas masjid" },
  { year: "2024", event: "Mendapat perhatian media nasional dan dukungan donatur untuk keberlanjutan program" },
]

export default function TentangPage() {
  return (
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
              Tentang Pesantren Baitul Jannah
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Perjalanan 6 tahun dalam mendidik dan membentuk karakter anak-anak yatim, dhuafa, dan korban broken home menjadi generasi yang berakhlak mulia, mandiri, dan berprestasi di Lembang, Bandung Barat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sejarah Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/MasjidDariDalem.jpg"
                alt="Sejarah Baitul Jannah"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="font-playfair text-3xl font-bold text-gray-900 dark:text-white">Sejarah Pendirian</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Pesantren Baitul Jannah didirikan pada Januari 2019 oleh Yopi Firmansyah bersama Ustaz Irfan Nur Ulum di Kampung Pageurmanah, Desa Pagerwangi, Kecamatan Lembang, Kabupaten Bandung Barat. Yopi, seorang mantan anak jalanan yang pernah mengamen di simpang Dago Bandung, mendirikan pesantren ini dari pengalaman pribadinya sebagai korban broken home dan kerasnya hidup di jalanan.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Berawal dari sebuah bangunan bekas rumah makan yang dikontrak seharga Rp 60 juta per tahun dengan modal awal dari tabungan pendidikan anaknya sebesar Rp 20 juta, Yopi bertekad memberikan pendidikan gratis untuk anak-anak yatim, dhuafa, dan korban perceraian. Kini pesantren menampung 60 santri dengan 30 anak yang menginap dan 30 lainnya mengikuti kegiatan harian.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>Sumber berita:</strong><br/>
                • <a href="https://news.detik.com/berita/d-7208542/ponpes-baitul-jannah-tampung-60-anak-yatim-hingga-broken-home-yuk-bantu" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">Detik News: Ponpes Baitul Jannah Tampung 60 Anak Yatim hingga Broken Home</a><br/>
                • <a href="https://khazanah.republika.co.id/berita/puss50320/dulu-anak-jalanan-kini-sukses-dirikan-pondok-alquran" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">Republika: Dulu Anak Jalanan, Kini Sukses Dirikan Pondok Alquran</a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Visi & Misi
              </h2>
              <div className="w-20 h-1 bg-amber-400 mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-emerald-600 dark:text-emerald-400 mr-3" />
                  <h3 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white">Visi</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Menjadi rumah kedua bagi anak-anak yatim, dhuafa, dan korban broken home dengan memberikan pendidikan Al-Quran, pendampingan psikologis, dan bekal keterampilan hidup agar mereka tidak terjerumus ke jalanan dan dapat menjadi generasi yang sukses dan berguna bagi bangsa.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-amber-600 dark:text-amber-400 mr-3" />
                  <h3 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white">Misi</h3>
                </div>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    Menyelamatkan anak-anak yatim, dhuafa, dan broken home dari jalanan
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    Memberikan pendidikan Al-Quran dan tahfidz secara gratis
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    Menyediakan tempat tinggal yang aman dan nyaman
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    Memberikan bimbingan spiritual dan psikologis
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    Mengembangkan keterampilan wirausaha melalui program ekonomi kreatif
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Perjalanan Kami
            </h2>
            <div className="w-20 h-1 bg-amber-400 mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">{item.year}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{item.event}</p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-amber-400 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Pencapaian Kami</h2>
            <p className="text-emerald-100 text-lg">Angka-angka yang menunjukkan dedikasi kami</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 text-amber-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                  {stat.suffix}
                </div>
                <p className="text-emerald-100 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
