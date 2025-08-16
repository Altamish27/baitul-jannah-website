import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Amiri } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollProgress from "@/components/scroll-progress"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
})

export const metadata: Metadata = {
  title: "Pesantren Baitul Jannah - Pesantren Gratis untuk Yatim Piatu",
  description:
    "Pesantren Baitul Jannah adalah pesantren gratis yang didedikasikan untuk anak yatim piatu, menyediakan pendidikan berkualitas dan lingkungan yang mendukung dengan nilai-nilai Islam yang kuat.",
  keywords: "pesantren, yatim piatu, pendidikan Islam, gratis, Baitul Jannah",
  authors: [{ name: "Pesantren Baitul Jannah" }],
  icons: {
    icon: '/LogoPondokPesantren.jpg',
    shortcut: '/LogoPondokPesantren.jpg',
    apple: '/LogoPondokPesantren.jpg',
  },
  openGraph: {
    title: "Pesantren Baitul Jannah - Pesantren Gratis untuk Yatim Piatu",
    description: "Membangun masa depan cerah untuk anak-anak yatim dengan pendidikan berkualitas dan nilai-nilai Islam",
    type: "website",
    images: [
      {
        url: '/LogoPondokPesantren.jpg',
        width: 800,
        height: 600,
        alt: 'Logo Pesantren Baitul Jannah',
      }
    ],
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} ${amiri.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange={false}
          storageKey="baitul-jannah-theme"
        >
          <LanguageProvider>
            <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
              <ScrollProgress />
              <Header />
              <main className="relative">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
