"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, MapPin, Calendar, Play, Sparkles, Star, TrendingUp } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      clearTimeout(timer)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const parallaxOffset = scrollY * 0.5

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 209, 255, 0.03) 0%, transparent 50%),
          linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)
        `
      }}
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-skillshift-cyan/10 to-skillshift-orange/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translate(${parallaxOffset * 0.5}px, ${parallaxOffset * 0.3}px)` }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-skillshift-orange/8 to-skillshift-cyan/8 rounded-full blur-3xl animate-pulse"
          style={{ 
            transform: `translate(${-parallaxOffset * 0.3}px, ${-parallaxOffset * 0.4}px)`,
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-skillshift-cyan/5 to-skillshift-orange/5 rounded-full blur-3xl"
          style={{ transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.0005})` }}
        />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-skillshift-cyan/20 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-32 w-3 h-3 bg-skillshift-orange/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-32 w-2 h-2 bg-skillshift-cyan/25 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-skillshift-orange/15 rounded-full animate-bounce" style={{ animationDelay: '3s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1200 ease-out ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-12"}`}>
          
          {/* Premium Badge */}
          <div className="mb-12 inline-flex items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-skillshift-cyan/20 to-skillshift-orange/20 rounded-full blur opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-full px-8 py-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <Sparkles className="h-5 w-5 text-skillshift-orange animate-pulse" />
                  <span className="text-sm font-bold text-skillshift-navy uppercase tracking-[0.2em]">
                    Global SkillShift Presents
                  </span>
                  <div className="flex space-x-1">
                    <Star className="h-4 w-4 text-skillshift-cyan fill-current" />
                    <Star className="h-4 w-4 text-skillshift-cyan fill-current" />
                    <Star className="h-4 w-4 text-skillshift-cyan fill-current" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Hero Title */}
          <div className="mb-12 space-y-6">
            {/* Pre-title */}
            <div 
              className="text-lg md:text-xl font-semibold text-gray-600 uppercase tracking-[0.3em] opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              Welcome to the Future
            </div>

            {/* Main Title - Reduced but Enhanced */}
            <h1 className="space-y-2">
              <div 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-skillshift-navy leading-[0.9] tracking-tight opacity-0 animate-fade-in-up"
                style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
              >
                Beyond the
              </div>
              <div 
                className="relative inline-block opacity-0 animate-fade-in-up"
                style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
              >
                <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-gradient-primary leading-[0.9] tracking-tight">
                  Skill
                </span>
                {/* Enhanced decorative elements */}
                <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4">
                  <div className="relative">
                    <div className="w-4 h-4 md:w-6 md:h-6 bg-skillshift-orange rounded-full animate-ping opacity-30"></div>
                    <div className="absolute inset-0 w-4 h-4 md:w-6 md:h-6 bg-skillshift-orange rounded-full"></div>
                  </div>
                </div>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-gradient-primary leading-[0.9] tracking-tight blur-sm opacity-20 -z-10">
                  Skill
                </div>
              </div>
            </h1>
            
            {/* Enhanced Tagline */}
            <div 
              className="relative inline-block opacity-0 animate-fade-in-up"
              style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-skillshift-orange tracking-wide">
                Link. Learn. Leap.
              </div>
              {/* Underline decoration */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-skillshift-cyan to-skillshift-orange rounded-full opacity-60"></div>
            </div>

            {/* Subtitle */}
            <div 
              className="text-lg md:text-xl text-gray-500 font-medium tracking-wide opacity-0 animate-fade-in-up max-w-2xl mx-auto"
              style={{ animationDelay: '1.3s', animationFillMode: 'forwards' }}
            >
              Where Innovation Meets Opportunity
            </div>
          </div>

          {/* Enhanced Description */}
          <p 
            className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-16 leading-relaxed font-medium opacity-0 animate-fade-in-up"
            style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}
          >
            More than an event. The beginning of a{" "}
            <span className="relative inline-block">
              <span className="text-skillshift-cyan font-bold">movement</span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-skillshift-cyan/30"></div>
            </span>
            . Join over{" "}
            <span className="relative inline-block">
              <span className="text-skillshift-orange font-bold">1,000 young minds</span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-skillshift-orange/30"></div>
            </span>
            {" "}across Africa as we transform skills into real opportunities.
          </p>

          {/* Enhanced Stats Cards */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto opacity-0 animate-fade-in-up"
            style={{ animationDelay: '1.7s', animationFillMode: 'forwards' }}
          >
            {[
              { icon: Calendar, title: "Coming Soon", subtitle: "2025", color: "skillshift-cyan", accent: "🚀" },
              { icon: MapPin, title: "UNILAG Campus", subtitle: "Lagos, Nigeria", color: "skillshift-orange", accent: "🌍" },
              { icon: Users, title: "1,000+ Attendees", subtitle: "+ 5,000 Digital Viewers", color: "skillshift-navy", accent: "⚡" }
            ].map((item, index) => (
              <div 
                key={index}
                className="group relative"
                style={{ animationDelay: `${1.9 + index * 0.2}s` }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-skillshift-cyan/20 to-skillshift-orange/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-all duration-300">
                    {item.accent}
                  </div>
                  <div className={`w-16 h-16 bg-${item.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300`}>
                    <item.icon className={`h-8 w-8 text-${item.color}`} />
                  </div>
                  <div className="text-skillshift-navy font-bold text-xl mb-2">{item.title}</div>
                  <div className="text-gray-600 font-medium">{item.subtitle}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '2.3s', animationFillMode: 'forwards' }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-skillshift-cyan to-skillshift-orange rounded-2xl blur opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
              <Button className="relative bg-gradient-to-r from-skillshift-cyan to-skillshift-orange hover:from-skillshift-orange hover:to-skillshift-cyan text-white font-bold px-12 py-6 text-xl rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 group">
                <span className="flex items-center space-x-3">
                  <TrendingUp className="h-6 w-6" />
                  <span>Join the Movement</span>
                  <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-white/50 rounded-2xl blur opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
              <Button className="relative bg-white/90 backdrop-blur-xl border-2 border-gray-200/50 text-skillshift-navy hover:bg-skillshift-navy hover:text-white font-bold px-12 py-6 text-xl rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group">
                <span className="flex items-center space-x-3">
                  <Play className="h-6 w-6" />
                  <span>Watch Trailer</span>
                </span>
              </Button>
            </div>
          </div>

          {/* Enhanced Sponsor CTA */}
          <div 
            className="text-center opacity-0 animate-fade-in-up"
            style={{ animationDelay: '2.6s', animationFillMode: 'forwards' }}
          >
            <p className="text-gray-600 mb-6 text-lg font-medium">Ready to champion youth empowerment?</p>
            <div className="relative group inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-skillshift-orange/30 to-skillshift-cyan/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <Button className="relative bg-transparent border-2 border-skillshift-orange text-skillshift-orange hover:bg-skillshift-orange hover:text-white font-bold px-10 py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105 group">
                <span className="flex items-center space-x-2">
                  <Sparkles className="h-5 w-5" />
                  <span>Become a Sponsor</span>
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '3s', animationFillMode: 'forwards' }}
        >
          <div className="relative group cursor-pointer">
            <div className="w-8 h-14 border-2 border-skillshift-cyan/40 rounded-full flex justify-center group-hover:border-skillshift-cyan transition-all duration-300 bg-white/50 backdrop-blur-sm">
              <div className="w-2 h-6 bg-skillshift-cyan/60 rounded-full mt-2 animate-bounce group-hover:bg-skillshift-cyan"></div>
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300">
              Scroll to explore
            </div>
          </div>
        </div>
      </div>

      {/* Premium Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-px h-32 bg-gradient-to-b from-transparent via-skillshift-cyan/20 to-transparent"></div>
        <div className="absolute top-1/2 right-0 w-px h-40 bg-gradient-to-b from-transparent via-skillshift-orange/20 to-transparent"></div>
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-skillshift-cyan/20 to-transparent"></div>
      </div>
    </section>
  )
}