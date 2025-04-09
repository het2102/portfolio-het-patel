
import AnimatedSection from './AnimatedSection';
import { Separator } from '@/components/ui/separator';
import { Database, Cloud, Lock, Code } from 'lucide-react';

const skills = [
  {
    category: 'Database Management',
    items: ['SQL', 'MongoDB'],
    icon: <Database className="h-5 w-5" />,
    color: 'bg-blue-950 text-blue-400',
  },
  {
    category: 'Cloud Computing',
    items: ['AWS', 'Azure', 'Google Cloud'],
    icon: <Cloud className="h-5 w-5" />,
    color: 'bg-cyan-950 text-cyan-400',
  },
  {
    category: 'Cybersecurity',
    items: ['Network Security', 'Penetration Testing'],
    icon: <Lock className="h-5 w-5" />,
    color: 'bg-emerald-950 text-emerald-400',
  },
  {
    category: 'Programming',
    items: ['Python', 'Java', 'JavaScript'],
    icon: <Code className="h-5 w-5" />,
    color: 'bg-indigo-950 text-indigo-400',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="container section-container">
        <AnimatedSection animation="slide-up">
          <span className="inline-block text-sm font-medium text-primary px-3 py-1 mb-6 rounded-full bg-primary/10">
            About Me
          </span>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-subtitle">My background, skills, and passion for technology</p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection animation="slide-up" delay={200}>
            <div className="space-y-6">
              <div className="glass-card p-6 space-y-4">
                <h3 className="text-xl font-medium">My Background</h3>
                <p className="text-muted-foreground">
                  I am a Computer Systems Technology student at Saskatchewan Polytechnic with a strong 
                  passion for coding, problem-solving, and system security. My coursework has provided 
                  me with experience in software development, networking, cybersecurity, and IT infrastructure.
                </p>
              </div>

              <div className="glass-card p-6 space-y-4">
                <h3 className="text-xl font-medium">My Approach</h3>
                <p className="text-muted-foreground">
                  I focus on creating efficient, secure, and user-friendly solutions. I believe in 
                  continuous learning and stay updated with the latest technologies and industry trends 
                  to bring innovative approaches to my work.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={300}>
            <div className="glass-card p-6">
              <h3 className="text-xl font-medium mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <AnimatedSection key={skill.category} animation="fade-in" delay={400 + index * 100}>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className={`p-2 rounded-full ${skill.color} mr-3`}>
                          {skill.icon}
                        </div>
                        <h4 className="font-medium">{skill.category}</h4>
                      </div>
                      <Separator className="my-2" />
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map(item => (
                          <span 
                            key={item}
                            className="px-3 py-1 bg-secondary/50 rounded-full text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
