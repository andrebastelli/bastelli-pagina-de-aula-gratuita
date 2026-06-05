"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  const scrollToForm = () => {
    const formElement = document.getElementById("lead-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-xl font-bold text-foreground tracking-tight">
            Bastelli
          </span>
          <span className="text-xs text-muted-foreground uppercase tracking-widest">
            Consultoria
          </span>
        </Link>
        <Button
          onClick={scrollToForm}
          variant="outline"
          size="sm"
          className="hidden sm:inline-flex"
        >
          Quero assistir a aula
        </Button>
      </div>
    </header>
  )
}
