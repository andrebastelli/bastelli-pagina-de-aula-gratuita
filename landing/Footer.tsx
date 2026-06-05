import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ''
const WHATSAPP_MESSAGE = encodeURIComponent(
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || 'Olá, quero saber mais sobre o curso Introdução ao E-commerce Bastelli.'
)

const whatsappUrl = WHATSAPP_NUMBER 
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}` 
  : '#'

const footerLinks = [
  { label: 'Termos de Uso', href: '/termos' },
  { label: 'Política de Privacidade', href: '/privacidade' },
]

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <div>
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Bastelli <span className="font-normal text-muted-foreground">Consultoria</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {WHATSAPP_NUMBER && (
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Suporte
              </Link>
            )}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-border pt-8">
          <p className="text-xs text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            Este curso não promete resultados financeiros automáticos. O objetivo é ensinar fundamentos para tomada de decisão mais estratégica. 
            Os resultados variam de acordo com a dedicação, aplicação e contexto de cada negócio.
          </p>
          <p className="text-xs text-muted-foreground text-center mt-4">
            © {new Date().getFullYear()} Bastelli Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
