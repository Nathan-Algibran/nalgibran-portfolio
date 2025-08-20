"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Code,
  Zap,
  Users,
  Star,
  Calendar,
  MapPin,
  GraduationCap,
  Award,
  Heart,
  Coffee,
  Lightbulb,
  Target,
} from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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
        {[...Array(20)].map((_, i) => (
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
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 bg-amber-100/80 text-amber-800 border-amber-200/50 backdrop-blur-sm magnetic-hover"
            >
              <Users className="w-3 h-3 mr-1" />
              About Me
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 neon-glow">Get to Know Me Better</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm Nathan Algibran, a passionate web developer with 2+ years of experience creating digital solutions
              that make a difference. Here's my story and what drives me.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative group">
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 to-yellow-200/30 rounded-3xl transform rotate-2 scale-105 group-hover:rotate-4 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/20 to-amber-200/20 rounded-3xl transform -rotate-1 scale-110 group-hover:-rotate-2 transition-transform duration-700"></div>

                {/* Main photo container */}
                <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-amber-100/50 group-hover:shadow-3xl transition-all duration-500">
                  <div className="aspect-[4/5] overflow-hidden rounded-xl">
                    <img
                      src="/profile-photo.jpg"
                      alt="Nathan Algibran - Web Developer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter group-hover:brightness-110"
                    />
                  </div>
                </div>

                {/* Floating info cards */}
                <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-amber-100/50 animate-float">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    <span className="font-medium text-slate-700">Indonesia, Bengkulu</span>
                  </div>
                </div>
                <div
                  className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-amber-100/50 animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-amber-600" />
                    <span className="font-medium text-slate-600">2+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">My Journey</h2>
                <p className="text-muted-foreground leading-relaxed">
                  My passion for web development began with curiosity about how websites work. Over the past 2+ years,
                  I've dedicated myself to mastering modern web technologies and creating meaningful digital
                  experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in the power of clean code, user-centered design, and continuous learning. Every project is
                  an opportunity to solve problems creatively and deliver solutions that exceed expectations.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Code, label: "7+ Projects", desc: "Completed" },
                  { icon: Coffee, label: "500+ Hours", desc: "Coding" },
                  { icon: Users, label: "Happy", desc: "Clients" },
                  { icon: Star, label: "Quality", desc: "Focus" },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-amber-100/50 hover:border-amber-300/50 transition-all duration-300 group magnetic-hover"
                  >
                    <item.icon className="w-8 h-8 text-amber-600 mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-lg font-semibold text-foreground">{item.label}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-amber-50/20 to-yellow-50/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 neon-glow">Skills & Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Technical skills and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Frontend Development",
                desc: "Creating responsive and interactive user interfaces",
                icon: Code,
                skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
                level: 95,
              },
              {
                title: "Backend Development",
                desc: "Building robust server-side applications and APIs",
                icon: Zap,
                skills: ["Node.js", "Python", "PostgreSQL", "REST APIs", "Database Design"],
                level: 82,
              },
              {
                title: "Project Management",
                desc: "Leading projects from concept to deployment",
                icon: Users,
                skills: ["Agile", "Scrum", "Team Leadership", "Client Communication", "Problem Solving"],
                level: 90,
              },
            ].map((skill, index) => (
              <Card
                key={skill.title}
                className="group hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border-amber-200/50 hover:border-amber-400/50 hover:-translate-y-2 magnetic-hover overflow-hidden"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <skill.icon className="w-8 h-8 text-amber-600 group-hover:text-amber-700 transition-colors" />
                  </div>
                  <CardTitle className="text-foreground group-hover:text-amber-600 transition-colors text-xl">
                    {skill.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{skill.desc}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-amber-100/80 text-amber-700 hover:bg-amber-200 transition-colors cursor-default text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">Proficiency</span>
                      <span className="text-sm font-bold text-amber-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gradient-to-r from-amber-100/50 to-yellow-100/50 rounded-full h-3 overflow-hidden shadow-inner">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full transition-all duration-2000 ease-out relative overflow-hidden"
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Approach Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">My Approach</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              The principles and values that guide my work and client relationships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "User-Centered Design",
                description:
                  "Every decision is made with the end user in mind, ensuring intuitive and accessible experiences.",
                icon: Heart,
                color: "amber",
              },
              {
                title: "Clean Code",
                description: "Writing maintainable, scalable code that follows best practices and industry standards.",
                icon: Code,
                color: "amber",
              },
              {
                title: "Continuous Learning",
                description:
                  "Staying updated with the latest technologies and trends to deliver cutting-edge solutions.",
                icon: GraduationCap,
                color: "amber",
              },
              {
                title: "Problem Solving",
                description:
                  "Approaching challenges with creativity and analytical thinking to find optimal solutions.",
                icon: Lightbulb,
                color: "amber",
              },
              {
                title: "Quality Focus",
                description: "Delivering high-quality work that exceeds expectations and stands the test of time.",
                icon: Award,
                color: "amber",
              },
              {
                title: "Goal-Oriented",
                description: "Working collaboratively to achieve project goals and business objectives efficiently.",
                icon: Target,
                color: "amber",
              },
            ].map((value, index) => (
              <Card
                key={value.title}
                className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-amber-200/50 hover:border-amber-400/50 hover:-translate-y-1 magnetic-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <value.icon className="w-6 h-6 text-amber-600 group-hover:text-amber-700 transition-colors" />
                  </div>
                  <CardTitle className="text-foreground group-hover:text-amber-600 transition-colors text-lg">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed text-center">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-amber-50/20 to-yellow-50/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            I'm always excited to take on new challenges and collaborate on meaningful projects. Let's discuss how I can
            help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-amber-200/50 hover:border-amber-600 transform hover:scale-105 transition-all duration-200 magnetic-hover"
              >
                <Code className="w-4 h-4" />
                View My Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-yellow-700 hover:from-amber-700 hover:to-yellow-800 transform hover:scale-105 transition-all duration-200 liquid-button magnetic-hover"
              >
                <Users className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-amber-200/20 bg-gradient-to-r from-amber-50/20 to-yellow-50/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">© 2024 Nathan Algibran Portfolio. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="text-muted-foreground hover:text-amber-600 transition-colors text-sm magnetic-hover"
              >
                Home
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
