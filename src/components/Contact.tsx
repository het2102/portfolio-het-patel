
import { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This would connect to an actual form submission service
    setTimeout(() => {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container section-container">
        <AnimatedSection animation="slide-up">
          <span className="inline-block text-sm font-medium text-primary px-3 py-1 mb-6 rounded-full bg-primary/10">
            Contact
          </span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Have a question or want to work together?</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          <AnimatedSection animation="slide-up" delay={200}>
            <div className="glass-card p-8">
              <h3 className="text-xl font-medium mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="w-full"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message here..."
                      className="w-full min-h-[120px]"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={300}>
            <div className="space-y-8">
              <div className="glass-card p-8">
                <h3 className="text-xl font-medium mb-6">Connect With Me</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:hetpatel21205@gmail.com"
                    className="flex items-center p-4 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-sm text-muted-foreground">hetpatel21205@gmail.com</p>
                    </div>
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/in/hetpatelindian/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <Linkedin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">LinkedIn</h4>
                      <p className="text-sm text-muted-foreground">linkedin.com/in/hetpatelindian</p>
                    </div>
                  </a>
                  
                  <a
                    href="https://github.com/het2102"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <Github className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">GitHub</h4>
                      <p className="text-sm text-muted-foreground">github.com/het2102</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-xl font-medium mb-4">Office Hours</h3>
                <p className="text-muted-foreground mb-4">
                  Available for meetings and calls during the following hours:
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-mono">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekends</span>
                    <span className="font-mono">By appointment</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
