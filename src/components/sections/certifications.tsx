import { Award } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Container } from '../container';

const certifications = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'IBM Full Stack Developer Professional Certification',
    description: 'Issued by IBM',
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'ERC Space and Robotics Industry Standard Programme Certification',
    description: 'Issued by European Space Foundation',
  },
];

export default function Certifications() {
  return (
    <Container id="certifications">
      <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl text-primary fade-in-up">
        My Certifications
      </h2>
      <p className="mt-4 text-center text-muted-foreground md:text-lg fade-in-up animation-delay-200">
        Credentials that validate my skills and knowledge.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {certifications.map((item, index) => (
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
