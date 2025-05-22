"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function CtaSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes("@")) {
      toast({
        title: "Please enter a valid email",
        variant: "destructive",
      })
      return
    }

    // Here you would typically send the email to your backend
    toast({
      title: "Success!",
      description: "You've been added to our waitlist. We'll notify you when we launch.",
    })
    setEmail("")
  }

  return (
    <section className="py-20 bg-primary">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Ready to Transform Your Teaching Experience?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Join our waitlist today and be among the first to experience the future of online education with Eduace.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 text-white placeholder:text-white/60 border-white/20 focus-visible:ring-accent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="bg-accent hover:bg-accent/90 sm:w-auto">
              Join Waitlist
            </Button>
          </form>

          <p className="text-sm text-white/60 mt-4">No spam, no obligations. Unsubscribe anytime.</p>
        </div>
      </div>
      <Toaster />
    </section>
  )
}
