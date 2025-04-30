"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import PageTransition from "@/components/page-transition"

export default function TermsConditionsPage() {
  return (
    <PageTransition>
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-8 gradient-text font-bai-jamjuree">Terms and Conditions</h1>

            <div className="space-y-8 text-muted-foreground font-bai-jamjuree">
              <p>
                Welcome to SquadLog. These terms and conditions outline the rules and regulations for the use of our
                website and services.
              </p>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-bai-jamjuree">1. Acceptance of Terms</h2>
                <p>
                  By accessing this website, you accept these terms and conditions in full. If you disagree with these
                  terms and conditions or any part of them, you must not use our website or services.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-bai-jamjuree">2. Services</h2>
                <p>
                  SquadLog provides web development, mobile app development, UI/UX design, digital marketing, and
                  related services as described on our website. All services are subject to these terms and conditions.
                </p>
                <p>
                  We reserve the right to modify, suspend, or discontinue any part of our services at any time without
                  notice.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-bai-jamjuree">3. Project Agreements</h2>
                <p>
                  All projects require a signed agreement that outlines the scope, timeline, deliverables, and payment
                  terms. This agreement, along with these terms and conditions, constitutes the entire agreement between
                  you and SquadLog.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-bai-jamjuree">4. Intellectual Property</h2>
                <p>
                  Upon full payment, you will own the final deliverables created specifically for your project. However,
                  we retain ownership of all preliminary designs, concepts, and other materials created during the
                  project that are not included in the final deliverables.
                </p>
                <p>
                  We reserve the right to display and link to your completed project as part of our portfolio and to
                  write about the project on websites, in magazine articles, and in books about design.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-bai-jamjuree">5. Payment Terms</h2>
                <p>
                  Payment terms are outlined in your project agreement. Typically, we require a 50% deposit before
                  beginning work, with the remaining balance due upon project completion.
                </p>
                <p>
                  Late payments may incur additional fees and result in work being paused until payment is received.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-bai-jamjuree">6. Revisions and Changes</h2>
                <p>
                  Your project agreement will specify the number of revision rounds included. Additional revisions or
                  changes to the project scope may incur additional charges.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-bai-jamjuree">7. Limitation of Liability</h2>
                <p>
                  SquadLog shall not be liable for any indirect, incidental, special, consequential, or punitive damages
                  resulting from your use of or inability to use our services.
                </p>
                <p>
                  Our total liability for all claims related to our services shall not exceed the total amount paid by
                  you for the services in question.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-bai-jamjuree">8. Governing Law</h2>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of [Your
                  Jurisdiction], and you submit to the exclusive jurisdiction of the courts located within [Your
                  Jurisdiction] for the resolution of any disputes.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-bai-jamjuree">9. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms and conditions at any time. Changes will be effective
                  immediately upon posting to our website. Your continued use of our services after any changes
                  indicates your acceptance of the new terms.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-bai-jamjuree">10. Contact Information</h2>
                <p>If you have any questions about these terms and conditions, please contact us at:</p>
                <p>
                  Email: legal@squadlog.com
                  <br />
                  Phone: (123) 456-7890
                </p>
              </div>

              <p>Last updated: April 30, 2024</p>
            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild className="font-bai-jamjuree">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
