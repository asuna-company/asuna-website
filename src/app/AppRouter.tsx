"use client";

import { createContext, useContext, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface AppRouterContextType {
  navigateToHome: () => void;
  navigateTo: (path: string) => void;
}

const AppRouterContext = createContext<AppRouterContextType | undefined>(undefined);

export const useAppRouter = () => useContext(AppRouterContext);

export const AppRouterProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const navigateToHome = () => {
    router.push('/');
  };

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <AppRouterContext.Provider value={{ navigateToHome, navigateTo }}>
      {children}
    </AppRouterContext.Provider>
  );
};
