
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-full -z-10 bg-gradient-to-b from-primary/5 via-background to-background" />
      
      <div className="absolute top-20 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-40 -left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="container max-w-5xl">
        <div className="space-y-16 text-center">
          <div className="space-y-8">
            <AnimatedSection animation="fade-in" className="space-y-3">
              <span className="inline-block text-sm font-medium text-primary/80 px-3 py-1 rounded-full bg-primary/10">
                Computer Systems Technology Student
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
                Het Patel
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                I specialize in software development, cybersecurity, cloud computing, and data analytics.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={300} className="flex justify-center">
              <div className="relative w-80 h-80 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/62e7a485-0aa7-4283-ae02-0fcdada4135b.png" 
                    alt="Het Patel" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={500} className="max-w-2xl mx-auto">
              <p className="text-lg text-muted-foreground">
                Welcome to my digital portfolio! This showcases my technical skills, 
                projects, and experience as I prepare for a career in IT and software development.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-in" delay={700}>
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-full group"
              onClick={scrollToAbout}
            >
              <span>Explore My Work</span>
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
