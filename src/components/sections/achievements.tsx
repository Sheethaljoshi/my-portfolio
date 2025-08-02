import { Trophy, Award, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '../container';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';

const achievements = [
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    title: 'European Rover Challenge 2024',
    description: 'Achieved World Rank 18, All India Rank 1 as the Lead of Navigation and Communications.',
    images: [
      { src: 'https://placehold.co/600x400.png', alt: 'Rover Challenge Image 1', hint: 'robotics competition' },
      { src: 'https://placehold.co/600x400.png', alt: 'Rover Challenge Image 2', hint: 'mars rover' },
    ]
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'HackMIT 2024 Semi-Finalist',
    description: 'Recognized as a semi-finalist in the world-famous hackathon at the Massachusetts Institute of Technology, USA.',
    images: [
      { src: 'https://placehold.co/600x400.png', alt: 'HackMIT Image 1', hint: 'hackathon event' },
      { src: 'https://placehold.co/600x400.png', alt: 'HackMIT Image 2', hint: 'coding students' },
    ]
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Top 5 at TinkHack 2.0',
    description: "Secured a top 5 position in Kerala's Largest Gen AI Hackathon.",
    images: [
      { src: 'https://placehold.co/600x400.png', alt: 'TinkHack Image 1', hint: 'ai hackathon' },
      { src: 'https://placehold.co/600x400.png', alt: 'TinkHack Image 2', hint: 'team presentation' },
    ]
  },
];

export default function Achievements() {
  return (
    <Container id="achievements">
      <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl text-primary fade-in-up">
        Awards & Achievements
      </h2>
      <p className="mt-4 text-center text-muted-foreground md:text-lg fade-in-up animation-delay-200">
        Milestones that mark my dedication and passion for innovation.
      </p>
      <div className="mt-12 grid gap-12 md:grid-cols-1">
        {achievements.map((item, index) => (
          <Card key={item.title} className="flex flex-col md:flex-row items-center gap-8 p-6 transition-all duration-300 hover:shadow-lg hover:bg-secondary fade-in-up" style={{ animationDelay: `${200 * (index + 2)}ms`}}>
            <div className="md:w-1/2 w-full">
              <Carousel className="w-full">
                <CarouselContent>
                  {item.images.map((image, imgIndex) => (
                    <CarouselItem key={imgIndex}>
                      <Image 
                        src={image.src} 
                        alt={image.alt} 
                        width={600} 
                        height={400} 
                        className="rounded-lg object-cover"
                        data-ai-hint={image.hint}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
              </Carousel>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0">{item.icon}</div>
                <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
              </div>
              <CardDescription className="text-lg">{item.description}</CardDescription>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
}
