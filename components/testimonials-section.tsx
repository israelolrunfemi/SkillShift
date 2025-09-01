"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      name: "Adebayo Ogundimu",
      title: "Tech Entrepreneur",
      company: "Lagos Tech Hub",
      image: "/professional-african-man.png",
      content:
        "SkillShift helped me turn my coding skills into a thriving tech startup. The mentorship and networking opportunities were game-changing.",
      rating: 5,
      highlight: "Founded 3 successful startups"
    },
    {
      name: "Fatima Abdullahi",
      title: "Digital Marketing Specialist",
      company: "Creative Agency Abuja",
      image: "/professional-african-woman.png",
      content:
        "I went from being confused about my career path to landing my dream job. The practical workshops gave me the confidence I needed.",
      rating: 5,
      highlight: "300% salary increase"
    },
    {
      name: "Chinedu Okoro",
      title: "Freelance Designer",
      company: "Independent",
      image: "/young-african-entrepreneur.png",
      content:
        "Beyond the Skill taught me how to package and monetize my design skills. I now earn 3x more than before attending.",
      rating: 5,
      highlight: "6-figure freelance income"
    },
    {
      name: "Amina Hassan",
      title: "Business Analyst",
      company: "Financial Services",
      image: "/professional-african-woman.png",
      content:
        "The event connected me with industry leaders who became my mentors. SkillShift truly bridges the gap between potential and opportunity.",
      rating: 5,
      highlight: "Promoted to Senior Analyst"
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [testimonials.length, isAutoPlaying])

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Resume autoplay after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.08),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary/50" />
            <Badge variant="secondary" className="text-primary bg-primary/10 border-primary/20 font-medium px-4 py-1.5">
              Success Stories
            </Badge>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance mb-8 font-sans bg-gradient-to-br from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent leading-tight">
            Transforming Lives
            <span className="block text-primary">Across Africa</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            Join thousands of young professionals who have turned their skills into 
            <span className="text-primary font-medium"> extraordinary opportunities</span> through SkillShift.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto mb-20">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-all duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-6">
                  <Card className="bg-gradient-to-br from-card/80 via-card to-card/90 backdrop-blur-sm border-border/30 shadow-2xl shadow-primary/5 hover:shadow-primary/10 transition-all duration-500 group">
                    <CardContent className="p-12 text-center relative">
                      {/* Decorative elements */}
                      <div className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-xl" />
                      <div className="absolute bottom-6 right-6 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl" />
                      
                      {/* Quote Icon */}
                      <div className="relative mb-8">
                        <Quote className="h-12 w-12 text-primary/40 mx-auto transform group-hover:scale-110 transition-transform duration-300" />
                      </div>

                      {/* Rating */}
                      <div className="flex justify-center mb-8 gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="h-6 w-6 text-amber-400 fill-current transform hover:scale-125 transition-transform duration-200" 
                            style={{ animationDelay: `${i * 100}ms` }}
                          />
                        ))}
                      </div>

                      {/* Testimonial Content */}
                      <blockquote className="text-xl md:text-2xl text-card-foreground mb-10 leading-relaxed font-medium relative">
                        <span className="text-primary/60 text-6xl absolute -top-4 -left-2 font-serif">"</span>
                        {testimonial.content}
                        <span className="text-primary/60 text-6xl absolute -bottom-8 -right-2 font-serif">"</span>
                      </blockquote>

                      {/* Highlight Badge */}
                      <div className="mb-8">
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium">
                          ✨ {testimonial.highlight}
                        </Badge>
                      </div>

                      {/* Author Info */}
                      <div className="flex items-center justify-center gap-6">
                        <div className="relative">
                          <Avatar className="w-20 h-20 ring-4 ring-primary/20 ring-offset-4 ring-offset-background shadow-xl">
                            <AvatarImage 
                              src={testimonial.image || "/placeholder.svg"} 
                              alt={testimonial.name}
                              className="object-cover"
                            />
                            <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/10 text-primary font-bold text-lg">
                              {testimonial.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-background shadow-lg" />
                        </div>
                        
                        <div className="text-left">
                          <div className="font-bold text-xl text-card-foreground mb-1">{testimonial.name}</div>
                          <div className="text-primary font-medium text-lg">{testimonial.title}</div>
                          <div className="text-muted-foreground text-base">{testimonial.company}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-12 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className={`relative overflow-hidden rounded-full transition-all duration-500 ${
                  index === currentIndex 
                    ? "w-12 h-4 bg-primary shadow-lg shadow-primary/30" 
                    : "w-4 h-4 bg-primary/30 hover:bg-primary/50 hover:scale-125"
                }`}
              >
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-3xl" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 p-12 rounded-3xl border border-border/30 bg-card/50 backdrop-blur-sm">
            {[
              { number: "1,000+", label: "Expected Attendees", icon: "👥" },
              { number: "5,000+", label: "Digital Viewers", icon: "📺" },
              { number: "50+", label: "Industry Leaders", icon: "🏆" },
              { number: "1", label: "Day of Transformation", icon: "⚡" }
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-default">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}