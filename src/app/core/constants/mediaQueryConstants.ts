import useMediaQuery from "@/app/hooks/useMediaQuery";

export const useIsMobile = () => useMediaQuery('(max-width: 768px)');
export const useIsExtraMobile = () => useMediaQuery('(max-width: 520px)');
