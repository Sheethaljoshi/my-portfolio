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
      "Built an AI-powered assistant combining OpenAI's Realtime API, Hume.ai (for sentiment/emotion analysis), and GPT-4, enabling users to describe symptoms conversationally while receiving emotionally adaptive responses. Selected as a semi-finalist at MIT’s flagship global hackathon.",
    image: 'https://placehold.co/600x400.png',
    image_hint: 'medical technology',
    liveUrl: '#',
    githubUrl: 'https://github.com/Sheethaljoshi',
  },
  {
    title: 'AI Study Buddy',
    description:
      'Developed an AI tool that converts user-provided content into dynamic study aids—flashcards, concept maps, quizzes—by detecting cognitive preferences through behavioral analytics and NLP profiling. Ranked Top 5 at Kerala’s largest GenAI hackathon (TinkHack 2.0, 2025) for innovation and usability.',
    image: 'https://placehold.co/600x400.png',
    image_hint: 'education technology',
    liveUrl: '#',
    githubUrl: 'https://github.com/Sheethaljoshi',
  },
  {
    title: 'Rover Waypoint Controller',
    description:
      'Designed a real-time autonomous navigation system using graph search and AI-based terrain classification. Contributed to Horizon Mars Rover Team World Rank 18, All India Rank 2 at ERC 2024.',
    image: 'https://placehold.co/600x400.png',
    image_hint: 'abstract code',
    liveUrl: '#',
    githubUrl: 'https://github.com/Sheethaljoshi',
  },
];

export default function Projects() {
  return (
    <Container id="projects" className="relative">
       <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/20 to-background"></div>
      <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl text-primary fade-in-up">
        My Projects
      </h2>
      <p className="mt-4 text-center text-muted-foreground md:text-lg fade-in-up animation-delay-200">
        Here are some of the things I've built with passion and code.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={project.title} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 fade-in-up" style={{ animationDelay: `${200 * (index + 2)}ms`}}>
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
