"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { 
  MessageCircle, 
  Star, 
  Heart, 
  Leaf, 
  Shield, 
  Zap, 
  Award, 
  CheckCircle, 
  Phone, 
  Mail,
  MapPin,
  Camera
} from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import PageTransition from "@/components/page-transition"

// Product gallery images
const productGallery = [
  {
    id: 1,
    src: "/FitrahOil/1.jpg",
    alt: "Fitrah Herbal Oil - Botol Utama",
    type: "product"
  },
  {
    id: 2,
    src: "/FitrahOil/2.jpg",
    alt: "Penggunaan Fitrah Herbal Oil",
    type: "usage"
  },
  {
    id: 3,
    src: "/FitrahOil/3.jpg",
    alt: "Bahan Alami Fitrah Herbal Oil",
    type: "ingredients"
  },
  {
    id: 4,
    src: "/FitrahOil/4.jpg",
    alt: "Proses Pembuatan Fitrah Herbal Oil",
    type: "process"
  },
  {
    id: 5,
    src: "/FitrahOil/5.jpg",
    alt: "Sertifikat dan Penghargaan",
    type: "certificate"
  }
]

// Product benefits
const benefits = [
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Meningkatkan Sirkulasi Darah",
    description: "Membantu melancarkan peredaran darah dan mengurangi pegal-pegal"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Menguatkan Sistem Imun",
    description: "Kandungan antioksidan alami membantu meningkatkan daya tahan tubuh"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Meningkatkan Energi",
    description: "Memberikan energi alami dan mengurangi rasa lelah berlebihan"
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    title: "Anti Inflamasi",
    description: "Membantu mengurangi peradangan dan nyeri pada otot dan sendi"
  }
]

// Ingredients
const ingredients = [
  "Minyak Zaitun Extra Virgin",
  "Ekstrak Jahe Merah",
  "Minyak Jinten Hitam (Habbatussauda)",
  "Ekstrak Kayu Manis",
  "Minyak Kelapa Murni",
  "Ekstrak Lengkuas",
  "Minyak Peppermint",
  "Vitamin E Alami"
]

// Testimonials
const testimonials = [
  {
    name: "Ibu Siti Rahayu",
    location: "Bandung",
    rating: 5,
    comment: "Alhamdulillah, setelah rutin menggunakan Fitrah Herbal Oil, nyeri punggung saya berkurang drastis. Produk yang sangat berkualitas!"
  },
  {
    name: "Bapak Ahmad Hidayat",
    location: "Jakarta",
    rating: 5,
    comment: "Sangat membantu untuk relaksasi setelah bekerja seharian. Aromanya juga menenangkan. Recommended!"
  },
  {
    name: "Ibu Fatimah",
    location: "Surabaya", 
    rating: 5,
    comment: "Badan jadi lebih segar dan tidak mudah capek. Terima kasih Baitul Jannah atas produk berkualitasnya."
  }
]

// Usage instructions
const usageSteps = [
  "Bersihkan area yang akan dioleskan",
  "Tuangkan 3-5 tetes minyak di telapak tangan",
  "Gosokkan kedua telapak tangan hingga hangat",
  "Pijat lembut area yang diinginkan dengan gerakan memutar",
  "Gunakan 2-3 kali sehari untuk hasil optimal"
]

