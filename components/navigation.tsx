"use client"

import { Button } from "@/components/ui/button"
import { Code, Users, Mail, Zap, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [mounted])

  const navItems = [
    { href: "/", label: "Home", icon: Code },
    { href: "/about", label: "About", icon: Users },
    { href: "/projects", label: "Projects", icon: Zap },
    { href: "/blog", label: "Blog", icon: Mail },
    { href: "/contact", label: "Contact", icon: Mail },
  ]

  if (!mounted) {
    return (
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-foreground">Portfolio</h1>
            <div className="hidden md:flex items-center gap-6">
              <div className="animate-pulse text-muted-foreground">Loading...</div>
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="sticky top-0 z-50 bg-amber-50/10 backdrop-blur-xl border-b border-amber-200/20 shadow-2xl">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced logo with glitch effect */}
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-yellow-700 rounded-xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg magnetic-hover">
              <Code className="w-6 h-6 text-white animate-glitch" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-yellow-700 bg-clip-text text-transparent group-hover:neon-glow transition-all duration-300">
                Nathan Algibran
              </h1>
              <p className="text-xs text-amber-600/70 font-medium">Web Developer</p>
            </div>
          </Link>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-amber-100/50 transition-all duration-200 transform hover:scale-110 magnetic-hover"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute block w-6 h-0.5 bg-amber-600 transform transition-all duration-300 ${isMenuOpen ? "rotate-45 top-3" : "top-1"}`}
              />
              <span
                className={`absolute block w-6 h-0.5 bg-amber-600 transform transition-all duration-300 ${isMenuOpen ? "opacity-0" : "top-3"}`}
              />
              <span
                className={`absolute block w-6 h-0.5 bg-amber-600 transform transition-all duration-300 ${isMenuOpen ? "-rotate-45 top-3" : "top-5"}`}
              />
            </div>
          </button>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={`group flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:bg-amber-100/50 hover:shadow-lg transform hover:scale-105 magnetic-hover liquid-button ${
                  pathname === href
                    ? "bg-amber-100/50 text-amber-700 font-semibold shadow-lg"
                    : "text-amber-600/80 hover:text-amber-700"
                }`}
              >
                <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">{label}</span>
                {pathname === href && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                )}
              </Link>
            ))}

            <Link href="/contact">
              <Button
                size="sm"
                className="bg-gradient-to-r from-amber-600 to-yellow-700 hover:from-amber-700 hover:to-yellow-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 liquid-button magnetic-hover"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Hire Me
              </Button>
            </Link>
          </div>
        </div>

        {/* Enhanced mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="pt-4 pb-2 border-t border-amber-200/20 mt-4 bg-amber-50/5 backdrop-blur-sm rounded-lg">
            <div className="flex flex-col gap-2">
              {navItems.map(({ href, label, icon: Icon }, index) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-left text-amber-600 hover:text-amber-700 hover:bg-amber-50/50 rounded-lg transition-all duration-200 transform hover:translate-x-2 magnetic-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{label}</span>
                </Link>
              ))}
              <div className="mt-2 pt-2 border-t border-amber-200/20 flex items-center justify-end">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-amber-600 to-yellow-700 hover:from-amber-700 hover:to-yellow-800 liquid-button"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Hire Me
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
