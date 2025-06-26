"use client"; // We need this for state management (useState)

import { useState } from "react";
import "./globals.css"; // Your global styles
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

const inter = Inter({ subsets: ["latin"] });

// Note: We are no longer exporting metadata from here since this is a client component.
// You can move metadata to a child server component or the page itself.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-slate-50">
          <Sidebar 
            isOpen={isSidebarOpen} 
            onClose={() => setSidebarOpen(false)} 
          />
          <Header 
            onMenuClick={() => setSidebarOpen(true)} 
          />
          <main className="flex-grow">
            {children}
          </main>
          {/* You could add a Footer component here if needed */}
        </div>
      </body>
    </html>
  );
}