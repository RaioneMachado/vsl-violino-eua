import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  size?: "default" | "lg" | "xl";
}

export const CTAButton = ({ href, children, size = "lg" }: CTAButtonProps) => {
  const sizeClasses = {
    default: "text-base px-6 py-3",
    lg: "text-lg px-8 py-6",
    xl: "text-xl px-10 py-8",
  };

  return (
    <div className="flex justify-center">
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        <Button
          className={`bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-xl glow-green hover:scale-105 transition-all duration-300 shadow-lg group ${sizeClasses[size]}`}
        >
          {children}
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </a>
    </div>
  );
};
