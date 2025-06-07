import { useEffect, useState } from 'react';

export function useAnimatedCounter(target: number, duration: number = 2000, suffix: string = '') {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  const formatValue = (value: number) => {
    if (target >= 1000) {
      return Math.floor(value / 1000) + 'K+';
    }
    return value + suffix;
  };

  return formatValue(count);
}
