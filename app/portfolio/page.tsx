"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CTASection from "@/components/shared/cta-section"

const categories = ["All", "Web Design", "Mobile Apps", "Branding", "Graphic Design"]

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Design",
    description: "A modern e-commerce platform with a seamless shopping experience and robust admin dashboard.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/ecommerce-platform",
  },
  {
    id: 2,
    title: "Fitness Mobile App",
    category: "Mobile Apps",
    description: "A comprehensive fitness app with workout tracking, nutrition planning, and progress monitoring.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/fitness-app",
  },
  {
    id: 3,
    title: "Restaurant Branding",
    category: "Branding",
    description:
      "Complete brand identity for a high-end restaurant, including logo, color palette, and brand guidelines.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/restaurant-branding",
  },
  {
    id: 4,
    title: "Travel Blog Website",
    category: "Web Design",
    description: "A visually stunning travel blog with interactive maps and immersive content presentation.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/travel-blog",
  },
  {
    id: 5,
    title: "Healthcare Dashboard",
    category: "Web Design",
    description: "An intuitive dashboard for healthcare providers to manage patient data and appointments.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/healthcare-dashboard",
  },
  {
    id: 6,
    title: "Delivery Service App",
    category: "Mobile Apps",
    description: "A user-friendly delivery app with real-time tracking and seamless payment integration.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/delivery-app",
  },
  {
    id: 7,
    title: "Fashion Magazine Layout",
    category: "Graphic Design",
    description: "Editorial design for a fashion magazine, featuring elegant typography and striking imagery.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/fashion-magazine",
  },
  {
    id: 8,
    title: "Tech Startup Branding",
    category: "Branding",
    description: "Modern brand identity for a tech startup, reflecting innovation and forward-thinking.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/tech-startup-branding",
  },
  {
    id: 9,
    title: "Educational Platform",
    category: "Web Design",
    description: "An interactive learning platform with course management and student progress tracking.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/educational-platform",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <main className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
            Explore our collection of work that showcases our expertise in design, development, and branding.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="All" className="w-full mb-12">
            <div className="flex justify-center">
              <TabsList className="bg-slate-100 dark:bg-slate-800/50">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    onClick={() => setActiveCategory(category)}
                    className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Tabs>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div key={project.id} variants={item}>
                  <Link href={project.link} className="group block h-full">
                    <div className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-md border border-slate-200 dark:border-slate-800 h-full flex flex-col transition-all duration-300 group-hover:shadow-xl">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                          <div className="text-white">
                            <span className="text-sm font-medium bg-purple-600 px-3 py-1 rounded-full">
                              {project.category}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                            {project.title}
                          </h3>
                          <ArrowUpRight className="h-5 w-5 text-slate-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 flex-1">{project.description}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to start your project?"
        description="Let's collaborate to create something extraordinary for your business."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </main>
  )
}
