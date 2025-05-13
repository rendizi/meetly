"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AuthFormContainer } from "@/components/auth/auth-form-container"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("Reset password for:", email)
      setIsSubmitted(true)
    } catch (err) {
      setError("Failed to send reset email. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthFormContainer
      title="Reset your password"
      description="Enter your email to receive a password reset link"
      footer={
        <div className="text-center text-sm text-muted-foreground">
          Remember your password?{" "}
          <Link href="/login" className="underline underline-offset-4 hover:text-primary">
            Sign in
          </Link>
        </div>
      }
    >
      {isSubmitted ? (
        <div className="space-y-4">
          <div className="text-center text-sm">
            <p className="mb-2">We've sent a password reset link to:</p>
            <p className="font-medium">{email}</p>
            <p className="mt-4 text-muted-foreground">
              Please check your email and follow the instructions to reset your password.
            </p>
          </div>
          <Button className="w-full" asChild>
            <Link href="/login">Back to login</Link>
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="text-sm font-medium text-destructive">{error}</div>}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send reset link"}
          </Button>
        </form>
      )}
    </AuthFormContainer>
  )
}
