import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ListTree } from 'lucide-react';
import { Container } from '../container';

const projects = [
  {
    title: 'AI Diagnostic Assistant',
    description: [
      "Built an AI-powered assistant with OpenAI's Realtime API, Hume.ai, and GPT-4 for emotionally adaptive conversational responses.",
      "Selected as a semi-finalist at MIT’s flagship global hackathon.",
    ],
    image: 'https://placehold.co/600x400.png',
    image_hint: 'medical technology',
    githubUrl: 'https://github.com/Sheethaljoshi',
  },
  {
    title: 'AI Study Buddy',
    description: [
      'Developed an AI tool that converts user content into dynamic study aids like flashcards and quizzes.',
      'Utilized behavioral analytics and NLP to detect cognitive preferences for personalized learning.',
      'Ranked Top 5 at Kerala’s largest GenAI hackathon for innovation.',
    ],
    image: 'https://placehold.co/600x400.png',
    image_hint: 'education technology',
    githubUrl: 'https://github.com/Sheethaljoshi',
  },
  {
    title: 'Rover Waypoint Controller',
    description: [
      'Designed a real-time autonomous navigation system using graph search and AI-based terrain classification.',
      'Contributed to Horizon Mars Rover Team achieving World Rank 18 at ERC 2024.',
    ],
    image: 'https://placehold.co/600x400.png',
    image_hint: 'abstract code',
    githubUrl: 'https://github.com/Sheethaljoshi',
  },
];

export default function Projects() {
  return (
    <Container id="projects" className="relative">
      <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl text-primary fade-in-up">
        My Projects
      </h2>
      <p className="mt-4 text-center text-muted-foreground md:text-lg fade-in-up animation-delay-200">
        Here are some of the things I've built with passion and code.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={project.title} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 fade-in-up bg-card" style={{ animationDelay: `${200 * (index + 2)}ms`}}>
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
              <CardContent className="p-0 pt-4 flex-grow">
                <ul className="space-y-2">
                  {project.description.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <ListTree className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </div>
            <CardFooter className="mt-auto p-6">
              <Button asChild className="w-full">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> View on GitHub
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Container>
  );
}
