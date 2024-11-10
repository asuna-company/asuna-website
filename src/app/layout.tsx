import localFont from "next/font/local";
import { AppRouterProvider } from "./AppRouter";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

import { metadata } from "./configs/metadata";

export { metadata };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt_BR">
      <body>
        <AppRouterProvider>
          {children}
        </AppRouterProvider>
      </body>
    </html>
  );
}