import { Button } from '@/components/ui/button';
import { Download, ArrowRight, Mouse } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="relative h-[calc(100vh-3.5rem)] min-h-[700px] overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-gradient-to-br from-background via-secondary/30 to-background"
      >
         <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container relative z-10 flex h-full items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="max-w-3xl text-left">
            <p className="mb-2 text-lg font-semibold text-primary sm:text-xl">
              AI & Software Engineer
            </p>
            <h1 className="font-headline text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl">
              Sheethal's Orbit
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
              A motivated Software Developer building scalable backends, interactive front-ends, and leading innovative AI projects. Eager to contribute to creative solutions.
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
          <div className="hidden md:flex items-center justify-center relative h-[28rem] w-[28rem]">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/50 orbit" />
            <div className="absolute inset-12 rounded-full border-2 border-dashed border-primary/30 orbit-reverse" />
            <div className="relative h-80 w-80">
              <Image
                src="https://placehold.co/400x400.png"
                alt="Sheethal Joshi Thomas"
                layout="fill"
                objectFit="cover"
                className="rounded-full shadow-2xl"
                data-ai-hint="professional woman"
              />
            </div>
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
