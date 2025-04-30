"use client";

import PageTransition from "@/components/page-transition";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>

            <div className="space-y-8 text-muted-foreground font-bai-jamjuree">
              <p>
                At SquadLog, we take your privacy seriously. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you visit our website or use our services.
              </p>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-bai-jamjuree">
                  1. Information We Collect
                </h2>
                <p>
                  We may collect personal information that you voluntarily
                  provide to us when you:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fill out forms on our website</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Request a quote or consultation</li>
                  <li>Contact us via email, phone, or social media</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                <p>
                  This information may include your name, email address, phone
                  number, company name, and any other information you choose to
                  provide.
                </p>
                <p>
                  We also automatically collect certain information when you
                  visit our website, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Operating system</li>
                  <li>Pages visited</li>
                  <li>Time and date of your visit</li>
                  <li>Referring website</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-bai-jamjuree">
                  2. How We Use Your Information
                </h2>
                <p>
                  We may use the information we collect for various purposes,
                  including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Providing, maintaining, and improving our services</li>
                  <li>Processing and fulfilling your requests</li>
                  <li>
                    Sending you administrative information, such as updates to
                    our terms and policies
                  </li>
                  <li>
                    Sending you marketing and promotional communications (with
                    your consent)
                  </li>
                  <li>Responding to your comments, questions, and requests</li>
                  <li>Analyzing usage patterns and trends</li>
                  <li>Protecting our rights and preventing fraud</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-bai-jamjuree">
                  3. Sharing Your Information
                </h2>
                <p>We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Service providers who perform services on our behalf</li>
                  <li>
                    Professional advisors, such as lawyers, auditors, and
                    insurers
                  </li>
                  <li>Government authorities when required by law</li>
                  <li>Business partners with your consent</li>
                </ul>
                <p>
                  We do not sell, rent, or trade your personal information to
                  third parties for their marketing purposes.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-bai-jamjuree">
                  4. Cookies and Tracking Technologies
                </h2>
                <p>
                  We use cookies and similar tracking technologies to track
                  activity on our website and hold certain information. Cookies
                  are files with a small amount of data that may include an
                  anonymous unique identifier.
                </p>
                <p>
                  You can instruct your browser to refuse all cookies or to
                  indicate when a cookie is being sent. However, if you do not
                  accept cookies, you may not be able to use some portions of
                  our website.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-bai-jamjuree">
                  5. Data Security
                </h2>
                <p>
                  We implement appropriate technical and organizational measures
                  to protect your personal information from unauthorized access,
                  disclosure, alteration, and destruction.
                </p>
                <p>
                  However, no method of transmission over the Internet or
                  electronic storage is 100% secure, and we cannot guarantee
                  absolute security.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-bai-jamjuree">
                  6. Your Rights
                </h2>
                <p>
                  Depending on your location, you may have certain rights
                  regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The right to access your personal information</li>
                  <li>
                    The right to rectify inaccurate or incomplete information
                  </li>
                  <li>The right to erasure (the "right to be forgotten")</li>
                  <li>The right to restrict processing</li>
                  <li>The right to data portability</li>
                  <li>The right to object to processing</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the
                  information provided below.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-bai-jamjuree">
                  7. Children's Privacy
                </h2>
                <p>
                  Our services are not intended for individuals under the age of
                  16. We do not knowingly collect personal information from
                  children under 16. If we become aware that we have collected
                  personal information from a child under 16, we will take steps
                  to delete that information.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-bai-jamjuree">
                  8. Changes to This Privacy Policy
                </h2>
                <p>
                  We may update our Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the "Last updated" date.
                </p>
                <p>
                  You are advised to review this Privacy Policy periodically for
                  any changes. Changes to this Privacy Policy are effective when
                  they are posted on this page.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-bai-jamjuree">
                  9. Contact Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us at:
                </p>
                <p>
                  Email: privacy@squadlog.com
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
