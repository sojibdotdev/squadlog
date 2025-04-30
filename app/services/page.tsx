"use client"

import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, BarChart, Code, Palette, Settings, ShoppingCart, Smartphone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import PageTransition from "@/components/page-transition"
import SectionHeading from "@/components/section-heading"
import { services } from "@/lib/data"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Map service slugs to icons
const serviceIcons: Record<string, React.ReactNode> = {
  "web-development": <Code className="h-10 w-10 text-primary" />,
  "mobile-apps": <Smartphone className="h-10 w-10 text-primary" />,
  "ui-ux-design": <Palette className="h-10 w-10 text-primary" />,
  "digital-marketing": <BarChart className="h-10 w-10 text-primary" />,
  "e-commerce": <ShoppingCart className="h-10 w-10 text-primary" />,
  "custom-software": <Settings className="h-10 w-10 text-primary" />,
}

export default function ServicesPage() {
  return (
    <PageTransition>
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Our Services"
            subtitle="We offer a comprehensive range of digital services to help your business thrive online."
            center
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={service.id} variants={fadeIn} custom={index} whileHover={{ y: -10 }} className="h-full">
                <Card className="h-full bg-secondary/20 border-border/40 overflow-hidden">
                  <CardHeader>
                    <div className="bg-secondary/50 rounded-xl w-14 h-14 flex items-center justify-center mb-4">
                      {serviceIcons[service.slug]}
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.shortDescription}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button asChild variant="ghost" className="group">
                      <Link href={`/services/${service.slug}`}>
                        Learn More{" "}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0f172a] to-[#1e293b]">
        <div className="container px-4 md:px-6">
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">Not Sure Which Service You Need?</h2>
              <p className="text-xl text-muted-foreground">
                Let's discuss your project and find the perfect solution for your business.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-purple-700 hover:from-indigo-600 hover:to-purple-800 transition-all animate-pulse-glow"
              >
                <Link href="/contact">Book a Free Consultation</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
