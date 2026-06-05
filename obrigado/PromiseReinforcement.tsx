export function PromiseReinforcement() {
  const phrases = [
    "E-commerce não vende sozinho.",
    "Uma loja virtual é uma empresa.",
    "Não é sobre promessa fácil. É sobre fundamento.",
  ];

  return (
    <section className="py-12 md:py-16 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-wider text-background/60 mb-6">
            Lembre-se
          </p>

          <div className="space-y-4">
            {phrases.map((phrase) => (
              <p
                key={phrase}
                className="font-serif text-xl md:text-2xl font-medium text-background/90"
              >
                {phrase}
              </p>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-background/10">
            <p className="text-background/70 text-sm">
              Antes de tentar vender mais, o lojista precisa entender o que 
              sustenta uma operação de e-commerce de verdade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
