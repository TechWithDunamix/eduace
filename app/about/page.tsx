import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Joseph Mmadubuike",
      role: "Founder & CEO",
      bio: "Former educator with 15 years of experience in EdTech.",
    },
    {
      name: "Oluchi Chris ",
      role: "Chief Product Officer",
      bio: "Passionate about creating intuitive educational tools.",
    },
    {
      name: "Chidebele Dunamis",
      role: "Technical Lead",
      bio: "Expert in software development and educational technology.",
    },
    {
      name: "Chinecherem Nwankwo",
      role: "Marketing Director",
      bio: "Experienced in digital marketing and educational outreach.",
    },
    
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 md:py-28 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <Link href="/">
                  <Button variant="ghost" size="sm" className="mb-6">
                    ← Back to Home
                  </Button>
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-primary mb-4">
                  About <span className="text-accent">Eduace</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-6">
                  We're on a mission to transform online education by providing educators with powerful, intuitive tools
                  that enhance the teaching and learning experience.
                </p>
                <p className="text-muted-foreground mb-6">
                  Founded in 2024, Eduace was born from a simple observation: existing learning management systems were
                  either too complex or too limited. We set out to create a platform that strikes the perfect balance
                  between powerful features and ease of use.
                </p>
                <p className="text-muted-foreground">
                  Our team combines expertise in education, technology, and design to build a platform that truly meets
                  the needs of modern educators and learners.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-white space-y-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold">Our Vision</h2>
                    <p className="text-white/80">
                      To create a world where quality education is accessible, engaging, and effective for everyone.
                    </p>
                    <div className="w-16 h-1 bg-accent mx-auto my-4" />
                    <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
                    <p className="text-white/80">
                      To empower educators with innovative tools that simplify teaching and enhance learning outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                These core principles guide everything we do at Eduace.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-primary/5 p-8 rounded-lg border border-border/50">
                <h3 className="text-xl font-semibold mb-3 text-primary">Innovation</h3>
                <p className="text-muted-foreground">
                  We constantly push the boundaries of what's possible in educational technology, seeking new ways to
                  enhance the teaching and learning experience.
                </p>
              </div>
              <div className="bg-primary/5 p-8 rounded-lg border border-border/50">
                <h3 className="text-xl font-semibold mb-3 text-primary">Accessibility</h3>
                <p className="text-muted-foreground">
                  We believe that powerful educational tools should be accessible to all educators, regardless of
                  technical expertise or institutional resources.
                </p>
              </div>
              <div className="bg-primary/5 p-8 rounded-lg border border-border/50">
                <h3 className="text-xl font-semibold mb-3 text-primary">Educator-Centric</h3>
                <p className="text-muted-foreground">
                  We design with educators in mind, ensuring that our platform enhances rather than complicates the
                  teaching process.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The passionate individuals behind Eduace.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-border/50">
                  <div className="w-20 h-20 bg-primary/10 rounded-full mb-4 mx-auto flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary text-center mb-1">{member.name}</h3>
                  <p className="text-accent text-sm text-center mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-center text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
