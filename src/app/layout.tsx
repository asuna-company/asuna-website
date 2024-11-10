import { AppRouterProvider } from "./AppRouter";
import "./globals.css";

import { metadata } from "./core/configs/metadata";

export { metadata };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt_BR">
      <body className="bg-[var(--foreground)]">
        <AppRouterProvider>
          {children}
        </AppRouterProvider>
      </body>
    </html>
  );
}