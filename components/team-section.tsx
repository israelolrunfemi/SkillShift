"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function MeetTeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const teamMembers = [
    {
name: "Ebunoluwa Abdulbaasit",
title: "Convener",
image: "/images/Ebun.jpg"
},
{
name: "Olatunji Abdul Hameed",
title: "Project Lead",
image: "/images/Hameed.jpg"
},
{
name: "Abdur-Rahman Ayanleke",
title: "Media Team Lead",
image: "/images/Ayanleke.jpg"
},
{
name: "Akeju Abisola",
title: "Publicity Team Lead",
image: "/images/Abisola.jpg"
},
{
name: "Adeogun Mosturah",
title: "Publicity Team",
image: "/images/Mosturoh.jpg"
},
{
name: "Isaac Ayomide",
title: "Design Team Lead",
image: "/professional-african-man.png"
},
{
name: "Oluwasemilore Toluwanimi",
title: "Design Team",
image: "/images/Oluwasemilore.jpg"
},
{
name: "Ojo Testimony",
title: "Sponsorship Team Lead",
image: "/images/Testimony.jpg"
},
{
name: "Israel Olorunfemi",
title: "Dev Team Lead",
image: "/images/Raceey.jpg"
},
{
name: "Azeezat Feyishara Lasisi",
title: "Sponsorship Team Lead",
image: "/images/Azeezat.jpg"
},
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [teamMembers.length, isAutoPlaying])

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Resume autoplay after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section id="team" className="relative py-32 overflow-hidden">
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
              Our Team
            </Badge>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance mb-8 font-sans bg-gradient-to-br from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent leading-tight">
            Meet the Visionaries
            <span className="block text-primary">Behind SkillShift</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            Passionate leaders dedicated to 
            <span className="text-primary font-medium"> empowering African youth</span> and creating opportunities for the next generation.
          </p>
        </div>

        {/* Team Members Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-all duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {teamMembers.map((member, index) => (
                <div key={index} className="w-full flex-shrink-0 px-6">
                  <Card className="bg-gradient-to-br from-card/80 via-card to-card/90 backdrop-blur-sm border-border/30 shadow-2xl shadow-primary/5 hover:shadow-primary/10 transition-all duration-500 group">
                    <CardContent className="p-16 text-center relative">
                      {/* Decorative elements */}
                      <div className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-xl" />
                      <div className="absolute bottom-6 right-6 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl" />
                      
                      {/* Profile Image */}
                      <div className="relative mb-8">
                        <Avatar className="w-40 h-40 mx-auto ring-4 ring-primary/20 ring-offset-4 ring-offset-background shadow-xl group-hover:scale-105 transition-transform duration-300">
                          <AvatarImage 
                            src={member.image || "/placeholder.svg"} 
                            alt={member.name}
                            className="object-cover"
                          />
                          <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/10 text-primary font-bold text-3xl">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background shadow-lg" />
                      </div>

                      {/* Name and Title */}
                      <div className="mb-6">
                        <h3 className="text-4xl font-bold text-card-foreground mb-3">{member.name}</h3>
                        <p className="text-2xl text-primary font-medium">{member.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-12 gap-3">
            {teamMembers.map((_, index) => (
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
      </div>
    </section>
  )
}