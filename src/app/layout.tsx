import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  style: "normal",
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700", "800", "900"],
});
const jetBrains = JetBrains_Mono({
  style: "normal",
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Nishchit's Portfolio",
  description: "Hey!! have a glance at my portfolio..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetBrains.className}>{children}
      </body>
    </html>
  );
}
