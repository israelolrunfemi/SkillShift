"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight, Clock } from "lucide-react"

export function RegistrationSection() {
  const [selectedPlan, setSelectedPlan] = useState("professional")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    title: "",
  })

  const pricingPlans = [
    {
      id: "early-bird",
      name: "Early Bird",
      price: "$299",
      originalPrice: "$399",
      description: "Perfect for individual professionals",
      features: [
        "All keynote sessions",
        "Workshop access",
        "Networking events",
        "Digital materials",
        "Certificate of completion",
      ],
      popular: false,
      available: true,
    },
    {
      id: "professional",
      name: "Professional",
      price: "$399",
      originalPrice: "$499",
      description: "Most popular choice for career growth",
      features: [
        "Everything in Early Bird",
        "VIP networking dinner",
        "One-on-one mentor session",
        "Premium workshop seats",
        "Exclusive speaker meet & greet",
        "Career assessment report",
      ],
      popular: true,
      available: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "$599",
      originalPrice: "$799",
      description: "For teams and organizations",
      features: [
        "Everything in Professional",
        "Team building sessions",
        "Custom workshop tracks",
        "Leadership coaching session",
        "Post-event consultation",
        "Group photo & recognition",
      ],
      popular: false,
      available: true,
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Registration submitted:", { ...formData, plan: selectedPlan })
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-primary bg-primary/10">
            <Clock className="w-4 h-4 mr-2" />
            Limited Time Offer
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6 font-[family-name:var(--font-playfair)]">
            Secure Your Spot Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Early bird pricing ends soon. Join hundreds of professionals ready to transform their careers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Pricing Plans */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingPlans.map((plan) => (
                <Card
                  key={plan.id}
                  className={`relative cursor-pointer transition-all duration-300 hover:scale-105 ${
                    selectedPlan === plan.id ? "ring-2 ring-primary shadow-xl" : "hover:shadow-lg"
                  } ${plan.popular ? "border-primary" : ""}`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  )}

                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl font-semibold">{plan.name}</CardTitle>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-3xl font-bold text-primary">{plan.price}</span>
                        <span className="text-lg text-muted-foreground line-through">{plan.originalPrice}</span>
                      </div>
                      <CardDescription className="text-sm">{plan.description}</CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Registration Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Complete Registration</CardTitle>
                <CardDescription>Fill out your details to secure your spot at SkillShift 2025</CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="title">Job Title</Label>
                    <Input
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  {/* Selected Plan Summary */}
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Selected Plan:</span>
                      <span className="text-primary font-semibold">
                        {pricingPlans.find((p) => p.id === selectedPlan)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span>Total:</span>
                      <span className="text-2xl font-bold text-primary">
                        {pricingPlans.find((p) => p.id === selectedPlan)?.price}
                      </span>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 group"
                  >
                    Complete Registration
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Secure payment processing. Cancel anytime before the event.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
