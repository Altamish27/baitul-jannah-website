"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, MessageCircle, Star, Users, Award, TrendingUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import PageTransition from "@/components/page-transition"

const categories = ["Semua", "Makanan", "Kerajinan", "Pertanian", "Teknologi", "Fashion"]

const products = [
  {
    id: 1,
    name: "Keripik Singkong Organik",
    category: "Makanan",
    price: "Rp 15.000",
    description: "Keripik singkong renyah yang dibuat dari singkong organik pilihan, tanpa pengawet dan MSG.",
    image: "/MakanBarengPotrait.jpg",
    rating: 4.8,
    sold: 150,
    producer: "Tim Kuliner Santri",
    whatsappMessage: "Halo, saya tertarik dengan Keripik Singkong Organik seharga Rp 15.000. Apakah masih tersedia?",
  },
  {
    id: 2,
    name: "Tas Rajut Handmade",
    category: "Kerajinan",
    price: "Rp 45.000",
    description: "Tas rajut cantik buatan tangan santri dengan motif tradisional dan bahan berkualitas tinggi.",
    image: "/SantriWatiNgajiBareng.jpg",
    rating: 4.9,
    sold: 89,
    producer: "Kelompok Kerajinan Putri",
    whatsappMessage:
      "Halo, saya ingin memesan Tas Rajut Handmade seharga Rp 45.000. Bisa info detail dan ketersediaannya?",
  },
  {
    id: 3,
    name: "Madu Hutan Murni",
    category: "Pertanian",
    price: "Rp 65.000",
    description: "Madu murni dari hutan sekitar pesantren, dipanen langsung oleh santri dengan metode tradisional.",
    image: "/PesantrenDariDepan1.jpg",
    rating: 5.0,
    sold: 234,
    producer: "Unit Peternakan Lebah",
    whatsappMessage:
      "Halo, saya tertarik dengan Madu Hutan Murni seharga Rp 65.000. Apakah ada sertifikat halal dan ketersediaan stok?",
  },
  {
    id: 4,
    name: "Website & Aplikasi Mobile",
    category: "Teknologi",
    price: "Mulai Rp 500.000",
    description: "Jasa pembuatan website dan aplikasi mobile oleh santri yang ahli di bidang programming.",
    image: "/FotoSantri1.jpg",
    rating: 4.7,
    sold: 45,
    producer: "Tim IT Santri",
    whatsappMessage: "Halo, saya butuh jasa pembuatan website/aplikasi mobile. Bisa konsultasi untuk project saya?",
  },
  {
    id: 5,
    name: "Kopi Arabika Premium",
    category: "Pertanian",
    price: "Rp 85.000",
    description: "Kopi arabika premium hasil kebun santri, dipanggang dengan teknik khusus untuk cita rasa terbaik.",
    image: "/NgajiBareng1.jpg",
    rating: 4.8,
    sold: 178,
    producer: "Kebun Kopi Santri",
    whatsappMessage: "Halo, saya ingin memesan Kopi Arabika Premium seharga Rp 85.000. Apakah bisa kirim ke luar kota?",
  },
  {
    id: 6,
    name: "Mukena Bordir Cantik",
    category: "Fashion",
    price: "Rp 125.000",
    description: "Mukena dengan bordir tangan yang indah, dibuat oleh santri putri dengan detail yang sangat teliti.",
    image: "/SantriWatiNgajiBareng2.jpg",
    rating: 4.9,
    sold: 67,
    producer: "Kelompok Bordir Santri",
    whatsappMessage:
      "Halo, saya tertarik dengan Mukena Bordir Cantik seharga Rp 125.000. Bisa lihat pilihan warna dan motifnya?",
  },
  {
    id: 7,
    name: "Sambal Pecel Tradisional",
    category: "Makanan",
    price: "Rp 12.000",
    description: "Sambal pecel dengan resep turun temurun, dibuat dari bumbu pilihan tanpa bahan kimia berbahaya.",
    image: "/UstadzahBareng1.jpg",
    rating: 4.6,
    sold: 298,
    producer: "Dapur Tradisional Santri",
    whatsappMessage:
      "Halo, saya mau pesan Sambal Pecel Tradisional seharga Rp 12.000. Berapa minimal order dan cara pengirimannya?",
  },
  {
    id: 8,
    name: "Hiasan Dinding Kaligrafi",
    category: "Kerajinan",
    price: "Rp 75.000",
    description: "Hiasan dinding kaligrafi Arab yang indah, ditulis tangan oleh santri dengan khat yang bagus.",
    image: "/MasjidDariDalem.jpg",
    rating: 4.8,
    sold: 112,
    producer: "Sanggar Kaligrafi",
    whatsappMessage:
      "Halo, saya tertarik dengan Hiasan Dinding Kaligrafi seharga Rp 75.000. Bisa custom ayat tertentu?",
  },
]

