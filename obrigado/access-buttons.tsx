"use client"

import { Button } from "@/components/ui/button"
import { PlayCircle, Download, ExternalLink } from "lucide-react"
import { trackEvent } from "@/lib/analytics"

export function AccessButtons() {
  const lessonUrl = process.env.NEXT_PUBLIC_LESSON_URL || "#"
  const materialUrl = process.env.NEXT_PUBLIC_MATERIAL_URL || "#"

  const handleLessonClick = () => {
    trackEvent("access_click", { type: "lesson" })
    window.open(lessonUrl, "_blank")
  }

  const handleMaterialClick = () => {
    trackEvent("access_click", { type: "material" })
    window.open(materialUrl, "_blank")
  }

  return (
    <section className="py-8 md:py-12 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-2">
            Acesse seu conteudo
          </h2>
          <p className="text-muted-foreground mb-6">
            Escolha como deseja consumir o material
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleLessonClick}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
            >
              <PlayCircle className="h-5 w-5" />
              Assistir aula
            </Button>
            
            <Button
              onClick={handleMaterialClick}
              size="lg"
              variant="outline"
              className="gap-2"
            >
              <Download className="h-5 w-5" />
              Baixar material
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-4">
            <ExternalLink className="h-3 w-3 inline mr-1" />
            Os links abrem em uma nova aba
          </p>
        </div>
      </div>
    </section>
  )
}
