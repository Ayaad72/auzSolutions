import Image from "next/image"
import Link from "next/link"
import { Globe, Code, Palette, Smartphone, PenTool, Database, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import CTASection from "@/components/shared/cta-section"

const services = [
  {
    id: "web-design",
    title: "Web & Mobile Design",
    description:
      "We create user-centered interfaces that engage and convert visitors into customers. Our design process focuses on usability, accessibility, and visual appeal.",
    icon: Globe,
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Responsive website design",
      "User experience (UX) design",
      "User interface (UI) design",
      "Wireframing and prototyping",
      "E-commerce design",
      "Landing page design",
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "We build custom websites and web applications using the latest technologies and best practices. Our development process ensures high-performance, secure, and scalable solutions.",
    icon: Code,
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Custom website development",
      "E-commerce development",
      "Content management systems",
      "Web application development",
      "API development and integration",
      "Website maintenance and support",
    ],
  },
  {
    id: "graphic-design",
    title: "Graphic & Editorial Design",
    description:
      "We create visual assets that communicate your brand message effectively. From print materials to digital graphics, we ensure consistency and impact across all touchpoints.",
    icon: Palette,
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Print design (brochures, flyers, etc.)",
      "Editorial design",
      "Infographics and data visualization",
      "Social media graphics",
      "Presentation design",
      "Illustration and iconography",
    ],
  },
  {
    id: "branding",
    title: "Branding & Logo Design",
    description:
      "We develop distinctive brand identities that make lasting impressions. Our branding process helps you stand out in a crowded market and connect with your target audience.",
    icon: PenTool,
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Logo design",
      "Brand identity development",
      "Brand guidelines",
      "Brand messaging and positioning",
      "Rebranding",
      "Brand collateral design",
    ],
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description:
      "We develop native and cross-platform mobile applications for iOS and Android. Our mobile solutions are designed to provide seamless user experiences and drive engagement.",
    icon: Smartphone,
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "iOS app development",
      "Android app development",
      "Cross-platform app development",
      "Mobile UI/UX design",
      "App testing and quality assurance",
      "App maintenance and updates",
    ],
  },
  {
    id: "software-development",
    title: "Software Development",
    description:
      "We create custom software solutions tailored to your business needs. From desktop applications to enterprise systems, we deliver reliable and efficient software that solves real problems.",
    icon: Database,
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Custom software development",
      "Enterprise software solutions",
      "SaaS product development",
      "Database design and development",
      "Software integration",
      "Software maintenance and support",
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
            From design to development, we've got you covered.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <Button key={service.id} variant="outline" asChild className="rounded-full">
                <Link href={`#${service.id}`}>{service.title}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`py-16 ${index % 2 === 0 ? "" : "bg-slate-50 dark:bg-slate-900/50"}`}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className={index % 2 === 0 ? "order-2 lg:order-1" : "order-2"}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <service.icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h2 className="font-heading text-3xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">{service.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
                <div className={index % 2 === 0 ? "order-1 lg:order-2" : "order-1"}>
                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to elevate your digital presence?"
        description="Let's discuss how our services can help you achieve your business goals."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </main>
  )
}
