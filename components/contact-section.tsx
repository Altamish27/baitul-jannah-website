"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const handleSubmit = () => {
    // Handle contact form submission
    alert("Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.")
  }

  return (
    <section id="kontak" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-emerald-600 dark:text-emerald-400 font-medium"
          >
            Kontak Kami
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2"
          >
            Hubungi Kami
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
            Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau ingin berkunjung ke pesantren.
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h3 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white mb-6">Informasi Kontak</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Alamat</h4>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">
                      Gunung Payung Rt 9 Rw 4 Desa Pagerwangi Kecamatan Lembang Kabupaten Bandung Barat, Jawa Barat
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Telepon</h4>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">081258403467</p>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">082219072934</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Email</h4>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">nurjannahcendikia@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Jam Kunjungan</h4>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">
                      Senin - Minggu: 09.00 - 15.00 WIB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 h-[300px] relative">
              <h3 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white mb-6">Lokasi Kami</h3>
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="h-full w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400">Peta Google Maps</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          >
            <h3 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white mb-6">Kirim Pesan</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <Label htmlFor="contact-name">Nama Lengkap</Label>
                <Input id="contact-name" placeholder="Masukkan nama lengkap Anda" required />
              </div>

              <div className="space-y-4">
                <Label htmlFor="contact-email">Email</Label>
                <Input id="contact-email" type="email" placeholder="Masukkan email Anda" required />
              </div>

              <div className="space-y-4">
                <Label htmlFor="contact-subject">Subjek</Label>
                <Input id="contact-subject" placeholder="Masukkan subjek pesan" required />
              </div>

              <div className="space-y-4">
                <Label htmlFor="contact-message">Pesan</Label>
                <Textarea id="contact-message" placeholder="Tulis pesan Anda" rows={5} required />
              </div>

              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                Kirim Pesan
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
