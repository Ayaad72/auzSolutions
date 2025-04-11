"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content:
      "Working with Auz Solutions transformed our online presence. Their team delivered a website that perfectly captures our brand and has significantly increased our conversion rates.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, GrowthLabs",
    content:
      "The mobile app Auz Solutions developed for us has received outstanding feedback from our users. Their attention to detail and user experience expertise is unmatched.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director, Elevate",
    content:
      "The branding package we received from Auz Solutions has completely revitalized our company image. Their creative team truly understood our vision and brought it to life.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "David Kim",
    role: "CTO, InnovateTech",
    content:
      "We've worked with several development agencies, but Auz Solutions stands out for their technical expertise and commitment to delivering high-quality solutions on time.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-black dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">What Our Clients Say</h2>
          <p className="text-slate-400 dark:text-slate-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Card className="border-none shadow-lg bg-slate-900 dark:bg-slate-900">
                <CardContent className="p-8 md:p-12">
                  <div className="absolute top-8 right-8 text-purple-500 dark:text-purple-400">
                    <Quote className="h-12 w-12 opacity-20" />
                  </div>

                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-purple-900/30 dark:border-purple-900/30 shrink-0">
                      <Image
                        src={testimonials[current].avatar || "/placeholder.svg"}
                        alt={testimonials[current].name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="text-center md:text-left">
                      <p className="text-lg md:text-xl text-slate-300 dark:text-slate-300 mb-6 italic">
                        "{testimonials[current].content}"
                      </p>
                      <h4 className="font-semibold text-lg text-white">{testimonials[current].name}</h4>
                      <p className="text-slate-400 dark:text-slate-400">{testimonials[current].role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full border-white/20 text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex items-center gap-2 mx-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false)
                    setCurrent(index)
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === current ? "bg-purple-600 dark:bg-purple-400" : "bg-slate-700 dark:bg-slate-700"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full border-white/20 text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
