"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex flex-1 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/eduace-logo.png" alt="Eduace Logo" width={36} height={36} className="h-9 w-auto" />
            <span className="hidden font-bold text-xl text-primary sm:inline-block">Eduace</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/features"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="/roadmap"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              Roadmap
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/careers"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              Careers
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              Log in
            </Button>
            <Button size="sm" className="hidden md:flex bg-accent hover:bg-accent/90">
              Join Waitlist
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-6 pt-6">
                  <Link
                    href="/features"
                    className="text-base font-medium text-foreground/70 transition-colors hover:text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    Features
                  </Link>
                  <Link
                    href="/pricing"
                    className="text-base font-medium text-foreground/70 transition-colors hover:text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/roadmap"
                    className="text-base font-medium text-foreground/70 transition-colors hover:text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    Roadmap
                  </Link>
                  <Link
                    href="/about"
                    className="text-base font-medium text-foreground/70 transition-colors hover:text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/careers"
                    className="text-base font-medium text-foreground/70 transition-colors hover:text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    Careers
                  </Link>
                  <div className="flex flex-col gap-2 pt-4">
                    <Button variant="outline" size="sm">
                      Log in
                    </Button>
                    <Button size="sm" className="bg-accent hover:bg-accent/90">
                      Join Waitlist
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
