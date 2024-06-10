import type { Metadata } from "next";
import { Montserrat, Teko } from "next/font/google";
import "./globals.css";

const teko = Teko({ subsets: ["latin"], variable: "--font-teko" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://albcanada.ca"),
  keywords: [
    "Roofing",
    "Flat Roofing",
    "Gutters",
    "Siding",
    "Pressure Washing",
    "Moss Removal",
  ],
  title: {
    default:
      "ALBCanada Construction - Professional Roofing Services in Victoria, BC",
    template:
      "%s | AlbCanada Construction - Professional Roofing Services in Victoria, BC",
  },
  openGraph: {
    description:
      "AlbCanada Construction. Discover top-quality roofing services in Victoria, BC. Our expert team offers reliable roof installation, repair, and maintenance solutions. Trust us for durable and efficient roofing tailored to your needs. Fill out a form for a free consultation!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${teko.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
