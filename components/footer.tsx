import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative h-10 w-10">
                <Image
                  src="/LogoYayasan.jpg"
                  alt="Yayasan Baitul Jannah Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-playfair text-xl font-bold text-emerald-400">Baitul Jannah</span>
            </div>
            <p className="text-gray-400 mb-6">
              Pesantren gratis untuk anak yatim piatu yang berdedikasi memberikan pendidikan berkualitas dan lingkungan
              yang mendukung.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>

              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Tautan Cepat</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#tentang" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#program" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Program
                </Link>
              </li>
              <li>
                <Link href="#galeri" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="#testimoni" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Testimoni
                </Link>
              </li>
              <li>
                <Link href="#donasi" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Donasi
                </Link>
              </li>
              <li>
                <Link href="#kontak" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Kontak
                </Link>
              </li>
              <li>
                <Link href="/usaha" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Usaha
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Program</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Pendidikan Formal
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Pendidikan Agama
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Keterampilan Hidup
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Ekstrakurikuler
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Beasiswa Lanjutan
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">Alamat:</span>
                <span className="text-gray-400">
                        Gunung Payung Rt 9 Rw 4 Desa Pagerwangi Kecamatan Lembang Kabupaten Bandung Barat, Jawa Barat
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">Telepon:</span>
                <span className="text-gray-400">081258403467</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">Email:</span>
                <span className="text-gray-400">nurjannahcendikia@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Pesantren Baitul Jannah. Hak Cipta Dilindungi.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
