"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, MapPin, Github, Linkedin, Calendar, Award, Code, Users, Star } from "lucide-react"
import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"

export default function ResumePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleDownload = () => {
    window.print()
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
    <div className="min-h-screen bg-background">
      <div className="print:hidden">
        <Navigation />
      </div>

      <div className="max-w-4xl mx-auto p-6 print:p-0 print:max-w-none">
        {/* Download Button - Hidden in print */}
        <div className="print:hidden mb-8 text-center">
          <Button
            onClick={handleDownload}
            size="lg"
            className="bg-gradient-to-r from-amber-600 to-yellow-700 hover:from-amber-700 hover:to-yellow-800"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </div>

        {/* Resume Content */}
        <div className="bg-white text-black print:shadow-none shadow-lg rounded-lg print:rounded-none overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-600 to-yellow-700 text-white p-8 print:p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20">
                <img src="/profile-photo.jpg" alt="Nathan Algibran" className="w-full h-full object-cover" />
              </div>
              <div className="text-center md:text-left flex-1">
                <h1 className="text-4xl font-bold mb-2">Muhammad Nathan Algibran</h1>
                <h2 className="text-xl mb-4 opacity-90">Web Developer</h2>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Bengkulu, Indonesia</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    <span>nathan@example.com</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Github className="w-4 h-4" />
                    <span>github.com/Nathan-Algibran</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Linkedin className="w-4 h-4" />
                    <span>linkedin.com/in/muhammad-nathan-algibran</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 print:p-6">
            {/* Professional Summary */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-amber-700 mb-4 border-b-2 border-amber-200 pb-2">
                Professional Summary
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Passionate web developer with 2+ years of experience creating digital solutions that make a difference.
                Specialized in modern web technologies including React, Next.js, and TypeScript. Committed to delivering
                high-quality, user-centered applications with clean code and exceptional user experiences.
              </p>
            </section>

            {/* Skills */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-amber-700 mb-4 border-b-2 border-amber-200 pb-2">
                Technical Skills
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-amber-600 mb-2">Frontend Development</h4>
                  <div className="flex flex-wrap gap-1">
                    {["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs bg-amber-100 text-amber-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-600 mb-2">Backend Development</h4>
                  <div className="flex flex-wrap gap-1">
                    {["Node.js", "Python", "PostgreSQL", "REST APIs", "Database Design"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs bg-amber-100 text-amber-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-600 mb-2">Tools & Others</h4>
                  <div className="flex flex-wrap gap-1">
                    {["Git", "Responsive Design", "Agile", "Problem Solving", "Team Leadership"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs bg-amber-100 text-amber-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-amber-700 mb-4 border-b-2 border-amber-200 pb-2">
                Professional Experience
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Freelance Web Developer</h4>
                      <p className="text-amber-600 font-medium">Self-Employed</p>
                    </div>
                    <div className="text-right text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>2022 - Present</span>
                      </div>
                      <div>Bengkulu, Indonesia</div>
                    </div>
                  </div>
                  <ul className="text-gray-700 text-sm space-y-1 ml-4">
                    <li>• Developed 7+ responsive web applications using React, Next.js, and TypeScript</li>
                    <li>• Collaborated with clients to deliver custom solutions that exceeded expectations</li>
                    <li>• Implemented modern UI/UX designs with focus on accessibility and performance</li>
                    <li>
                      • Maintained 100% client satisfaction rate through effective communication and quality delivery
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-amber-700 mb-4 border-b-2 border-amber-200 pb-2">
                Featured Projects
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "E-Commerce Platform",
                    description: "Full-stack e-commerce solution with modern design and seamless UX",
                    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
                    year: "2024",
                  },
                  {
                    title: "Task Management App",
                    description: "Collaborative project management tool with real-time updates",
                    technologies: ["React", "JavaScript", "CSS3", "REST API"],
                    year: "2024",
                  },
                  {
                    title: "Blog CMS",
                    description: "Content management system with rich text editing and SEO optimization",
                    technologies: ["Next.js", "Node.js", "MongoDB"],
                    year: "2023",
                  },
                  {
                    title: "Learning Platform",
                    description: "Educational platform with course management and progress tracking",
                    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
                    year: "2024",
                  },
                ].map((project, index) => (
                  <div key={index} className="border border-amber-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-800">{project.title}</h4>
                      <Badge variant="outline" className="text-xs border-amber-300 text-amber-700">
                        {project.year}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs bg-amber-50 text-amber-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-amber-700 mb-4 border-b-2 border-amber-200 pb-2">
                Education & Certifications
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Self-Taught Web Development</h4>
                      <p className="text-amber-600">Online Courses & Documentation</p>
                    </div>
                    <div className="text-sm text-gray-600">2022 - Present</div>
                  </div>
                  <p className="text-sm text-gray-700 mt-1">
                    Completed comprehensive courses in modern web development, focusing on React ecosystem and
                    full-stack development
                  </p>
                </div>
              </div>
            </section>

            {/* Achievements */}
            <section>
              <h3 className="text-2xl font-bold text-amber-700 mb-4 border-b-2 border-amber-200 pb-2">
                Key Achievements
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Code, label: "7+ Projects", desc: "Successfully completed" },
                  { icon: Users, label: "100%", desc: "Client satisfaction rate" },
                  { icon: Star, label: "2+ Years", desc: "Professional experience" },
                  { icon: Award, label: "Modern Tech", desc: "Stack expertise" },
                ].map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                      <achievement.icon className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">{achievement.label}</div>
                      <div className="text-sm text-gray-600">{achievement.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
