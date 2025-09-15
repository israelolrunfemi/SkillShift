"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Crown, Award, Star, Heart, Shield, Users, TrendingUp, Target, Database, Trophy, Zap, Sparkles, Diamond, Gem, ArrowRight, Download, Phone, LucideIcon } from "lucide-react"

// TypeScript interfaces
interface BrandColors {
  readonly primary: string
  readonly secondary: string
  readonly accent: string
  readonly gray: {
    readonly 50: string
    readonly 100: string
    readonly 200: string
    readonly 300: string
    readonly 600: string
    readonly 700: string
    readonly 900: string
  }
}

interface SponsorshipTier {
  readonly name: string
  readonly subtitle: string
  readonly price: string
  readonly icon: LucideIcon
  readonly color: string
  readonly featured?: boolean
  readonly exclusive: string
  readonly rarity: string
  readonly benefits: readonly string[]
}

interface ValueProp {
  readonly icon: LucideIcon
  readonly title: string
  readonly description: string
  readonly color: string
  readonly metric: string
  readonly metricLabel: string
}

interface IconComponentProps {
  icon: LucideIcon
  className?: string
  color?: string
}

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
}

interface StatCardProps {
  number: string
  label: string
  color: string
}

interface TierCardProps {
  tier: SponsorshipTier
  featured?: boolean
}

// Muted, professional color palette
const brandColors: BrandColors = {
  primary: "#3B82F6",    // Softer blue
  secondary: "#F97316",   // Muted orange
  accent: "#1E40AF",      // Deep blue
  gray: {
    50: "#F9FAFB",
    100: "#F3F4F6", 
    200: "#E5E7EB",
    300: "#D1D5DB",
    600: "#4B5563",
    700: "#374151",
    900: "#111827"
  }
} as const

// Custom styles with muted colors
const styles = `
  .text-gradient-primary {
    background: linear-gradient(135deg, ${brandColors.primary} 0%, ${brandColors.secondary} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .btn-primary {
    background: linear-gradient(135deg, ${brandColors.primary} 0%, ${brandColors.secondary} 100%);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    transition: all 0.3s ease;
  }
  
  .btn-primary:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.2);
  }
  
  .card-elevated {
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(8px);
    border: 1px solid ${brandColors.gray[200]};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
  
  .animate-float {
    animation: float 4s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-6px); }
  }
`

