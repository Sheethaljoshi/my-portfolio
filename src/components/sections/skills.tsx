'use client';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Container } from '../container';

const technicalSkillsData = [
  { name: 'Python', proficiency: 95 },
  { name: 'C++', proficiency: 90 },
  { name: 'C#', proficiency: 85 },
  { name: 'Java', proficiency: 88 },
  { name: 'TypeScript', proficiency: 92 },
  { name: 'JavaScript', proficiency: 90 },
  { name: 'React.js', proficiency: 95 },
  { name: 'Next.js', proficiency: 94 },
  { name: 'FastAPI', proficiency: 85 },
  { name: 'Node.js', proficiency: 88 },
  { name: 'Express.js', proficiency: 87 },
  { name: 'Selenium', proficiency: 80 },
  { name: 'Go', proficiency: 82 },
];

const otherSkills = [
  'Firebase',
  'MySQL',
  'PostgreSQL',
  'MongoDB Atlas',
  'RESTful APIs',
  'Docusaurus',
  'AWS',
  'Docker',
  'TensorFlow',
  'Keras',
  'Scikit-learn',
  'OpenCV',
  'Git',
  'LLMs',
  'Deep Learning',
];

export default function Skills() {
  return (
    <Container id="skills" className="bg-secondary">
      <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl text-primary">
        My Skillset
      </h2>
      <p className="mt-4 text-center text-muted-foreground md:text-lg">
        A blend of technical expertise and creative problem-solving.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline">Technical Proficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={technicalSkillsData} layout="vertical" margin={{ left: 10 }}>
                <XAxis type="number" hide />
                <YAxis
                  dataKey="name"
                  type="category"
                  stroke="hsl(var(--foreground))"
                  tickLine={false}
                  axisLine={false}
                  width={120}
                />
                 <Tooltip
                  cursor={{ fill: 'hsl(var(--muted))' }}
                  contentStyle={{ 
                    background: 'hsl(var(--background))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: 'var(--radius)'
                  }}
                />
                <Bar
                  dataKey="proficiency"
                  fill="hsl(var(--primary))"
                  radius={[0, 4, 4, 0]}
                  background={{ fill: 'hsl(var(--muted))', radius: 4 }}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline">More Skills & Competencies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {otherSkills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-lg p-2 bg-background border-primary text-primary transition-all hover:bg-primary hover:text-primary-foreground cursor-pointer">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
