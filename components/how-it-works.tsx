"use client"

import { motion } from "framer-motion"
import SectionHeading from "@/components/section-heading"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by understanding your business, goals, and requirements through in-depth consultation.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Our team develops a comprehensive strategy tailored to your specific needs and objectives.",
  },
  {
    number: "03",
    title: "Design",
    description: "We create intuitive, engaging designs that align with your brand and delight your users.",
  },
  {
    number: "04",
    title: "Development",
    description: "Our developers build your solution using cutting-edge technologies and best practices.",
  },
  {
    number: "05",
    title: "Testing",
    description: "Rigorous testing ensures your product is bug-free, secure, and performs optimally.",
  },
  {
    number: "06",
    title: "Launch",
    description: "We deploy your solution and provide ongoing support to ensure continued success.",
  },
]

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-16 bg-gradient-to-r from-[#0f172a] to-[#1e293b]">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="How We Work"
          subtitle="Our proven process ensures successful project delivery every time"
          center
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="glass-card rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute -top-2 -left-2 text-6xl font-bold text-primary/10">{step.number}</div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3 font-bai-jamjuree">{step.title}</h3>
                <p className="text-muted-foreground font-bai-jamjuree">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
