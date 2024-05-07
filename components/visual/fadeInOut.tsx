import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const FadeInOut = ({ children, className, svg }: { children: any, className?: string, svg?: string }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  if (svg) {
    return (
      <g className={`original-state ${!isVisible ? 'original-state' : 'after-state'} ${className}`}>
        { children }
      </g>
    )
  } else {
    return (
      <div className={`original-state ${!isVisible ? 'original-state' : 'after-state'} ${className}`} ref={ref}>
        { children }
      </div>
    )
  }
};