export function SponsorshipSection(): JSX.Element {
  const sponsorshipTiers: readonly SponsorshipTier[] = [
    {
      name: "Platinum Elite",
      subtitle: "The Pinnacle of Partnership",
      price: "₦3,000,000+",
      icon: Crown,
      color: brandColors.primary,
      featured: true,
      exclusive: "ULTRA EXCLUSIVE",
      rarity: "Limited to 3 Partners Only",
      benefits: [
        "Industry exclusivity (only one sponsor per sector)",
        "Premium branding (main stage, media, photo wall)",
        "Keynote speaking slot during the main plenary",
        "One-week on-campus mass marketing to 2,000+ students",
        "Featured across UNILAG media platforms and student channels",
        "Access to the attendee database for future recruitment",
        "Full media coverage (TV, radio, press, digital)",
        "VIP dinner with speakers and government officials",
        "Custom branded lounge or product activation zone",
        "Honorary award and official recognition at the event",
        "Dedicated social media campaign for your brand",
        "Post-event talent recruitment pipeline access"
      ],
    },
    {
      name: "Gold Premium",
      subtitle: "Elite Brand Positioning", 
      price: "₦2,000,000+",
      icon: Award,
      color: brandColors.secondary,
      exclusive: "PREMIUM SELECT",
      rarity: "Limited to 5 Partners",
      benefits: [
        "Panel seat and breakout session hosting rights",
        "High-visibility branding at the event and during workshops",
        "Mass campus promotion and product activation",
        "Product exhibition booth",
        "Media mentions (press kits, social coverage)",
        "Access to Speakers' Green Room for networking",
        "Branding on selected event souvenirs",
        "MC shoutouts and on-stage recognition",
      ],
    },
    {
      name: "Silver Executive",
      subtitle: "Strategic Brand Alliance",
      price: "₦1,000,000+", 
      icon: Star,
      color: brandColors.accent,
      exclusive: "EXECUTIVE TIER",
      rarity: "Limited to 8 Partners",
      benefits: [
        "Branding across digital platforms and at venue points",
        "Inclusion in the official program and press materials", 
        "Opportunity to add branded items in attendee kits",
        "3 VIP seats and product showcase space",
        "MC mentions and recognition across platforms",
      ],
    },
    {
      name: "Bronze Partner",
      subtitle: "Brand Visibility Package",
      price: "₦500,000+",
      icon: Shield,
      color: brandColors.primary,
      exclusive: "PARTNER ACCESS", 
      rarity: "Limited Availability",
      benefits: [
        "Logo placement in event slides and selected banners",
        "Mention during opening and closing sessions",
        "2 VIP passes",
        "Right to distribute branded souvenirs",
      ],
    },
    {
      name: "Supporter Elite",
      subtitle: "Community Champion",
      price: "₦100,000 - ₦499,999",
      icon: Heart,
      color: brandColors.secondary,
      exclusive: "SUPPORTER CIRCLE",
      rarity: "Open Enrollment", 
      benefits: [
        "Logo on selected digital and print materials",
        "Social media recognition as an official supporter",
        "1 VIP pass for event access",
      ],
    },
  ] as const

  const valueProps: readonly ValueProp[] = [
    {
      icon: Users,
      title: "Elite Enrollment",
      description: "Engage directly with over 1,000 high-caliber participants and extend your brand's reach to more than 5,000 digital viewers and 3,000 students on campus.",
      color: brandColors.primary,
      metric: "1,000+",
      metricLabel: "Elite Participants",
    },
    {
      icon: TrendingUp,
      title: "Premium Publicity", 
      description: "Enjoy multi-channel promotional campaigns featuring sponsored content, influencer collaborations, and interactive digital challenges.",
      color: brandColors.secondary,
      metric: "5,000+",
      metricLabel: "Digital Reach",
    },
    {
      icon: Target,
      title: "Talent Pipeline",
      description: "Build a pipeline of emerging talent and initiate a campus ambassador program tailored to your brand.",
      color: brandColors.accent,
      metric: "3,000+", 
      metricLabel: "Campus Students",
    },
    {
      icon: Database,
      title: "Exclusive Database",
      description: "Gain access to an opt-in attendee list for future communication and recruitment.",
      color: brandColors.primary,
      metric: "100%",
      metricLabel: "Opt-in Rate",
    },
    {
      icon: Trophy,
      title: "Prestige Award",
      description: "Receive public recognition as a CSR partner and youth development contributor during the main event.",
      color: brandColors.secondary,
      metric: "VIP", 
      metricLabel: "Recognition",
    },
  ] as const

  const IconComponent: React.FC<IconComponentProps> = ({ icon: Icon, className = "", color }) => (
    <Icon className={className} style={{ color }} />
  )

  const GlowCard: React.FC<GlowCardProps> = ({ 
    children, 
    className = "", 
    glowColor = brandColors.primary 
  }) => (
    <div className="group relative">
      <div 
        className="absolute inset-0 rounded-2xl blur-lg opacity-10 group-hover:opacity-15 transition-opacity duration-500"
        style={{ backgroundColor: glowColor }}
      />
      <div className={`relative ${className}`}>
        {children}
      </div>
    </div>
  )

  const StatCard: React.FC<StatCardProps> = ({ number, label, color }) => (
    <GlowCard glowColor={color}>
      <div className="card-elevated rounded-2xl p-6 hover:scale-102 transition-transform duration-300">
        <div 
          className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
          style={{ backgroundColor: color }}
        >
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <div className="text-2xl font-bold mb-2" style={{ color }}>
          {number}
        </div>
        <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
          {label}
        </div>
      </div>
    </GlowCard>
  )

  const TierCard: React.FC<TierCardProps> = ({ tier, featured = false }) => (
    <GlowCard glowColor={tier.color}>
      <Card className={`overflow-hidden border card-elevated transition-all duration-300 hover:scale-102 hover:-translate-y-2 rounded-2xl ${featured ? 'lg:col-span-2' : ''}`}>
        {featured && (
          <div 
            className="h-1 w-full"
            style={{ background: `linear-gradient(90deg, ${tier.color}, ${brandColors.secondary}, ${tier.color})` }}
          />
        )}
        
        <CardHeader className="text-center p-8">
          <div className="flex justify-center mb-6">
            <div 
              className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
              style={{ backgroundColor: tier.color }}
            >
              <IconComponent icon={tier.icon} className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <Badge 
            className="mb-4 px-3 py-1 text-xs font-semibold text-white border-0"
            style={{ backgroundColor: tier.color }}
          >
            {tier.exclusive}
          </Badge>
          
          <div className="text-xs text-gray-500 font-medium mb-3 uppercase tracking-wide">
            {tier.rarity}
          </div>
          
          <CardTitle className="text-2xl font-bold mb-3 text-gray-900">
            {tier.name}
          </CardTitle>
          
          <p className="text-base text-gray-600 mb-6">{tier.subtitle}</p>
          
          <div className="text-3xl font-bold mb-8" style={{ color: tier.color }}>
            {tier.price}
          </div>
        </CardHeader>
        
        <CardContent className="p-8 pt-0">
          <ul className="space-y-3 mb-8">
            {tier.benefits.slice(0, featured ? 8 : tier.benefits.length).map((benefit, index) => (
              <li key={index} className="flex items-start gap-3 group/item">
                <div 
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform"
                  style={{ backgroundColor: tier.color }}
                >
                  <Check className="w-3 h-3 text-white stroke-2" />
                </div>
                <span className="text-gray-700 font-medium text-sm leading-relaxed">{benefit}</span>
              </li>
            ))}
            {featured && tier.benefits.length > 8 && (
              <li className="flex items-center gap-3 pt-3 border-t border-gray-200">
                <div 
                  className="w-5 h-5 rounded-full flex items-center justify-center" 
                  style={{ backgroundColor: brandColors.secondary }}
                >
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
                <span className="font-semibold text-gray-900 text-sm">+ {tier.benefits.length - 8} MORE PREMIUM BENEFITS</span>
              </li>
            )}
          </ul>
          
          <Button 
            className="w-full py-4 font-semibold text-base rounded-xl text-white transition-all duration-300 hover:scale-102"
            style={{ backgroundColor: tier.color }}
          >
            {featured ? 'Claim Platinum Status' : `Select ${tier.name.split(' ')[0]}`}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </GlowCard>
  )

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <section className="relative py-20 overflow-hidden" style={{ backgroundColor: brandColors.gray[50] }}>
        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-5 animate-float"
            style={{ backgroundColor: brandColors.primary }}
          />
          <div 
            className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-5"
            style={{ backgroundColor: brandColors.secondary }}
          />
          <div 
            className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full blur-2xl opacity-3"
            style={{ background: `linear-gradient(45deg, ${brandColors.primary}20, ${brandColors.secondary}20)` }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="relative inline-block mb-8">
              <div className="btn-primary px-6 py-3 rounded-full font-semibold text-base tracking-wide uppercase flex items-center">
                <Gem className="w-5 h-5 mr-2" />
                Exclusive Partnership Opportunities
                <Diamond className="w-5 h-5 ml-2" />
              </div>
            </div>
            
            <h2 className="text-6xl font-bold mb-6 leading-tight tracking-tight">
              <span className="block text-gray-900">Elevate Your</span>
              <span className="block text-gradient-primary">Brand Legacy</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Partner with Global SkillShift and position your brand as the 
              <span className="font-semibold" style={{ color: brandColors.secondary }}> premier champion </span>
              of youth empowerment, innovation, and talent development across Africa.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <StatCard number="1,000+" label="Elite Participants" color={brandColors.primary} />
              <StatCard number="5,000+" label="Digital Reach" color={brandColors.secondary} />
              <StatCard number="3,000+" label="Campus Impact" color={brandColors.accent} />
            </div>
          </div>

          {/* Value Props */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Why Elite Brands Choose Us</h3>
              <div 
                className="w-24 h-0.5 mx-auto rounded-full"
                style={{ background: `linear-gradient(90deg, ${brandColors.primary}, ${brandColors.secondary})` }}
              />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {valueProps.map((prop, index) => (
                <GlowCard key={index} glowColor={prop.color}>
                  <Card className="card-elevated text-center p-6 hover:scale-105 hover:-translate-y-2 transition-all duration-300 rounded-2xl border-0">
                    <div className="mb-4">
                      <div 
                        className="w-12 h-12 rounded-xl mx-auto flex items-center justify-center shadow-md"
                        style={{ backgroundColor: prop.color }}
                      >
                        <IconComponent icon={prop.icon} className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-2xl font-bold mb-1 text-gray-900">{prop.metric}</div>
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">{prop.metricLabel}</div>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{prop.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{prop.description}</p>
                  </Card>
                </GlowCard>
              ))}
            </div>
          </div>

          {/* Featured Platinum Tier */}
          <div className="mb-24">
            <div className="text-center mb-6">
              <Badge 
                className="text-white px-5 py-2 text-base font-semibold rounded-full border-0"
                style={{ background: `linear-gradient(135deg, ${brandColors.primary}, ${brandColors.secondary})` }}
              >
                <Crown className="w-4 h-4 mr-2" />
                Most Exclusive Partnership
                <Sparkles className="w-4 h-4 ml-2" />
              </Badge>
            </div>
            <TierCard tier={sponsorshipTiers[0]} featured={true} />
          </div>

          {/* Other Tiers */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {sponsorshipTiers.slice(1, 3).map((tier, index) => (
              <TierCard key={index} tier={tier} />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {sponsorshipTiers.slice(3).map((tier, index) => (
              <TierCard key={index} tier={tier} />
            ))}
          </div>

          {/* CTA */}
          <GlowCard glowColor={brandColors.accent}>
            <div 
              className="text-center p-16 rounded-2xl text-white"
              style={{ background: `linear-gradient(135deg, ${brandColors.accent} 0%, ${brandColors.primary} 100%)` }}
            >
              <div className="mb-10">
                <Badge className="bg-white/20 text-white px-5 py-2 text-base font-semibold rounded-full border border-white/20 mb-6">
                  <Diamond className="w-4 h-4 mr-2" />
                  Exclusive Invitation
                  <Gem className="w-4 h-4 ml-2" />
                </Badge>
                
                <h3 className="text-5xl font-bold mb-6">Ready to Join the Elite?</h3>
                <p className="text-xl mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                  Join us in shaping the future of African talent and innovation. 
                  <span className="font-semibold"> Let's create something extraordinary together.</span>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl">
                  <Crown className="w-5 h-5 mr-3" />
                  Become an Elite Partner
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Button>
                <Button className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent transition-colors">
                  <Download className="w-5 h-5 mr-3" />
                  Download Partnership Deck
                </Button>
              </div>

              {/* Contact */}
              <div className="pt-8 border-t border-white/20">
                <p className="text-white/80 text-base mb-4">Ready to discuss your partnership? Contact our partnerships team:</p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <a 
                    href="mailto:partnerships@skillshift.com" 
                    className="flex items-center text-white/90 hover:text-white transition-colors font-medium text-base"
                  >
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 text-sm">@</div>
                    partnerships@skillshift.com
                  </a>
                  <a 
                    href="tel:+2348123456789" 
                    className="flex items-center text-white/90 hover:text-white transition-colors font-medium text-base"
                  >
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                      <Phone className="w-4 h-4" />
                    </div>
                    +234 812 345 6789
                  </a>
                </div>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>
    </>
  )
}