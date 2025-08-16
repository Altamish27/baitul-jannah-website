"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Smartphone, Building2, Copy, Check, Heart, Send, CheckCircle, MessageCircle, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import PageTransition from "@/components/page-transition"
import { Alert, AlertDescription } from "@/components/ui/alert"

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

export default function DonasiPage() {
  const [selectedPayment, setSelectedPayment] = useState("")
  const [copiedAccount, setCopiedAccount] = useState("")
  const [donationProgress] = useState(65)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [whatsappUrl, setWhatsappUrl] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const { t, language } = useLanguage()

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async () => {
    if (!selectedPayment) {
      alert(
        language === "id"
          ? "Silakan pilih metode pembayaran terlebih dahulu!"
          : "Please select a payment method first!",
      )
      return
    }

    // Validate phone number format
    const phoneRegex = /^(\+62|62|0)[0-9]{9,13}$/
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      alert(
        language === "id"
          ? "Format nomor telepon tidak valid. Gunakan format: 08xxxxxxxxx atau +628xxxxxxxxx"
          : "Invalid phone number format. Use format: 08xxxxxxxxx or +628xxxxxxxxx",
      )
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const selectedMethod = paymentMethods.find((method) => method.id === selectedPayment)

      const donationData = {
        ...formData,
        paymentMethod: selectedMethod?.name || selectedPayment,
        language,
      }

      const response = await fetch("/api/send-donation-confirmation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(donationData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("success")
        setWhatsappUrl(result.whatsappMessage?.url || "")

        // Show success message
        const successMessage =
          language === "id"
            ? `Terima kasih ${formData.name}! Email konfirmasi telah dikirim ke ${formData.email}. Tim kami akan menghubungi Anda melalui WhatsApp untuk panduan selanjutnya.`
            : `Thank you ${formData.name}! Confirmation email has been sent to ${formData.email}. Our team will contact you via WhatsApp for further guidance.`

        alert(successMessage)

        // Reset form
        setFormData({ name: "", email: "", phone: "", message: "" })
        setSelectedPayment("")
      } else {
        setSubmitStatus("error")
        alert(
          language === "id"
            ? "Gagal mengirim konfirmasi. Silakan coba lagi atau hubungi kami langsung."
            : "Failed to send confirmation. Please try again or contact us directly.",
        )
      }
    } catch (error) {
      console.error("Error submitting donation:", error)
      setSubmitStatus("error")
      alert(
        language === "id"
          ? "Terjadi kesalahan. Silakan coba lagi atau hubungi kami langsung."
          : "An error occurred. Please try again or contact us directly.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const copyToClipboard = (text: string, methodId: string) => {
    navigator.clipboard.writeText(text)
    setCopiedAccount(methodId)
    setTimeout(() => setCopiedAccount(""), 2000)
  }

  const selectedMethod = paymentMethods.find((method) => method.id === selectedPayment)

  return (
    <PageTransition>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-emerald-50 dark:bg-emerald-900/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {t("donationTitle")}
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">{t("donationDescription")}</p>
            </motion.div>
          </div>
        </section>

        {/* Success Alert */}
        {submitStatus === "success" && (
          <div className="container mx-auto px-4 py-4">
            <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800 dark:text-green-200">
                {language === "id"
                  ? "✅ Konfirmasi donasi berhasil dikirim! Tim kami akan menghubungi Anda melalui email dan WhatsApp untuk panduan transfer."
                  : "✅ Donation confirmation sent successfully! Our team will contact you via email and WhatsApp for transfer guidance."}
              </AlertDescription>
            </Alert>
          </div>
        )}

        {/* Donation Form Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
              >
                <h3 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {t("donationForm")}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <Label htmlFor="name">{t("fullName")}</Label>
                    <Input
                      id="name"
                      placeholder={`${t("fullName")}...`}
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="email">{t("email")}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={`${t("email")}...`}
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="phone">{t("phone")}</Label>
                    <Input
                      id="phone"
                      placeholder="08xxxxxxxxx atau +628xxxxxxxxx"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {language === "id"
                        ? "Format: 08xxxxxxxxx atau +628xxxxxxxxx"
                        : "Format: 08xxxxxxxxx or +628xxxxxxxxx"}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Label>{t("paymentMethod")}</Label>
                    <Select value={selectedPayment} onValueChange={setSelectedPayment}>
                      <SelectTrigger>
                        <SelectValue placeholder={t("selectPayment")} />
                      </SelectTrigger>
                      <SelectContent>
                        <div className="p-2">
                          <p className="text-sm font-medium text-gray-500 mb-2">{t("bankTransfer")}</p>
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
                          <p className="text-sm font-medium text-gray-500 mb-2">{t("eWallet")}</p>
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
                              {selectedMethod.type === "bank" ? t("accountNumber") : t("phoneNumber")}:
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
                            {t("accountName")}: <span className="font-medium">{selectedMethod.accountName}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="message">{t("message")}</Label>
                    <Textarea
                      id="message"
                      placeholder={`${t("message")}...`}
                      rows={3}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Send className="mr-2 h-5 w-5 animate-spin" />
                        {language === "id" ? "Mengirim..." : "Sending..."}
                      </>
                    ) : (
                      <>
                        <Heart className="mr-2 h-5 w-5" />
                        {t("confirmDonation")}
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="space-y-8"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                  <h3 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    {t("donationTarget")}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex justify-between text-sm font-medium">
                      <span>{t("collected")}: Rp 650.000.000</span>
                      <span>{t("target")}: Rp 1.000.000.000</span>
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
                      {donationProgress}% {t("targetReached")}
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                  <h3 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    {t("whyDonate")}
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-emerald-600 dark:text-emerald-400 text-sm font-bold">1</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        {language === "id"
                          ? "Membantu anak yatim piatu mendapatkan pendidikan berkualitas"
                          : "Help orphaned children get quality education"}
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-emerald-600 dark:text-emerald-400 text-sm font-bold">2</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        {language === "id"
                          ? "Mendukung penyediaan fasilitas dan kebutuhan sehari-hari santri"
                          : "Support facilities and daily needs of students"}
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-emerald-600 dark:text-emerald-400 text-sm font-bold">3</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        {language === "id"
                          ? "Berkontribusi dalam pengembangan program dan infrastruktur pesantren"
                          : "Contribute to program development and boarding school infrastructure"}
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-emerald-600 dark:text-emerald-400 text-sm font-bold">4</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        {language === "id"
                          ? "Menjadi bagian dari perubahan positif untuk masa depan anak-anak yatim"
                          : "Be part of positive change for the future of orphaned children"}
                      </p>
                    </li>
                  </ul>
                </div>

                {/* Admin Contact Info */}
                <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl shadow-xl p-8 text-white">
                  <h3 className="font-playfair text-xl font-bold mb-4">
                    {language === "id" ? "Tim Kami Akan Menghubungi Anda" : "Our Team Will Contact You"}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5" />
                      <div>
                        <p className="font-medium">{language === "id" ? "Email Konfirmasi" : "Confirmation Email"}</p>
                        <p className="text-emerald-100 text-sm">nurjannahcendikia@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageCircle className="h-5 w-5" />
                      <div>
                        <p className="font-medium">{language === "id" ? "WhatsApp Follow-up" : "WhatsApp Follow-up"}</p>
                        <p className="text-emerald-100 text-sm">+6281258403467</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-white/10 rounded-lg">
                    <p className="text-sm text-emerald-100">
                      {language === "id"
                        ? "📧 Email konfirmasi akan dikirim ke alamat email Anda\n📱 Tim kami akan menghubungi via WhatsApp untuk panduan transfer"
                        : "📧 Confirmation email will be sent to your email address\n📱 Our team will contact you via WhatsApp for transfer guidance"}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
