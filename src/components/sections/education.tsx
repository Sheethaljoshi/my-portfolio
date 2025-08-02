import { GraduationCap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Container } from '../container';

const education = [
  {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    specialization: 'Cochin University of Science and Technology, School of Engineering',
    university: 'Kerala, India',
    period: '',
  },
];

export default function Education() {
  return (
    <Container id="education" className="relative overflow-hidden">
      <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl text-primary fade-in-up">
        My Education
      </h2>
      <p className="mt-4 text-center text-muted-foreground md:text-lg fade-in-up animation-delay-200">
        Foundations of my knowledge and expertise.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-1 fade-in-up animation-delay-400">
        {education.map((edu) => (
          <Card key={edu.degree} className="text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card">
            <CardHeader className="items-center">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground mb-4">
                <GraduationCap className="h-6 w-6" />
              </div>
              <CardTitle className="font-headline text-xl">{edu.degree}</CardTitle>
              <p className="text-accent-foreground font-semibold">{edu.specialization}</p>
              <CardDescription>{edu.university} {edu.period && `| ${edu.period}`}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Container>
  );
}
