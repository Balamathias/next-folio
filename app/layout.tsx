import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });
const poppins = Inter({ subsets: ["latin"], weight: ['300', '500', '700']});

export const metadata: Metadata = {
  title: "Mathias Bala's Portfolio",
  description: "A simple portfolio by Bala Mathias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/vitals/logo.png" sizes="any" />
      </head>
      <body className={cn(poppins.className, 'antialiased')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
