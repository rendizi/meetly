"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { X } from "lucide-react"

export function DemoModal() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" variant="outline" className="bg-background/80 backdrop-blur-sm">
          Watch Demo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Meetly Demo</DialogTitle>
          <DialogDescription>See how Meetly transforms your Google Meet experience</DialogDescription>
          <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={() => setOpen(false)}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogHeader>
        <div className="aspect-video w-full bg-muted rounded-md flex items-center justify-center">
          <p className="text-muted-foreground">Demo video would play here</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
