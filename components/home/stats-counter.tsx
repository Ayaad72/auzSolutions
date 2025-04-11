"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { value: 150, label: "Projects Completed", suffix: "+" },
  { value: 50, label: "Happy Clients", suffix: "+" },
  { value: 5, label: "Years Experience", suffix: "" },
  { value: 15, label: "Team Members", suffix: "+" },
]

export default function StatsCounter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    if (isInView) {
      const intervals = stats.map((stat, index) => {
        return setInterval(() => {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts]
            if (newCounts[index] < stat.value) {
              newCounts[index] = Math.min(newCounts[index] + Math.ceil(stat.value / 30), stat.value)
            }
            return newCounts
          })
        }, 50)
      })

      return () => {
        intervals.forEach((interval) => clearInterval(interval))
      }
    }
  }, [isInView])

  return (
    <section ref={ref} className="py-16 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 font-heading">
                {counts[index]}
                {stat.suffix}
              </div>
              <div className="text-purple-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
