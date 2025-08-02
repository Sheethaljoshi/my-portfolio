'use client';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { handleAdaptPortfolio } from '@/app/actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '../container';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '../ui/button';
import { Bot, Loader, Sparkles } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
      {pending ? (
        <>
          <Loader className="mr-2 h-5 w-5 animate-spin" />
          Adapting...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-5 w-5" />
          Adapt My Portfolio
        </>
      )}
    </Button>
  );
}

export default function AdaptivePortfolio() {
  const [state, formAction] = useActionState(handleAdaptPortfolio, {
    data: null,
    error: null,
    message: '',
  });

  return (
    <Container id="adaptive-portfolio">
      <Card className="shadow-2xl border-primary/50 border-2 fade-in-up">
        <CardHeader className="text-center">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground mb-4">
            <Bot className="h-6 w-6" />
          </div>
          <CardTitle className="text-3xl font-bold font-headline sm:text-4xl text-primary">
            Adaptive Portfolio
          </CardTitle>
          <CardDescription className="md:text-lg">
            For Recruiters: Paste your LinkedIn profile bio below. My AI will
            dynamically tailor this portfolio to highlight the skills and
            experiences most relevant to you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <Textarea
              name="linkedin_profile"
              placeholder="Paste LinkedIn profile here... The more detail, the better the result."
              rows={8}
              className="bg-background"
              required
            />
            <SubmitButton />
             {state.error && (
              <p className="text-sm font-medium text-destructive">{state.error}</p>
            )}
          </form>

          {state.data && (
            <Card className="mt-8 fade-in">
              <CardHeader>
                <CardTitle className="font-headline text-primary">
                  Your Tailored Portfolio
                </CardTitle>
                <CardDescription>
                  Based on your profile, here is a version of my portfolio adapted just for you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className="prose prose-sm dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: state.data.adaptedPortfolioContent.replace(/\n/g, '<br />') }}
                />
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}
