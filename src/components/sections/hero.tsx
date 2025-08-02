import { Button } from '@/components/ui/button';
import { Download, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-[calc(100vh-3.5rem)] min-h-[500px]">
      <div className="container flex h-full items-center">
        <div className="max-w-3xl text-left">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-6xl md:text-7xl lg:text-8xl">
            Sheethal's Orbit
          </h1>
          <p className="mt-4 text-lg font-medium text-foreground sm:text-xl md:text-2xl">
            AI & Software Engineer
          </p>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg">
            Crafting intelligent experiences that orbit around user needs. I build smart, scalable, and creative solutions that push the boundaries of technology.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
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
        <div className="h-12 w-6 animate-bounce rounded-full border-2 border-primary p-1">
            <div className="h-4 w-4 rounded-full bg-primary"></div>
        </div>
      </div>
    </section>
  );
}
