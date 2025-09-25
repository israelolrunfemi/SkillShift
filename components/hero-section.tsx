"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, MapPin, Calendar, Sparkles, Star, TrendingUp, Ticket } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsClient(true)
    const timer = setTimeout(() => setIsVisible(true), 300)
    
    const handleMouseMove = (e: MouseEvent) => {
      if (typeof window !== 'undefined') {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
    }

    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setScrollY(window.scrollY)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('scroll', handleScroll)
    }
    
    return () => {
      clearTimeout(timer)
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const parallaxOffset = scrollY * 0.5

  // Fallback for SSR
  if (!isClient) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-24 md:pt-32">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded-full w-64 mx-auto mb-8"></div>
            <div className="h-20 bg-gray-200 rounded-lg w-96 mx-auto mb-8"></div>
            <div className="h-6 bg-gray-200 rounded w-80 mx-auto mb-12"></div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-32 bg-gray-200 rounded-2xl"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-24 md:pt-32"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.03) 0%, transparent 50%),
          linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)
        `
      }}
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        {/* Toned Down Gradient Orbs - Responsive */}
        <div 
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-400/8 to-purple-400/8 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translate(${parallaxOffset * 0.5}px, ${parallaxOffset * 0.3}px)` }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-r from-orange-400/6 to-pink-400/6 rounded-full blur-3xl animate-pulse"
          style={{ 
            transform: `translate(${-parallaxOffset * 0.3}px, ${-parallaxOffset * 0.4}px)`,
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] bg-gradient-to-r from-gray-200/5 to-gray-300/5 rounded-full blur-3xl"
          style={{ transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.0005})` }}
        />
        
        {/* Subtle Floating Elements - Responsive */}
        <div className="absolute top-20 left-4 sm:left-20 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400/20 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
        <div className="absolute top-32 sm:top-40 right-8 sm:right-32 w-2 h-2 sm:w-3 sm:h-3 bg-purple-400/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 sm:bottom-40 left-8 sm:left-32 w-2 h-2 bg-orange-400/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-16 sm:bottom-20 right-4 sm:right-20 w-4 h-4 sm:w-5 sm:h-5 bg-pink-400/15 rounded-full animate-bounce" style={{ animationDelay: '3s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1200 ease-out ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-12"}`}>
          
          {/* Refined Badge */}
          <div className="mb-8 sm:mb-12 inline-flex items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/95 backdrop-blur-xl border border-gray-200/60 rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 shadow-lg">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 animate-pulse" />
                  <span className="text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                    Global SkillShift Presents
                  </span>
                  <div className="flex space-x-1">
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 fill-current" />
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 fill-current" />
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 fill-current" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Balanced Hero Title - Less Overwhelming Colors */}
          <div className="mb-8 sm:mb-12 space-y-4 sm:space-y-6">
            {/* Pre-title */}
            <div 
              className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-600 uppercase tracking-[0.2em] sm:tracking-[0.3em] opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              Welcome to the Future
            </div>

            {/* Main Title - More Balanced Colors */}
            <h1 className="space-y-1 sm:space-y-2">
              <div 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-gray-800 leading-[0.9] tracking-tight opacity-0 animate-fade-in-up"
                style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
              >
                Beyond the
              </div>
              <div 
                className="relative inline-block opacity-0 animate-fade-in-up"
                style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
              >
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text leading-[0.9] tracking-tight">
                  Skill
                </span>
                {/* Refined decorative elements - Responsive */}
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 md:-top-4 md:-right-4">
                  <div className="relative">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-blue-500 rounded-full animate-ping opacity-30"></div>
                    <div className="absolute inset-0 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text leading-[0.9] tracking-tight blur-sm opacity-20 -z-10">
                  Skill
                </div>
              </div>
            </h1>
            
            {/* Refined Tagline */}
            <div 
              className="relative inline-block opacity-0 animate-fade-in-up"
              style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}
            >
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 tracking-wide">
                Link. Learn. Leap.
              </div>
              {/* Underline decoration - Single color */}
              <span className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-blue-500 rounded-full opacity-60 block"></span>
            </div>

            {/* Subtitle - Neutral with accent */}
            <div 
              className="text-base sm:text-lg md:text-xl text-gray-600 font-medium tracking-wide opacity-0 animate-fade-in-up max-w-xl sm:max-w-2xl mx-auto px-4"
              style={{ animationDelay: '1.3s', animationFillMode: 'forwards' }}
            >
              Where Innovation Meets Opportunity
            </div>
          </div>

          {/* Refined Description */}
          <div 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto mb-12 sm:mb-16 leading-relaxed font-medium opacity-0 animate-fade-in-up px-4"
            style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}
          >
            <p className="mb-0">
              More than an event. The beginning of a{" "}
              <span className="relative inline-block">
                <span className="text-blue-600 font-bold">movement</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 block"></span>
              </span>
              . Join over{" "}
              <span className="relative inline-block">
                <span className="text-purple-600 font-bold">1,000 young minds</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-500 block"></span>
              </span>
              {" "}across Africa as we transform skills into real opportunities.
            </p>
          </div>

          {/* Refined Stats Cards */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 max-w-6xl mx-auto opacity-0 animate-fade-in-up px-4"
            style={{ animationDelay: '1.7s', animationFillMode: 'forwards' }}
          >
            {[
              { icon: Calendar, title: "December 13th", subtitle: "2025", color: "blue-600", accent: "🚀" },
              { icon: MapPin, title: "UNILAG Campus", subtitle: "Lagos, Nigeria", color: "emerald-600", accent: "🌍" },
              { icon: Users, title: "1,000+ Attendees", subtitle: "+ 5,000 Digital Viewers", color: "purple-600", accent: "⚡" }
            ].map((item, index) => (
              <div 
                key={index}
                className="group relative"
                style={{ animationDelay: `${1.9 + index * 0.2}s` }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-200/30 to-gray-300/30 rounded-2xl sm:rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-white/95 backdrop-blur-xl border border-gray-200/60 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                  <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 group-hover:scale-110 transition-all duration-300">
                    {item.accent}
                  </div>
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-${item.color}/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-300`}>
                    <item.icon className={`h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-${item.color}`} />
                  </div>
                  <div className="text-gray-900 font-bold text-lg sm:text-xl mb-2">{item.title}</div>
                  <div className="text-gray-600 font-medium text-sm sm:text-base">{item.subtitle}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Refined CTA Buttons */}
          <div 
            className="flex justify-center items-center mb-16 sm:mb-20 opacity-0 animate-fade-in-up px-4"
            style={{ animationDelay: '2.3s', animationFillMode: 'forwards' }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              {/* Primary CTA - Join the Movement */}
              <div className="relative group w-full sm:w-auto">
                {/* Subtle outer glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-700"></div>
                
                {/* Clean container */}
                <div className="relative">
                  <Button
                    asChild
                    className="relative w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 border-0 overflow-hidden group"
                  >
                    <a
                      href="https://chat.whatsapp.com/JKYhr6RPUKc8QHyKCMvGBq?mode=ems_copy_c"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Join the Movement on WhatsApp"
                    >
                      {/* Subtle shimmer effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out"></div>
                      
                      <span className="relative flex items-center justify-center space-x-3">
                        <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />
                        <span>Join the Movement</span>
                        <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1" />
                      </span>
                    </a>
                  </Button>
                </div>
              </div>

              {/* Secondary CTA - Register Now */}
              <div className="relative group w-full sm:w-auto">
                {/* Subtle outer glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-3xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-700"></div>

                {/* Clean container */}
                <div className="relative">
                  <Button asChild className="...">
  <a
    href=""
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Register Now"
    className="relative flex items-center justify-center space-x-3"
  >
    <div className="absolute inset-0 ..."></div>
    <Ticket className="h-5 w-5 sm:h-6 sm:w-6" />
    <span>Register Now</span>
    <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1" />
  </a>
</Button>

                </div>
              </div>
            </div>
          </div>

          {/* Refined Sponsor CTA */}
          <div 
            className="text-center opacity-0 animate-fade-in-up px-4"
            style={{ animationDelay: '2.6s', animationFillMode: 'forwards' }}
          >
            <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg font-medium">Ready to champion youth empowerment?</p>
            <div className="relative group inline-block">
              {/* Subtle glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-700"></div>
              
              {/* Clean container */}
              <div className="relative">
                {/* Become a Sponsor button - fixed */}
  <Button
    asChild
    className="relative bg-transparent border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 font-bold px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-0.5 group overflow-hidden"
  >
    <a
      href="https://wa.link/kdi2iw"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Become a sponsor"
    >
      {/* Subtle shimmer effect */}
      <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 ease-out"></div>

      <span className="relative flex items-center space-x-2">
        <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
        <span>Become a Sponsor</span>
      </span>
    </a>
  </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Refined Scroll Indicator */}
        <div 
          className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '3s', animationFillMode: 'forwards' }}
        >
          <div className="relative group cursor-pointer">
            <div className="w-6 h-10 sm:w-8 sm:h-14 border-2 border-gray-400/60 rounded-full flex justify-center group-hover:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm">
              <div className="w-1.5 h-4 sm:w-2 sm:h-6 bg-blue-500/80 rounded-full mt-1.5 sm:mt-2 animate-bounce group-hover:bg-blue-500"></div>
            </div>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300">
              Scroll to explore
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-px h-16 sm:h-24 md:h-32 bg-gradient-to-b from-transparent via-gray-300/20 to-transparent"></div>
        <div className="absolute top-1/2 right-0 w-px h-20 sm:h-32 md:h-40 bg-gradient-to-b from-transparent via-gray-300/20 to-transparent"></div>
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-20 sm:w-32 md:w-40 h-px bg-gradient-to-r from-transparent via-gray-300/20 to-transparent"></div>
      </div>
    </section>
  )
}