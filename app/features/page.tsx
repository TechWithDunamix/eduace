import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Users,
  Award,
  BarChart4,
  Calendar,
  FileText,
  Settings,
  MessageSquare,
  Video,
  Shield,
} from "lucide-react"

export default function FeaturesPage() {
  const featureCategories = [
    {
      id: "course-management",
      name: "Course Management",
      features: [
        {
          icon: <BookOpen className="h-8 w-8 text-accent" />,
          title: "Intuitive Course Builder",
          description:
            "Create engaging courses with our drag-and-drop builder. Organize content into modules, lessons, and topics with ease.",
        },
        {
          icon: <FileText className="h-8 w-8 text-accent" />,
          title: "Rich Content Editor",
          description:
            "Create engaging content with our rich text editor. Embed videos, images, documents, and interactive elements.",
        },
        {
          icon: <Calendar className="h-8 w-8 text-accent" />,
          title: "Scheduling & Planning",
          description:
            "Set release dates for content, schedule assignments, and create a comprehensive course calendar.",
        },
      ],
    },
    {
      id: "student-engagement",
      name: "Student Engagement",
      features: [
        {
          icon: <Users className="h-8 w-8 text-accent" />,
          title: "Discussion Forums",
          description: "Foster meaningful discussions with threaded forums, rich media support, and moderation tools.",
        },
        {
          icon: <MessageSquare className="h-8 w-8 text-accent" />,
          title: "Real-time Chat",
          description:
            "Enable direct communication between students and instructors with individual and group chat options.",
        },
        {
          icon: <Video className="h-8 w-8 text-accent" />,
          title: "Live Sessions",
          description: "Host live video classes, office hours, and study groups with integrated video conferencing.",
        },
      ],
    },
    {
      id: "assessment",
      name: "Assessment",
      features: [
        {
          icon: <Award className="h-8 w-8 text-accent" />,
          title: "Diverse Question Types",
          description:
            "Create assessments with multiple choice, short answer, essay, file upload, and interactive question types.",
        },
        {
          icon: <Shield className="h-8 w-8 text-accent" />,
          title: "Secure Testing",
          description: "Ensure academic integrity with proctoring options, randomized questions, and time limits.",
        },
        {
          icon: <BarChart4 className="h-8 w-8 text-accent" />,
          title: "Automated Grading",
          description:
            "Save time with automated grading for objective questions and rubric-based assessment for subjective responses.",
        },
      ],
    },
    {
      id: "administration",
      name: "Administration",
      features: [
        {
          icon: <Settings className="h-8 w-8 text-accent" />,
          title: "User Management",
          description:
            "Manage user roles and permissions with fine-grained control over access to courses and features.",
        },
        {
          icon: <BarChart4 className="h-8 w-8 text-accent" />,
          title: "Advanced Analytics",
          description:
            "Gain insights into student performance, engagement, and course effectiveness with comprehensive analytics.",
        },
        {
          icon: <Shield className="h-8 w-8 text-accent" />,
          title: "Integration Capabilities",
          description:
            "Connect with your existing tools and systems through our robust API and pre-built integrations.",
        },
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
                Powerful Features for Modern Education
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-6">
                Discover the comprehensive toolset that makes Eduace the preferred learning management system for
                educators worldwide.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="course-management" className="w-full">
              <div className="mb-8">
                <TabsList className="w-full justify-start overflow-auto py-2">
                  {featureCategories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id} className="text-sm md:text-base">
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {featureCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="pt-4">
                  <div className="grid gap-8 md:grid-cols-3">
                    {category.features.map((feature, index) => (
                      <div
                        key={index}
                        className="bg-white p-8 rounded-lg shadow-sm border border-border/50 transition-all duration-200 hover:shadow-md hover:border-accent/20"
                      >
                        <div className="mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-semibold mb-2 text-primary">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 p-8 bg-primary/5 rounded-lg border border-border/50">
                    <div className="grid gap-8 md:grid-cols-2 items-center">
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-4">{category.name} in Action</h3>
                        <p className="text-muted-foreground mb-6">
                          See how Eduace's {category.name.toLowerCase()} features transform the teaching and learning
                          experience.
                        </p>
                        <Button className="bg-accent hover:bg-accent/90">Request a Demo</Button>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-md aspect-video flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1" />
                          </div>
                          <p className="text-muted-foreground">Feature Demo Video</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        <section className="py-20 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">
                Compare Eduace Features
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                See how Eduace stacks up against other learning management systems.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 bg-white border-b-2 border-primary/10">Feature</th>
                    <th className="p-4 bg-white border-b-2 border-primary/10 text-center">Eduace</th>
                    <th className="p-4 bg-white border-b-2 border-primary/10 text-center">Basic LMS</th>
                    <th className="p-4 bg-white border-b-2 border-primary/10 text-center">Enterprise LMS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-b border-border/50 bg-white">Course Builder</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center text-green-600">✓ Advanced</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center text-amber-600">✓ Basic</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center text-green-600">✓ Advanced</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-border/50 bg-white">Student Engagement Tools</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center text-green-600">
                      ✓ Comprehensive
                    </td>
                    <td className="p-4 border-b border-border/50 bg-white text-center text-amber-600">✓ Limited</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center text-green-600">
                      ✓ Comprehensive
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-border/50 bg-white">Assessment Options</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center text-green-600">
                      ✓ Multiple Types
                    </td>
                    <td className="p-4 border-b border-border/50 bg-white text-center text-amber-600">✓ Basic</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center text-green-600">
                      ✓ Multiple Types
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-border/50 bg-white">Analytics & Reporting</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center text-green-600">✓ Advanced</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center text-red-600">✗</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center text-green-600">✓ Advanced</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-border/50 bg-white">Mobile Support</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center text-green-600">✓ Native Apps</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center text-amber-600">
                      ✓ Responsive Only
                    </td>
                    <td className="p-4 border-b border-border/50 bg-white text-center text-green-600">✓ Native Apps</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-border/50 bg-white">Integration Capabilities</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center text-green-600">✓ Extensive</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center text-red-600">✗</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center text-amber-600">✓ Limited</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-border/50 bg-white">Ease of Use</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center text-green-600">✓ Intuitive</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center text-amber-600">✓ Simple</td>
                    <td className="p-4 border-b border-border/50 bg-white text-center text-red-600">✗ Complex</td>
                  </tr>
                  <tr>
                    <td className="p-4 bg-white">Price</td>
                    <td className="p-4 bg-white text-center text-green-600">✓ Competitive</td>
                    <td className="p-4 bg-white text-center text-green-600">✓ Low</td>
                    <td className="p-4 bg-white text-center text-red-600">✗ Expensive</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                Ready to Experience These Features?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Join our waitlist today and be among the first to transform your teaching with Eduace.
              </p>
              <Button className="bg-accent hover:bg-accent/90">Join Waitlist</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
