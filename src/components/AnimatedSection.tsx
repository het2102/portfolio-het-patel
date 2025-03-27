
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-in' | 'slide-in' | 'slide-up' | 'scale-in' | 'blur-in';
  threshold?: number;
  forceVisible?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  animation = 'fade-in',
  threshold = 0.2,
  forceVisible = false,
}) => {
  const [isVisible, setIsVisible] = useState(forceVisible);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (forceVisible) {
      setIsVisible(true);
      return;
    }

    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, [threshold, forceVisible]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (animation) {
      case 'fade-in':
        return 'animate-fade-in';
      case 'slide-in':
        return 'animate-slide-in';
      case 'slide-up':
        return 'animate-slide-up';
      case 'scale-in':
        return 'animate-scale-in';
      case 'blur-in':
        return 'animate-blur-in';
      default:
        return 'animate-fade-in';
    }
  };

  const getDelayClass = () => {
    if (delay === 0) return '';
    if (delay <= 100) return 'animate-delay-100';
    if (delay <= 200) return 'animate-delay-200';
    if (delay <= 300) return 'animate-delay-300';
    if (delay <= 400) return 'animate-delay-400';
    if (delay <= 500) return 'animate-delay-500';
    if (delay <= 600) return 'animate-delay-600';
    if (delay <= 700) return 'animate-delay-700';
    if (delay <= 800) return 'animate-delay-800';
    if (delay <= 900) return 'animate-delay-900';
    return 'animate-delay-1000';
  };

  return (
    <div
      ref={sectionRef}
      className={cn(
        'transition-all will-change-transform',
        getAnimationClass(),
        getDelayClass(),
        className
      )}
      style={{ 
        animationFillMode: 'both',
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
