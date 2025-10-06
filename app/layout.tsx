import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "@/app/globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/app/components/headers/Header";
import Footer from "@/app/components/Footer";
import ThemeProvider from "@/app/components/headers/ThemeProvider";
import { MobileNavProvider } from "@/app/MobileNavContext";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arsalan Ahmed Khatri | Portfolio",
  description:
    "A website showcasing personal projects of Arsalan Ahmed Khatri",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="CnlwpaPq5AkFDd-p3szQDoH4TKkdW43R_fRCcNoLF1Q"
        />
        <link rel="author" href="https://github.com/arslankha3" />
        <meta name="author" content="Arsalan Ahmed Khatri" />
        <meta name="creator" content="Arsalan Ahmed Khatri" />
      </head>

      <body className={inter.className}>
        <MobileNavProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
            storageKey="newTheme2"
          >
            <Header />
            <div className="-mt-[68px] md:-mt-[75px] relative overflow-hidden">
              {children}
            </div>
            <Footer />
            <Toaster />
          </ThemeProvider>
        </MobileNavProvider>

        <Analytics />
      </body>
    </html>
  );
}
