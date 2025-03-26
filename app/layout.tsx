import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Always Early",
  description: "Get in Early to Degen Calls. Beat the Cabals, KOLs and FnFs to their game.",
    generator: 'Sam.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
       <head>
          {/* Add the favicon link here */}
          <link rel="icon" href="/rocket.ico" type="image/png" />
        </head>
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}



import './globals.css'