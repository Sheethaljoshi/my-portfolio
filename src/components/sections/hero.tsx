import { Button } from '@/components/ui/button';
import { Download, ArrowRight, Mouse } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="relative h-[calc(100vh-3.5rem)] min-h-[600px] overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Abstract background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
          data-ai-hint="abstract galaxy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 flex h-full items-center">
        <div className="max-w-3xl text-left">
          <p className="mb-2 text-lg font-semibold text-primary sm:text-xl">
            AI & Software Engineer
          </p>
          <h1 className="font-headline text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Sheethal's Orbit
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Crafting intelligent experiences that orbit around user needs. I build smart, scalable, and creative solutions that push the boundaries of technology.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <a href="/sheethal-resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
               <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#experience" aria-label="Scroll down">
          <Mouse className="h-8 w-8 animate-bounce text-primary" />
        </a>
      </div>
    </section>
  );
}
