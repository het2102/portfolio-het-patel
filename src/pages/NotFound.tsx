
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-background px-4">
      <AnimatedSection animation="scale-in" className="text-center space-y-6 max-w-md">
        <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
          <span className="text-4xl font-bold text-primary">404</span>
        </div>
        
        <AnimatedSection delay={200} animation="fade-in">
          <h1 className="text-3xl md:text-4xl font-medium">Page Not Found</h1>
          <p className="text-muted-foreground mt-4 mb-8">
            The page you're looking for doesn't exist or has been moved to another URL.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={400} animation="fade-in">
          <Button asChild>
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
          </Button>
        </AnimatedSection>
      </AnimatedSection>
    </div>
  );
};

export default NotFound;
