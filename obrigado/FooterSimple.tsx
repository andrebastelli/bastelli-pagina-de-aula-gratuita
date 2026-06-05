import Link from "next/link";

export function FooterSimple() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
              <span className="text-background font-serif font-bold text-sm">
                B
              </span>
            </div>
            <span className="font-serif text-lg font-semibold text-foreground">
              Bastelli Consultoria
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link
              href="/politica-de-privacidade"
              className="hover:text-foreground transition-colors"
            >
              Política de Privacidade
            </Link>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5500000000000"}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Contato
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Bastelli Consultoria. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Este produto não garante a obtenção de resultados financeiros. 
            Todo o esforço foi feito para representar com precisão este produto e seu potencial.
          </p>
        </div>
      </div>
    </footer>
  );
}
