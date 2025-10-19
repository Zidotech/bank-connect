import { useRef, useEffect } from 'react';

export function useDebounce(fn: () => void, delay: number, deps: any[]) {
  const ref = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (ref.current) clearTimeout(ref.current);
    ref.current = setTimeout(fn, delay);
    return () => {
      if (ref.current) clearTimeout(ref.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
