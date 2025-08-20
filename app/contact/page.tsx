"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Clock,
  Globe,
  MessageCircle,
  User,
  FileText,
  CheckCircle,
  Calendar,
  Coffee,
} from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function ContactPage() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

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
              <MessageCircle className="w-3 h-3 mr-1" />
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 neon-glow">Let's Work Together</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? I'm here to help you create exceptional digital experiences. Let's
              discuss your project and make it happen.
            </p>
          </div>

          {/* Contact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { number: "24h", label: "Response Time", icon: Clock },
              { number: "100%", label: "Project Success", icon: CheckCircle },
              { number: "2+", label: "Years Experience", icon: Calendar },
              { number: "24/7", label: "Available", icon: Coffee },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center group magnetic-hover">
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100/80 to-yellow-100/80 rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-amber-200/80 group-hover:to-yellow-200/80 transition-all duration-300 shadow-lg backdrop-blur-sm">
                    <stat.icon className="w-6 h-6 text-amber-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-yellow-700 bg-clip-text text-transparent mb-1 animate-counter neon-glow">
                  {stat.number}
                </div>
                <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-amber-50/20 to-yellow-50/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always excited to discuss new projects and opportunities. Whether you have a specific idea in mind
                  or just want to explore possibilities, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    content: "nalgibran14@gmail.com",
                    description: "Send me an email anytime",
                    action: "mailto:nalgibran14@gmail.com",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "+62895606457011",
                    description: "Call or WhatsApp me",
                    action: "tel:+62895606457011",
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    content: "Indonesia, Bengkulu",
                    description: "Available for remote work worldwide",
                    action: null,
                  },
                  {
                    icon: Globe,
                    title: "Timezone",
                    content: "WIB (UTC+7)",
                    description: "Western Indonesia Time",
                    action: null,
                  },
                ].map((item, index) => (
                  <Card
                    key={item.title}
                    className="group hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-amber-200/50 hover:border-amber-400/50 magnetic-hover cursor-pointer"
                    onClick={() => item.action && window.open(item.action)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                          <item.icon className="w-6 h-6 text-amber-600 group-hover:text-amber-700 transition-colors" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground group-hover:text-amber-600 transition-colors mb-1">
                            {item.title}
                          </h3>
                          <p className="font-medium mb-1 text-slate-700">{item.content}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-amber-600 hover:text-white hover:scale-110 transition-all duration-200 bg-transparent border-amber-200 hover:border-amber-600 magnetic-hover"
                    onClick={() => window.open("https://github.com/Nathan-Algibran", "_blank")}
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-amber-600 hover:text-white hover:scale-110 transition-all duration-200 bg-transparent border-amber-200 hover:border-amber-600 magnetic-hover"
                    onClick={() =>
                      window.open("https://www.linkedin.com/in/muhammad-nathan-algibran-6b1430322", "_blank")
                    }
                  >
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-amber-600 hover:text-white hover:scale-110 transition-all duration-200 bg-transparent border-amber-200 hover:border-amber-600 magnetic-hover"
                    onClick={() => window.open("mailto:nalgibran14@gmail.com")}
                  >
                    <Mail className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-white/80 backdrop-blur-sm border-amber-200/50 hover:shadow-xl transition-shadow duration-300 magnetic-hover">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send Me a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4 animate-bounce" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block text-slate-700">
                          <User className="w-4 h-4 inline mr-1" />
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/50 border border-amber-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-600 transition-all duration-200 magnetic-hover text-slate-500"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block text-slate-700">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/50 border border-amber-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-600 transition-all duration-200 magnetic-hover text-slate-500"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-slate-700">
                        <Mail className="w-4 h-4 inline mr-1" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/50 border border-amber-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-600 transition-all duration-200 magnetic-hover text-slate-500"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-slate-700">
                        <FileText className="w-4 h-4 inline mr-1" />
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/50 border border-amber-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-600 transition-all duration-200 magnetic-hover text-slate-500"
                        placeholder="Project Discussion"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-slate-700">
                        <MessageCircle className="w-4 h-4 inline mr-1" />
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-white/50 border border-amber-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-600 resize-none transition-all duration-200 magnetic-hover text-slate-500"
                        placeholder="Tell me about your project, timeline, and any specific requirements..."
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-amber-600 to-yellow-700 hover:from-amber-700 hover:to-yellow-800 text-white py-3 text-lg font-medium hover:scale-105 transition-all duration-200 liquid-button magnetic-hover disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Common questions about working with me and my development process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "What's your typical project timeline?",
                answer:
                  "Project timelines vary based on complexity, but most websites take 2-4 weeks from start to finish. I'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "Do you work with international clients?",
                answer:
                  "I work with clients worldwide and am comfortable with remote collaboration across different time zones.",
              },
              {
                question: "What technologies do you specialize in?",
                answer:
                  "I specialize in modern web technologies including React, Next.js, TypeScript, and Tailwind CSS for frontend, with Node.js and PostgreSQL for backend development.",
              },
              {
                question: "Do you provide ongoing support?",
                answer:
                  "Yes, I offer ongoing maintenance and support packages to keep your website updated, secure, and performing optimally.",
              },
              {
                question: "What's included in your web development service?",
                answer:
                  "My services include responsive design, performance optimization, SEO basics, cross-browser compatibility, and basic training on content management.",
              },
              {
                question: "How do you handle project communication?",
                answer:
                  "I believe in transparent communication with regular updates, milestone reviews, and am available via email, phone, or video calls as needed.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-amber-200/50 hover:border-amber-400/50 magnetic-hover"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-foreground group-hover:text-amber-600 transition-colors">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-amber-50/20 to-yellow-50/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Don't hesitate to reach out! I'm here to help you bring your digital vision to life with professional web
            development services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-amber-200/50 hover:border-amber-600 transform hover:scale-105 transition-all duration-200 magnetic-hover"
              >
                <FileText className="w-4 h-4" />
                View My Work
              </Button>
            </Link>
            <Button
              size="lg"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-gradient-to-r from-amber-600 to-yellow-700 hover:from-amber-700 hover:to-yellow-800 transform hover:scale-105 transition-all duration-200 liquid-button magnetic-hover"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message Now
            </Button>
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
