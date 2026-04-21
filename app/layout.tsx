import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/ui/SmoothScrolling";
import Navbar from "@/components/ui/Navbar"; // Check kar lena path yahi hai na

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  title: "American Dream Mall | High-End Retail Experience",
  description: "The future of retail is an experience. Explore American Dream Mall.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-background text-text selection:bg-accent selection:text-black">
        <SmoothScrolling>
          <Navbar />
          <main>
            {children}
          </main>
        </SmoothScrolling>
      </body>
    </html>
  );
}