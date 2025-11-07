import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Fira_Code } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Jaylord Manila – Full Stack Developer",
  description: "Fullstack developer building scalable and efficient web applications. ",
  authors: [{name: "Jaylord Manila"}],
  openGraph: {
    title: "Jaylord Manila – Full Stack Developer",
    description: "Fullstack developer building scalable and efficient web applications.",
    url: "https://jhaylhord.vercel.app/",
    siteName: "Jaylord Manila Portfolio",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{ fontFamily: `${spaceGrotesk.style.fontFamily}, ${firaCode.style.fontFamily}` }}>
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
