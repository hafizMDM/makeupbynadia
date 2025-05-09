import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { baseMetadata } from './metadata';
import "./globals.css";

const geistSans = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Montserrat({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...baseMetadata,
  icons: {
    icon: [
      { url: '/favicon/favicon-circular-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-circular-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-circular-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
