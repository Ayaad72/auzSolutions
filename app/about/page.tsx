import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import CTASection from "@/components/shared/cta-section"

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">About Auz Solutions</h1>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
                We are a team of passionate designers, developers, and strategists dedicated to transforming creative
                ideas into digital realities. Our mission is to help businesses thrive in the digital landscape through
                innovative solutions and exceptional service.
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
              >
                <Link href="/team">
                  Meet Our Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Auz Solutions Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300">
              <p>
                Founded in 2020 by Uzair Khan, Auz Solutions began as a small freelance operation in Hunza, Pakistan.
                With a vision to create digital experiences that make a difference, we quickly grew from a one-person
                shop to a full-service digital agency.
              </p>
              <p>
                Our journey has been defined by a relentless pursuit of excellence and innovation. We've had the
                privilege of working with clients across various industries, from startups to established businesses,
                helping them achieve their digital goals and expand their online presence.
              </p>
              <p>
                Today, Auz Solutions stands as a testament to what passion, dedication, and expertise can achieve. We
                continue to push boundaries, embrace new technologies, and deliver solutions that not only meet but
                exceed our clients' expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "We embrace new technologies and approaches to deliver cutting-edge solutions that keep our clients ahead of the curve.",
              },
              {
                title: "Excellence",
                description:
                  "We are committed to delivering work of the highest quality, paying attention to every detail and ensuring exceptional results.",
              },
              {
                title: "Collaboration",
                description:
                  "We believe in working closely with our clients, understanding their needs, and involving them throughout the creative process.",
              },
              {
                title: "Integrity",
                description:
                  "We conduct our business with honesty, transparency, and ethical practices, building trust with our clients and partners.",
              },
              {
                title: "Creativity",
                description:
                  "We approach every project with fresh ideas and creative thinking, finding unique solutions to complex challenges.",
              },
              {
                title: "Growth",
                description:
                  "We are dedicated to continuous learning and improvement, staying updated with industry trends and expanding our skills.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-md border border-slate-200 dark:border-slate-800"
              >
                <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">{value.title}</h3>
                <p className="text-slate-700 dark:text-slate-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to bring your ideas to life?"
        description="Let's collaborate to create something extraordinary for your business."
        buttonText="Get in Touch"
        buttonLink="/contact"
        secondaryButtonText="View Our Work"
        secondaryButtonLink="/portfolio"
      />
    </main>
  )
}
