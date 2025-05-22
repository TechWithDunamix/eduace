import { CheckCircle2, ArrowRight } from "lucide-react"

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Create Your Account",
      description:
        "Once Eduace launches, you'll receive an invitation to create your account and set up your profile with your teaching preferences and specialties.",
      icon: <CheckCircle2 className="h-6 w-6 text-accent" />,
    },
    {
      number: "02",
      title: "Build Your Courses",
      description:
        "Use our intuitive course builder to create engaging learning experiences. Import existing materials or create new content with our powerful tools.",
      icon: <CheckCircle2 className="h-6 w-6 text-accent" />,
    },
    {
      number: "03",
      title: "Invite Your Students",
      description:
        "Seamlessly invite students to join your courses through email invitations or shareable links. Monitor enrollment in real-time.",
      icon: <CheckCircle2 className="h-6 w-6 text-accent" />,
    },
    {
      number: "04",
      title: "Teach & Engage",
      description:
        "Deliver your courses through live sessions or self-paced modules. Use interactive tools to keep students engaged and track their progress.",
      icon: <CheckCircle2 className="h-6 w-6 text-accent" />,
    },
  ]

  return (
    <section id="how-it-works" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">How Eduace Works</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process makes it easy to create, manage, and deliver exceptional learning experiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-lg border border-border/50 h-full flex flex-col">
                <div className="text-4xl font-bold text-primary/10 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{step.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{step.description}</p>
                <div className="flex items-center text-accent font-medium">{step.icon}</div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-8 w-8 text-accent/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-primary/5 px-6 py-3 rounded-full">
            <p className="text-primary font-medium">
              Ready to revolutionize your teaching experience? Join our waitlist today!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
