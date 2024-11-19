import useMediaQuery from "../hooks/useMediaQuery";

export const useIsMedium = () => useMediaQuery('(max-width: 1000px)');
export const useIsMobile = () => useMediaQuery('(max-width: 768px)');
export const useIsExtraMobile = () => useMediaQuery('(max-width: 520px)');
