"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Code,
  Palette,
  Settings,
  Shield,
  ShoppingCart,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import HowItWorks from "@/components/how-it-works";
import PageTransition from "@/components/page-transition";
import PortfolioSection from "@/components/portfolio-section";
import SectionHeading from "@/components/section-heading";
import ServiceCard from "@/components/service-card";
import { Button } from "@/components/ui/button";

import Bannar from "./assets/bannar.webp";

// Sample services data
const services = [
  {
    id: 1,
    title: "Web Development",
    slug: "web-development",
    description:
      "Custom websites and web applications built with modern technologies.",
    icon: <Code className="h-10 w-10 text-primary" />,
  },
  {
    id: 2,
    title: "Mobile App Development",
    slug: "mobile-apps",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    icon: <Smartphone className="h-10 w-10 text-primary" />,
  },
  {
    id: 3,
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description:
      "User-centered design that creates intuitive and engaging digital experiences.",
    icon: <Palette className="h-10 w-10 text-primary" />,
  },
  {
    id: 4,
    title: "Digital Marketing",
    slug: "digital-marketing",
    description:
      "Strategic marketing solutions to grow your online presence and drive conversions.",
    icon: <BarChart className="h-10 w-10 text-primary" />,
  },
  {
    id: 5,
    title: "E-commerce Solutions",
    slug: "e-commerce",
    description:
      "Custom online stores that drive sales and provide exceptional shopping experiences.",
    icon: <ShoppingCart className="h-10 w-10 text-primary" />,
  },
  {
    id: 6,
    title: "Custom Software Development",
    slug: "custom-software",
    description:
      "Tailored software solutions that solve your unique business challenges.",
    icon: <Settings className="h-10 w-10 text-primary" />,
  },
];

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "Jennifer Lee",
    role: "CEO, TechVision Inc.",
    content:
      "Working with SquadLog transformed our online presence. Their team delivered a stunning e-commerce platform that exceeded our expectations and has significantly increased our conversion rates.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Robert Williams",
    role: "Founder, HealthHub",
    content:
      "The mobile app SquadLog created for us has received outstanding feedback from our users. Their attention to detail and focus on user experience really sets them apart from other agencies.",
    image: "/placeholder.svg?height=100&width=100",
  },
];

export default function Home() {
  // Get featured services (first 3)
  const featuredServices = services.slice(0, 3);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 max-w-4xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter gradient-text font-bai-jamjuree">
                Transforming Ideas into Powerful Digital Experiences
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-bai-jamjuree">
                We build exceptional websites, apps, and digital solutions that
                drive business growth and delight users.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-indigo-500 to-purple-700 hover:from-indigo-600 hover:to-purple-800 transition-all animate-pulse-glow font-bai-jamjuree"
                >
                  <Link href="/services">See Our Services</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="gradient-border font-bai-jamjuree"
                >
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden glass-card"
            >
              <Image
                src={Bannar}
                alt="Digital Experience Showcase"
                width={1920}
                height={1080}
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-gradient-to-r from-[#0f172a] to-[#1e293b]">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Our Services"
            subtitle="We offer a comprehensive range of digital services to help your business thrive online."
            center
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                slug={service.slug}
                description={service.description}
                icon={service.icon}
                index={index}
              />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-indigo-500 to-purple-700 hover:from-indigo-600 hover:to-purple-800 transition-all font-bai-jamjuree"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Why Choose SquadLog"
            subtitle="We combine technical expertise with creative excellence to deliver solutions that stand out."
            center
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Cutting-Edge Technology",
                description:
                  "We stay ahead of the curve with the latest technologies and best practices.",
                icon: <Zap className="h-10 w-10 text-primary" />,
              },
              {
                title: "User-Centered Design",
                description:
                  "We create intuitive, engaging experiences that users love.",
                icon: <Palette className="h-10 w-10 text-primary" />,
              },
              {
                title: "Agile Development",
                description:
                  "Our flexible approach ensures we deliver on time and within budget.",
                icon: <Settings className="h-10 w-10 text-primary" />,
              },
              {
                title: "Security First",
                description:
                  "We prioritize security at every stage of development to protect your data.",
                icon: <Shield className="h-10 w-10 text-primary" />,
              },
              {
                title: "Dedicated Support",
                description:
                  "Our team provides ongoing support to ensure your continued success.",
                icon: <Users className="h-10 w-10 text-primary" />,
              },
              {
                title: "Results-Driven",
                description:
                  "We focus on delivering solutions that achieve your business objectives.",
                icon: <BarChart className="h-10 w-10 text-primary" />,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card rounded-2xl p-8 h-full"
              >
                <div className="space-y-4">
                  <div className="bg-secondary/50 rounded-xl w-16 h-16 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold font-bai-jamjuree">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-bai-jamjuree">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Technologies We Use Section */}
      {/* <section className="py-20">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Technologies We Use"
            subtitle="We leverage cutting-edge technologies to build robust, scalable, and future-proof solutions."
            center
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12"
          >
            {[
              { name: "React", logo: "" },
              { name: "Next.js", logo: "/placeholder.svg?height=80&width=80" },
              { name: "Node.js", logo: "/placeholder.svg?height=80&width=80" },
              { name: "TypeScript", logo: "/placeholder.svg?height=80&width=80" },
              { name: "Flutter", logo: "/placeholder.svg?height=80&width=80" },
              { name: "AWS", logo: "/placeholder.svg?height=80&width=80" },
              { name: "Firebase", logo: "/placeholder.svg?height=80&width=80" },
              { name: "MongoDB", logo: "/placeholder.svg?height=80&width=80" },
              { name: "PostgreSQL", logo: "/placeholder.svg?height=80&width=80" },
              { name: "GraphQL", logo: "/placeholder.svg?height=80&width=80" },
              { name: "Tailwind CSS", logo: "/placeholder.svg?height=80&width=80" },
              { name: "Framer Motion", logo: "/placeholder.svg?height=80&width=80" },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-xl p-4 flex flex-col items-center justify-center text-center"
              >
                <div className="w-12 h-12 mb-3">
                  <Image
                    src={tech.logo || "/placeholder.svg"}
                    alt={tech.name}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <p className="text-sm font-medium font-bai-jamjuree">{tech.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Don't just take our word for it. Here's what our clients have to say about working with us."
            center
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8"
              >
                <div className="space-y-4">
                  <p className="text-lg italic font-bai-jamjuree">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium font-bai-jamjuree">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground font-bai-jamjuree">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
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
              <h2 className="text-3xl md:text-4xl font-bold gradient-text font-bai-jamjuree">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-xl text-muted-foreground font-bai-jamjuree">
                Let's discuss how we can help your business grow with our
                tailored digital solutions.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-purple-700 hover:from-indigo-600 hover:to-purple-800 transition-all animate-pulse-glow font-bai-jamjuree"
              >
                <Link href="/contact">Book a Free Call</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