const stats = [
  {
    icon: <ShoppingCart className="h-8 w-8" />,
    value: "500+",
    label: "Produk Terjual",
    color: "text-blue-600",
  },
  {
    icon: <Users className="h-8 w-8" />,
    value: "50+",
    label: "Santri Terlibat",
    color: "text-emerald-600",
  },
  {
    icon: <Award className="h-8 w-8" />,
    value: "4.8",
    label: "Rating Rata-rata",
    color: "text-amber-600",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    value: "25%",
    label: "Pertumbuhan Bulanan",
    color: "text-purple-600",
  },
]

export default function UsahaPage() {
  const [activeCategory, setActiveCategory] = useState("Semua")
  const { language } = useLanguage()

  const filteredProducts =
    activeCategory === "Semua" ? products : products.filter((product) => product.category === activeCategory)

  const handleOrderWhatsApp = (product: typeof products[0]) => {
    const phoneNumber = "082217184920"
    const message = encodeURIComponent(product.whatsappMessage)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <PageTransition>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Usaha & Produk Santri
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                Dukung kemandirian santri dengan membeli produk berkualitas hasil karya mereka. Setiap pembelian
                membantu biaya pendidikan dan mengembangkan keterampilan wirausaha santri.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  🏆 Produk Berkualitas
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  🤝 Mendukung Santri
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  📦 Pengiriman Seluruh Indonesia
                </Badge>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 mb-4 ${stat.color}`}
                  >
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-emerald-600 text-white shadow-lg"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-700 shadow-md"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-emerald-600 text-white">{product.category}</Badge>
                      </div>
                      <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-white/90 dark:bg-gray-800/90 px-2 py-1 rounded-full">
                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        <span className="text-xs font-medium">{product.rating}</span>
                      </div>
                    </div>

                    <CardHeader className="pb-3">
                      <CardTitle className="font-playfair text-lg text-gray-900 dark:text-white line-clamp-1">
                        {product.name}
                      </CardTitle>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                          {product.price}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{product.sold} terjual</span>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <CardDescription className="text-gray-700 dark:text-gray-300 mb-3 line-clamp-2">
                        {product.description}
                      </CardDescription>

                      <div className="mb-4">
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Diproduksi oleh:</p>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{product.producer}</p>
                      </div>

                      <Button
                        onClick={() => handleOrderWhatsApp(product)}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Pesan via WhatsApp
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Ingin Berkolaborasi dengan Santri?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Kami terbuka untuk kerjasama bisnis, pelatihan keterampilan, atau project khusus. Mari bersama membangun
                kemandirian santri!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => {
                    const message = encodeURIComponent(
                      "Halo, saya tertarik untuk berkolaborasi dengan santri Baitul Jannah. Bisa kita diskusikan lebih lanjut?",
                    )
                    window.open(`https://wa.me/082217184920?text=${message}`, "_blank")
                  }}
                  className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Hubungi Kami
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3"
                  onClick={() => {
                    const message = encodeURIComponent(
                      "Halo, saya ingin memberikan pelatihan keterampilan untuk santri Baitul Jannah. Bagaimana prosedurnya?",
                    )
                    window.open(`https://wa.me/082217184920?text=${message}`, "_blank")
                  }}
                >
                  Berikan Pelatihan
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
