import { Award, ArrowUpRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Container } from '../container';

const certifications = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'IBM Full Stack Developer Professional Certification',
    description: 'Issued by IBM',
    url: 'https://drive.google.com/drive/folders/1xWROUPyNRbVLBAtv7RooqaX7qpA6kpdC?usp=sharing'
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'ERC Space and Robotics Industry Standard Programme Certification',
    description: 'Issued by European Space Foundation',
    url: 'https://drive.google.com/drive/folders/1xWROUPyNRbVLBAtv7RooqaX7qpA6kpdC?usp=sharing'
  },
];

export default function Certifications() {
  return (
    <Container id="certifications" className="relative overflow-hidden">
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full border-2 border-dashed border-primary/20 orbit" />
      <div className="absolute -right-32 -bottom-48 h-96 w-96 rounded-full border-2 border-dashed border-primary/20 orbit-reverse" />
      <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl text-primary fade-in-up">
        My Certifications
      </h2>
      <p className="mt-4 text-center text-muted-foreground md:text-lg fade-in-up animation-delay-200">
        Credentials that validate my skills and knowledge.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {certifications.map((item, index) => (
          <a href={item.url} target="_blank" rel="noopener noreferrer" key={item.title} className="block h-full group">
            <Card className="flex items-center gap-4 p-6 transition-all duration-300 hover:shadow-lg hover:bg-secondary fade-in-up h-full" style={{ animationDelay: `${200 * (index + 2)}ms`}}>
              <div className="flex-shrink-0">{item.icon}</div>
              <div className="flex-grow">
                <CardTitle className="font-headline text-lg">{item.title}</CardTitle>
                <CardDescription className="mt-1">{item.description}</CardDescription>
              </div>
              <ArrowUpRight className="h-6 w-6 text-muted-foreground transition-transform duration-300 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Card>
          </a>
        ))}
      </div>
    </Container>
  );
}
