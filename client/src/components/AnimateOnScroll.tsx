import React, { useEffect, useRef, useState } from "react";

type AnimateOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in milliseconds before animation starts
};

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  className = "",
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: stop observing after animation triggers once
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2, // Trigger when 30% of the element is visible
        rootMargin: "0px 0px -80px 0px", // Trigger slightly before element fully enters viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${
        isVisible ? "opacity-100 animate-[fadeInUp_1s_ease-out_forwards]" : "opacity-0"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
