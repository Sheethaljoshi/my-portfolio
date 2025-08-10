import { useState } from 'react';
import { Send } from 'lucide-react';
import { Container } from '../container';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: data.message });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to send message' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Unexpected error occurred' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container id="contact" className="relative overflow-hidden">
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full border-2 border-dashed border-primary/20 orbit" />
      <div className="absolute -right-32 -bottom-48 h-96 w-96 rounded-full border-2 border-dashed border-primary/20 orbit-reverse" />
      <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl text-primary fade-in-up">
        Let's Connect
      </h2>
      <p className="mt-4 text-center text-muted-foreground md:text-lg fade-in-up animation-delay-200">
        Have a project, a question, or just want to say hi? My inbox is always open.
      </p>
       <p className="mt-4 text-center text-muted-foreground md:text-lg fade-in-up animation-delay-400">
       Kochi, Kerala, India | Ph: +91 8921773573 | sh33thal24@gmail.com
      </p>
      <Card className="max-w-2xl mx-auto mt-12 shadow-lg fade-in-up animation-delay-600 bg-card">
        <CardContent className="p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Your message..." rows={5} required />
            </div>
            {status && (
              <p className={`text-center ${status.type === 'error' ? 'text-red-500' : 'text-green-500'}`}>
                {status.message}
              </p>
            )}
            <Button type="submit" className="w-full" size="lg" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}
