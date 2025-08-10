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
      { src: '/rover1.jpeg', alt: 'Rover Challenge Image 1', hint: 'robotics competition' },
      { src: '/rover2.jpeg', alt: 'Rover Challenge Image 2', hint: 'mars rover' },
      { src: '/rover3.jpeg', alt: 'Rover Challenge Image 3', hint: 'space exploration' },
      { src: '/rover4.jpeg', alt: 'Rover Challenge Image 4', hint: 'robotics competition' },
      { src: '/rover5.jpeg', alt: 'Rover Challenge Image 5', hint: 'mars rover' }
    ]
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'HackMIT 2024 Semi-Finalist',
    description: 'Recognized as a semi-finalist in the world-famous hackathon at the Massachusetts Institute of Technology, USA.',
    images: [
      { src: '/hackmit1.jpeg', alt: 'HackMIT Image 1', hint: 'hackathon event' },
      { src: '/hackmit2.jpeg', alt: 'HackMIT Image 2', hint: 'coding students' },
      { src: '/hackmit3.jpeg', alt: 'HackMIT Image 3', hint: 'team collaboration' },
      { src: '/hackit4.jpeg', alt: 'HackMIT Image 4', hint: 'innovation showcase' },
      { src: '/hackmit5.jpeg', alt: 'HackMIT Image 5', hint: 'final presentation' }
    ]
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Top 5 at TinkHack 2.0',
    description: "Secured a top 5 position in Kerala's Largest Gen AI Hackathon.",
    images: [
      { src: '/tink1.jpeg', alt: 'TinkHack Image 1', hint: 'ai hackathon' },
      { src: '/tink2.jpeg', alt: 'TinkHack Image 2', hint: 'teamwork in tech' },
      { src: '/tink3.jpeg', alt: 'TinkHack Image 3', hint: 'innovation in ai' }
    ]
  },
];

export default function Achievements() {
  return (
    <Container id="achievements" className="relative overflow-hidden">
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full border-2 border-dashed border-primary/20 orbit" />
      <div className="absolute -right-32 -bottom-48 h-96 w-96 rounded-full border-2 border-dashed border-primary/20 orbit-reverse" />
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
                      <div className="relative w-full h-96 overflow-hidden rounded-lg">
                        <Image 
                          src={image.src} 
                          alt={image.alt} 
                          fill
                          className="object-cover"
                          data-ai-hint={image.hint}
                        />
                      </div>
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