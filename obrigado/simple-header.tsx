"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { trackEvent } from "@/lib/analytics"

export function SimpleHeader() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511999999999"
  const whatsappMessage = encodeURIComponent(
    "Ola, preciso de suporte com meu acesso ao material da Bastelli."
  )

  const handleSupportClick = () => {
    trackEvent("whatsapp_click", { location: "header" })
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
        
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleSupportClick}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">Suporte</span>
        </a>
      </div>
    </header>
  )
}
