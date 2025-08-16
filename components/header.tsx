"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Menu, X, Sun, Moon, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  const navItems = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/tentang" },
    { name: t("programs"), href: "/program" },
    { name: "Fitrah Oil", href: "/usaha" },
  ]

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return null // Prevent hydration mismatch
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative h-10 w-10 transition-transform group-hover:scale-110">
              <Image
                src="/LogoPondokPesantren.jpg"
                alt="Baitul Jannah Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-playfair text-xl font-bold text-emerald-700 dark:text-emerald-400 transition-colors">
              Baitul Jannah
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 transition-all group-hover:w-full"></span>
              </Link>
            ))}

            <Button
              asChild
              className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-medium shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/donasi">{t("donateNow")}</Link>
            </Button>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <Globe className="h-5 w-5" />
                  <span className="ml-1 text-sm font-medium">{language.toUpperCase()}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <DropdownMenuItem
                  onClick={() => setLanguage("id")}
                  className="hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                >
                  🇮🇩 Bahasa Indonesia
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("en")}
                  className="hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                >
                  🇺🇸 English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all shadow-md hover:shadow-lg"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-amber-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </motion.button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <DropdownMenuItem onClick={() => setLanguage("id")}>🇮🇩 ID</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("en")}>🇺🇸 EN</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-amber-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </motion.button>

            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-t border-gray-200/20 dark:border-gray-700/20"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-medium w-full">
                <Link href="/donasi" onClick={() => setIsOpen(false)}>
                  {t("donateNow")}
                </Link>
              </Button>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  )
}
