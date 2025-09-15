"use client"

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Import components that don't use browser APIs normally
import { AboutSection } from "@/components/about-section"

// Dynamically import components that use browser APIs with SSR disabled
const Navigation = dynamic(() => import("@/components/navigation").then(mod => ({ default: mod.Navigation })), {
  ssr: false,
  loading: () => (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-2xl shadow-xl border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3 border border-gray-100/50 shadow-lg">
              <h1 className="text-3xl font-black text-gray-800 font-sans tracking-tight leading-none">
                SkillShift
              </h1>
              <p className="text-xs text-gray-600 font-bold tracking-[0.2em] uppercase mt-1 opacity-80">
                Link. Learn. Leap.
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
})

const HeroSection = dynamic(() => import("@/components/hero-section").then(mod => ({ default: mod.HeroSection })), {
  ssr: false,
  loading: () => (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-24">
      <div className="text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded-full w-64 mx-auto mb-4"></div>
          <div className="h-16 bg-gray-200 rounded-lg w-96 mx-auto mb-6"></div>
          <div className="h-4 bg-gray-200 rounded w-80 mx-auto"></div>
        </div>
      </div>
    </section>
  )
})

const SponsorshipSection = dynamic(() => import("@/components/sponsorship-section").then(mod => ({ default: mod.SponsorshipSection })), {
  ssr: false,
  loading: () => (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded-lg w-96 mx-auto mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-64 bg-gray-200 rounded-2xl"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

const SpeakersSection = dynamic(() => import("@/components/speakers-section").then(mod => ({ default: mod.default })), {
  ssr: false,
  loading: () => (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded-full w-48 mx-auto mb-6"></div>
            <div className="h-16 bg-gray-200 rounded-lg w-80 mx-auto mb-8"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto mb-12"></div>
            
            {/* Featured Speaker Loading */}
            <div className="bg-gray-100 rounded-3xl p-12 mb-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="h-6 bg-gray-200 rounded-full w-32 mb-4"></div>
                  <div className="h-12 bg-gray-200 rounded-lg w-64 mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded w-48 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-40 mb-6"></div>
                  <div className="h-20 bg-gray-200 rounded-lg mb-6"></div>
                  <div className="flex gap-2 mb-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-8 bg-gray-200 rounded-full w-20"></div>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <div className="h-12 bg-gray-200 rounded-xl w-32"></div>
                    <div className="h-12 bg-gray-200 rounded-xl w-28"></div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-80 h-80 bg-gray-200 rounded-3xl"></div>
                </div>
              </div>
            </div>
            
            {/* Other Speakers Grid Loading */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-100 rounded-2xl p-8">
                  <div className="w-24 h-24 bg-gray-200 rounded-2xl mx-auto mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded w-32 mx-auto mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-28 mx-auto mb-1"></div>
                  <div className="h-3 bg-gray-200 rounded w-24 mx-auto mb-4"></div>
                  <div className="h-16 bg-gray-200 rounded mx-auto mb-4"></div>
                  <div className="flex gap-2 justify-center mb-4">
                    <div className="h-6 bg-gray-200 rounded-full w-16"></div>
                    <div className="h-6 bg-gray-200 rounded-full w-20"></div>
                  </div>
                  <div className="flex gap-2 justify-center">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="w-10 h-10 bg-gray-200 rounded-xl"></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

const MeetTeamSection = dynamic(() => import("@/components/team-section").then(mod => ({ default: mod.MeetTeamSection })), {
  ssr: false,
  loading: () => (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="h-48 bg-gray-200 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
})

const Footer = dynamic(() => import("@/components/footer").then(mod => ({ default: mod.Footer })), {
  ssr: false,
  loading: () => (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-pulse">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <div className="h-6 bg-gray-700 rounded w-32 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-700 rounded w-24"></div>
                  <div className="h-4 bg-gray-700 rounded w-20"></div>
                  <div className="h-4 bg-gray-700 rounded w-28"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
})

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-2xl shadow-xl border-b border-gray-100/50 h-24">
          <div className="flex items-center justify-center h-full">
            <div className="animate-pulse text-2xl font-bold text-gray-400">Loading...</div>
          </div>
        </nav>
      }>
        <Navigation />
      </Suspense>
      
      <Suspense fallback={
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-24">
          <div className="animate-pulse text-xl text-gray-400">Loading Hero...</div>
        </section>
      }>
        <HeroSection />
      </Suspense>
      
      <AboutSection />
      
      <Suspense fallback={
        <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <div className="text-center animate-pulse text-xl text-gray-400">Loading Sponsorship...</div>
        </section>
      }>
        <SponsorshipSection />
      </Suspense>
      
      <Suspense fallback={
        <section className="py-24 bg-white">
          <div className="text-center animate-pulse text-xl text-gray-400">Loading Speakers...</div>
        </section>
      }>
        <SpeakersSection />
      </Suspense>
      
      <Suspense fallback={
        <section className="py-24 bg-white">
          <div className="text-center animate-pulse text-xl text-gray-400">Loading Team...</div>
        </section>
      }>
        <MeetTeamSection />
      </Suspense>
      
      <Suspense fallback={
        <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white py-16">
          <div className="text-center animate-pulse text-xl text-gray-300">Loading Footer...</div>
        </footer>
      }>
        <Footer />
      </Suspense>
    </main>
  )
}