import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CallRoleContext from "@/components/CallRoleContext";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aru Web App",
  description: "Your AI interpreter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CallRoleContext>
          <div className="flex flex-col h-screen">
            <Header />
            {children}    
          </div>
        </CallRoleContext>
      </body>
    </html>
  );
}