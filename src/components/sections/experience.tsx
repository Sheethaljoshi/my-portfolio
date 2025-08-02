'use client';
import { Briefcase, ListTree } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Container } from '../container';

const experiences = [
  {
    role: 'Software Developer Intern',
    company: 'KDex Global (On-site)',
    period: 'May 2025 - July 2025',
    description: [
      'Built and maintained key backend APIs in Golang, optimized PostgreSQL queries, and streamlined data processing pipelines.',
      'Led the build and static hosting of product documentation using React, Docusaurus, AWS S3, and CloudFront.'
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'Global Health Opinion (Remote)',
    period: 'March 2025 - May 2025',
    description: [
      'Built scalable, interactive medical dashboards in Next.js with TypeScript and C# REST APIs.',
      'Improved data load speeds by 20% through API optimization and frontend rendering improvements.'
    ],
  },
];

export default function Experience() {
  return (
    <Container id="experience" className="relative overflow-hidden">
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full border-2 border-dashed border-primary/20 orbit" />
      <div className="absolute -right-32 -bottom-48 h-96 w-96 rounded-full border-2 border-dashed border-primary/20 orbit-reverse" />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-secondary/10" />
      <div className="container relative">
        <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl text-primary fade-in-up">
          Professional Experience
        </h2>
        <p className="mt-4 text-center text-muted-foreground md:text-lg fade-in-up animation-delay-200">
          My journey through the tech landscape, one challenge at a time.
        </p>
        <div className="relative mt-16">
          <div
            className="absolute left-1/2 top-4 -ml-[1px] h-[calc(100%-2rem)] w-[2px] bg-border/40 fade-in"
            aria-hidden="true"
          />
          {experiences.map((exp, index) => (
            <div
              key={exp.role + exp.company}
              className={`relative mb-16 flex items-center justify-between md:justify-normal md:odd:flex-row-reverse fade-in-up`}
              style={{ animationDelay: `${200 * (index + 2)}ms`}}
            >
              <div className="hidden md:block md:w-5/12" />
              <div className="z-10 flex h-16 w-16 items-center justify-center absolute left-1/2 -translate-x-1/2">
              </div>
              <div className="w-full md:w-5/12">
                <Card className="shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 bg-card border-border/50">
                  <CardHeader className="p-8">
                    <p className="text-md text-muted-foreground pt-1">{exp.period}</p>
                    <CardTitle className="font-headline text-3xl mb-2">{exp.role}</CardTitle>
                    <CardDescription className="font-semibold text-primary text-xl">
                      {exp.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <ul className="space-y-3">
                      {exp.description.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <ListTree className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
