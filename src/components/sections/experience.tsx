'use client';
import { Briefcase, ListTree, Calendar, MapPin, Code, Users, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { useState } from 'react';

// Mock Container component for demo
import { ReactNode } from 'react';

const Container = ({
  children,
  id,
  className = "",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
}) => (
  <section id={id} className={`py-20 ${className}`}>
    {children}
  </section>
);

const experiences = [
  {
    role: 'Software Developer Intern',
    company: 'KDex Global',
    location: 'North Carolina, USA',
    period: 'May 2025 - June 2025',
    duration: '1 month',
    type: 'On-site',
    description: [
      'Engineered and optimized backend APIs in Golang and PostgreSQL, improving backend throughput by 25%.',
      'Directed the development and deployment of product documentation for the company\'s flagship product using React, Docusaurus, AWS S3, and CloudFront, enabling scalable self-serve support.',
      'Partnered with cross-functional teams (frontend, DevOps, and product) to design scalable backend architectures, reducing service deployment time by 15%.'
    ],
    technologies: ['Golang', 'PostgreSQL', 'React', 'AWS S3', 'CloudFront', 'Docusaurus'],
    highlights: ['25% throughput improvement', '15% faster deployments']
  },
  {
    role: 'Software Developer Intern',
    company: 'Global Health Opinion',
    location: 'Kerala, India',
    period: 'March 2025 - May 2025',
    duration: '2 months',
    type: 'Remote',
    description: [
      'Engineered scalable medical dashboards utilizing Next.js and TypeScript for real-time operational insights, integrating REST APIs; dashboards now used by 20+ doctors.',
      'Enhanced data load speeds by 20% via API optimization and frontend rendering improvements.',
      'Collaborated with a distributed team of engineers and healthcare specialists to define dashboard requirements and validate features, reducing post-deployment revisions by 15%.'
    ],
    technologies: ['Next.js', 'TypeScript', 'REST APIs', 'React', 'Node.js'],
    highlights: ['20+ doctors using dashboards', '20% faster load speeds', '15% fewer revisions']
  },
];

const TimelineIcon = ({ index }: { index: number }) => (
  <div className="relative">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg ring-4 ring-white dark:ring-gray-900 transition-all duration-300 hover:scale-110">
      <Briefcase className="h-6 w-6 text-white" />
    </div>
    <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/20 blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
  </div>
);

const TechBadge = ({ tech }: { tech: string }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700 border border-purple-200 dark:from-purple-900/20 dark:to-indigo-900/20 dark:text-purple-300 dark:border-purple-800 transition-all duration-200 hover:scale-105 hover:shadow-sm">
    {tech}
  </span>
);

const HighlightBadge = ({ highlight }: { highlight: string }) => (
  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border border-emerald-200 dark:from-emerald-900/20 dark:to-green-900/20 dark:text-emerald-300 dark:border-emerald-800">
    <TrendingUp className="w-3 h-3 mr-1" />
    {highlight}
  </span>
);

export default function Experience() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-gradient-to-br from-purple-400/10 to-purple-600/10 animate-pulse" />
        <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-gradient-to-br from-purple-400/10 to-purple-600/10 animate-pulse animation-delay-1000" />
        <div className="absolute left-1/3 top-1/4 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-400/5 to-cyan-600/5 animate-bounce animation-delay-2000" />
      </div>
      
      <Container id="experience" className="relative">
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg mb-6 animate-pulse">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Professional Experience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              My journey through innovative tech environments, building scalable solutions and delivering measurable impact
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-400 via-purple-500 to-indigo-600 opacity-30" />
            
            {experiences.map((exp, index) => (
              <div
                key={exp.role + exp.company}
                className={`relative mb-16 group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} flex items-center`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Timeline icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <TimelineIcon index={index} />
                </div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <Card className={`
                    relative overflow-hidden transition-all duration-500 ease-out
                    ${hoveredCard === index 
                      ? 'shadow-2xl scale-105 border-purple-200 dark:border-purple-800' 
                      : 'shadow-lg hover:shadow-xl border-gray-200 dark:border-gray-700'
                    }
                    bg-card border-border/50 backdrop-blur-sm border-2
                  `}>
                    {/* Card without overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-800 to-purple-800 opacity-30" />

                    <CardHeader className="relative z-10 p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                            <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                              {exp.duration}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                            <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full">
                              {exp.type}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
                        {exp.role}
                      </CardTitle>
                      <CardDescription className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">
                        {exp.company}
                      </CardDescription>

                      {/* Key highlights */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.highlights.map((highlight, idx) => (
                          <HighlightBadge key={idx} highlight={highlight} />
                        ))}
                      </div>
                    </CardHeader>

                    <CardContent className="relative z-10 p-8 pt-0 space-y-6">
                      {/* Description */}
                      <div className="space-y-4">
                        {exp.description.map((point, idx) => (
                          <div key={idx} className="flex items-start gap-3 group/item">
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 transition-transform duration-200 group-hover/item:scale-125" />
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-200 group-hover/item:text-gray-900 dark:group-hover/item:text-white">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Code className="w-4 h-4 text-gray-500" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Technologies</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <TechBadge key={idx} tech={tech} />
                          ))}
                        </div>
                      </div>
                    </CardContent>

                    {/* Hover effect border */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-200 via-purple-900 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl" />
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mt-10 bg-gradient-to-r from-purple-400 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Users className="w-5 h-5" />
              Let's collaborate on something amazing
            </div>
          </div>
        </div>
      </Container>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}