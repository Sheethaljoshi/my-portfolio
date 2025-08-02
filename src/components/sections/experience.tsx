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
    <Container id="experience" className="relative overflow-hidden">
      <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl text-primary fade-in-up">
        Professional Experience
      </h2>
      <p className="mt-4 text-center text-muted-foreground md:text-lg fade-in-up animation-delay-200">
        My journey through the tech landscape, one challenge at a time.
      </p>
      <div className="relative mt-12">
        <div
          className="absolute left-1/2 top-4 -ml-[1px] h-[calc(100%-2rem)] w-[2px] bg-border/40 fade-in"
          aria-hidden="true"
        />
        {experiences.map((exp, index) => (
          <div
            key={exp.role + exp.company}
            className={`relative mb-12 flex items-center justify-between md:justify-normal md:odd:flex-row-reverse fade-in-up`}
            style={{ animationDelay: `${200 * (index + 2)}ms`}}
          >
            <div className="hidden md:block md:w-5/12"></div>
            <div className="z-10 flex h-10 w-10 items-center justify-center">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground shadow-md">
                <Briefcase className="h-5 w-5" />
              </div>
            </div>
            <div className="w-full md:w-5/12">
              <Card className="shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 bg-card border-border/50">
                <CardHeader className="p-6">
                  <CardTitle className="font-headline text-2xl mb-1">{exp.role}</CardTitle>
                  <CardDescription className="font-semibold text-primary text-base">
                    {exp.company}
                  </CardDescription>
                   <p className="text-sm text-muted-foreground">{exp.period}</p>
                </CardHeader>
                <CardContent className="p-6 pt-0">
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
