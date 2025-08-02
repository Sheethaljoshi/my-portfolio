import { Send } from 'lucide-react';
import { Container } from '../container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

export default function Contact() {
  return (
    <Container id="contact" className="bg-secondary/50">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl text-primary fade-in-up">
        Let's Connect
      </h2>
      <p className="mt-4 text-center text-muted-foreground md:text-lg fade-in-up animation-delay-200">
        Have a project, a question, or just want to say hi? My inbox is always open.
      </p>
       <p className="mt-4 text-center text-muted-foreground md:text-lg fade-in-up animation-delay-400">
       Kochi, Kerala, India | Ph: +91 8921773573 | sh33thal24@gmail.com
      </p>
      <Card className="max-w-2xl mx-auto mt-12 shadow-lg fade-in-up animation-delay-600">
        <CardContent className="p-8">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your Name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your.email@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message..." rows={5} required />
            </div>
            <Button type="submit" className="w-full" size="lg">
              Send Message
              <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}
