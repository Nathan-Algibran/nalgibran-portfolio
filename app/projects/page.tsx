"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Code, Users, Star, Calendar, Filter, Search, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [selectedFilter, setSelectedFilter] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

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

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern design and seamless user experience",
      longDescription:
        "Built with Next.js, TypeScript, and Tailwind CSS. Features include user authentication, product catalog, shopping cart, and payment integration.",
      image: "/ecommerce-cover.png",
      category: "Full Stack",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
      status: "Completed",
      year: "2024",
      featured: true,
      liveUrl: "https://vintique-wine-store.lovable.app/",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team features",
      longDescription:
        "A comprehensive task management application with drag-and-drop functionality, team collaboration, and progress tracking.",
      image: "/taskmanager-cover.png",
      category: "Frontend",
      technologies: ["React", "JavaScript", "CSS3", "REST API"],
      status: "Completed",
      year: "2024",
      featured: true,
      liveUrl: "https://task-management-nathan.lovable.app/",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Personal portfolio showcasing web development skills and projects",
      longDescription:
        "A responsive portfolio website built with modern web technologies, featuring interactive animations and optimized performance.",
      image: "/portfolio-cover.png", // Updated to use new portfolio cover image
      category: "Frontend",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
      status: "Completed",
      year: "2024",
      featured: false,
      liveUrl: "https://project-porto-nathan.lovable.app/", // Added live URL for portfolio project
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts",
      longDescription:
        "Interactive weather dashboard with geolocation support, detailed forecasts, and beautiful data visualizations.",
      image: "/modern-web-application.png",
      category: "Frontend",
      technologies: ["React", "JavaScript", "Chart.js", "Weather API"],
      status: "Completed",
      year: "2023",
      featured: false,
    },
    {
      id: 5,
      title: "Blog CMS",
      description: "Content management system for bloggers with rich text editing",
      longDescription:
        "A full-featured blog CMS with user authentication, rich text editor, comment system, and SEO optimization.",
      image: "/blogcms-cover.png",
      category: "Full Stack",
      technologies: ["Next.js", "Node.js", "MongoDB", "Rich Text Editor"],
      status: "Completed",
      year: "2023",
      featured: true,
      liveUrl: "https://blogcms-nathan-project.lovable.app/",
    },
    {
      id: 6,
      title: "Restaurant Website",
      description: "Modern Indonesian restaurant website with online reservation system",
      longDescription:
        "Elegant restaurant website featuring traditional Indonesian cuisine, menu display, online reservations, and contact information with beautiful warm design.",
      image: "/restaurant-cover.png",
      category: "Frontend",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      status: "Completed",
      year: "2024",
      featured: false,
      liveUrl: "https://nikmat-indonesia-online.lovable.app/",
    },
    {
      id: 7,
      title: "Learning Platform",
      description: "Educational platform with course management and progress tracking",
      longDescription:
        "Comprehensive learning management system with video streaming, progress tracking, quizzes, and certification features.",
      image: "/modern-web-application.png",
      category: "Full Stack",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Video Streaming"],
      status: "In Progress",
      year: "2024",
      featured: true,
    },
  ]

  const categories = ["All", "Frontend", "Full Stack"]

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = selectedFilter === "All" || project.category === selectedFilter
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  const featuredProjects = projects.filter((project) => project.featured)

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
              <Code className="w-3 h-3 mr-1" />
              My Work
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 neon-glow">Featured Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of my web development projects, from frontend interfaces to full-stack applications. Each
              project represents a unique challenge and creative solution.
            </p>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { number: "7+", label: "Projects Completed", icon: Code },
              { number: "2+", label: "Years Experience", icon: Calendar },
              { number: "100%", label: "Client Satisfaction", icon: Star },
              { number: "24/7", label: "Support Available", icon: Users },
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

      {/* Featured Projects Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-amber-50/20 to-yellow-50/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Featured Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Highlighting some of my most impactful and technically challenging projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredProjects.slice(0, 4).map((project, index) => (
              <div key={project.id} className="group">
                <div>
                  <Card className="group hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border-amber-200/50 cursor-pointer overflow-hidden magnetic-hover h-full">
                    <div className="aspect-video bg-gradient-to-br from-amber-100/50 to-yellow-100/50 overflow-hidden relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-amber-600/90 text-white backdrop-blur-sm">{project.status}</Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex gap-2">
                            {project.liveUrl ? (
                              <Button
                                variant="secondary"
                                size="sm"
                                className="flex-1 transform translate-y-4 group-hover:translate-y-0 transition-transform bg-white/90 hover:bg-white text-amber-900 liquid-button"
                                onClick={() => window.open(project.liveUrl, "_blank")}
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                View Live
                              </Button>
                            ) : (
                              <Button
                                variant="secondary"
                                size="sm"
                                className="flex-1 transform translate-y-4 group-hover:translate-y-0 transition-transform bg-white/90 hover:bg-white text-amber-900 liquid-button"
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                View Live
                              </Button>
                            )}
                            <Button
                              variant="secondary"
                              size="sm"
                              className="transform translate-y-4 group-hover:translate-y-0 transition-transform bg-white/90 hover:bg-white text-amber-900 liquid-button"
                              style={{ transitionDelay: "50ms" }}
                            >
                              <Github className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-foreground group-hover:text-amber-600 transition-colors">
                          {project.title}
                        </CardTitle>
                        <Badge variant="outline" className="text-xs border-amber-200 text-amber-700">
                          {project.year}
                        </Badge>
                      </div>
                      <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-amber-100/80 text-amber-700 hover:bg-amber-200 transition-colors cursor-default text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="bg-amber-100/80 text-amber-700 text-xs">
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>
                      <Badge className="bg-amber-600/10 text-amber-700 border-amber-200">{project.category}</Badge>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">All Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through my complete portfolio of web development projects
            </p>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-4 h-4 text-amber-600" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedFilter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter(category)}
                  className={`${
                    selectedFilter === category
                      ? "bg-amber-600 hover:bg-amber-700 text-white"
                      : "border-amber-200 text-amber-700 hover:bg-amber-50"
                  } transition-all duration-200 magnetic-hover`}
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-amber-600" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/80 backdrop-blur-sm border border-amber-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-600 transition-all duration-200 magnetic-hover"
              />
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-amber-200/50 hover:border-amber-400/50 hover:-translate-y-1 magnetic-hover overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="aspect-video bg-gradient-to-br from-amber-100/50 to-yellow-100/50 overflow-hidden relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge
                      className={`text-xs ${
                        project.status === "Completed" ? "bg-green-600/90 text-white" : "bg-amber-600/90 text-white"
                      } backdrop-blur-sm`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-foreground group-hover:text-amber-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs border-amber-200 text-amber-700">
                      {project.year}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-amber-100/80 text-amber-700 text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 2 && (
                      <Badge variant="secondary" className="bg-amber-100/80 text-amber-700 text-xs">
                        +{project.technologies.length - 2}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-amber-600/10 text-amber-700 border-amber-200 text-xs">
                      {project.category}
                    </Badge>
                    <div className="flex gap-2">
                      {project.liveUrl ? (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 hover:bg-amber-100"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                        >
                          <ExternalLink className="w-3 h-3 text-black" />
                        </Button>
                      ) : (
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-amber-100">
                          <ExternalLink className="w-3 h-3 text-black" />
                        </Button>
                      )}
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-amber-100">
                        <Github className="w-3 h-3 text-black" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <Code className="w-16 h-16 text-amber-600/50 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No projects found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-amber-50/20 to-yellow-50/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            I'm always excited to work on new challenges and bring innovative ideas to life. Let's discuss your project
            and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-yellow-700 hover:from-amber-700 hover:to-yellow-800 transform hover:scale-105 transition-all duration-200 liquid-button magnetic-hover"
              >
                <Users className="w-4 h-4 mr-2" />
                Start a Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-amber-200/50 hover:border-amber-600 transform hover:scale-105 transition-all duration-200 magnetic-hover"
              >
                <Code className="w-4 h-4" />
                Learn More About Me
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
                href="/about"
                className="text-muted-foreground hover:text-amber-600 transition-colors text-sm magnetic-hover"
              >
                About
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
