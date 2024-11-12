import useMediaQuery from "@/app/hooks/useMediaQuery";

export const useIsMobile = () => useMediaQuery('(max-width: 768px)');
