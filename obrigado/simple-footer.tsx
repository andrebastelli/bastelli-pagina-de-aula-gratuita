import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function SimpleFooter() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511999999999"

  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg font-bold">Bastelli</span>
              <span className="text-xs uppercase tracking-widest opacity-80">
                Consultoria
              </span>
            </div>

            <div className="flex items-center gap-4 text-sm opacity-80">
              <Link href="/politica-de-privacidade" className="hover:opacity-100 transition-opacity">
                Politica de Privacidade
              </Link>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:opacity-100 transition-opacity"
              >
                <MessageCircle className="h-4 w-4" />
                Contato
              </a>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6 text-center">
            <p className="text-sm opacity-70">
              {new Date().getFullYear()} Bastelli Consultoria. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
