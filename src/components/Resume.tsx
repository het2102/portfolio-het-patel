
import { useState } from 'react';
import { FileText, Calendar, Award, Briefcase, Download } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('education');

  const handleDownload = () => {
    // This would be a link to the actual resume file
    alert('Download functionality would be implemented here with the actual resume file.');
  };

  return (
    <section id="resume" className="py-24 bg-blue-gray">
      <div className="container section-container">
        <AnimatedSection animation="slide-up">
          <span className="inline-block text-sm font-medium text-primary px-3 py-1 mb-6 rounded-full bg-primary/10">
            Resume
          </span>
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">My academic and professional journey</p>
        </AnimatedSection>

        <div className="flex flex-col-reverse lg:flex-row gap-8">
          <div className="lg:w-3/4">
            <AnimatedSection animation="fade-in" delay={200}>
              <Tabs defaultValue="education" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="w-full bg-white/50 mb-8 grid grid-cols-3">
                  <TabsTrigger value="education" className="data-[state=active]:bg-white">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Education</span>
                  </TabsTrigger>
                  <TabsTrigger value="experience" className="data-[state=active]:bg-white">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Experience</span>
                  </TabsTrigger>
                  <TabsTrigger value="certifications" className="data-[state=active]:bg-white">
                    <Award className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Certifications</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="education" className="mt-0">
                  <AnimatedSection className="glass-card p-6 space-y-5">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-medium">Computer Systems Technology</h3>
                        <p className="text-muted-foreground">Saskatchewan Polytechnic</p>
                      </div>
                      <div className="font-mono text-sm text-muted-foreground whitespace-nowrap">
                        Expected Graduation: June 2025
                      </div>
                    </div>
                    <p>
                      Comprehensive program covering software development, networking, cybersecurity, 
                      database management, and cloud computing technologies. Developed practical skills 
                      through hands-on projects and industry-focused coursework.
                    </p>
                    <div className="pt-2">
                      <h4 className="font-medium mb-2">Key Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Web Development', 'Database Design', 'Network Security', 'Cloud Computing', 'System Analysis'].map(course => (
                          <span key={course} className="px-3 py-1 bg-white/50 rounded-full text-sm">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                </TabsContent>

                <TabsContent value="experience" className="mt-0">
                  <AnimatedSection className="glass-card p-6 space-y-5">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-medium">Associate</h3>
                        <p className="text-muted-foreground">World Financial Group</p>
                      </div>
                      <div className="font-mono text-sm text-muted-foreground whitespace-nowrap">
                        Current
                      </div>
                    </div>
                    <p>
                      Working as an associate at World Financial Group, where I assist clients 
                      with financial planning and solutions. This role has helped me develop strong 
                      client communication skills, attention to detail, and analytical thinking - 
                      all of which transfer well to technology projects.
                    </p>
                    <div className="pt-2">
                      <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                      <div className="flex flex-col gap-1">
                        <p className="text-sm text-muted-foreground">• Client needs analysis and consultation</p>
                        <p className="text-sm text-muted-foreground">• Data-driven financial planning</p>
                        <p className="text-sm text-muted-foreground">• Documentation and compliance management</p>
                      </div>
                    </div>
                  </AnimatedSection>
                </TabsContent>

                <TabsContent value="certifications" className="mt-0">
                  <div className="space-y-6">
                    <AnimatedSection className="glass-card p-6">
                      <h3 className="text-xl font-medium mb-4">Technical Certifications</h3>
                      <ul className="space-y-5">
                        <li className="flex items-start gap-3">
                          <div className="p-2 bg-emerald-100 text-emerald-600 rounded-full mt-0.5">
                            <Award className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium">CompTIA Security+</h4>
                            <p className="text-sm text-muted-foreground">
                              Demonstrates baseline security skills and knowledge for IT security roles.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="p-2 bg-blue-100 text-blue-600 rounded-full mt-0.5">
                            <Award className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium">AWS Certified Cloud Practitioner</h4>
                            <p className="text-sm text-muted-foreground">
                              Foundational understanding of AWS Cloud services, security, and architecture concepts.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </AnimatedSection>
                  </div>
                </TabsContent>
              </Tabs>
            </AnimatedSection>
          </div>

          <div className="lg:w-1/4">
            <AnimatedSection animation="fade-in" delay={300} className="glass-card p-6 text-center">
              <div className="flex justify-center mb-4">
                <FileText className="h-12 w-12 text-primary/70" />
              </div>
              <h3 className="text-xl font-medium mb-2">Full Resume</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Download my complete resume with detailed experience, skills, and education.
              </p>
              <Button 
                onClick={handleDownload} 
                className="w-full"
                variant="outline"
              >
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={400} className="mt-6 glass-card p-6">
              <h3 className="text-lg font-medium mb-4">Technical Skills</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Programming</span>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <div className="h-2 bg-white/70 rounded-full overflow-hidden">
                    <div 
                      className={cn(
                        "h-full bg-primary transition-all duration-1000 rounded-full",
                        activeTab === "education" ? "w-[90%]" : "w-0"
                      )} 
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Cloud Computing</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <div className="h-2 bg-white/70 rounded-full overflow-hidden">
                    <div 
                      className={cn(
                        "h-full bg-primary transition-all duration-1000 rounded-full",
                        activeTab === "education" ? "w-[85%]" : "w-0"
                      )} 
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Database Management</span>
                    <span className="text-sm text-muted-foreground">80%</span>
                  </div>
                  <div className="h-2 bg-white/70 rounded-full overflow-hidden">
                    <div 
                      className={cn(
                        "h-full bg-primary transition-all duration-1000 rounded-full",
                        activeTab === "education" ? "w-[80%]" : "w-0"
                      )} 
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Cybersecurity</span>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                  <div className="h-2 bg-white/70 rounded-full overflow-hidden">
                    <div 
                      className={cn(
                        "h-full bg-primary transition-all duration-1000 rounded-full",
                        activeTab === "education" ? "w-[75%]" : "w-0"
                      )} 
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
