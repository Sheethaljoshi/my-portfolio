import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ListTree, ArrowUpRight } from 'lucide-react';
import { Container } from '../container';

const projects = [
  {
    title: 'AI Diagnostic Assistant',
    description: [
      "Built an AI-driven medical assistant using OpenAI Realtime API, Hume.ai, and GPT-4, enabling conversational symptom reporting with emotionally adaptive responses; processed 100+ simulated cases during testing.",
      "Designed and developed a React.js + TypeScript front-end and FastAPI + Python backend with structured triage logic, achieving 90%+ alignment with expert-defined outcomes.",
      "Earned Semi-finalist recognition at HackMIT 2024, MIT’s flagship global hackathon, for innovation and technical excellence."
    ],
    image: 'https://placehold.co/600x400.png',
    image_hint: 'medical technology',
    githubUrl: 'https://github.com/Sheethaljoshi',
  },
  {
    title: 'AI Study Content Creator',
    description: [
      'Created an AI learning companion that transforms content into interactive comic books, quirky podcasts, gamified concept maps, and other study formats, using behavioral analytics and NLP profiling; supported 5+ learning formats.',
      'Produced 50+ multimedia study aids during hackathon testing, dynamically adapting learning paths based on cognitive preference detection.',
      'Integrated DALL·E for custom visuals and GPT-4 for adaptive storytelling, reduced content generation time by ~3x compared to initial prototype.',
    ],
    image: 'https://placehold.co/600x400.png',
    image_hint: 'education technology',
    githubUrl: 'https://github.com/Sheethaljoshi',
  },
  {
    title: 'Rover Waypoint Controller',
    description: [
      'Led a 6-member navigation and communications team in building and integrating the rover’s autonomous navigation module for the European Rover Challenge 2024 in Krakow, Poland.',
      'Developed and tested a real-time autonomous navigation system with graph search algorithms and AI-based terrain classification, completing 200+ simulation runs with 95%+ waypoint accuracy across 5+ terrain types.',
      'Implemented live telemetry and video streaming using WebSockets and WebRTC, maintaining <300ms latency during field testing.',
    ],
    image: 'https://placehold.co/600x400.png',
    image_hint: 'abstract code',
    githubUrl: 'https://github.com/Sheethaljoshi',
  },
];

export default function Projects() {
  return (
    <Container id="projects" className="relative overflow-hidden">
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full border-2 border-dashed border-primary/20 orbit" />
      <div className="absolute -right-32 -bottom-48 h-96 w-96 rounded-full border-2 border-dashed border-primary/20 orbit-reverse" />
      <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl text-primary fade-in-up">
        Notable Projects
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
                  <Github className="mr-2 h-4 w-4" /> View source code on github
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Container>
  );
}
