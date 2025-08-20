"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Rocket, Star, Code, Zap } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const words = ["Creative Professional", "Problem Solver", "Code Enthusiast", "Digital Artist"]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const currentWord = words[currentWordIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 1000 : 2000

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
      } else {
        setTypedText((prev) => (isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)))
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [typedText, isDeleting, currentWordIndex, mounted, words])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorTimer)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 animate-gradient opacity-5"></div>

        {/* Morphing background shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-500/10 animate-morph"></div>
        <div
          className="absolute bottom-20 right-10 w-48 h-48 bg-yellow-600/10 animate-morph"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Enhanced floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          >
            <div className="w-1 h-1 bg-amber-500/30 rounded-full"></div>
          </div>
        ))}

        {/* Interactive cursor follower */}
        <div
          className="absolute w-4 h-4 bg-amber-500/20 rounded-full pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 8,
            top: mousePosition.y - 8,
          }}
        />
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="w-fit animate-pulse bg-green-100/80 text-green-800 border-green-200/50 backdrop-blur-sm magnetic-hover"
                >
                  <Star className="w-3 h-3 mr-1" />
                  Available for Work
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  <span className="inline-block animate-fade-in-up neon-glow">
                    {typedText}
                    <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity text-amber-600`}>
                      |
                    </span>
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up animation-delay-400">
                  I'm a web developer who crafts exceptional digital experiences through innovative design and
                  development. Passionate about creating solutions that make a difference.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
                <Link href="/projects">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-amber-600 to-yellow-700 hover:from-amber-700 hover:to-yellow-800 transform hover:scale-105 transition-all duration-200 liquid-button magnetic-hover"
                  >
                    <Rocket className="w-4 h-4 mr-2" />
                    View My Work
                  </Button>
                </Link>
                <Link href="/resume">
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-amber-200/50 hover:border-amber-600 transform hover:scale-105 transition-all duration-200 magnetic-hover"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative group">
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 to-yellow-200/30 rounded-3xl transform rotate-3 scale-105 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/20 to-amber-200/20 rounded-3xl transform -rotate-2 scale-110 group-hover:-rotate-4 transition-transform duration-700"></div>

                {/* Main photo container */}
                <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-amber-100/50 group-hover:shadow-3xl transition-all duration-500">
                  <div className="aspect-square overflow-hidden rounded-xl">
                    <img
                      src="/profile-photo.jpg"
                      alt="Nathan Algibran - Web Developer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter group-hover:brightness-110"
                    />
                  </div>

                  {/* Photo overlay with info */}
                  <div className="absolute inset-4 bg-gradient-to-t from-amber-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">Nathan Algibran</h3>
                      <p className="text-amber-200 text-sm">Web Developer & Creative Professional</p>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-500/20 rounded-full animate-pulse"></div>
                <div
                  className="absolute -bottom-6 -left-6 w-12 h-12 bg-yellow-500/10 rounded-full animate-bounce"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-amber-50/30 to-yellow-50/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-8">
            {[
              { number: "7+", label: "Projects Completed", icon: Code },
              { number: "2+", label: "Years Experience", icon: Zap },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center group magnetic-hover">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100/80 to-yellow-100/80 rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-amber-200/80 group-hover:to-yellow-200/80 transition-all duration-300 shadow-lg backdrop-blur-sm">
                    <stat.icon className="w-8 h-8 text-amber-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-yellow-700 bg-clip-text text-transparent mb-2 animate-counter neon-glow">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Explore My Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover more about my skills, projects, and how we can work together
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "About Me",
                description: "Learn about my background, experience, and approach to web development",
                href: "/about",
                icon: "👨‍💻",
              },
              {
                title: "My Projects",
                description: "Explore my portfolio of web applications and development work",
                href: "/projects",
                icon: "🚀",
              },
              {
                title: "Get In Touch",
                description: "Ready to start a project? Let's discuss your ideas and requirements",
                href: "/contact",
                icon: "💬",
              },
            ].map((item, index) => (
              <Link key={item.title} href={item.href}>
                <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-200/50 hover:border-amber-400/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer magnetic-hover">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-amber-200/20 bg-gradient-to-r from-amber-50/20 to-yellow-50/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">© 2024 Nathan Algibran. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link
                href="/about"
                className="text-muted-foreground hover:text-amber-600 transition-colors text-sm magnetic-hover"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-muted-foreground hover:text-amber-600 transition-colors text-sm magnetic-hover"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-amber-600 transition-colors text-sm magnetic-hover"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
