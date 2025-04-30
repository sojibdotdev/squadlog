"use client";

import PageTransition from "@/components/page-transition";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function RefundPolicyPage() {
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
            <h1 className="text-4xl font-bold mb-8 gradient-text font-bai-jamjuree">
              Refund Policy
            </h1>

            <div className="space-y-8 text-muted-foreground font-bai-jamjuree">
              <p>
                At SquadLog, we are committed to ensuring your satisfaction with
                our services. This Refund Policy outlines our guidelines for
                refunds and cancellations.
              </p>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-bai-jamjuree">
                  1. Project Deposits
                </h2>
                <p>
                  We require a non-refundable deposit (typically 50% of the
                  project total) before beginning work on any project. This
                  deposit secures your place in our schedule and covers initial
                  project setup, planning, and resource allocation.
                </p>
                <p>
                  If you choose to cancel the project after work has begun but
                  before completion, the deposit will not be refunded, as it
                  compensates us for the work already performed and the
                  opportunity cost of reserving time for your project.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-bai-jamjuree">
                  2. Project Cancellations
                </h2>
                <p>If you need to cancel a project after work has begun:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Cancellation before 25% completion: 50% of the deposit may
                    be refunded at our discretion, depending on the amount of
                    work already completed.
                  </li>
                  <li>
                    Cancellation between 25% and 50% completion: No refund of
                    the deposit, and you may be billed for additional work
                    completed beyond what the deposit covered.
                  </li>
                  <li>
                    Cancellation after 50% completion: Full payment for the
                    project is required, as significant resources have been
                    committed to your project.
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-bai-jamjuree">
                  3. Monthly Services and Subscriptions
                </h2>
                <p>
                  For ongoing monthly services (such as maintenance plans or
                  marketing services):
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    You may cancel at any time with 30 days' written notice.
                  </li>
                  <li>
                    No refunds are provided for the current billing period when
                    cancellation occurs.
                  </li>
                  <li>
                    Any work completed or in progress during the notice period
                    will be billed as normal.
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-bai-jamjuree">
                  4. Dissatisfaction with Services
                </h2>
                <p>If you are dissatisfied with our services:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Please notify us immediately so we can address your
                    concerns.
                  </li>
                  <li>
                    We will make reasonable efforts to rectify any issues and
                    ensure your satisfaction.
                  </li>
                  <li>
                    If we are unable to resolve the issue to your satisfaction,
                    we may offer a partial refund or credit toward future
                    services, determined on a case-by-case basis.
                  </li>
                </ul>
                <p>
                  Refunds due to dissatisfaction will only be considered if:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    You notify us of your concerns within 14 days of service
                    delivery.
                  </li>
                  <li>
                    The issues are directly related to the agreed-upon scope of
                    work and deliverables.
                  </li>
                  <li>
                    We have been given a reasonable opportunity to address and
                    resolve the issues.
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-bai-jamjuree">
                  5. Project Delays
                </h2>
                <p>If a project is delayed due to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Client factors (such as delayed feedback or content): No
                    refund will be issued, and additional charges may apply if
                    the delay significantly impacts our schedule.
                  </li>
                  <li>
                    SquadLog factors: We may offer compensation in the form of
                    additional services or a discount on the final invoice,
                    depending on the nature and length of the delay.
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-bai-jamjuree">
                  6. Refund Process
                </h2>
                <p>If a refund is approved:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Refunds will be issued using the original payment method
                    when possible.
                  </li>
                  <li>
                    Processing time for refunds is typically 5-10 business days,
                    depending on your payment provider.
                  </li>
                  <li>
                    You will receive email confirmation when the refund is
                    processed.
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-bai-jamjuree">
                  7. Exceptions
                </h2>
                <p>
                  We reserve the right to make exceptions to this policy on a
                  case-by-case basis. Any exceptions will be made at the sole
                  discretion of SquadLog management.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-bai-jamjuree">
                  8. Changes to This Policy
                </h2>
                <p>
                  We may update our Refund Policy from time to time. We will
                  notify you of any changes by posting the new policy on this
                  page and updating the "Last updated" date.
                </p>
                <p>
                  You are advised to review this policy periodically for any
                  changes. Changes to this policy are effective when they are
                  posted on this page.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-bai-jamjuree">
                  9. Contact Us
                </h2>
                <p>
                  If you have any questions about this Refund Policy, please
                  contact us at:
                </p>
                <p>
                  Email: billing@squadlog.com
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
  );
}
