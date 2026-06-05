import { useState } from 'react';
import { Play } from 'lucide-react';

export function BrunoVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Placeholder para o vídeo do Bruno - substituir pela URL real
  const videoId = 'VIDEO_ID_PLACEHOLDER';

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Uma mensagem do Bruno Bastelli
          </h2>
          <p className="text-muted-foreground">
            Assista este vídeo curto para saber exatamente o que fazer agora
          </p>
        </div>

        {/* Video Container */}
        <div className="relative aspect-video rounded-xl overflow-hidden bg-foreground/5 shadow-lg">
          {!isPlaying ? (
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center group cursor-pointer"
              aria-label="Reproduzir vídeo"
            >
              {/* Thumbnail placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
              
              {/* Play Button */}
              <div className="relative z-10 w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-200">
                <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
              </div>

              {/* Bruno Placeholder */}
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <p className="text-sm text-foreground/80 font-medium">
                  Bruno Bastelli
                </p>
                <p className="text-xs text-foreground/60">
                  Fundador da Bastelli Consultoria
                </p>
              </div>
            </button>
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title="Mensagem de boas-vindas - Bruno Bastelli"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          )}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-4">
          Vídeo de 2 minutos com orientações importantes
        </p>
      </div>
    </section>
  );
}
