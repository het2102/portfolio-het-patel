
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/AnimatedSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

// Project data (would typically come from an API or CMS)
const projectsData = [
  {
    id: 'transliteration-tool',
    title: 'Transliteration & Translation Tool for EIDR Registry',
    description: 'A tool designed to transliterate and translate metadata for the EIDR registry, ensuring accurate multi-language representation. This project addresses the need for standardized multilingual content in entertainment metadata systems.',
    features: [
      'Automated transliteration and translation',
      'XML parsing and data validation',
      'Logging language mismatches for quality control',
      'Support for multiple language pairs',
      'Customizable output formats'
    ],
    challenges: [
      'Handling complex scripts and character sets from various languages',
      'Ensuring accuracy of automated translations',
      'Processing large XML datasets efficiently',
      'Implementing robust error handling for unexpected language formats'
    ],
    solutions: [
      'Implemented efficient language detection algorithms to enhance accuracy',
      'Created custom validation rules for each language pair',
      'Developed a caching system to improve processing speed',
      'Built comprehensive logging for quality assurance'
    ],
    technologies: ['Python', 'XML', 'NLP', 'API Integration', 'Google Translate API'],
    github: 'https://github.com/het2102',
    image: '/placeholder.svg'
  },
  {
    id: 'task-management',
    title: 'Task Management System API',
    description: 'A backend API developed for a task management system using Node.js and MongoDB. The system provides a robust foundation for building task management applications with user authentication and role-based permissions.',
    features: [
      'User authentication with JWT',
      'Role-based access control',
      'CRUD operations for users and tasks',
      'Task filtering and sorting',
      'Activity logging and notifications'
    ],
    challenges: [
      'Designing a secure authentication system',
      'Implementing efficient database queries for task filtering',
      'Handling concurrent task updates from multiple users',
      'Ensuring proper access control across all API endpoints'
    ],
    solutions: [
      'Implemented CORS and error handling to enhance API security',
      'Created middleware for authentication and permission verification',
      'Used MongoDB aggregation for efficient data queries',
      'Designed a comprehensive testing suite for API endpoints'
    ],
    technologies: ['Node.js', 'MongoDB', 'JWT', 'Express', 'RESTful API', 'Mongoose'],
    github: 'https://github.com/het2102',
    image: '/placeholder.svg'
  },
  {
    id: 'uno-game',
    title: 'UNO – The Game',
    description: 'A web-based UNO card game that supports both multiplayer gameplay and single-player mode against a computer. This project recreates the classic card game in a digital format with modern web technologies.',
    features: [
      'Real-time multiplayer support',
      'AI-powered computer opponent',
      'Interactive UI for engaging experience',
      'Secure game state management',
      'Game rules enforcement',
      'Chat functionality for multiplayer games'
    ],
    challenges: [
      'Implementing real-time game state synchronization',
      'Designing an intuitive card game interface',
      'Creating a competitive AI for single-player mode',
      'Preventing cheating in multiplayer games'
    ],
    solutions: [
      'Implemented real-time synchronization for smooth gameplay',
      'Optimized AI behavior for competitive single-player mode',
      'Created a responsive drag-and-drop interface for cards',
      'Used server validation to prevent client-side manipulation'
    ],
    technologies: ['JavaScript', 'WebSockets', 'HTML5', 'CSS3', 'AI Algorithms', 'Node.js'],
    github: 'https://github.com/alxwang/2024_cosa195_black',
    image: '/placeholder.svg'
  }
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const foundProject = projectsData.find(p => p.id === id);
    
    if (foundProject) {
      setProject(foundProject);
    } else {
      // If project not found, navigate to 404
      navigate('/404');
    }
    
    setLoading(false);
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-lg">Loading project details...</div>
      </div>
    );
  }

  if (!project) {
    return null; // Will navigate to 404
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container max-w-5xl mx-auto px-6">
          <AnimatedSection animation="fade-in">
            <Button 
              variant="ghost" 
              size="sm" 
              asChild
              className="mb-8"
            >
              <Link to="/#projects">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Projects
              </Link>
            </Button>
            
            <div className="aspect-video w-full rounded-xl overflow-hidden mb-8 bg-muted relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {project.technologies.map((tech: string) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-medium mb-6">{project.title}</h1>
            
            <p className="text-muted-foreground mb-8 text-lg">{project.description}</p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <Button asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View Repository
                </a>
              </Button>
              {project.demoLink && (
                <Button variant="outline" asChild>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
            
            <Separator className="my-8" />
            
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection animation="slide-up" delay={200}>
                <div className="glass-card p-6">
                  <h2 className="text-xl font-medium mb-4">Features</h2>
                  <ul className="space-y-2">
                    {project.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="slide-up" delay={300}>
                <div className="glass-card p-6">
                  <h2 className="text-xl font-medium mb-4">Challenges</h2>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
            
            <AnimatedSection animation="slide-up" delay={400} className="mt-8">
              <div className="glass-card p-6">
                <h2 className="text-xl font-medium mb-4">Solutions & Approach</h2>
                <ul className="space-y-2">
                  {project.solutions.map((solution: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
