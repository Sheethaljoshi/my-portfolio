import { Briefcase } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Container } from '../container';

const experiences = [
  {
    role: 'AI Engineer',
    company: 'TechCorp',
    period: '2022 - Present',
    description: 'Lead developer for a suite of AI-powered diagnostic tools. Implemented novel deep learning architectures for medical image analysis, improving diagnostic accuracy by 15%. Deployed models to cloud infrastructure, serving thousands of daily requests.',
  },
  {
    role: 'Machine Learning Researcher',
    company: 'Innovate AI Labs',
    period: '2021 - 2022',
    description: 'Contributed to research on natural language understanding for empathetic chatbots. Published a paper on emotion detection in text at a top-tier AI conference. Collaborated with a team of PhDs to pioneer new techniques.',
  },
  {
    role: 'Software Developer Intern',
    company: 'Innovate LLC',
    period: 'Summer 2021',
    description: 'Developed and maintained frontend features for a high-traffic e-commerce platform using React and TypeScript. Worked in an agile environment, participating in daily stand-ups, sprint planning, and code reviews.',
  },
];

export default function Experience() {
  return (
    <Container id="experience" className="bg-secondary">
      <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl text-primary">
        Professional Experience
      </h2>
      <p className="mt-4 text-center text-muted-foreground md:text-lg">
        My journey through the tech landscape, one challenge at a time.
      </p>
      <div className="relative mt-12">
        <div
          className="absolute left-1/2 top-0 -ml-[1px] h-full w-[2px] bg-border"
          aria-hidden="true"
        />
        {experiences.map((exp, index) => (
          <div
            key={exp.role + exp.company}
            className={`relative mb-8 flex items-center justify-between md:justify-normal md:odd:flex-row-reverse`}
          >
            <div className="hidden md:block md:w-5/12"></div>
            <div className="z-10 flex h-8 w-8 items-center justify-center">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
                <Briefcase className="h-4 w-4" />
              </div>
            </div>
            <div className="w-full md:w-5/12">
              <Card className="shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{exp.role}</CardTitle>
                  <CardDescription className="font-semibold text-primary">
                    {exp.company} | {exp.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
