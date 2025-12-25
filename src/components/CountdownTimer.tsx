import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set countdown to 24 hours from now
    const endTime = new Date().getTime() + (24 * 60 * 60 * 1000);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-accent/80 backdrop-blur-sm border border-accent/40 rounded-lg px-3 py-2 md:px-4 md:py-3 min-w-[70px] md:min-w-[80px] glow-green">
        <span className="text-3xl md:text-4xl font-bold text-accent-foreground font-display">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs text-accent-foreground/90 mt-1 uppercase tracking-wider font-semibold">
        {label}
      </span>
    </div>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-accent/90 to-primary/90 backdrop-blur-md border-b border-accent/30 shadow-lg glow-green">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-3">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 md:w-5 md:h-5 text-accent-foreground animate-pulse" />
            <span className="text-xs md:text-base font-semibold text-accent-foreground">
              ⚠️ OFERTA EXPIRA EM:
            </span>
          </div>
          
          <div className="flex gap-2 md:gap-4">
            <TimeBox value={timeLeft.hours} label="Horas" />
            <TimeBox value={timeLeft.minutes} label="Minutos" />
            <TimeBox value={timeLeft.seconds} label="Segundos" />
          </div>
        </div>
      </div>
    </div>
  );
};