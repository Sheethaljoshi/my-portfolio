import { GraduationCap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Container } from '../container';

const education = [
  {
    degree: 'Master of Science in Computer Science',
    specialization: 'Artificial Intelligence Specialization',
    university: 'Stanford University',
    period: '2020 - 2022',
  },
  {
    degree: 'Bachelor of Science in Software Engineering',
    specialization: 'Minor in Cognitive Science',
    university: 'University of California, Berkeley',
    period: '2016 - 2020',
  },
];

export default function Education() {
  return (
    <Container id="education" className="bg-secondary">
      <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl text-primary">
        My Education
      </h2>
      <p className="mt-4 text-center text-muted-foreground md:text-lg">
        Foundations of my knowledge and expertise.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {education.map((edu) => (
          <Card key={edu.degree} className="text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardHeader className="items-center">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground mb-4">
                <GraduationCap className="h-6 w-6" />
              </div>
              <CardTitle className="font-headline text-xl">{edu.degree}</CardTitle>
              <p className="text-accent-foreground font-semibold">{edu.specialization}</p>
              <CardDescription>{edu.university} | {edu.period}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Container>
  );
}
