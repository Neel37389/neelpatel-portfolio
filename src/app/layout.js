import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Neel Patel | Frontend Developer",
  description:
    "Frontend developer building AI powered web apps. Specializing in React, Next.js, and modern web technologies.",
  keywords: [
    "Neel Patel",
    "Frontend Developer",
    "Web Developer",
    "Javascript",
    "React",
    "Next.js",
    "AI",
    "Tailwind CSS",
    "Portfolio",
  ],
  authors: [{ name: "Neel Patel" }],
  creator: "Neel Patel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://neelpatel-portfolio.vercel.app",
    title: "Neel Patel | Frontend Developer",
    description:
      "Frontend developer building AI powered web apps. Specializing in React, Next.js, and modern web technologies.",
    siteName: "Neel Patel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neel Patel | Frontend Developer",
    description: "Frontend developer building AI powered web apps",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
