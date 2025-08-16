"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Facebook, Twitter, Instagram, Heart, Smartphone, Building2, Copy, Check } from "lucide-react"

const donationAmounts = [
  { value: "100000", label: "Rp 100.000" },
  { value: "250000", label: "Rp 250.000" },
  { value: "500000", label: "Rp 500.000" },
  { value: "1000000", label: "Rp 1.000.000" },
  { value: "custom", label: "Jumlah Lain" },
]

const paymentMethods = [
  {
    id: "bca",
    name: "Bank BCA",
    type: "bank",
    icon: <Building2 className="h-5 w-5" />,
    account: "1234567890",
    accountName: "Yayasan Baitul Jannah",
  },
  {
    id: "mandiri",
    name: "Bank Mandiri",
    type: "bank",
    icon: <Building2 className="h-5 w-5" />,
    account: "0987654321",
    accountName: "Yayasan Baitul Jannah",
  },
  {
    id: "bni",
    name: "Bank BNI",
    type: "bank",
    icon: <Building2 className="h-5 w-5" />,
    account: "1122334455",
    accountName: "Yayasan Baitul Jannah",
  },
  {
    id: "gopay",
    name: "GoPay",
    type: "ewallet",
    icon: <Smartphone className="h-5 w-5" />,
    account: "+6281258403467",
    accountName: "Yayasan Baitul Jannah",
  },
  {
    id: "dana",
    name: "DANA",
    type: "ewallet",
    icon: <Smartphone className="h-5 w-5" />,
    account: "+6281258403467",
    accountName: "Yayasan Baitul Jannah",
  },
  {
    id: "ovo",
    name: "OVO",
    type: "ewallet",
    icon: <Smartphone className="h-5 w-5" />,
    account: "+6281258403467",
    accountName: "Yayasan Baitul Jannah",
  },
]