export default function FitrahOilPage() {
  const [selectedImage, setSelectedImage] = useState<typeof productGallery[0] | null>(null)
  const { language } = useLanguage()
  
  // Animation refs
  const heroRef = useRef(null)
  const benefitsRef = useRef(null)
  const galleryRef = useRef(null)
  const testimonialsRef = useRef(null)
  
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const isBenefitsInView = useInView(benefitsRef, { once: true, amount: 0.3 })
  const isGalleryInView = useInView(galleryRef, { once: true, amount: 0.3 })
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 })

  const handleOrderWhatsApp = () => {
    const phoneNumber = "+6282217184920"
    const message = encodeURIComponent(
      "Halo, saya tertarik dengan Fitrah Herbal Oil seharga Rp 75.000. Apakah masih tersedia? Saya ingin memesan."
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  const handleConsultation = () => {
    const phoneNumber = "+622217184920"
    const message = encodeURIComponent(
      "Halo, saya ingin konsultasi tentang penggunaan Fitrah Herbal Oil. Bisa dijelaskan lebih detail?"
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <PageTransition>
      <main className="pt-20">
        {/* Hero Section */}
        <section ref={heroRef} className="py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-amber-50 dark:from-emerald-900/20 dark:via-green-900/20 dark:to-amber-900/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <Badge className="bg-emerald-600 text-white mb-4">
                    <Leaf className="mr-1 h-4 w-4" />
                    Produk Herbal Alami
                  </Badge>
                  <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                    Fitrah Herbal Oil
                  </h1>
                  <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    Minyak herbal alami premium yang diformulasikan khusus dengan bahan-bahan pilihan untuk kesehatan dan kebugaran tubuh Anda. Diproduksi oleh santri Baitul Jannah dengan standar kualitas tinggi.
                  </p>
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                      <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                      <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                      <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                      <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                      <span className="ml-2 text-gray-600 dark:text-gray-400">5.0</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">Rp 100.000</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      onClick={handleOrderWhatsApp}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Pesan Sekarang
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={handleConsultation}
                      className="px-8 py-6 text-lg"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Konsultasi
                    </Button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/FitrahOil/5.jpg"
                    alt="Fitrah Herbal Oil"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  
                  {/* Floating badges */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="absolute top-6 right-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                  >
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm flex items-center">
                      <Shield className="mr-1 h-4 w-4" />
                      100% Halal
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="absolute bottom-6 left-6 bg-amber-500/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                  >
                    <span className="text-white font-bold text-sm flex items-center">
                      <Award className="mr-1 h-4 w-4" />
                      Produk Terbaik 
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section ref={benefitsRef} className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Manfaat Luar Biasa
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Fitrah Herbal Oil diformulasikan khusus untuk memberikan manfaat optimal bagi kesehatan dan kebugaran Anda
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center p-6 hover:shadow-lg transition-shadow dark:bg-gray-800">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full mb-4 text-emerald-600 dark:text-emerald-400">
                      {benefit.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {benefit.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Gallery Section */}
        <section ref={galleryRef} className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Galeri Produk
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Lihat detail produk dan proses pembuatan Fitrah Herbal Oil
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productGallery.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isGalleryInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Camera className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <p className="font-medium text-gray-900 dark:text-white">{image.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ingredients Section */}
        <section className="py-20 bg-emerald-50 dark:bg-emerald-900/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Komposisi Alami
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300">
                  Dibuat dari bahan-bahan alami pilihan dengan khasiat yang telah teruji
                </p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {ingredients.map((ingredient, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-md"
                  >
                    <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Leaf className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{ingredient}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Usage Instructions */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Cara Penggunaan
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300">
                  Ikuti langkah-langkah berikut untuk mendapatkan manfaat optimal
                </p>
              </motion.div>

              <div className="space-y-6">
                {usageSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-lg">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section ref={testimonialsRef} className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Testimoni Pelanggan
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Apa kata mereka yang sudah merasakan manfaat Fitrah Herbal Oil
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="h-full p-6 dark:bg-gray-800">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                      "{testimonial.comment}"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.location}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Rasakan Manfaatnya Sekarang!
              </h2>
              <p className="text-xl mb-8 text-emerald-100">
                Jangan tunggu lagi. Dapatkan Fitrah Herbal Oil sekarang dan rasakan perubahan positif pada kesehatan Anda. Dengan membeli produk ini, Anda juga turut mendukung pendidikan santri Baitul Jannah.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleOrderWhatsApp}
                  className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Pesan via WhatsApp
                </Button>
           
              </div>
              
                <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Gratis Konsultasi</span>
                </div>
                </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Hubungi Kami
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center gap-3">
                  <Phone className="h-6 w-6 text-emerald-600" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">WhatsApp</p>
                    <p className="text-gray-600 dark:text-gray-300">082217184920</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Mail className="h-6 w-6 text-emerald-600" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                    <p className="text-gray-600 dark:text-gray-300">nurjannahcendikia@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Lokasi</p>
                    <p className="text-gray-600 dark:text-gray-300">Lembang, Bandung Barat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Modal */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{selectedImage?.alt}</DialogTitle>
            </DialogHeader>
            {selectedImage && (
              <div className="relative h-[500px] w-full">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>
    </PageTransition>
  )
}
