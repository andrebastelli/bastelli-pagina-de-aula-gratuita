"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"

interface LeadFormProps {
  variant?: "hero" | "standalone"
}

export function LeadForm({ variant = "hero" }: LeadFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simula envio para CRM/webhook
    // Em producao, substituir pela integracao real
    try {
      // const response = await fetch(process.env.NEXT_PUBLIC_CRM_WEBHOOK_URL!, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // })

      // Disparar evento de lead
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "lead", {
          event_category: "form",
          event_label: "aula_gratuita",
        })
      }

      // Simula delay de envio
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      // Redireciona para pagina de obrigado
      router.push("/obrigado")
    } catch {
      console.error("Erro ao enviar formulario")
      setIsLoading(false)
    }
  }

  const isHero = variant === "hero"

  return (
    <form
      id="lead-form"
      onSubmit={handleSubmit}
      className={`w-full ${isHero ? "max-w-md" : "max-w-lg mx-auto"}`}
    >
      <div className="space-y-3">
        <Input
          type="text"
          placeholder="Seu nome"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="h-12 bg-card border-border focus:border-accent"
        />
        <Input
          type="email"
          placeholder="Seu melhor e-mail"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="h-12 bg-card border-border focus:border-accent"
        />
        <Input
          type="tel"
          placeholder="WhatsApp (opcional)"
          value={formData.whatsapp}
          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
          className="h-12 bg-card border-border focus:border-accent"
        />
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            "Quero assistir a aula gratuita"
          )}
        </Button>
      </div>
      <p className="text-xs text-muted-foreground text-center mt-3">
        Seus dados estao seguros. Nao enviamos spam.
      </p>
    </form>
  )
}

// Declaracao global para TypeScript
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}
