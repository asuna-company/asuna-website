import { Metric, onCLS, onINP, onLCP, onFCP, onTTFB } from 'web-vitals';

type WebVitalsCallback = (metric: Metric) => void;

export const reportWebVitals = (onPerfEntry?: WebVitalsCallback): void => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    onCLS(onPerfEntry);
    onINP(onPerfEntry);
    onLCP(onPerfEntry);
    onFCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
};
