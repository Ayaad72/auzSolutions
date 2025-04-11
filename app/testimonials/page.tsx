import TestimonialsCarousel from "@/components/testimonials/testimonials-carousel"
import CTASection from "@/components/shared/cta-section"

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
  {
    id: 5,
    name: "Jessica Lee",
    role: "E-commerce Manager, StyleHub",
    content:
      "Our online store's conversion rate increased by 40% after Auz Solutions redesigned our website. Their understanding of e-commerce best practices and user behavior was impressive.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 6,
    name: "Robert Wilson",
    role: "Director, HealthTech Solutions",
    content:
      "The healthcare application developed by Auz Solutions has streamlined our patient management process significantly. Their attention to security and compliance was exceptional.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 7,
    name: "Sophia Martinez",
    role: "Marketing Manager, FoodDelight",
    content:
      "The branding and website design by Auz Solutions perfectly captured our restaurant's essence. We've received countless compliments from our customers about our new digital presence.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 8,
    name: "James Thompson",
    role: "Founder, EduLearn",
    content:
      "Auz Solutions helped us transform our educational platform with a user-friendly interface and robust backend. Their work has significantly improved student engagement and satisfaction.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialsPage() {
  return (
    <main className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <TestimonialsCarousel />
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-12 text-center">More Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-800"
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-slate-700 dark:text-slate-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to be our next success story?"
        description="Let's collaborate to create something extraordinary for your business."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </main>
  )
}
