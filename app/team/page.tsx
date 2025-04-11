"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CTASection from "@/components/shared/cta-section"

const teamMembers = [
  {
    id: 1,
    name: "Uzair Khan",
    role: "CEO & Founder",
    bio: "Uzair founded Auz Solutions with a vision to create digital experiences that make a difference. With over 10 years of experience in web development and design, he leads the team with passion and innovation.",
    image: "/placeholder.svg?height=400&width=400",
    department: "leadership",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      email: "uzair@auzsolutions.com",
    },
  },
  {
    id: 2,
    name: "Sarah Ahmed",
    role: "Co-founder & Creative Director",
    bio: "Sarah oversees all creative projects at Auz Solutions. Her background in graphic design and brand strategy helps clients establish strong visual identities that resonate with their target audience.",
    image: "/placeholder.svg?height=400&width=400",
    department: "leadership",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      email: "sarah@auzsolutions.com",
    },
  },
  {
    id: 3,
    name: "Ali Khan",
    role: "Lead Web Developer",
    bio: "Ali specializes in front-end development and creating responsive, user-friendly websites. His expertise in React and Next.js ensures our clients receive cutting-edge web solutions.",
    image: "/placeholder.svg?height=400&width=400",
    department: "development",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "ali@auzsolutions.com",
    },
  },
  {
    id: 4,
    name: "Fatima Zaidi",
    role: "UI/UX Designer",
    bio: "Fatima combines aesthetics with functionality to create intuitive user experiences. Her designs focus on user-centered approaches that drive engagement and conversion.",
    image: "/placeholder.svg?height=400&width=400",
    department: "design",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "fatima@auzsolutions.com",
    },
  },
  {
    id: 5,
    name: "Omar Malik",
    role: "Mobile Developer",
    bio: "Omar leads our mobile development initiatives, creating native and cross-platform applications that provide seamless experiences across devices.",
    image: "/placeholder.svg?height=400&width=400",
    department: "development",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "omar@auzsolutions.com",
    },
  },
  {
    id: 6,
    name: "Zara Hussain",
    role: "Graphic Designer",
    bio: "Zara specializes in creating visual assets that communicate brand messages effectively. Her work spans from print materials to digital graphics.",
    image: "/placeholder.svg?height=400&width=400",
    department: "design",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "zara@auzsolutions.com",
    },
  },
  {
    id: 7,
    name: "Imran Siddiqui",
    role: "Backend Developer",
    bio: "Imran focuses on building robust server-side applications and APIs. His expertise ensures our solutions are secure, scalable, and performant.",
    image: "/placeholder.svg?height=400&width=400",
    department: "development",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "imran@auzsolutions.com",
    },
  },
  {
    id: 8,
    name: "Ayesha Tariq",
    role: "Project Manager",
    bio: "Ayesha ensures our projects are delivered on time and within budget. Her organizational skills and attention to detail keep our team focused and efficient.",
    image: "/placeholder.svg?height=400&width=400",
    department: "leadership",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "ayesha@auzsolutions.com",
    },
  },
]

const departments = [
  { id: "all", name: "All Team" },
  { id: "leadership", name: "Leadership" },
  { id: "design", name: "Design" },
  { id: "development", name: "Development" },
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

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredTeam =
    activeTab === "all" ? teamMembers : teamMembers.filter((member) => member.department === activeTab)

  return (
    <main className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h1>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
            We're a diverse team of designers, developers, and strategists passionate about creating exceptional digital
            experiences.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full mb-12">
            <div className="flex justify-center">
              <TabsList className="bg-slate-100 dark:bg-slate-800/50">
                {departments.map((dept) => (
                  <TabsTrigger
                    key={dept.id}
                    value={dept.id}
                    onClick={() => setActiveTab(dept.id)}
                    className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800"
                  >
                    {dept.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Tabs>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredTeam.map((member) => (
              <motion.div key={member.id} variants={item}>
                <div className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-md border border-slate-200 dark:border-slate-800 h-full flex flex-col">
                  <div className="relative h-80 overflow-hidden">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-purple-600 dark:text-purple-400 mb-4">{member.role}</p>
                    <p className="text-slate-700 dark:text-slate-300 mb-6 flex-1">{member.bio}</p>
                    <div className="flex space-x-3">
                      {member.social.linkedin && (
                        <Link
                          href={member.social.linkedin}
                          className="text-slate-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                      )}
                      {member.social.twitter && (
                        <Link
                          href={member.social.twitter}
                          className="text-slate-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        >
                          <Twitter className="h-5 w-5" />
                          <span className="sr-only">Twitter</span>
                        </Link>
                      )}
                      {member.social.facebook && (
                        <Link
                          href={member.social.facebook}
                          className="text-slate-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        >
                          <Facebook className="h-5 w-5" />
                          <span className="sr-only">Facebook</span>
                        </Link>
                      )}
                      {member.social.email && (
                        <Link
                          href={`mailto:${member.social.email}`}
                          className="text-slate-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        >
                          <Mail className="h-5 w-5" />
                          <span className="sr-only">Email</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
              We're always looking for talented individuals to join our team. If you're passionate about creating
              exceptional digital experiences, we'd love to hear from you.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
            >
              <Link href="/contact">View Open Positions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to work with our talented team?"
        description="Let's collaborate to create something extraordinary for your business."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </main>
  )
}
