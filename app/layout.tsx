import type React from "react"
import type { Metadata } from "next"
import { Crimson_Pro } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "CJ-6 | Nanchang Yaohu Flight Base",
  description:
    "The Nanchang CJ-6: China's first indigenously designed and mass-produced trainer aircraft. Over 3,000 built, 10 million flight hours, zero design-related fatal accidents.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${crimsonPro.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
