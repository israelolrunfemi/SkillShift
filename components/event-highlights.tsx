"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Lightbulb, Network, TrendingUp, Clock, Users2 } from "lucide-react"

export function EventHighlights() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = Number.parseInt(entry.target.getAttribute("data-card-index") || "0")
            setVisibleCards((prev) => [...prev, cardIndex])
          }
        })
      },
      { threshold: 0.2 },
    )

    const cards = sectionRef.current?.querySelectorAll("[data-card-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const speakers = [
    {
      name: "Dr. Sarah Johnson",
      title: "Leadership Expert",
      company: "Fortune 500 Consultant",
      image: "/professional-woman-speaker.png",
      topic: "Transformational Leadership",
    },
    {
      name: "Michael Chen",
      title: "Tech Entrepreneur",
      company: "Startup Founder",
      image: "/professional-man-tech-entrepreneur.png",
      topic: "Innovation Mindset",
    },
    {
      name: "Aisha Okafor",
      title: "Career Coach",
      company: "Executive Mentor",
      image: "/professional-woman-career-coach.png",
      topic: "Career Acceleration",
    },
  ]

  const sessions = [
    {
      icon: Lightbulb,
      title: "Innovation Workshops",
      description: "Hands-on sessions to unlock your creative potential and drive innovation in your field.",
      time: "Day 1 • 2 Hours",
      attendees: "50 max",
    },
    {
      icon: Network,
      title: "Networking Masterclass",
      description: "Learn advanced networking strategies to build meaningful professional relationships.",
      time: "Day 2 • 90 mins",
      attendees: "100 max",
    },
    {
      icon: TrendingUp,
      title: "Growth Mindset Training",
      description: "Develop the mindset and skills needed to accelerate your career growth.",
      time: "Day 3 • 3 Hours",
      attendees: "75 max",
    },
  ]

  return (
    <section ref={sectionRef} id="speakers" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-primary bg-primary/10">
            Event Highlights
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6 font-[family-name:var(--font-playfair)]">
            World-Class Speakers & Sessions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Learn from industry leaders and participate in transformative sessions designed to elevate your career.
          </p>
        </div>

        {/* Featured Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {speakers.map((speaker, index) => (
            <Card
              key={speaker.name}
              data-card-index={index}
              className={`group hover:shadow-xl transition-all duration-500 hover:scale-105 bg-card border-border/50 ${
                visibleCards.includes(index) ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <Avatar className="w-20 h-20 mx-auto mb-4 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                  <AvatarImage src={speaker.image || "/placeholder.svg"} alt={speaker.name} />
                  <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
                    {speaker.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl font-semibold text-card-foreground">{speaker.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {speaker.title} • {speaker.company}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Badge variant="outline" className="text-primary border-primary/30">
                  {speaker.topic}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sessions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sessions.map((session, index) => {
            const Icon = session.icon
            const cardIndex = index + speakers.length
            return (
              <Card
                key={session.title}
                data-card-index={cardIndex}
                className={`group hover:shadow-xl transition-all duration-500 hover:scale-105 bg-card border-border/50 ${
                  visibleCards.includes(cardIndex) ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${cardIndex * 200}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-card-foreground">{session.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {session.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {session.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users2 className="h-4 w-4" />
                      {session.attendees}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
