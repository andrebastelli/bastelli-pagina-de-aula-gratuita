import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function Footer() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511999999999"
  const whatsappMessage = encodeURIComponent(
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || "Ola, quero saber mais sobre a aula gratuita de e-commerce."
  )

  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo e descricao */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-serif text-xl font-bold">Bastelli</span>
                <span className="text-xs uppercase tracking-widest opacity-80">
                  Consultoria
                </span>
              </div>
              <p className="text-sm opacity-80 max-w-md">
                Consultoria especializada em e-commerce. Ajudamos empresas a estruturar, 
                lancar e escalar suas operacoes de venda online.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">Links</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <Link href="/politica-de-privacidade" className="hover:opacity-100 transition-opacity">
                    Politica de Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="/termos-de-uso" className="hover:opacity-100 transition-opacity">
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:opacity-100 transition-opacity"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Fale conosco
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-sm opacity-70">
              {new Date().getFullYear()} Bastelli Consultoria. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
