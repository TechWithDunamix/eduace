import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CareersPage() {
  const openPositions = [
    {
      title: "Software Development Intern",
      department: "Engineering",
      location: "Remote",
      type: "Internship",
      description:
        "Join our engineering team to help build and improve our learning management platform. Ideal for computer science students looking to gain real-world experience.",
    },
    {
      title: "UX/UI Design Intern",
      department: "Design",
      location: "Remote",
      type: "Internship",
      description:
        "Work with our design team to create intuitive, accessible interfaces for educators and learners. Perfect for design students passionate about education.",
    },
    {
      title: "Marketing Intern",
      department: "Marketing",
      location: "Remote",
      type: "Internship",
      description:
        "Help develop and execute marketing strategies to reach educators worldwide. Great opportunity for marketing or communications students.",
    },
    {
      title: "Education Content Intern",
      department: "Education",
      location: "Remote",
      type: "Internship",
      description:
        "Assist in developing best practices, templates, and resources for educators using our platform. Ideal for education majors.",
    },
  ]

  const benefits = [
    "Competitive stipend",
    "Remote-first work environment",
    "Flexible working hours",
    "Mentorship from industry experts",
    "Professional development opportunities",
    "Real-world project experience",
    "Potential for full-time employment",
    "Networking opportunities",
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
                Intern at <span className="text-accent">Eduace</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-6">
                Launch your career in EdTech with a meaningful internship that provides real-world experience and
                mentorship.
              </p>
              <Button className="bg-accent hover:bg-accent/90">View Internship Opportunities</Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">Why Intern With Us?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                At Eduace, interns are valued team members who contribute to meaningful projects while developing
                professional skills.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-primary/5 p-8 rounded-lg border border-border/50">
                <h3 className="text-xl font-semibold mb-3 text-primary">Real Responsibility</h3>
                <p className="text-muted-foreground">
                  Work on actual projects that impact our product and users, not just busy work or coffee runs.
                </p>
              </div>
              <div className="bg-primary/5 p-8 rounded-lg border border-border/50">
                <h3 className="text-xl font-semibold mb-3 text-primary">Dedicated Mentorship</h3>
                <p className="text-muted-foreground">
                  Each intern is paired with an experienced team member who provides guidance and support throughout the
                  internship.
                </p>
              </div>
              <div className="bg-primary/5 p-8 rounded-lg border border-border/50">
                <h3 className="text-xl font-semibold mb-3 text-primary">Career Development</h3>
                <p className="text-muted-foreground">
                  Gain valuable skills and experience that will enhance your resume and prepare you for your future
                  career.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">Available Internships</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Join our team and help shape the future of education while building your career.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {openPositions.map((position, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl text-primary">{position.title}</CardTitle>
                        <CardDescription className="mt-1">{position.department}</CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="outline">{position.location}</Badge>
                        <Badge variant="outline">{position.type}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{position.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-primary hover:bg-primary/90">Apply Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-6">Internship Benefits</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We believe in providing our interns with the resources and support they need to thrive.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-white space-y-6 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold">Our Internship Process</h3>
                    <ol className="space-y-4 text-left">
                      <li className="flex gap-4 items-start">
                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                          1
                        </div>
                        <div>
                          <p className="font-medium">Application</p>
                          <p className="text-white/80 text-sm">Submit your resume and cover letter</p>
                        </div>
                      </li>
                      <li className="flex gap-4 items-start">
                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                          2
                        </div>
                        <div>
                          <p className="font-medium">Initial Interview</p>
                          <p className="text-white/80 text-sm">A 30-minute video call with the team lead</p>
                        </div>
                      </li>
                      <li className="flex gap-4 items-start">
                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                          3
                        </div>
                        <div>
                          <p className="font-medium">Skills Assessment</p>
                          <p className="text-white/80 text-sm">A small project or task relevant to the role</p>
                        </div>
                      </li>
                      <li className="flex gap-4 items-start">
                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                          4
                        </div>
                        <div>
                          <p className="font-medium">Final Interview</p>
                          <p className="text-white/80 text-sm">Meet with your potential mentor and team</p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