export default function DonationSection() {
  const [selectedAmount, setSelectedAmount] = useState("100000")
  const [customAmount, setCustomAmount] = useState("")
  const [selectedPayment, setSelectedPayment] = useState("")
  const [donationProgress, setDonationProgress] = useState(65)
  const [copiedAccount, setCopiedAccount] = useState("")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!selectedPayment) {
      alert("Silakan pilih metode pembayaran terlebih dahulu!")
      return
    }

    const selectedMethod = paymentMethods.find((method) => method.id === selectedPayment)
    const amount = selectedAmount === "custom" ? customAmount : selectedAmount

    alert(
      `Terima kasih! Silakan transfer ke ${selectedMethod?.name}:\nNomor: ${selectedMethod?.account}\nAtas Nama: ${selectedMethod?.accountName}\nJumlah: Rp ${Number.parseInt(amount).toLocaleString("id-ID")}`,
    )
  }

  const copyToClipboard = (text, methodId) => {
    navigator.clipboard.writeText(text)
    setCopiedAccount(methodId)
    setTimeout(() => setCopiedAccount(""), 2000)
  }

  const selectedMethod = paymentMethods.find((method) => method.id === selectedPayment)

  return (
    <section id="donasi" className="py-20 bg-emerald-50 dark:bg-emerald-900/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-emerald-600 dark:text-emerald-400 font-medium"
          >
            Donasi
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2"
          >
            Dukung Pendidikan Anak Yatim
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
            Donasi Anda akan membantu kami memberikan pendidikan berkualitas dan kehidupan yang layak bagi anak-anak
            yatim piatu.
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          >
            <h3 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white mb-6">Formulir Donasi</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <Label htmlFor="name">Nama Lengkap</Label>
                <Input id="name" placeholder="Masukkan nama lengkap Anda" required />
              </div>

              <div className="space-y-4">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Masukkan email Anda" required />
              </div>

              <div className="space-y-4">
                <Label htmlFor="phone">Nomor Telepon</Label>
                <Input id="phone" placeholder="Masukkan nomor telepon Anda" required />
              </div>

              <div className="space-y-4">
                <Label>Jumlah Donasi</Label>
                <RadioGroup value={selectedAmount} onValueChange={setSelectedAmount} className="grid grid-cols-2 gap-4">
                  {donationAmounts.map((amount) => (
                    <div key={amount.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={amount.value} id={`amount-${amount.value}`} />
                      <Label htmlFor={`amount-${amount.value}`}>{amount.label}</Label>
                    </div>
                  ))}
                </RadioGroup>

                {selectedAmount === "custom" && (
                  <div className="mt-4">
                    <Input
                      type="number"
                      placeholder="Masukkan jumlah donasi"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      required={selectedAmount === "custom"}
                    />
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <Label>Metode Pembayaran</Label>
                <Select value={selectedPayment} onValueChange={setSelectedPayment}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih metode pembayaran" />
                  </SelectTrigger>
                  <SelectContent>
                    <div className="p-2">
                      <p className="text-sm font-medium text-gray-500 mb-2">Transfer Bank</p>
                      {paymentMethods
                        .filter((method) => method.type === "bank")
                        .map((method) => (
                          <SelectItem key={method.id} value={method.id}>
                            <div className="flex items-center gap-2">
                              {method.icon}
                              {method.name}
                            </div>
                          </SelectItem>
                        ))}
                    </div>
                    <div className="p-2">
                      <p className="text-sm font-medium text-gray-500 mb-2">E-Wallet</p>
                      {paymentMethods
                        .filter((method) => method.type === "ewallet")
                        .map((method) => (
                          <SelectItem key={method.id} value={method.id}>
                            <div className="flex items-center gap-2">
                              {method.icon}
                              {method.name}
                            </div>
                          </SelectItem>
                        ))}
                    </div>
                  </SelectContent>
                </Select>

                {selectedMethod && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {selectedMethod.icon}
                      <span className="font-medium">{selectedMethod.name}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {selectedMethod.type === "bank" ? "No. Rekening:" : "No. HP:"}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold">{selectedMethod.account}</span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(selectedMethod.account, selectedMethod.id)}
                            className="h-6 w-6 p-0"
                          >
                            {copiedAccount === selectedMethod.id ? (
                              <Check className="h-3 w-3 text-green-600" />
                            ) : (
                              <Copy className="h-3 w-3" />
                            )}
                          </Button>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Atas Nama: <span className="font-medium">{selectedMethod.accountName}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              <div className="space-y-4">
                <Label htmlFor="message">Pesan (Opsional)</Label>
                <Textarea id="message" placeholder="Tulis pesan atau doa Anda" rows={3} />
              </div>

              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg">
                <Heart className="mr-2 h-5 w-5" /> Konfirmasi Donasi
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h3 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Target Donasi Tahun 2025
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between text-sm font-medium">
                  <span>Terkumpul: Rp 650.000.000</span>
                  <span>Target: Rp 1.000.000.000</span>
                </div>
                <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${donationProgress}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-emerald-600 dark:bg-emerald-500 rounded-full"
                  ></motion.div>
                </div>
                <p className="text-center text-emerald-600 dark:text-emerald-400 font-medium">
                  {donationProgress}% dari target tercapai
                </p>
              </div>

                          </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h3 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white mb-6">Mengapa Donasi?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-emerald-600 dark:text-emerald-400 text-sm font-bold">1</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Membantu anak yatim piatu mendapatkan pendidikan berkualitas
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-emerald-600 dark:text-emerald-400 text-sm font-bold">2</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Mendukung penyediaan fasilitas dan kebutuhan sehari-hari santri
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-emerald-600 dark:text-emerald-400 text-sm font-bold">3</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Berkontribusi dalam pengembangan program dan infrastruktur pesantren
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-emerald-600 dark:text-emerald-400 text-sm font-bold">4</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Menjadi bagian dari perubahan positif untuk masa depan anak-anak yatim
                  </p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
