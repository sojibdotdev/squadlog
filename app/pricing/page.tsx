"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import PageTransition from "@/components/page-transition"
import SectionHeading from "@/components/section-heading"
import { pricingPlans } from "@/lib/data"
import { formatPrice } from "@/lib/utils"

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

export default function PricingPage() {
  return (
    <PageTransition>
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Transparent Pricing"
            subtitle="Choose the plan that works best for your business needs. All plans include our core features and dedicated support."
            center
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                variants={fadeIn}
                custom={index}
                className={`h-full ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
              >
                <Card
                  className={`h-full bg-secondary/20 border-border/40 overflow-hidden relative ${plan.popular ? "gradient-border" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-700 text-white text-center py-1 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className={`${plan.popular ? "pt-8" : ""}`}>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{formatPrice(plan.price)}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      size="lg"
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-indigo-500 to-purple-700 hover:from-indigo-600 hover:to-purple-800"
                          : ""
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-muted-foreground mb-8">
              We understand that every business is unique. Contact us for a custom quote tailored to your specific
              requirements.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-indigo-500 to-purple-700 hover:from-indigo-600 hover:to-purple-800 transition-all"
            >
              <Link href="/contact">Contact for Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-[#0f172a] to-[#1e293b]">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Have questions about our pricing? Find answers to common questions below."
              center
            />

            <div className="space-y-8">
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">What's included in each plan?</h3>
                <p className="text-muted-foreground">
                  Each plan includes the core features listed, along with dedicated support. The main differences are in
                  the scope, number of pages, and additional features like e-commerce functionality or advanced SEO.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">Are there any hidden fees?</h3>
                <p className="text-muted-foreground">
                  No, our pricing is transparent. The price you see is what you pay. However, additional services or
                  features beyond the scope of your chosen plan may incur extra costs, which we'll always discuss with
                  you beforehand.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">Do you offer payment plans?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer flexible payment plans for all our services. Typically, we require a 50% deposit to
                  begin work, with the remaining balance due upon project completion. For larger projects, we can
                  arrange milestone-based payments.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">What if I need changes after the project is complete?</h3>
                <p className="text-muted-foreground">
                  Minor changes during the revision rounds included in your plan are covered. For changes after project
                  completion or beyond the scope of included revisions, we offer hourly rates or maintenance packages to
                  keep your digital presence up-to-date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-xl text-muted-foreground">
                Let's discuss how we can help your business grow with our tailored digital solutions.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-purple-700 hover:from-indigo-600 hover:to-purple-800 transition-all animate-pulse-glow"
              >
                <Link href="/contact">Book a Free Call</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
