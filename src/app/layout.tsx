"use client";

import localFont from "next/font/local";
import "./globals.css";
import ChakraProviderWrapper from "./components/ChakraProviderWrapper";
import ClientLayout from "./components/ClientLayout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ChakraProviderWrapper>
          <ClientLayout>{children}</ClientLayout>
        </ChakraProviderWrapper>
      </body>
    </html>
  );
}
