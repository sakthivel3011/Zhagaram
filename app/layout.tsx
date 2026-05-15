import type { Metadata } from "next";
import { Outfit, Michroma, Oxanium, Great_Vibes, Fira_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/app/components/CustomCursor";
import PageLoader from "@/app/components/PageLoader";
import SmoothScroll from "@/app/components/SmoothScroll";
import ScrollToTop from "@/app/components/ScrollToTop";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const michroma = Michroma({ weight: ["400"], subsets: ["latin"], variable: "--font-michroma" });
const oxanium = Oxanium({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-oxanium" });
const greatVibes = Great_Vibes({ weight: ["400"], subsets: ["latin"], variable: "--font-great-vibes" });
const firaSans = Fira_Sans({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-fira-sans" });

export const metadata: Metadata = {
  title: "Zhagaram | Rooted In Culture, Styled In Elegance.",
  description: "Creating unforgettable celebrations with luxury, creativity, and emotion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.variable} ${michroma.variable} ${oxanium.variable} ${greatVibes.variable} ${firaSans.variable} font-outfit bg-black text-white antialiased`}>
        <PageLoader />
        <CustomCursor />
        <ScrollToTop />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
