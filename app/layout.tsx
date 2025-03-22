import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MCAT Simulation Platform",
  description: "A realistic MCAT exam simulation environment"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Force reload CSS for GitHub Pages */}
        {process.env.NODE_ENV === "production" && (
          <link rel="stylesheet" href="/mcat-sim/_next/static/css/app/layout.css" />
        )}
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        {/* Add a script to fix CSS loading issues on GitHub Pages */}
        {process.env.NODE_ENV === "production" && (
          <Script id="fix-css" strategy="afterInteractive">
            {`
              (function() {
                // Force reload CSS if it wasn't loaded correctly
                const links = document.querySelectorAll('link[rel="stylesheet"]');
                if (links.length === 0 || !document.querySelector('style')) {
                  const link = document.createElement('link');
                  link.rel = 'stylesheet';
                  link.href = '/mcat-sim/_next/static/css/app/layout.css';
                  document.head.appendChild(link);
                }
              })();
            `}
          </Script>
        )}
      </body>
    </html>
  )
}



import './globals.css'