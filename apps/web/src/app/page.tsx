import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Video, Calendar, MessageSquare } from "lucide-react"
import { DemoModal } from "@/components/demo-modal"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b">
        <div className="flex items-center gap-2">
          <Video className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Meetly</span>
        </div>
        <nav className="hidden md:flex gap-6">

          <a href="#features" className="text-sm font-medium hover:underline underline-offset-4">
            Features
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
            Testimonials
          </a>
          <a href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
            Pricing
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <a href="/login">Log in</a>
          </Button>
          <Button asChild>
            <a href="/signup">Get Started</a>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Your AI Assistant for Google Meets
                  </h1>
                  <p className="mx-auto lg:mx-0 max-w-[600px] text-muted-foreground md:text-xl">
                    Meetly helps you stay focused and productive during meetings by taking notes, summarizing
                    discussions, and providing real-time insights.
                  </p>
                </div>
                <div className="flex flex-col items-center lg:items-start gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <a href="/signup">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="#demo">Watch Demo</a>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?key=t29ji"
                  width={550}
                  height={550}
                  alt="Meetly AI assistant in action"
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Powerful Features for Better Meetings
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meetly transforms your Google Meet experience with AI-powered tools designed to make your meetings
                  more productive.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Smart Transcription</h3>
                  <p className="text-muted-foreground">
                    Automatically transcribe your meetings with high accuracy and identify speakers.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Calendar className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Action Items</h3>
                  <p className="text-muted-foreground">
                    Extract action items and automatically add them to your calendar or task list.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Video className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Meeting Summaries</h3>
                  <p className="text-muted-foreground">
                    Get concise summaries of your meetings with key points and decisions highlighted.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Open Source & Self-Hostable</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meetly is 100% open source and can be self-hosted on your own infrastructure for complete control and
                  privacy.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Self-Host with Confidence</h3>
                  <p className="text-muted-foreground">
                    Deploy Meetly on your own servers or cloud infrastructure. Full documentation and support available
                    for self-hosting.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Complete source code access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Customize to your needs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Data stays on your servers</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Managed Service</h3>
                  <p className="text-muted-foreground">
                    Don't want to manage infrastructure? Use our affordable managed service and focus on your meetings.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>No server management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Automatic updates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Priority support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://github.com/rendizi/meetly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section id="demo" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">See Meetly in Action</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Watch how Meetly transforms your Google Meet experience in real-time.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl py-12">
              <div className="aspect-video overflow-hidden rounded-lg border bg-muted shadow-xl relative">
                <Image
                  src="/placeholder.svg?key=8njsr"
                  width={1280}
                  height={720}
                  alt="Meetly demo video"
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <DemoModal />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Transform Your Meetings?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of professionals who are making their meetings more productive with Meetly. Self-host
                  for complete control or use our managed service.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <a href="/signup">
                    Try Managed Service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://github.com/rendizi/meetly" target="_blank" rel="noopener noreferrer">
                    Self-Host for Free
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container mx-auto max-w-7xl flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Video className="h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Meetly. All rights reserved. Open source software.
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <a href="/terms" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </a>
            <a href="/privacy" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </a>
            <a
              href="https://github.com/rendizi/meetly"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              GitHub
            </a>
            <a href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
