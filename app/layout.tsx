import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteActions } from "@/components/site-actions";
import { GlobalScrollMotion } from "@/components/ui/global-scroll-motion";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gbuid-solutions.online"),
  title: {
    default: "GBuild Solutions",
    template: "%s | GBuild Solutions",
  },
  description:
    "Software systems, AI workflows, web platforms, and business digitalization for companies that need clear technical execution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${urbanist.variable} h-full antialiased`}
    >
      <body className="min-h-full text-foreground">
        <SiteHeader />
        <main data-scroll-root className="overflow-x-hidden w-full max-w-full">
          {children}
        </main>
        <SiteFooter />
        <SiteActions />
        <GlobalScrollMotion />
      </body>
    </html>
  );
}
