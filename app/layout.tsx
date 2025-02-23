import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Madeleine Mary Walker Foundation",
  description: "Supporting education since 1997",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
      <meta name="apple-mobile-web-app-title" content="MMWF" />
      </head>
      <body className="bg-white text-gray-900 font-sans antialiased">
        <div className="min-h-screen flex flex-col">
          <Header siteTitle="Madeleine Mary Walker Foundation" />
          <main className="flex flex-col flex-1 justify-center max-w-7xl mx-auto px-4 py-8 md:p-8 w-full">
            {children}
          </main>
          <footer className="bg-teal-600 shadow-lg text-white">
            <div className="flex justify-between max-w-7xl mx-auto p-4 md:p-8 text-sm">
              <p>
                Created by{" "}
                <a href="https://tomgreen.dev" className="font-bold no-underline text-white">
                  Tom Green
                </a>
              </p>
              <p>
                Reg. Charity Commission No <span className="font-bold">1062657</span>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
