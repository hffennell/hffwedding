'use client';
import { useLayoutEffect, useState } from 'react';

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  const [breakpoint, setBreakpoint] = useState('none');

  useLayoutEffect(() => {
    const sm = window.matchMedia('(min-width: 640px)');
    const md = window.matchMedia('(min-width: 768px)');
    const lg = window.matchMedia('(min-width: 1024px)');
    const xl = window.matchMedia('(min-width: 1280px)');
    const xxl = window.matchMedia('(min-width: 1536px)');

    // Check on mount (callback is not called until a change occurs)

    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
      setBreakpoint('none');
      if (sm.matches) {
        setBreakpoint('sm');
      }
      if (md.matches) {
        setBreakpoint('md');
      }
      if (lg.matches) {
        setBreakpoint('lg');
      }
      if (xl.matches) {
        setBreakpoint('xl');
      }
      if (xxl.matches) {
        setBreakpoint('2xl');
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return { size, breakpoint };
};

export default useWindowSize;