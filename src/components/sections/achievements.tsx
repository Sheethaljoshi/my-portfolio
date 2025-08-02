import { Trophy, Award, Users, Mic } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Container } from '../container';

const achievements = [
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    title: 'European Rover Challenge 2024',
    description: 'Achieved World Rank 18, All India Rank 1 as the Lead of Navigation and Communications.',
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'HackMIT 2024 Semi-Finalist',
    description: 'Recognized as a semi-finalist in the world-famous hackathon at the Massachusetts Institute of Technology, USA.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Top 5 at TinkHack 2.0',
    description: "Secured a top 5 position in Kerala's Largest Gen AI Hackathon.",
  },
  {
    icon: <Mic className="h-8 w-8 text-primary" />,
    title: 'IBM Full Stack Developer Certified',
    description: 'Completed the IBM Full Stack Developer Professional Certification.',
  },
];

export default function Achievements() {
  return (
    <Container id="achievements">
      <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl text-primary fade-in-up">
        Awards & Achievements
      </h2>
      <p className="mt-4 text-center text-muted-foreground md:text-lg fade-in-up animation-delay-200">
        Milestones that mark my dedication and passion for innovation.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {achievements.map((item, index) => (
          <Card key={item.title} className="flex items-center gap-4 p-6 transition-all duration-300 hover:shadow-lg hover:bg-secondary fade-in-up" style={{ animationDelay: `${200 * (index + 2)}ms`}}>
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
