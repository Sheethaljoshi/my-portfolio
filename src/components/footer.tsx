import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} Sheethal's Orbit. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 transition-transform hover:scale-110" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 transition-transform hover:scale-110" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:example@example.com" aria-label="Email">
                <Mail className="h-5 w-5 transition-transform hover:scale-110" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
