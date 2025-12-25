interface VideoSectionProps {
  videoId: string;
  title: string;
  description: string;
}

export const VideoSection = ({ videoId, title, description }: VideoSectionProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in">
      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 font-display">
          {title}
        </h3>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      <div className="relative rounded-2xl overflow-hidden border border-primary/20 glow-blue bg-secondary/30 backdrop-blur-sm">
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};
