"use client";

import { Play } from "lucide-react";
import { useState } from "react";

export function BrunoVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "video_play", {
        event_category: "engagement",
        event_label: "thank_you_video",
      });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Uma mensagem do Bruno para você
          </h2>

          <div className="relative aspect-video bg-foreground/5 rounded-xl overflow-hidden border border-border">
            {!isPlaying ? (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex flex-col items-center justify-center gap-4 group cursor-pointer"
                aria-label="Reproduzir vídeo"
              >
                <div className="w-20 h-20 rounded-full bg-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-background ml-1" />
                </div>
                <span className="text-muted-foreground text-sm">
                  Clique para assistir (2 min)
                </span>
              </button>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1"
                title="Mensagem de boas-vindas - Bruno Bastelli"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>

          <p className="text-center text-muted-foreground mt-4 text-sm">
            Bruno Bastelli explica o que você pode esperar e como aproveitar ao máximo o conteúdo.
          </p>
        </div>
      </div>
    </section>
  );
}
