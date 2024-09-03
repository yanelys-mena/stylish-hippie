import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from './components/Nav';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "kindhippie",
  description: "Sustainably shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
   
      <body className={inter.className}>
        <Nav>THIS IS THE NAV</Nav>
        BODY{children}</body>
    </html>
  );
}
