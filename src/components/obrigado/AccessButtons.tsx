import { PlayCircle, FileText, ExternalLink } from 'lucide-react';
import { trackEvent } from '@/utils/analytics';

export function AccessButtons() {
  const lessonUrl = import.meta.env.VITE_LESSON_URL || '#';
  const materialUrl = import.meta.env.VITE_MATERIAL_URL || '#';

  const handleLessonClick = () => {
    trackEvent('access_click', {
      button_location: 'access_section',
      button_text: 'Acessar Aula',
      content_type: 'lesson'
    });
    window.open(lessonUrl, '_blank');
  };

  const handleMaterialClick = () => {
    trackEvent('access_click', {
      button_location: 'access_section',
      button_text: 'Baixar Material',
      content_type: 'material'
    });
    window.open(materialUrl, '_blank');
  };

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
          Acesse seu conteúdo
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Botão Aula */}
          <button
            onClick={handleLessonClick}
            className="flex items-center gap-4 p-5 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-200 group shadow-md hover:shadow-lg"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
              <PlayCircle className="w-6 h-6" />
            </div>
            <div className="text-left flex-1">
              <span className="font-semibold text-lg block">Acessar Aula</span>
              <span className="text-sm opacity-80">Conteúdo em vídeo</span>
            </div>
            <ExternalLink className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" />
          </button>

          {/* Botão Material */}
          <button
            onClick={handleMaterialClick}
            className="flex items-center gap-4 p-5 bg-muted text-foreground rounded-xl hover:bg-muted/80 transition-all duration-200 group shadow-md hover:shadow-lg border border-border"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left flex-1">
              <span className="font-semibold text-lg block">Baixar Material</span>
              <span className="text-sm text-muted-foreground">PDF complementar</span>
            </div>
            <ExternalLink className="w-5 h-5 opacity-40 group-hover:opacity-70 transition-opacity" />
          </button>
        </div>
      </div>
    </section>
  );
}
