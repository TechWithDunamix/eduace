import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function RoadmapPage() {
  const roadmapItems = [
    {
      quarter: "Q3 2025",
      title: "Initial Launch",
      description: "The first public release of Eduace with core LMS functionality.",
      status: "planned",
      features: [
        { name: "Course Creation & Management", status: "planned" },
        { name: "Student Enrollment", status: "planned" },
        { name: "Basic Assessment Tools", status: "planned" },
        { name: "Discussion Forums", status: "planned" },
        { name: "Mobile-Responsive Design", status: "planned" },
      ],
    },
    {
      quarter: "Q4 2025",
      title: "Enhanced Engagement",
      description: "New features focused on improving student engagement and interaction.",
      status: "planned",
      features: [
        { name: "Live Video Sessions", status: "planned" },
        { name: "Interactive Content", status: "planned" },
        { name: "Gamification Elements", status: "planned" },
        { name: "Peer Review System", status: "planned" },
        { name: "Enhanced Analytics", status: "planned" },
      ],
    },
    {
      quarter: "Q1 2026",
      title: "Advanced Assessment",
      description: "Expanded assessment capabilities and grading tools.",
      status: "planned",
      features: [
        { name: "AI-Assisted Grading", status: "planned" },
        { name: "Plagiarism Detection", status: "planned" },
        { name: "Advanced Question Types", status: "planned" },
        { name: "Rubric Builder", status: "planned" },
        { name: "Offline Assessments", status: "planned" },
      ],
    },
    {
      quarter: "Q2 2026",
      title: "Enterprise Features",
      description: "Features designed for larger educational institutions.",
      status: "planned",
      features: [
        { name: "Single Sign-On (SSO)", status: "planned" },
        { name: "Advanced User Management", status: "planned" },
        { name: "Custom Branding", status: "planned" },
        { name: "API Access", status: "planned" },
        { name: "SLA Guarantees", status: "planned" },
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 md:py-28 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl">
              <Link href="/">
                <Button variant="ghost" size="sm" className="mb-6 text-white hover:text-white/80 hover:bg-white/10">
                  ← Back to Home
                </Button>
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
                Eduace Product Roadmap
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-6">
                Explore our vision for the future of Eduace and see what features we're planning to develop.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {roadmapItems.map((item, index) => (
                  <div key={index} className="mb-16 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-border ml-6 hidden md:block" />
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-48 flex-shrink-0 flex flex-col items-center md:items-start">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold z-10">
                          {index + 1}
                        </div>
                        <div className="mt-4 text-center md:text-left">
                          <h3 className="font-semibold text-primary">{item.quarter}</h3>
                          <Badge variant="outline" className="mt-2 border-blue-500 text-blue-500">
                            Planned
                          </Badge>
                        </div>
                      </div>
                      <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-border/50">
                        <h2 className="text-2xl font-bold text-primary mb-2">{item.title}</h2>
                        <p className="text-muted-foreground mb-6">{item.description}</p>
                        <div className="space-y-4">
                          <h4 className="font-medium text-primary">Key Features:</h4>
                          <ul className="space-y-2">
                            {item.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-blue-500" />
                                <span className="text-muted-foreground">{feature.name}</span>
                                <Badge variant="outline" className="ml-auto border-blue-500 text-blue-500">
                                  Planned
                                </Badge>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">
                Help Shape Our Roadmap
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We value your input! Let us know what features you'd like to see in future versions of Eduace.
              </p>
              <Button className="bg-accent hover:bg-accent/90">Submit Feature Request</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
