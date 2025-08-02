'use client';
import { Badge } from '@/components/ui/badge';
import { Container } from '../container';

const skills = [
  'Python', 'C++', 'C#', 'Java', 'TypeScript', 'JavaScript', 
  'React.js', 'Next.js', 'FastAPI', 'Node.js', 'Express.js', 
  'Selenium', 'Go', 'Firebase', 'MySQL', 'PostgreSQL', 'MongoDB Atlas', 
  'RESTful APIs', 'Docusaurus', 'AWS', 'Docker', 'TensorFlow', 
  'Keras', 'Scikit-learn', 'OpenCV', 'Git', 'LLMs', 'Deep Learning'
];

export default function Skills() {
  return (
    <Container id="skills" className="relative overflow-hidden">
      <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl text-primary fade-in-up">
        My Skillset
      </h2>
      <p className="mt-4 text-center text-muted-foreground md:text-lg fade-in-up animation-delay-200">
        A blend of technical expertise and creative problem-solving.
      </p>
      <div className="mt-12 flex justify-center fade-in-up animation-delay-400">
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
          {skills.map((skill, index) => (
            <Badge 
              key={skill} 
              variant="outline" 
              className="text-lg p-3 bg-card border-primary/50 text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:scale-105 cursor-pointer fade-in-up" 
              style={{ animationDelay: `${25 * index}ms`}}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </Container>
  );
}
