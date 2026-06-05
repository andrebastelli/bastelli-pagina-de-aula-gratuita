"use client";

import { PlayCircle, FileText, Users } from "lucide-react";

export function AccessButtons() {
  const handleClick = (label: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "access_click", {
        event_category: "engagement",
        event_label: label,
      });
    }
  };

  const buttons = [
    {
      label: "Acessar Aula",
      description: "Assista à aula introdutória",
      icon: PlayCircle,
      href: process.env.NEXT_PUBLIC_LESSON_URL || "#",
      primary: true,
    },
    {
      label: "Baixar Material",
      description: "E-book e materiais de apoio",
      icon: FileText,
      href: process.env.NEXT_PUBLIC_MATERIAL_URL || "#",
      primary: false,
    },
    {
      label: "Área de Membros",
      description: "Acesse todo o conteúdo",
      icon: Users,
      href: process.env.NEXT_PUBLIC_MEMBERS_URL || "#",
      primary: false,
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Acesse seu conteúdo
          </h2>

          <div className="grid gap-4">
            {buttons.map((button) => (
              <a
                key={button.label}
                href={button.href}
                onClick={() => handleClick(button.label)}
                className={`flex items-center gap-4 p-4 rounded-lg border transition-all ${
                  button.primary
                    ? "bg-foreground text-background border-foreground hover:bg-foreground/90"
                    : "bg-background text-foreground border-border hover:border-foreground/50 hover:bg-muted/50"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    button.primary ? "bg-background/10" : "bg-muted"
                  }`}
                >
                  <button.icon
                    className={`w-6 h-6 ${
                      button.primary ? "text-background" : "text-foreground"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <span
                    className={`font-semibold ${
                      button.primary ? "text-background" : "text-foreground"
                    }`}
                  >
                    {button.label}
                  </span>
                  <p
                    className={`text-sm ${
                      button.primary
                        ? "text-background/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {button.description}
                  </p>
                </div>
                <svg
                  className={`w-5 h-5 ${
                    button.primary ? "text-background" : "text-muted-foreground"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
