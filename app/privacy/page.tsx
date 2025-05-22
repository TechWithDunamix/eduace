import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8">
              <Link href="/">
                <Button variant="ghost" size="sm" className="mb-6">
                  ← Back to Home
                </Button>
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: May 22, 2025</p>
            </div>

            <div className="prose prose-primary max-w-none">
              <h2>1. Introduction</h2>
              <p>
                At Eduace, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
                and safeguard your information when you visit our website or use our learning management system.
              </p>

              <h2>2. Information We Collect</h2>
              <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
              <h3>2.1 Personal Data</h3>
              <p>
                Personally identifiable information, such as your name, email address, telephone number, and demographic
                information that you voluntarily give to us when you register with the platform or when you choose to
                participate in various activities related to the platform.
              </p>

              <h3>2.2 Derivative Data</h3>
              <p>
                Information our servers automatically collect when you access the platform, such as your IP address,
                your browser type, your operating system, your access times, and the pages you have viewed directly
                before and after accessing the platform.
              </p>

              <h2>3. Use of Your Information</h2>
              <p>
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized
                experience. Specifically, we may use information collected about you via the platform to:
              </p>
              <ul>
                <li>Create and manage your account.</li>
                <li>Deliver targeted content and product information to you.</li>
                <li>Email you regarding your account or order.</li>
                <li>Fulfill and manage purchases, orders, payments, and other transactions related to the platform.</li>
                <li>Generate a personal profile about you to make future visits to the platform more personalized.</li>
                <li>Increase the efficiency and operation of the platform.</li>
                <li>Monitor and analyze usage and trends to improve your experience with the platform.</li>
                <li>Notify you of updates to the platform.</li>
                <li>Offer new products, services, and/or recommendations to you.</li>
                <li>Perform other business activities as needed.</li>
                <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
                <li>Process payments and refunds.</li>
                <li>Request feedback and contact you about your use of the platform.</li>
                <li>Resolve disputes and troubleshoot problems.</li>
                <li>Respond to product and customer service requests.</li>
                <li>Send you a newsletter.</li>
              </ul>

              <h2>4. Disclosure of Your Information</h2>
              <p>
                We may share information we have collected about you in certain situations. Your information may be
                disclosed as follows:
              </p>

              <h3>4.1 By Law or to Protect Rights</h3>
              <p>
                If we believe the release of information about you is necessary to respond to legal process, to
                investigate or remedy potential violations of our policies, or to protect the rights, property, and
                safety of others, we may share your information as permitted or required by any applicable law, rule, or
                regulation.
              </p>

              <h2>5. Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal
                information. While we have taken reasonable steps to secure the personal information you provide to us,
                please be aware that despite our efforts, no security measures are perfect or impenetrable, and no
                method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>

              <h2>6. Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
                <br />
                <a href="mailto:privacy@eduace.com">privacy@eduace.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
