import { BookOpen, Users, Award, BarChart4, Calendar, FileText } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-accent" />,
      title: "Comprehensive Course Management",
      description:
        "Create, organize, and deliver courses with ease. Our intuitive interface makes course management simple.",
    },
    {
      icon: <Users className="h-10 w-10 text-accent" />,
      title: "Collaborative Learning",
      description: "Foster student engagement with discussion forums, group projects, and peer review tools.",
    },
    {
      icon: <Award className="h-10 w-10 text-accent" />,
      title: "Advanced Assessment",
      description: "Create diverse assessments with automated grading, detailed feedback, and progress tracking.",
    },
    {
      icon: <BarChart4 className="h-10 w-10 text-accent" />,
      title: "Insightful Analytics",
      description: "Track student progress and engagement with comprehensive analytics and reporting tools.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-accent" />,
      title: "Scheduling & Planning",
      description: "Organize your academic calendar, schedule classes, and set important deadlines all in one place.",
    },
    {
      icon: <FileText className="h-10 w-10 text-accent" />,
      title: "Resource Library",
      description: "Store and organize all your teaching materials in one centralized, searchable repository.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">
            Powerful Features for Modern Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Eduace combines powerful tools with an intuitive interface to transform how you teach and how students
            learn.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
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
      </div>
    </section>
  )
}
