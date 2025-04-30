"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import PageTransition from "@/components/page-transition"
import SectionHeading from "@/components/section-heading"

// Sample team members data
const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Founder & CEO",
    bio: "Alex has over 15 years of experience in software development and business leadership. He founded SquadLog with a vision to create digital solutions that truly impact businesses.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Lead Designer",
    bio: "Sarah brings 10 years of UI/UX expertise to the team. Her designs combine aesthetic beauty with functional simplicity to create exceptional user experiences.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#",
    },
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "Technical Director",
    bio: "Michael oversees all technical aspects of our projects. With a background in enterprise architecture, he ensures our solutions are robust, scalable, and future-proof.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 4,
    name: "Emily Wilson",
    role: "Project Manager",
    bio: "Emily excels at coordinating complex projects and ensuring they're delivered on time and within budget. Her communication skills keep clients informed every step of the way.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 5,
    name: "David Kim",
    role: "Full Stack Developer",
    bio: "David is a versatile developer who can tackle any technical challenge. His expertise spans front-end and back-end technologies, with a particular focus on performance optimization.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 6,
    name: "Olivia Martinez",
    role: "Digital Marketing Specialist",
    bio: "Olivia crafts effective digital marketing strategies that drive traffic and conversions. Her data-driven approach ensures measurable results for our clients.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
]

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

export default function AboutPage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h1 className="text-4xl md:text-5xl font-bold gradient-text font-bai-jamjuree">About SquadLog</h1>
                <p className="text-xl text-muted-foreground font-bai-jamjuree">
                  We're a team of passionate digital creators dedicated to crafting exceptional experiences that drive
                  business growth.
                </p>
                <div className="space-y-4 text-muted-foreground font-bai-jamjuree">
                  <p>
                    Founded in 2018, SquadLog has grown from a small team of developers to a full-service digital agency
                    with expertise across web development, mobile applications, design, and digital marketing.
                  </p>
                  <p>
                    Our mission is to help businesses of all sizes harness the power of technology to achieve their
                    goals. We believe in creating digital solutions that are not just visually stunning but also
                    strategically sound and technically excellent.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative aspect-square rounded-2xl overflow-hidden glass-card"
              >
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="SquadLog Team"
                  width={800}
                  height={800}
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-r from-[#0f172a] to-[#1e293b]">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="space-y-4">
                <h2 className="text-2xl font-bold gradient-text font-bai-jamjuree">Our Mission</h2>
                <p className="text-muted-foreground font-bai-jamjuree">
                  To empower businesses through innovative digital solutions that drive growth, enhance user
                  experiences, and create lasting value. We're committed to delivering excellence in every project, big
                  or small.
                </p>
                <p className="text-muted-foreground font-bai-jamjuree">
                  We believe that technology should be accessible, intuitive, and impactful. Our mission is to bridge
                  the gap between complex technical possibilities and real-world business needs.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="space-y-4">
                <h2 className="text-2xl font-bold gradient-text font-bai-jamjuree">Our Vision</h2>
                <p className="text-muted-foreground font-bai-jamjuree">
                  To be the leading digital partner for forward-thinking businesses worldwide, known for our innovative
                  approach, technical excellence, and measurable results that transform how companies operate in the
                  digital landscape.
                </p>
                <p className="text-muted-foreground font-bai-jamjuree">
                  We envision a world where every business, regardless of size, has access to cutting-edge digital
                  solutions that help them thrive in an increasingly connected world.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Our Values"
            subtitle="These core principles guide everything we do and define who we are as a company."
            center
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                title: "Excellence",
                description:
                  "We strive for excellence in every project, pushing boundaries and exceeding expectations.",
              },
              {
                title: "Collaboration",
                description:
                  "We believe in the power of collaboration, working closely with our clients as true partners.",
              },
              {
                title: "Innovation",
                description:
                  "We embrace innovation, constantly exploring new technologies and approaches to solve problems.",
              },
              {
                title: "Integrity",
                description:
                  "We operate with complete transparency and honesty, building trust with our clients and partners.",
              },
              {
                title: "Empathy",
                description:
                  "We put ourselves in our users' shoes, creating solutions that truly address their needs and pain points.",
              },
              {
                title: "Growth",
                description: "We're committed to continuous learning and improvement, for ourselves and our clients.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                custom={index}
                whileHover={{ y: -10 }}
                className="glass-card rounded-2xl p-8 text-center"
              >
                <h3 className="text-xl font-bold mb-4 font-bai-jamjuree">{value.title}</h3>
                <p className="text-muted-foreground font-bai-jamjuree">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-[#0f172a] to-[#1e293b]">
        <div className="container px-4 md:px-6">
          <SectionHeading title="Meet Our Team" subtitle="The talented individuals who make the magic happen." center />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                variants={fadeIn}
                custom={index}
                whileHover={{ y: -10 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <div className="relative aspect-square">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-bai-jamjuree">{member.name}</h3>
                  <p className="text-primary mb-2 font-bai-jamjuree">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4 font-bai-jamjuree">{member.bio}</p>
                  <div className="flex gap-4">
                    {member.social.linkedin && (
                      <Link
                        href={member.social.linkedin}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Linkedin size={18} />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    )}
                    {member.social.twitter && (
                      <Link
                        href={member.social.twitter}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Twitter size={18} />
                        <span className="sr-only">Twitter</span>
                      </Link>
                    )}
                    {member.social.github && (
                      <Link
                        href={member.social.github}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={18} />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <SectionHeading title="Our Journey" subtitle="From humble beginnings to where we are today." center />

          <div className="max-w-3xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border/40 -ml-px md:ml-0"></div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12"
            >
              {[
                {
                  year: "2018",
                  title: "Founded",
                  description: "SquadLog was founded with a vision to create exceptional digital experiences.",
                },
                {
                  year: "2019",
                  title: "Team Expansion",
                  description: "Expanded our team and capabilities to include design and mobile development.",
                },
                {
                  year: "2020",
                  title: "First Major Client",
                  description: "Secured our first enterprise client and delivered a transformative project.",
                },
                {
                  year: "2021",
                  title: "New Office",
                  description: "Moved to a larger office to accommodate our growing team.",
                },
                {
                  year: "2022",
                  title: "International Expansion",
                  description: "Started working with clients internationally, expanding our global footprint.",
                },
                {
                  year: "2023",
                  title: "Award Recognition",
                  description: "Received multiple industry awards for our innovative work.",
                },
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  custom={index}
                  className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="flex-1 flex md:justify-end">
                    <div className={`glass-card rounded-2xl p-6 max-w-md ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      <div className="text-primary font-bold mb-2 font-bai-jamjuree">{milestone.year}</div>
                      <h3 className="text-xl font-medium mb-2 font-bai-jamjuree">{milestone.title}</h3>
                      <p className="text-muted-foreground font-bai-jamjuree">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-8">
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                  </div>
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
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
              <h2 className="text-3xl md:text-4xl font-bold gradient-text font-bai-jamjuree">Want to Work With Us?</h2>
              <p className="text-xl text-muted-foreground font-bai-jamjuree">
                Let's create something amazing together. Reach out to discuss your project.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-purple-700 hover:from-indigo-600 hover:to-purple-800 transition-all animate-pulse-glow font-bai-jamjuree"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
