"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 20)
      
      // Update active section based on scroll position
      const sections = ["about", "sponsors", "testimonials", "contact"]
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(currentSection || "")
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "About", href: "#about", id: "about" },
    { label: "Sponsors", href: "#sponsors", id: "sponsors" },
    { label: "Testimonials", href: "#testimonials", id: "testimonials" },
    { label: "Contact", href: "#contact", id: "contact" },
  ]

  const handleSmoothScroll = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Premium Navigation Bar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${
          isScrolled 
            ? "bg-white/80 backdrop-blur-2xl shadow-xl border-b border-gray-100/50" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Premium Logo Section */}
            <div className="flex-shrink-0 group cursor-pointer">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-skillshift-cyan/20 to-skillshift-orange/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3 border border-gray-100/50 shadow-lg group-hover:shadow-xl transition-all duration-500">
                  <h1 className="text-3xl font-black text-gradient-primary font-sans tracking-tight leading-none">
                    SkillShift
                  </h1>
                  <p className="text-xs text-skillshift-orange font-bold tracking-[0.2em] uppercase mt-1 opacity-80">
                    Link. Learn. Leap.
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-2">
                {navItems.map((item, index) => (
                  <button
                    key={item.label}
                    onClick={() => handleSmoothScroll(item.href)}
                    className={`relative px-6 py-3 text-base font-semibold transition-all duration-300 rounded-xl group ${
                      activeSection === item.id
                        ? "text-skillshift-cyan bg-skillshift-cyan/10"
                        : "text-gray-700 hover:text-skillshift-cyan hover:bg-gray-50"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-skillshift-cyan/10 scale-100"
                        : "bg-skillshift-cyan/5 scale-0 group-hover:scale-100"
                    }`}></div>
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 transition-all duration-300 ${
                      activeSection === item.id
                        ? "w-8 bg-skillshift-cyan"
                        : "w-0 bg-skillshift-cyan group-hover:w-6"
                    }`}></div>
                  </button>
                ))}
              </div>
            </div>

            {/* Sophisticated Premium CTA Button */}
            <div className="hidden lg:block">
              <div className="relative group">
                {/* Animated background glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-skillshift-cyan via-purple-500 to-skillshift-orange rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-700 animate-pulse"></div>
                
                {/* Main button container */}
                <div className="relative">
                  {/* Glass morphism background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-gray-100/30 backdrop-blur-xl rounded-2xl border border-white/30 shadow-2xl"></div>
                  
                  {/* Inner gradient border */}
                  <div className="absolute inset-[1px] bg-gradient-to-r from-skillshift-cyan/10 to-skillshift-orange/10 rounded-2xl"></div>
                  
                  <Button className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 hover:from-skillshift-cyan hover:via-purple-600 hover:to-skillshift-orange text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 border-0 overflow-hidden group">
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out"></div>
                    
                    <span className="relative flex items-center space-x-3">
                      <span className="text-sm font-extrabold tracking-wide">Join the Movement</span>
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Sophisticated Mobile Menu Button */}
            <div className="lg:hidden">
              <div className="relative group">
                {/* Subtle glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-skillshift-cyan/30 to-skillshift-orange/30 rounded-xl blur opacity-0 group-hover:opacity-60 transition-all duration-300"></div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="relative p-3 bg-white/60 backdrop-blur-md border border-gray-200/50 hover:bg-white/80 hover:border-skillshift-cyan/30 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl group"
                >
                  {/* Button background with subtle gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-gray-50/60 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative w-6 h-6">
                    <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-300 text-gray-700 group-hover:text-skillshift-cyan ${isMobileMenuOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'}`} />
                    <X className={`absolute inset-0 w-6 h-6 transition-all duration-300 text-gray-700 group-hover:text-skillshift-orange ${isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75'}`} />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen 
            ? "max-h-screen opacity-100" 
            : "max-h-0 opacity-0 pointer-events-none"
        }`}>
          <div className="mx-4 mb-4 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-gray-100/50 overflow-hidden">
            <div className="p-6 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => handleSmoothScroll(item.href)}
                  className={`w-full text-left px-6 py-4 text-lg font-semibold transition-all duration-300 rounded-2xl group ${
                    activeSection === item.id
                      ? "text-skillshift-cyan bg-skillshift-cyan/10"
                      : "text-gray-700 hover:text-skillshift-cyan hover:bg-gray-50"
                  }`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transition: `all 0.5s ease-out ${index * 100}ms`
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeSection === item.id ? "bg-skillshift-cyan" : "bg-transparent"
                    }`}></div>
                  </div>
                </button>
              ))}
              
              {/* Sophisticated Mobile CTA */}
              <div className="pt-4 border-t border-gray-100">
                <div className="relative group">
                  {/* Animated background glow */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-skillshift-cyan via-purple-500 to-skillshift-orange rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-700"></div>
                  
                  {/* Main button container */}
                  <div className="relative">
                    {/* Glass morphism background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-gray-100/30 backdrop-blur-xl rounded-2xl border border-white/30 shadow-2xl"></div>
                    
                    <Button className="relative w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 hover:from-skillshift-cyan hover:via-purple-600 hover:to-skillshift-orange text-white font-bold py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-500 border-0 overflow-hidden group">
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out"></div>
                      
                      <span className="relative flex items-center justify-center space-x-3">
                        <span className="text-sm font-extrabold tracking-wide">Join the Movement</span>
                        <div className="flex space-x-1">
                          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-100/20">
        <div 
          className="h-full bg-gradient-to-r from-skillshift-cyan via-purple-500 to-skillshift-orange transition-all duration-300 ease-out shadow-lg"
          style={{
            width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`,
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
          }}
        ></div>
      </div>
    </>
  )
}