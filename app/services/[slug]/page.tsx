"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import PageTransition from "@/components/page-transition"

// Sample services data with pricing
const services = [
  {
    id: 1,
    title: "Web Development",
    slug: "web-development",
    shortDescription: "Custom websites and web applications built with modern technologies.",
    icon: "Code",
    coverImage: "/placeholder.svg?height=1080&width=1920",
    longDescription:
      "Our web development services deliver cutting-edge websites and applications that drive business growth. We combine technical expertise with creative design to build solutions that are both beautiful and functional.",
    features: [
      { title: "Responsive Design", description: "Websites that work perfectly on all devices" },
      { title: "Custom CMS", description: "Easy content management tailored to your needs" },
      { title: "Performance Optimization", description: "Lightning-fast loading speeds" },
      { title: "SEO-Friendly", description: "Built with search engines in mind" },
    ],
    process: [
      { title: "Discovery", description: "Understanding your business goals and requirements" },
      { title: "Planning", description: "Creating a roadmap for your project" },
      { title: "Design", description: "Crafting beautiful and intuitive interfaces" },
      { title: "Development", description: "Building your solution with clean, efficient code" },
      { title: "Testing", description: "Ensuring everything works perfectly" },
      { title: "Launch", description: "Deploying your project to the world" },
    ],
    faqs: [
      {
        question: "How long does it take to build a website?",
        answer:
          "Typically, a website takes 4-12 weeks to complete, depending on complexity. Simple websites may be completed in 4-6 weeks, while more complex web applications can take 8-12 weeks or more.",
      },
      {
        question: "Do you provide website maintenance?",
        answer:
          "Yes, we offer ongoing maintenance packages to keep your website secure, up-to-date, and performing optimally. This includes regular updates, security patches, and technical support.",
      },
      {
        question: "What technologies do you use?",
        answer:
          "We specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and various databases. We choose the best tech stack based on your specific project requirements.",
      },
      {
        question: "Can you redesign my existing website?",
        answer:
          "We can revamp your existing website to improve its design, functionality, and performance while preserving your brand identity and valuable content.",
      },
    ],
    pricing: [
      {
        name: "Basic",
        price: 2999,
        description: "Perfect for small businesses and startups",
        features: [
          "Responsive Website Design",
          "Up to 5 Pages",
          "Basic SEO Setup",
          "Contact Form",
          "Mobile Optimization",
          "2 Rounds of Revisions",
          "1 Month of Support",
        ],
        popular: false,
      },
      {
        name: "Professional",
        price: 5999,
        description: "Ideal for growing businesses",
        features: [
          "Everything in Basic",
          "Up to 10 Pages",
          "Content Management System",
          "Blog Setup",
          "Advanced SEO Package",
          "Social Media Integration",
          "3 Rounds of Revisions",
          "3 Months of Support",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: 9999,
        description: "For established businesses with complex needs",
        features: [
          "Everything in Professional",
          "Unlimited Pages",
          "Custom Functionality",
          "E-commerce Integration",
          "User Authentication",
          "Third-party API Integrations",
          "Performance Optimization",
          "6 Months of Support",
        ],
        popular: false,
      },
    ],
  },
  {
    id: 2,
    title: "Mobile App Development",
    slug: "mobile-apps",
    shortDescription: "Native and cross-platform mobile applications for iOS and Android.",
    icon: "Smartphone",
    coverImage: "/placeholder.svg?height=1080&width=1920",
    longDescription:
      "We create powerful, intuitive mobile applications that engage users and drive business growth. Our mobile development team builds native and cross-platform apps that deliver exceptional user experiences across all devices.",
    features: [
      { title: "Cross-Platform Development", description: "Build once, deploy everywhere" },
      { title: "Native Performance", description: "Fast, responsive applications" },
      { title: "Offline Functionality", description: "Apps that work without internet" },
      { title: "Push Notifications", description: "Engage users with timely updates" },
    ],
    process: [
      { title: "Strategy", description: "Defining your app's purpose and target audience" },
      { title: "Wireframing", description: "Creating the blueprint for your app" },
      { title: "UI/UX Design", description: "Designing intuitive user interfaces" },
      { title: "Development", description: "Building your app with clean, efficient code" },
      { title: "Testing", description: "Ensuring your app works flawlessly" },
      { title: "Deployment", description: "Launching your app to the app stores" },
    ],
    faqs: [
      {
        question: "How much does it cost to develop a mobile app?",
        answer:
          "Mobile app development costs vary widely based on complexity. Simple apps typically start at $25,000, while more complex apps with custom features can range from $50,000 to $250,000+.",
      },
      {
        question: "How long does it take to build a mobile app?",
        answer:
          "The timeline for mobile app development usually ranges from 3-9 months. Simple apps may take 3-4 months, while complex applications with extensive features can take 6-9 months or longer.",
      },
      {
        question: "Do you develop for both iOS and Android?",
        answer:
          "Yes, we develop for both platforms. We typically use cross-platform frameworks like React Native or Flutter to build once and deploy to both iOS and Android, saving time and cost.",
      },
      {
        question: "Do you provide app maintenance and updates?",
        answer:
          "Absolutely. We offer ongoing maintenance packages to keep your app running smoothly, fix bugs, and implement new features as needed. We also ensure compatibility with new OS versions.",
      },
    ],
    pricing: [
      {
        name: "Starter",
        price: 24999,
        description: "Basic mobile app with essential features",
        features: [
          "Single Platform (iOS or Android)",
          "Up to 5 Screens",
          "Basic User Authentication",
          "Standard UI Components",
          "Local Data Storage",
          "2 Rounds of Revisions",
          "3 Months of Support",
        ],
        popular: false,
      },
      {
        name: "Advanced",
        price: 49999,
        description: "Feature-rich app for growing businesses",
        features: [
          "Cross-Platform (iOS & Android)",
          "Up to 10 Screens",
          "Social Media Integration",
          "Push Notifications",
          "API Integration",
          "Custom UI Components",
          "3 Rounds of Revisions",
          "6 Months of Support",
        ],
        popular: true,
      },
      {
        name: "Premium",
        price: 99999,
        description: "Complex app with advanced functionality",
        features: [
          "Cross-Platform (iOS & Android)",
          "Unlimited Screens",
          "Advanced Authentication",
          "Real-time Data Sync",
          "Offline Mode",
          "Payment Gateway Integration",
          "Analytics Dashboard",
          "12 Months of Support",
        ],
        popular: false,
      },
    ],
  },
  {
    id: 3,
    title: "UI/UX Design",
    slug: "ui-ux-design",
    shortDescription: "User-centered design that creates intuitive and engaging digital experiences.",
    icon: "Palette",
    coverImage: "/placeholder.svg?height=1080&width=1920",
    longDescription:
      "Our UI/UX design services focus on creating intuitive, engaging user experiences that delight your customers and achieve your business goals. We combine aesthetic appeal with functional design to create interfaces that users love.",
    features: [
      { title: "User Research", description: "Understanding your users' needs and behaviors" },
      { title: "Wireframing & Prototyping", description: "Visualizing ideas before development" },
      { title: "Visual Design", description: "Creating beautiful, consistent interfaces" },
      { title: "Usability Testing", description: "Ensuring your product is intuitive to use" },
    ],
    process: [
      { title: "Research", description: "Understanding users and business requirements" },
      { title: "Information Architecture", description: "Organizing content and flow" },
      { title: "Wireframing", description: "Creating the structural blueprint" },
      { title: "Prototyping", description: "Building interactive models" },
      { title: "Visual Design", description: "Applying brand and visual elements" },
      { title: "Testing", description: "Validating designs with real users" },
    ],
    faqs: [
      {
        question: "What's the difference between UI and UX design?",
        answer:
          "UI (User Interface) design focuses on the visual elements users interact with, while UX (User Experience) design encompasses the entire user journey and how users feel when using your product. Good design requires both.",
      },
      {
        question: "How do you approach the design process?",
        answer:
          "We follow a user-centered design process that starts with research to understand your users and business goals. We then create wireframes, prototypes, and visual designs, iterating based on feedback until we achieve the optimal solution.",
      },
      {
        question: "Do you provide design systems?",
        answer:
          "Yes, we create comprehensive design systems that include component libraries, style guides, and documentation. This ensures consistency across your product and makes future development more efficient.",
      },
      {
        question: "How do you measure the success of a design?",
        answer:
          "We measure design success through a combination of user testing, analytics, and business metrics. This includes usability testing, conversion rates, engagement metrics, and user satisfaction scores.",
      },
    ],
    pricing: [
      {
        name: "Essential",
        price: 4999,
        description: "Basic UI/UX design for simple projects",
        features: [
          "User Research",
          "Information Architecture",
          "Wireframing",
          "Basic Visual Design",
          "Up to 5 Screens",
          "2 Rounds of Revisions",
        ],
        popular: false,
      },
      {
        name: "Comprehensive",
        price: 9999,
        description: "Complete design solution for complex projects",
        features: [
          "In-depth User Research",
          "Persona Development",
          "User Journey Mapping",
          "Wireframing & Prototyping",
          "High-fidelity Visual Design",
          "Up to 15 Screens",
          "Usability Testing",
          "3 Rounds of Revisions",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: 19999,
        description: "Premium design for large-scale applications",
        features: [
          "Everything in Comprehensive",
          "Unlimited Screens",
          "Design System Creation",
          "Animation & Micro-interactions",
          "Accessibility Compliance",
          "Multi-platform Design",
          "Extensive Usability Testing",
          "5 Rounds of Revisions",
        ],
        popular: false,
      },
    ],
  },
]

// Helper function to format price
function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(price)
}

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

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const [service, setService] = useState(services.find((s) => s.slug === slug))
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    setService(services.find((s) => s.slug === slug))
  }, [slug])

  if (!service) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold font-bai-jamjuree">Service not found</h1>
        <p className="mt-4 text-muted-foreground font-bai-jamjuree">The service you are looking for does not exist.</p>
        <Button asChild className="mt-8 font-bai-jamjuree">
          <Link href="/services">Back to Services</Link>
        </Button>
      </div>
    )
  }

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold gradient-text font-bai-jamjuree">{service.title}</h1>
              <p className="text-xl text-muted-foreground font-bai-jamjuree">{service.shortDescription}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden glass-card"
            >
              <Image
                src={service.coverImage || "/placeholder.svg"}
                alt={service.title}
                width={1920}
                height={1080}
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Tabs Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4 w-full max-w-2xl">
                <TabsTrigger value="overview" className="font-bai-jamjuree">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="features" className="font-bai-jamjuree">
                  Features
                </TabsTrigger>
                <TabsTrigger value="process" className="font-bai-jamjuree">
                  Process
                </TabsTrigger>
                <TabsTrigger value="pricing" className="font-bai-jamjuree">
                  Pricing
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="overview" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto"
              >
                <div className="space-y-6 text-muted-foreground font-bai-jamjuree">
                  <p className="text-lg">{service.longDescription}</p>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-bold mb-4 font-bai-jamjuree">Frequently Asked Questions</h3>
                  <Accordion type="single" collapsible className="space-y-4">
                    {service.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`faq-${index}`} className="glass-card rounded-xl border-none">
                        <AccordionTrigger className="px-6 py-4 text-left font-medium hover:no-underline font-bai-jamjuree">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-muted-foreground font-bai-jamjuree">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="features" className="space-y-8">
              <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      variants={fadeIn}
                      custom={index}
                      whileHover={{ y: -5 }}
                      className="glass-card rounded-2xl p-6"
                    >
                      <div className="flex gap-4">
                        <div className="bg-primary/20 rounded-full p-2 h-fit">
                          <Check className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium mb-2 font-bai-jamjuree">{feature.title}</h3>
                          <p className="text-muted-foreground font-bai-jamjuree">{feature.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="process" className="space-y-8">
              <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-5xl mx-auto">
                <div className="relative">
                  {/* Process timeline line */}
                  <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border/40 -ml-px md:ml-0 hidden md:block"></div>

                  <div className="space-y-12">
                    {service.process.map((step, index) => (
                      <motion.div
                        key={index}
                        variants={fadeIn}
                        custom={index}
                        className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                      >
                        <div className="flex-1 flex md:justify-end">
                          <div
                            className={`glass-card rounded-2xl p-6 max-w-md ${index % 2 === 0 ? "md:text-right" : ""}`}
                          >
                            <div className="bg-primary/20 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                              <span className="font-bold text-primary">{index + 1}</span>
                            </div>
                            <h3 className="text-xl font-medium mb-2 font-bai-jamjuree">{step.title}</h3>
                            <p className="text-muted-foreground font-bai-jamjuree">{step.description}</p>
                          </div>
                        </div>
                        <div className="hidden md:flex items-center justify-center w-8">
                          <div className="w-4 h-4 rounded-full bg-primary"></div>
                        </div>
                        <div className="flex-1"></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="pricing" className="space-y-8">
              <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                  {service.pricing.map((plan, index) => (
                    <motion.div
                      key={index}
                      variants={fadeIn}
                      custom={index}
                      className={`h-full ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
                    >
                      <Card
                        className={`h-full bg-secondary/20 border-border/40 overflow-hidden relative ${
                          plan.popular ? "gradient-border" : ""
                        }`}
                      >
                        {plan.popular && (
                          <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-700 text-white text-center py-1 text-sm font-medium">
                            Most Popular
                          </div>
                        )}
                        <CardHeader className={`${plan.popular ? "pt-8" : ""}`}>
                          <CardTitle className="font-bai-jamjuree">{plan.name}</CardTitle>
                          <p className="text-muted-foreground font-bai-jamjuree">{plan.description}</p>
                          <div className="mt-4">
                            <span className="text-4xl font-bold font-bai-jamjuree">{formatPrice(plan.price)}</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {plan.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                                <span className="text-sm font-bai-jamjuree">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-6">
                            <Button
                              asChild
                              size="lg"
                              className={`w-full font-bai-jamjuree ${
                                plan.popular
                                  ? "bg-gradient-to-r from-indigo-500 to-purple-700 hover:from-indigo-600 hover:to-purple-800"
                                  : ""
                              }`}
                              variant={plan.popular ? "default" : "outline"}
                            >
                              <Link href="/contact">Get Started</Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold mb-4 font-bai-jamjuree">Need a Custom Solution?</h3>
                    <p className="text-muted-foreground mb-6 font-bai-jamjuree">
                      Our standard packages not quite right for your needs? We offer tailored solutions designed
                      specifically for your unique requirements.
                    </p>
                    <Button
                      asChild
                      className="bg-gradient-to-r from-indigo-500 to-purple-700 hover:from-indigo-600 hover:to-purple-800 transition-all font-bai-jamjuree"
                    >
                      <Link href="/contact">Contact for Custom Pricing</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
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
              <h2 className="text-3xl md:text-4xl font-bold gradient-text font-bai-jamjuree">Ready to Get Started?</h2>
              <p className="text-xl text-muted-foreground font-bai-jamjuree">
                Book a free discovery call to discuss your project and how we can help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-indigo-500 to-purple-700 hover:from-indigo-600 hover:to-purple-800 transition-all animate-pulse-glow font-bai-jamjuree"
                >
                  <Link href="/contact">Book a Discovery Call</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gradient-border font-bai-jamjuree">
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-10 text-center gradient-text font-bai-jamjuree">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services
              .filter((s) => s.id !== service.id)
              .slice(0, 3)
              .map((relatedService, index) => (
                <motion.div
                  key={relatedService.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="glass-card rounded-2xl overflow-hidden"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 font-bai-jamjuree">{relatedService.title}</h3>
                    <p className="text-muted-foreground mb-4 font-bai-jamjuree">{relatedService.shortDescription}</p>
                    <Button asChild variant="ghost" className="group font-bai-jamjuree">
                      <Link href={`/services/${relatedService.slug}`}>
                        Learn More{" "}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
