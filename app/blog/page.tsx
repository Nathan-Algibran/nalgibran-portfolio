"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Calendar, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Web Applications with Next.js",
    excerpt:
      "Learn how to create performant and scalable web applications using Next.js 15 and modern development practices.",
    content: "Full article content here...",
    author: "Nathan",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Development",
    tags: ["Next.js", "React", "Performance"],
    image: "/nextjs-development.png",
  },
  {
    id: 2,
    title: "The Future of Frontend Development",
    excerpt: "Exploring emerging trends and technologies that are shaping the future of frontend development.",
    content: "Full article content here...",
    author: "Nathan",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Technology",
    tags: ["Frontend", "Trends", "JavaScript"],
    image: "/frontend-trends.png",
  },
  {
    id: 3,
    title: "Optimizing Web Performance: A Complete Guide",
    excerpt: "Comprehensive guide to improving web performance with practical tips and real-world examples.",
    content: "Full article content here...",
    author: "Nathan",
    date: "2024-01-05",
    readTime: "12 min read",
    category: "Performance",
    tags: ["Performance", "Optimization", "Web Vitals"],
    image: "/web-performance-optimization.png",
  },
]

const categories = ["All", "Development", "Technology", "Performance", "Design"]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-amber-600"></div>
        </div>
      </div>
    )
  }

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Blog & <span className="text-amber-600">Articles</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, tutorials, and thoughts on web development, technology trends, and best practices.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12 space-y-6">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-card border-border focus:border-amber-400"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-amber-600 hover:bg-amber-700 text-white"
                      : "border-border text-amber-400 hover:bg-amber-950/20"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-amber-600 to-yellow-600 rounded-2xl p-8 text-center text-white mb-16">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="mb-6 opacity-90">
              Subscribe to get the latest articles and insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Button className="bg-white text-amber-600 hover:bg-gray-100">Subscribe</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
