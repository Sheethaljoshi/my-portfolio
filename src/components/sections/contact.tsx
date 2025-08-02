import { Send } from 'lucide-react';
import { Container } from '../container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

export default function Contact() {
  return (
    <Container id="contact" className="bg-secondary">
      <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl text-primary">
        Let's Connect
      </h2>
      <p className="mt-4 text-center text-muted-foreground md:text-lg">
        Have a project, a question, or just want to say hi? My inbox is always open.
      </p>
      <Card className="max-w-2xl mx-auto mt-12 shadow-lg">
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
