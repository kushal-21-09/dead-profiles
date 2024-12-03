import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Dead Profiles',
  description:
      'A secure web page to display crematorium rooms, displaying room details like availability, floor, and status.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
