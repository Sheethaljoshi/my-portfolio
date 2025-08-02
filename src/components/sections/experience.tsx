import { Briefcase } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Container } from '../container';

const experiences = [
  {
    role: 'Software Developer Intern',
    company: 'KDex Global (On-site)',
    period: 'May 2025 - July 2025',
    description: 'Built and maintained key backend APIs in Golang, optimized PostgreSQL queries, and streamlined data processing pipelines to support new product features and improve backend throughput. Led the build and static hosting of product documentation using React, Docusaurus, AWS S3, and CloudFront, enabling fast and scalable self-serve support.',
  },
  {
    role: 'Software Developer Intern',
    company: 'Global Health Opinion (Remote)',
    period: 'March 2025 - May 2025',
    description: 'Built scalable, interactive medical dashboards for healthcare professionals in Next.js using TypeScript, and integrated backend services via C# and REST APIs, enabling real-time insights for healthcare operations. Worked in a unified monorepo, streamlining development and data load speeds by 20% via API optimization and frontend rendering improvements; ensured feature robustness through automated tests and performance profiling.',
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
