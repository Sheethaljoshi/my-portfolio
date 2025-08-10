'use client';
import { Badge } from '@/components/ui/badge';
import { Container } from '../container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Braces, Cpu, Cloud, Settings2 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code className="h-6 w-6" />,
    skills: ['Python', 'C++', 'C#', 'Java', 'TypeScript', 'JavaScript', 'Go'],
  },
  {
    title: 'Frameworks & Tools',
    icon: <Braces className="h-6 w-6" />,
    skills: ['React.js', 'Next.js', 'FastAPI', 'Node.js', 'Express.js', 'Docusaurus'],
  },
  {
    title: 'Databases',
    icon: <Database className="h-6 w-6" />,
    skills: ['MySQL', 'PostgreSQL', 'MongoDB Atlas'],
  },
  {
    title: 'AI/ML Tools',
    icon: <Cpu className="h-6 w-6" />,
    skills: ['OpenAI API', 'LangChain', 'Hugging Face Transformers', 'Deep Learning', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'Keras'],
  },
  {
    title: 'Cloud Platforms',
    icon: <Cloud className="h-6 w-6" />,
    skills: ['AWS (S3, CloudFront)'],
  },
  {
    title: 'Other',
    icon: <Settings2 className="h-6 w-6" />,
    skills: ['REST APIs', 'Selenium', 'Git', 'WebSockets', 'WebRTC', 'TCP/IP Networking'],
  },
];

export default function Skills() {
  return (
    <Container id="skills" className="relative overflow-hidden">
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full border-2 border-dashed border-primary/20 orbit" />
      <div className="absolute -right-32 -bottom-48 h-96 w-96 rounded-full border-2 border-dashed border-primary/20 orbit-reverse" />
      <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl text-primary fade-in-up">
        My Skillset
      </h2>
      <p className="mt-4 text-center text-muted-foreground md:text-lg fade-in-up animation-delay-200">
        A blend of technical expertise and creative problem-solving.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <Card key={category.title} className="bg-card/50 transition-all duration-300 hover:shadow-lg hover:bg-secondary fade-in-up" style={{ animationDelay: `${100 * (index + 2)}ms`}}>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary text-primary-foreground">
                {category.icon}
              </div>
              <CardTitle className="font-headline text-2xl">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="outline" 
                    className="text-md p-2 bg-card border-primary/50 text-primary"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}
