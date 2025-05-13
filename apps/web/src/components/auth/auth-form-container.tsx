import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Video } from 'lucide-react'

interface AuthFormContainerProps {
  title: string
  description: string
  children: React.ReactNode
  footer?: React.ReactNode
}

export function AuthFormContainer({ title, description, children, footer }: AuthFormContainerProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-8">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="flex items-center gap-2">
            <Video className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Meetly</span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>{children}</CardContent>
          {footer && <CardFooter>{footer}</CardFooter>}
        </Card>
      </div>
    </div>
  )
}
