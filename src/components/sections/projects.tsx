import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Container } from '../container';

const projects = [
  {
    title: 'AI Diagnostic Assistant',
    description:
      'A cutting-edge tool that leverages AI to assist medical professionals in diagnosing diseases from medical scans with high accuracy. Features an intuitive interface and real-time analysis.',
    image: 'https://placehold.co/600x400.png',
    image_hint: 'medical technology',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'AI Study Buddy',
    description:
      'A personalized learning companion that adapts to your study habits. It creates custom quizzes, summarizes complex topics, and helps you stay on track to achieve your academic goals.',
    image: 'https://placehold.co/600x400.png',
    image_hint: 'education technology',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Portfolio Orchestrator',
    description:
      'The very website you are on. Built with Next.js, Tailwind CSS, and GenAI to create a dynamic, adaptive, and engaging portfolio experience that stands out.',
    image: 'https://placehold.co/600x400.png',
    image_hint: 'abstract code',
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default function Projects() {
  return (
    <Container id="projects">
      <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl text-primary">
        My Projects
      </h2>
      <p className="mt-4 text-center text-muted-foreground md:text-lg">
        Here are some of the things I've built with passion and code.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <CardHeader className="p-0">
               <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  data-ai-hint={project.image_hint}
                />
            </CardHeader>
            <div className="p-6 flex flex-col flex-grow">
              <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
              <CardDescription className="mt-2 flex-grow">{project.description}</CardDescription>
            </div>
            <CardFooter className="mt-auto">
              <div className="flex w-full gap-4">
                <Button asChild className="flex-1">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
                <Button asChild variant="secondary" className="flex-1">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Container>
  );
}
