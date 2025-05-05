"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  Code,
  Palette,
  Smartphone,
  PenTool,
  Database,
} from "lucide-react";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// dasdas i am a comment
const services = [
  {
    title: "Web & Mobile Design",
    description:
      "User-centered interfaces that engage and convert visitors into customers.",
    icon: Globe,
    link: "/services#web-design",
  },
  {
    title: "Web Development",
    description:
      "Custom websites and applications built with the latest technologies.",
    icon: Code,
    link: "/services#web-development",
  },
  {
    title: "Graphic & Editorial Design",
    description:
      "Visual assets that communicate your brand message effectively.",
    icon: Palette,
    link: "/services#graphic-design",
  },
  {
    title: "Branding & Logo Design",
    description: "Distinctive brand identities that make lasting impressions.",
    icon: PenTool,
    link: "/services#branding",
  },
  {
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    icon: Smartphone,
    link: "/services#mobile-development",
  },
  {
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs.",
    icon: Database,
    link: "/services#software-development",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
// dasdasdasdasd
export default function ServicesHighlight() {
  return (
    <section className="py-20 bg-black dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">
            Our Services
          </h2>
          <p className="text-slate-400 dark:text-slate-400 max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your
            business thrive in the digital landscape.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border border-slate-800 dark:border-slate-800 bg-slate-900 dark:bg-slate-900 hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-purple-900/30 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-purple-400 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button
                    asChild
                    variant="ghost"
                    className="p-0 h-auto text-purple-400 dark:text-purple-400 hover:text-purple-300 dark:hover:text-purple-300 hover:bg-transparent"
                  >
                    <Link href={service.link}>
                      Learn more
                      <span className="ml-1">→</span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        {/* dasdasdasdas */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-white border-white/20 hover:bg-white/10"
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
