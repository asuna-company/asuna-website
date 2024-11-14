import { useSyncExternalStore } from 'react';

const throttle = (callback: () => void, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return () => {
    if (timeoutId) return;
    timeoutId = setTimeout(() => {
      callback();
      timeoutId = null;
    }, delay);
  };
};

const useMediaQuery = (query: string) => {
  const subscribe = (callback: () => void) => {
    const mediaQuery = window.matchMedia(query);
    const throttledCallback = throttle(callback, 200);

    mediaQuery.addEventListener("change", throttledCallback);
    return () => mediaQuery.removeEventListener("change", throttledCallback);
  };

  const getSnapshot = () => window.matchMedia(query).matches;
  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

export default useMediaQuery;
