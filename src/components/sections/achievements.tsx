import { Trophy, Award, Users, Mic } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Container } from '../container';

const achievements = [
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    title: 'AI Innovation Award 2023',
    description: 'Awarded for the development of the AI Diagnostic Assistant, recognizing its impact on healthcare technology.',
  },
  {
    icon: <Mic className="h-8 w-8 text-primary" />,
    title: 'Keynote Speaker at TechConf 2022',
    description: 'Invited to speak on the future of personalized AI, sharing insights with over 1,000 industry professionals.',
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'Published in "Journal of AI Research"',
    description: 'Co-authored a paper on novel techniques for emotion detection in text, contributing to the academic community.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Top Contributor - Open Source',
    description: 'Recognized as a top contributor to a popular open-source machine learning library for consistent and high-quality contributions.',
  },
];

export default function Achievements() {
  return (
    <Container id="achievements">
      <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl text-primary">
        Awards & Achievements
      </h2>
      <p className="mt-4 text-center text-muted-foreground md:text-lg">
        Milestones that mark my dedication and passion for innovation.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {achievements.map((item) => (
          <Card key={item.title} className="flex items-center gap-4 p-6 transition-all duration-300 hover:shadow-lg hover:bg-secondary">
            <div className="flex-shrink-0">{item.icon}</div>
            <div>
              <CardTitle className="font-headline text-lg">{item.title}</CardTitle>
              <CardDescription className="mt-1">{item.description}</CardDescription>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
}
