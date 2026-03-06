import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MarketEdge Advisory",
  description: "Is Your Marketing Driving Growth or Just Keeping You Busy?",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}