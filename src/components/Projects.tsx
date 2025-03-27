
import { useState } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'transliteration-tool',
    title: 'Transliteration & Translation Tool for EIDR Registry',
    description: 'A tool designed to transliterate and translate metadata for the EIDR registry, ensuring accurate multi-language representation.',
    features: [
      'Automated transliteration and translation',
      'XML parsing and data validation',
      'Logging language mismatches for quality control'
    ],
    challenge: 'Implemented efficient language detection algorithms to enhance accuracy.',
    github: 'https://github.com/het2102',
    technologies: ['Python', 'XML', 'NLP', 'API Integration'],
    image: '/placeholder.svg'
  },
  {
    id: 'task-management',
    title: 'Task Management System API',
    description: 'A backend API developed for a task management system using Node.js and MongoDB.',
    features: [
      'User authentication with JWT',
      'Role-based access control',
      'CRUD operations for users and tasks'
    ],
    challenge: 'Implemented CORS and error handling to enhance API security.',
    github: 'https://github.com/het2102',
    technologies: ['Node.js', 'MongoDB', 'JWT', 'Express'],
    image: '/placeholder.svg'
  },
  {
    id: 'uno-game',
    title: 'UNO – The Game',
    description: 'A web-based UNO game that supports both multiplayer gameplay and single-player mode against a computer.',
    features: [
      'Real-time multiplayer support',
      'AI-powered computer opponent',
      'Interactive UI for engaging experience',
      'Secure game state management'
    ],
    challenge: 'Implemented real-time synchronization for smooth gameplay and optimized AI behavior for competitive single-player mode.',
    github: 'https://github.com/alxwang/2024_cosa195_black',
    technologies: ['JavaScript', 'WebSockets', 'AI', 'Frontend'],
    image: '/placeholder.svg'
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24">
      <div className="container section-container">
        <AnimatedSection animation="slide-up">
          <span className="inline-block text-sm font-medium text-primary px-3 py-1 mb-6 rounded-full bg-primary/10">
            Portfolio
          </span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A collection of my recent work and technical achievements</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <AnimatedSection 
              key={project.id} 
              animation="scale-in" 
              delay={200 + index * 100}
              className="h-full"
            >
              <Card 
                className="h-full overflow-hidden border border-border/50 transition-all duration-300 hover:shadow-card hover:border-primary/20"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-60" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </div>
                
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.slice(0, 3).map(tech => (
                      <Badge key={tech} variant="secondary" className="font-normal">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="font-normal">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl tracking-tight">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <h4 className="text-sm font-medium">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="flex justify-between">
                  <Button
                    variant="ghost" 
                    size="sm"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    asChild
                    className="group"
                  >
                    <Link to={`/project/${project.id}`}>
                      Details
                      <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
