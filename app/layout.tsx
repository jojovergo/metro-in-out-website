import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Layout/Navbar";
import { Footer } from "@/components/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "METRO IN & OUT | Gas Station & Convenience Store - Oklahoma City, OK",
  description: "Your one-stop gas station and convenience store in Oklahoma City, located at 2401 Shull Avenue. Quick fuel, fresh snacks, cold drinks, and friendly service.",
  keywords: ["gas station OKC", "convenience store Oklahoma City", "Metro In & Out", "2401 Shull Avenue", "fuel near me"],
  openGraph: {
    title: "METRO IN & OUT | Gas Station & Convenience Store - OKC",
    description: "Quick fuel, fresh snacks, cold drinks, and friendly service at 2401 Shull Ave, OKC.",
    url: "https://www.metroinout.com", // Replace with your live domain
    siteName: "METRO IN & OUT",
    type: "website",
    images: [
        {
            url: "https://www.metroinout.com/og-image.jpg", // Create this image for social shares
            width: 1200,
            height: 630,
            alt: "METRO IN & OUT Storefront",
        },
    ],
  },
  // Add LocalBusiness Schema here if possible, or directly in the index page
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}