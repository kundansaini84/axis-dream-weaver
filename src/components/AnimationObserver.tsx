
import React, { useEffect, useRef, ReactNode } from 'react';

interface AnimationObserverProps {
  children: ReactNode;
  className?: string;
  animation: string;
  threshold?: number;
  delay?: number;
}

const AnimationObserver: React.FC<AnimationObserverProps> = ({
  children,
  className = '',
  animation,
  threshold = 0.1,
  delay = 0,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (elementRef.current) {
                elementRef.current.classList.add(animation);
              }
            }, delay);
            observer.disconnect();
          }
        });
      },
      {
        threshold,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [animation, threshold, delay]);

  return (
    <div ref={elementRef} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
};

export default AnimationObserver;
