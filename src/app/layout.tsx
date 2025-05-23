import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider, SignIn, SignedIn, SignedOut } from "@clerk/nextjs";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SEPF",
  description: "Frontend for the Scalable E-Commerce Platform project",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider>
          <SignedIn>{children}</SignedIn>
          <SignedOut>
            <div className="h-screen flex items-center justify-center">
              <SignIn />
            </div>
          </SignedOut>
        </ClerkProvider>
      </body>
    </html>
  );
};

export default Layout;
