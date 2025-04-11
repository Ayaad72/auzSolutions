"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = ["All", "Web Design", "Mobile Apps", "Branding"]

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Design",
    image: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/ecommerce-platform",
  },
  {
    id: 2,
    title: "Fitness Mobile App",
    category: "Mobile Apps",
    image: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/fitness-app",
  },
  {
    id: 3,
    title: "Restaurant Branding",
    category: "Branding",
    image: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/restaurant-branding",
  },
  {
    id: 4,
    title: "Travel Blog Website",
    category: "Web Design",
    image: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/travel-blog",
  },
  {
    id: 5,
    title: "Healthcare Dashboard",
    category: "Web Design",
    image: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/healthcare-dashboard",
  },
  {
    id: 6,
    title: "Delivery Service App",
    category: "Mobile Apps",
    image: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/delivery-app",
  },
]

export default function FeaturedWorks() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-20 bg-black dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">Our Featured Works</h2>
          <p className="text-slate-400 dark:text-slate-400 max-w-2xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise and creativity.
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full">
          <div className="flex justify-center mb-8 overflow-x-auto pb-2">
            <TabsList className="bg-slate-800 dark:bg-slate-800/50">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="data-[state=active]:bg-slate-900 dark:data-[state=active]:bg-slate-900 text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeCategory} className="mt-0">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <Card className="overflow-hidden border border-slate-800 dark:border-slate-800 h-full bg-slate-900 dark:bg-slate-900">
                    <CardContent className="p-0">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                          <div>
                            <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-white/80 text-sm">{project.category}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
          >
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
