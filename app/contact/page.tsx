"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import PageTransition from "@/components/page-transition";
import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendContactForm } from "./actions";

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
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const res = await sendContactForm(formData);

    if (res.success) {
      setStatus("success");
      alert("Your message has been sent!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setStatus("error");
      setErrorMessage(res.error || "Something went wrong.");
    }
  };

  return (
    <PageTransition>
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Get in Touch"
            subtitle="Have a question or want to work together? Reach out to us."
            center
          />

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-secondary/20 border-border/40">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-indigo-500 to-purple-700 hover:from-indigo-600 hover:to-purple-800 transition-all"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info & Calendly */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6"
                >
                  <motion.div
                    variants={fadeIn}
                    custom={0}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-secondary/50 rounded-full p-2 mt-1">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <Link
                        href="mailto:hello@devforge.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        hello@devforge.com
                      </Link>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeIn}
                    custom={1}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-secondary/50 rounded-full p-2 mt-1">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <Link
                        href="tel:+1234567890"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +1 (234) 567-890
                      </Link>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeIn}
                    custom={2}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-secondary/50 rounded-full p-2 mt-1">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Office</h4>
                      <address className="text-muted-foreground not-italic">
                        123 Tech Street, Suite 101
                        <br />
                        San Francisco, CA 94107
                      </address>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Schedule a Call</h3>
                <p className="text-muted-foreground mb-6">
                  Book a free 15-minute discovery call to discuss your project
                  and how we can help.
                </p>
                <div className="bg-secondary/20 rounded-xl p-4 text-center">
                  <p className="text-muted-foreground mb-4">
                    Calendly integration would appear here, allowing visitors to
                    schedule a meeting directly.
                  </p>
                  <Button className="bg-gradient-to-r from-indigo-500 to-purple-700 hover:from-indigo-600 hover:to-purple-800 transition-all">
                    Schedule Now
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="glass-card rounded-2xl overflow-hidden aspect-video">
              <div className="w-full h-full bg-secondary/20 flex items-center justify-center">
                <p className="text-muted-foreground">
                  Interactive map would be embedded here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-[#0f172a] to-[#1e293b]">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Have questions about working with us? Find answers to common questions below."
              center
            />

            <div className="space-y-8">
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">
                  What is your typical process for new projects?
                </h3>
                <p className="text-muted-foreground">
                  Our process typically begins with a discovery call to
                  understand your needs, followed by a proposal and project
                  plan. Once approved, we move into design, development,
                  testing, and launch phases, with regular check-ins throughout.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">
                  How long does a typical project take?
                </h3>
                <p className="text-muted-foreground">
                  Project timelines vary based on scope and complexity. A simple
                  website might take 4-6 weeks, while a complex web application
                  could take 3-6 months. We'll provide a detailed timeline
                  during the proposal phase.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">
                  Do you offer ongoing support after launch?
                </h3>
                <p className="text-muted-foreground">
                  Yes, we offer various maintenance and support packages to keep
                  your digital products running smoothly after launch. These can
                  include regular updates, security monitoring, content updates,
                  and technical support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
