import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Neel Patel",
  description: "Frontend developer building AI powered web apps",
};

export default function RootLayout({ children }) {
  return (
    <html>
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
