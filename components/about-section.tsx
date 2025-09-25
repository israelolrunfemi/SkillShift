"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Lightbulb, TrendingUp, CheckCircle2 } from "lucide-react"
import { Button } from "./ui/button"

export function AboutSection() {
  const problems = [
    "Many young people don't know where to start their career journey",
    "Uncertainty about different skill types and their real-world applications",
    "Talented individuals remain unemployed due to poor personal positioning",
    "Learning dropout rates increase when the path ahead feels unclear",
    "Valuable skills exist but monetization strategies remain unknown",
    "Limited access to industry mentors and professional networks",
  ]

  const solutions = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Direction & Structure",
      description: "Clear pathways from confusion to opportunity with structured learning approaches and career roadmaps",
      color: "#FF5E3A",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Community & Networking",
      description: "Connect with industry leaders, recruiters, and like-minded peers in meaningful ways",
      color: "#00D1FF",
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Practical Learning",
      description: "Hands-on workshops, mentorship circles, and career positioning clinics with real outcomes",
      color: "#0A2540",
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Real Opportunities",
      description: "Direct access to funding opportunities and recruitment pipelines that lead to actual placements",
      color: "#FF5E3A",
    },
  ]

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-[#FF5E3A]/20">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#00D1FF]/15 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF5E3A]/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#00D1FF]/10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm border border-[#00D1FF]/30 mb-8 shadow-lg">
            <span className="text-[#0A2540] font-semibold text-sm tracking-wide uppercase">About This Event</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-[#0A2540]">
              The Problem &
            </span>
            <br />
            <span className="text-[#FF5E3A]">
              Why This Matters
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-[#0A2540]/90 max-w-5xl mx-auto leading-relaxed font-light">
            In Africa's fast-growing digital economy, the challenge isn't just a lack of talent—
            <span className="font-semibold text-[#0A2540]"> it's a lack of direction, access, and structure.</span>
          </p>
        </div>

        {/* Problems Section */}
        <div className="mb-24">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0A2540]">
            Current Challenges We're Addressing
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/98 backdrop-blur-sm hover:bg-white hover:scale-105 hover:shadow-[#00D1FF]/20">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF5E3A] flex items-center justify-center mt-1 shadow-lg">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-[#0A2540]/85 leading-relaxed font-medium group-hover:text-[#0A2540] transition-colors">
                      {problem}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Solution Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-[#00D1FF] text-white font-semibold mb-8 shadow-xl hover:shadow-[#00D1FF]/30 transition-all duration-300">
            Our Solution
          </div>
          
          <h3 className="text-4xl md:text-5xl font-bold mb-8 text-[#0A2540] leading-tight">
            Global Skill Shift: Changes That
            <span className="text-[#FF5E3A]"> Transform Lives</span>
          </h3>
          
          <p className="text-xl text-[#0A2540]/85 max-w-4xl mx-auto leading-relaxed font-light">
            This event bridges the gap between potential and opportunity through community, mentorship, 
            structured learning, and comprehensive post-event support. Designed for anyone who feels 
            <span className="font-semibold text-[#0A2540]"> stuck, overlooked, curious, or ready to grow.</span>
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 bg-white/98 backdrop-blur-sm hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:shadow-[#00D1FF]/20">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500" style={{ backgroundColor: solution.color }}></div>
              
              <CardContent className="relative p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 shadow-xl group-hover:shadow-2xl transition-shadow duration-500" style={{ backgroundColor: solution.color }}>
                  <div className="text-white">
                    {solution.icon}
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold text-[#0A2540] mb-4 group-hover:text-[#FF5E3A] transition-colors duration-300">
                  {solution.title}
                </h4>
                
                <p className="text-[#0A2540]/75 leading-relaxed font-medium group-hover:text-[#0A2540] transition-colors duration-300">
                  {solution.description}
                </p>
                
                {/* Decorative bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ backgroundColor: solution.color }}></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          {/* Replace the affected blocks with this corrected version */}
  <Button
    asChild
    className="inline-flex items-center px-8 py-4 rounded-full bg-[#FF5E3A] text-white font-bold text-lg shadow-2xl hover:shadow-[#FF5E3A]/30 hover:scale-105 transition-all duration-300 cursor-pointer group"
  >
    <a
      href="https://chat.whatsapp.com/JKYhr6RPUKc8QHyKCMvGBq"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Register for Beyond the Skill"
    >
      <span className="group-hover:text-[#00D1FF] transition-colors duration-300">
        Ready to Transform Your Future?
      </span>
    </a>
  </Button>
        </div>
      </div>
    </section>
  )
}