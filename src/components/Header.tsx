import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { siteData } from '@/data/data'
import { events } from '@/utils/analytics'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Curso', href: '#curso' },
    { label: 'Método', href: '#metodo' },
    { label: 'Bônus', href: '#bonus' },
    { label: 'FAQ', href: '#faq' },
  ]

  const handleCtaClick = () => {
    events.ctaClick('Header CTA')
    events.checkoutClick()
  }

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-[#F5F1EC]/95 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between py-3">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src="/logo-a.png"
              alt={siteData.empresa}
              className="h-9 w-auto object-contain sm:h-10"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-3 rounded-full border border-[#284A78]/10 bg-white/70 px-3 py-2 shadow-sm backdrop-blur-md md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative rounded-full px-4 py-2 text-sm font-bold text-[#1F2937]/70 transition-all duration-300 hover:bg-[#284A78]/8 hover:text-[#1F2937]"
              >
                <span className="relative z-10">{link.label}</span>

                <span className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-center scale-x-0 rounded-full bg-[#D57241] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}

            <a
              href={siteData.checkoutUrl}
              onClick={handleCtaClick}
              className="group relative ml-1 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#D57241] px-5 py-2.5 text-sm font-black text-[#F5F1EC] shadow-lg shadow-[#D57241]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c56337] hover:shadow-xl hover:shadow-[#D57241]/35"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Entrar no curso</span>
              <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#284A78]/10 bg-white/75 text-[#1F2937] shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden">
            <div className="mb-4 rounded-3xl border border-[#284A78]/10 bg-[#F5F1EC]/95 p-3 shadow-xl backdrop-blur-md">
              <div className="grid gap-2">
                {navLinks.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group flex items-center justify-between rounded-2xl border border-[#284A78]/8 bg-white/70 px-4 py-3 text-sm font-bold text-[#1F2937] transition-all duration-300 hover:border-[#284A78]/20 hover:bg-white"
                  >
                    <span>{link.label}</span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#284A78]/8 text-xs font-black text-[#284A78] transition-all duration-300 group-hover:bg-[#D57241] group-hover:text-[#F5F1EC]">
                      0{index + 1}
                    </span>
                  </a>
                ))}

                <a
                  href={siteData.checkoutUrl}
                  onClick={() => {
                    handleCtaClick()
                    setIsMobileMenuOpen(false)
                  }}
                  className="group relative mt-2 inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#D57241] px-5 py-3.5 text-sm font-black text-[#F5F1EC] shadow-lg shadow-[#D57241]/25 transition-all duration-300 hover:bg-[#c56337]"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative">Entrar no curso</span>
                  <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}