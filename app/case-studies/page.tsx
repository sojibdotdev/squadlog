"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import PageTransition from "@/components/page-transition";
import SectionHeading from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Sample portfolio data
const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A complete e-commerce solution with inventory management and payment processing.",
    image: "/placeholder.svg?height=720&width=1280",
    category: "Web Development",
    client: "RetailTech Inc.",
    completionDate: "January 2023",
    link: "#",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "AWS"],
  },
  {
    id: 2,
    title: "Health Tracking App",
    description:
      "A comprehensive health tracking application for monitoring fitness and nutrition.",
    image: "/placeholder.svg?height=720&width=1280",
    category: "Mobile App",
    client: "HealthHub",
    completionDate: "March 2023",
    link: "#",
    technologies: ["React Native", "Firebase", "Node.js", "TensorFlow"],
  },
  {
    id: 3,
    title: "Financial Dashboard",
    description:
      "An intuitive financial analytics dashboard with real-time data visualization.",
    image: "/placeholder.svg?height=720&width=1280",
    category: "Web Application",
    client: "FinTrack Solutions",
    completionDate: "June 2023",
    link: "#",
    technologies: ["React", "D3.js", "Python", "Django", "PostgreSQL"],
  },
  {
    id: 4,
    title: "Brand Website",
    description:
      "A stunning brand website featuring immersive animations and shopping experience.",
    image: "/placeholder.svg?height=720&width=1280",
    category: "UI/UX Design",
    client: "EcoLife Products",
    completionDate: "August 2023",
    link: "#",
    technologies: ["Figma", "Framer Motion", "Adobe XD", "Shopify"],
  },
  {
    id: 5,
    title: "Travel Companion App",
    description:
      "A travel companion app with itinerary planning and local recommendations.",
    image: "/placeholder.svg?height=720&width=1280",
    category: "Mobile App",
    client: "TravelBuddy Inc.",
    completionDate: "October 2023",
    link: "#",
    technologies: ["Flutter", "Firebase", "Google Maps API", "Node.js"],
  },
  {
    id: 6,
    title: "Content Management System",
    description:
      "A custom CMS for managing client projects, digital assets, and team collaboration.",
    image: "/placeholder.svg?height=720&width=1280",
    category: "Web Application",
    client: "CreativeStudio Agency",
    completionDate: "December 2023",
    link: "#",
    technologies: ["React", "Node.js", "GraphQL", "MongoDB", "AWS S3"],
  },
  {
    id: 7,
    title: "Educational Platform",
    description:
      "An interactive learning platform with course management and student progress tracking.",
    image: "/placeholder.svg?height=720&width=1280",
    category: "Web Application",
    client: "EduTech Solutions",
    completionDate: "February 2024",
    link: "#",
    technologies: ["Next.js", "Firebase", "Node.js", "WebRTC", "AWS"],
  },
  {
    id: 8,
    title: "Restaurant Ordering System",
    description:
      "A digital menu and ordering system for restaurants with kitchen management features.",
    image: "/placeholder.svg?height=720&width=1280",
    category: "Web Development",
    client: "FoodTech Inc.",
    completionDate: "April 2024",
    link: "#",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Stripe"],
  },
  {
    id: 9,
    title: "Real Estate Platform",
    description:
      "A property listing and management platform with virtual tours and agent dashboards.",
    image: "/placeholder.svg?height=720&width=1280",
    category: "Web Development",
    client: "PropertyPro",
    completionDate: "May 2024",
    link: "#",
    technologies: ["Next.js", "Three.js", "Node.js", "MongoDB", "AWS"],
  },
];

// Get unique categories
const categories = [
  "All",
  ...new Set(portfolioItems.map((item) => item.category)),
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <PageTransition>
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Case Studies"
            subtitle="Explore our recent projects and see how we've helped businesses achieve their digital goals."
            center
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`font-bai-jamjuree ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-indigo-500 to-purple-700"
                    : "gradient-border"
                }`}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -10 }}
                  className="h-full"
                >
                  <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={1280}
                        height={720}
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-primary/80 hover:bg-primary">
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-2 font-bai-jamjuree">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 font-bai-jamjuree">
                        {item.description}
                      </p>
                      <div className="mt-auto">
                        <div className="flex justify-between text-sm mb-4">
                          <span className="text-muted-foreground font-bai-jamjuree">
                            Client:
                          </span>
                          <span className="font-bai-jamjuree">
                            {item.client}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm mb-4">
                          <span className="text-muted-foreground font-bai-jamjuree">
                            Completed:
                          </span>
                          <span className="font-bai-jamjuree">
                            {item.completionDate}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.technologies.slice(0, 3).map((tech, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="bg-secondary/50 font-bai-jamjuree"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {item.technologies.length > 3 && (
                            <Badge
                              variant="secondary"
                              className="bg-secondary/50 font-bai-jamjuree"
                            >
                              +{item.technologies.length - 3} more
                            </Badge>
                          )}
                        </div>
                        <Button
                          asChild
                          variant="ghost"
                          className="w-full group font-bai-jamjuree"
                        >
                          <Link href={item.link}>
                            View Project{" "}
                            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
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
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl text-muted-foreground font-bai-jamjuree">
                Let's discuss how we can create a standout digital experience
                for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-indigo-500 to-purple-700 hover:from-indigo-600 hover:to-purple-800 transition-all animate-pulse-glow font-bai-jamjuree"
                >
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="gradient-border font-bai-jamjuree"
                >
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
