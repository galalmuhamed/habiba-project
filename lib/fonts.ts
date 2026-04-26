import { Inter, Hanken_Grotesk, Open_Sans, Playfair } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
});

export const fontSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const playFair = Playfair({
  subsets: ["latin"],
  variable: "--font-playfair",
});
