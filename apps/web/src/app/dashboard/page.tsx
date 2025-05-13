import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Video } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Video className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Meetly</span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <a href="/logout">Log out</a>
          </Button>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Welcome to Meetly</CardTitle>
                <CardDescription>You've successfully logged in to your account.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This is a placeholder dashboard. In a real application, you would see your meetings, recordings, and
                  other data here.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
