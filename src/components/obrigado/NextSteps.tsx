import { Mail, UserPlus, Clock, CheckCircle2 } from 'lucide-react';
import { trackEvent } from '@/utils/analytics';
import { useEffect } from 'react';

const steps = [
  {
    icon: Mail,
    title: 'Verifique seu e-mail',
    description: 'Enviamos um e-mail de confirmação. Confira também a caixa de spam ou promoções.',
  },
  {
    icon: UserPlus,
    title: 'Salve nosso contato',
    description: 'Adicione a Bastelli aos seus contatos para não perder nenhuma comunicação.',
  },
  {
    icon: Clock,
    title: 'Separe 30 minutos',
    description: 'Reserve um momento tranquilo para assistir à aula com atenção e fazer anotações.',
  },
];

export function NextSteps() {
  useEffect(() => {
    trackEvent('email_instruction_view', {
      section: 'next_steps'
    });
  }, []);

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">
          Próximos passos
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
          Siga estas orientações para aproveitar ao máximo seu acesso
        </p>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 bg-background rounded-xl border border-border shadow-sm"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                  <span className="text-primary text-sm font-bold">{index + 1}.</span>
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
              <CheckCircle2 className="w-5 h-5 text-muted-foreground/30 flex-shrink-0 mt-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
