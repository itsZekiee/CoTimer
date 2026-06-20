import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoTimer - Professional Velocity Engine",
  description: "Advanced analytics for velocity-driven teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
