import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const dmSans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
})

const geistMono = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "SkillShift: Beyond the Skill | Link. Learn. Leap.",
  description:
    "Join over 1,000 young minds at Africa's premier empowerment summit. Turn your skills into real opportunities with Global SkillShift's Beyond the Skill event.",
  keywords:
    "skillshift, beyond the skill, empowerment summit, africa youth, skills development, networking, mentorship, career opportunities",
  openGraph: {
    title: "SkillShift: Beyond the Skill | Link. Learn. Leap.",
    description:
      "Join over 1,000 young minds at Africa's premier empowerment summit. Turn your skills into real opportunities.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${dmSans.variable} ${geistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}