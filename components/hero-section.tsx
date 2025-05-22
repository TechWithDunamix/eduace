"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function HeroSection() {
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
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-primary mb-4">
                The Future of <span className="text-accent">Learning</span> is Here
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-[600px]">
                Eduace is revolutionizing online education with an intuitive, comprehensive learning management system
                designed for the modern classroom.
              </p>
            </div>

            <div className="max-w-md space-y-4">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="bg-accent hover:bg-accent/90 sm:w-auto">
                  Join Waitlist
                </Button>
              </form>
              <p className="text-sm text-muted-foreground">Be the first to know when we launch. No spam, ever.</p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-primary/10 border-2 border-background" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">500+</span> educators already on the waitlist
              </p>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[90%] h-[90%] bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-12 bg-primary flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 bg-accent/20 rounded-full flex items-center justify-center">
                      <div className="h-5 w-5 bg-accent rounded-sm" />
                    </div>
                    <div>
                      <div className="h-4 bg-primary/10 rounded w-32 mb-1" />
                      <div className="h-3 bg-primary/5 rounded w-24" />
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-4 mb-6">
                    <div className="col-span-3">
                      <div className="h-full bg-primary/5 rounded p-3">
                        <div className="h-4 bg-primary/10 rounded w-full mb-3" />
                        <div className="h-3 bg-primary/10 rounded w-2/3 mb-2" />
                        <div className="h-3 bg-primary/10 rounded w-3/4 mb-2" />
                        <div className="h-3 bg-primary/10 rounded w-1/2" />
                      </div>
                    </div>
                    <div className="col-span-9">
                      <div className="h-full bg-white border border-primary/10 rounded p-3">
                        <div className="flex justify-between mb-4">
                          <div className="h-6 bg-accent/20 rounded w-1/3" />
                          <div className="flex gap-2">
                            <div className="h-6 w-6 bg-primary/10 rounded" />
                            <div className="h-6 w-6 bg-primary/10 rounded" />
                          </div>
                        </div>
                        <div className="h-4 bg-primary/5 rounded w-full mb-2" />
                        <div className="h-4 bg-primary/5 rounded w-5/6 mb-2" />
                        <div className="h-4 bg-primary/5 rounded w-4/6 mb-4" />
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="h-20 bg-primary/5 rounded" />
                          <div className="h-20 bg-primary/5 rounded" />
                        </div>
                        <div className="flex justify-end">
                          <div className="h-8 bg-accent/20 rounded w-1/4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <div className="h-5 bg-primary/10 rounded w-1/4" />
                    <div className="h-5 bg-accent/20 rounded-full w-20" />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-16 bg-primary/5 rounded p-2">
                      <div className="h-3 bg-primary/10 rounded w-2/3 mb-1" />
                      <div className="h-3 bg-primary/10 rounded w-full mb-1" />
                      <div className="h-3 bg-primary/10 rounded w-1/2" />
                    </div>
                    <div className="h-16 bg-primary/5 rounded p-2">
                      <div className="h-3 bg-primary/10 rounded w-2/3 mb-1" />
                      <div className="h-3 bg-primary/10 rounded w-full mb-1" />
                      <div className="h-3 bg-primary/10 rounded w-1/2" />
                    </div>
                    <div className="h-16 bg-primary/5 rounded p-2">
                      <div className="h-3 bg-primary/10 rounded w-2/3 mb-1" />
                      <div className="h-3 bg-primary/10 rounded w-full mb-1" />
                      <div className="h-3 bg-primary/10 rounded w-1/2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  )
}
