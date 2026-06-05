"use client"

import { PlayCircle } from "lucide-react"
import { useEffect } from "react"
import { trackEvent } from "@/lib/analytics"

export function BrunoVideo() {
  useEffect(() => {
    trackEvent("thank_you_view")
  }, [])

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-4 text-center">
            Mensagem do Bruno Bastelli
          </h2>
          <p className="text-muted-foreground text-center mb-6 max-w-lg mx-auto">
            Assista este video curto com orientacoes importantes antes de acessar sua aula.
          </p>

          {/* Player placeholder - substituir pelo embed real */}
          <div className="bg-muted rounded-lg aspect-video flex items-center justify-center border border-border overflow-hidden">
            <div className="text-center p-8">
              <PlayCircle className="h-16 w-16 text-accent mx-auto mb-4" />
              <p className="text-foreground font-medium mb-2">
                Video de boas-vindas
              </p>
              <p className="text-sm text-muted-foreground">
                Substitua este placeholder pelo embed do YouTube ou Vimeo
              </p>
              {/* 
                Exemplo de embed YouTube:
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/VIDEO_ID" 
                  title="Mensagem de boas-vindas"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
