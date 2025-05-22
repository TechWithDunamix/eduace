import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      description: "Perfect for individual educators or small classes.",
      features: ["Up to 50 students", "10 courses", "Basic analytics", "Standard support", "Mobile-friendly"],
      popular: false,
      buttonText: "Get Started",
    },
    {
      name: "Professional",
      price: "$29",
      description: "Ideal for growing educational programs.",
      features: [
        "Up to 500 students",
        "Unlimited courses",
        "Advanced analytics",
        "Priority support",
        "Mobile apps",
        "Advanced assessments",
        "Custom branding",
      ],
      popular: true,
      buttonText: "Get Started",
    },
    {
      name: "Institution",
      price: "Custom",
      description: "For schools, universities, and large organizations.",
      features: [
        "Unlimited students",
        "Unlimited courses",
        "Enterprise analytics",
        "Dedicated support",
        "Mobile apps",
        "Advanced assessments",
        "Custom branding",
        "API access",
        "SSO integration",
        "SLA guarantee",
      ],
      popular: false,
      buttonText: "Contact Sales",
    },
  ]

  const faqs = [
    {
      question: "Can I try Eduace before committing?",
      answer:
        "Yes! We offer a 14-day free trial on all plans. No credit card required. You can explore all features and see if Eduace is right for you.",
    },
    {
      question: "How does billing work?",
      answer:
        "We offer both monthly and annual billing options. Annual plans come with a 20% discount. You can upgrade, downgrade, or cancel your plan at any time.",
    },
    {
      question: "What happens if I exceed my student limit?",
      answer:
        "If you approach your student limit, we'll notify you so you can upgrade to a higher plan. We won't cut off access to your students in the middle of a course.",
    },
    {
      question: "Do you offer discounts for educational institutions?",
      answer:
        "Yes, we offer special pricing for K-12 schools, universities, and non-profit educational organizations. Contact our sales team for details.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 md:py-28 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <Link href="/">
                <Button variant="ghost" size="sm" className="mb-6">
                  ← Back to Home
                </Button>
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-primary mb-4">
                Simple, Transparent Pricing
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Choose the plan that's right for your educational needs. All plans include core features.
              </p>
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-muted-foreground">Monthly</span>
                <div className="w-12 h-6 bg-primary/10 rounded-full flex items-center p-1">
                  <div className="w-4 h-4 bg-accent rounded-full ml-auto" />
                </div>
                <span className="text-primary font-medium">Annual (Save 20%)</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg shadow-sm border ${
                    plan.popular ? "border-accent ring-2 ring-accent/20" : "border-border/50"
                  } overflow-hidden`}
                >
                  {plan.popular && (
                    <div className="bg-accent text-white text-center py-1 text-sm font-medium">Most Popular</div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{plan.name}</h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-muted-foreground ml-2">/month</span>}
                    </div>
                    <p className="text-muted-foreground mb-6">{plan.description}</p>
                    <Button
                      className={`w-full ${
                        plan.popular ? "bg-accent hover:bg-accent/90" : "bg-primary hover:bg-primary/90"
                      }`}
                    >
                      {plan.buttonText}
                    </Button>
                  </div>
                  <div className="border-t border-border/50 p-6">
                    <p className="font-medium text-primary mb-4">What's included:</p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">Compare Plan Features</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Find the plan that best suits your educational needs.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 bg-white border-b-2 border-primary/10">Feature</th>
                    <th className="p-4 bg-white border-b-2 border-primary/10 text-center">Starter</th>
                    <th className="p-4 bg-white border-b-2 border-primary/10 text-center">Professional</th>
                    <th className="p-4 bg-white border-b-2 border-primary/10 text-center">Institution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-b border-border/50 bg-white">Students</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center">Up to 50</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center">Up to 500</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-border/50 bg-white">Courses</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center">10</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center">Unlimited</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-border/50 bg-white">Analytics</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center">Basic</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center">Advanced</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center">Enterprise</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-border/50 bg-white">Support</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center">Standard</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center">Priority</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center">Dedicated</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-border/50 bg-white">Custom Branding</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center text-red-600">✗</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center text-green-600">✓</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center text-green-600">✓</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-border/50 bg-white">API Access</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center text-red-600">✗</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center text-red-600">✗</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center text-green-600">✓</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-border/50 bg-white">SSO Integration</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center text-red-600">✗</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center text-red-600">✗</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center text-green-600">✓</td>
                  </tr>
                  <tr>
                    <td className="p-4 bg-white">SLA Guarantee</td>
                    <td className="p-4 bg-white text-center text-red-600">✗</td>
                    <td className="p-4 bg-white text-center text-red-600">✗</td>
                    <td className="p-4 bg-white text-center text-green-600">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Have questions about our pricing? Find answers to common questions below.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-border/50">
                  <h3 className="text-lg font-semibold text-primary mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">Still have questions?</p>
              <Button variant="outline">Contact Sales</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
