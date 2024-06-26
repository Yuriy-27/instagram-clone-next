import { Inter } from "next/font/google";
import Header from "@/components/Header";
import SessionWrapper from "@/components/SessionWrapper";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Instagram clone",
  description:
    "A clone of Instagram built with Next.js, Firebase and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <html lang='en'>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </SessionWrapper>
  );
}
