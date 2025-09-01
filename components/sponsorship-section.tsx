"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Crown, Award, Star, Heart, Sparkles, TrendingUp, Users, Database, Trophy, Zap, Shield, Diamond, ArrowRight, Gem, Infinity, Target } from "lucide-react"

export function SponsorshipSection() {
  const sponsorshipTiers = [
    {
      name: "Platinum Elite",
      subtitle: "The Pinnacle of Partnership",
      price: "₦3,000,000+",
      icon: <Crown className="w-16 h-16" />,
      color: "#FF5E3A",
      secondaryColor: "#FF8A65",
      bgColor: "bg-[#FF5E3A]/5",
      borderColor: "border-[#FF5E3A]/30",
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
      icon: <Award className="w-16 h-16" />,
      color: "#00D1FF",
      secondaryColor: "#4DD0E1",
      bgColor: "bg-[#00D1FF]/5",
      borderColor: "border-[#00D1FF]/30",
      featured: false,
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
      icon: <Star className="w-16 h-16" />,
      color: "#0A2540",
      secondaryColor: "#1E3A5F",
      bgColor: "bg-[#0A2540]/5",
      borderColor: "border-[#0A2540]/30",
      featured: false,
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
      icon: <Shield className="w-14 h-14" />,
      color: "#FF5E3A",
      secondaryColor: "#FF8A65",
      bgColor: "bg-[#FF5E3A]/5",
      borderColor: "border-[#FF5E3A]/20",
      featured: false,
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
      icon: <Heart className="w-14 h-14" />,
      color: "#00D1FF",
      secondaryColor: "#4DD0E1",
      bgColor: "bg-[#00D1FF]/5",
      borderColor: "border-[#00D1FF]/20",
      featured: false,
      exclusive: "SUPPORTER CIRCLE",
      rarity: "Open Enrollment",
      benefits: [
        "Logo on selected digital and print materials",
        "Social media recognition as an official supporter",
        "1 VIP pass for event access",
      ],
    },
  ]

  const valueProps = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "Elite Enrollment",
      description: "Engage directly with over 1,000 high-caliber participants and extend your brand's reach to more than 5,000 digital viewers and 3,000 students on campus.",
      color: "#FF5E3A",
      metric: "1,000+",
      metricLabel: "Elite Participants",
      growth: "+250%"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Premium Publicity",
      description: "Enjoy multi-channel promotional campaigns featuring sponsored content, influencer collaborations, and interactive digital challenges.",
      color: "#00D1FF",
      metric: "5,000+",
      metricLabel: "Digital Reach",
      growth: "+400%"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Talent Pipeline",
      description: "Build a pipeline of emerging talent and initiate a campus ambassador program tailored to your brand.",
      color: "#0A2540",
      metric: "3,000+",
      metricLabel: "Campus Students",
      growth: "+180%"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Exclusive Database",
      description: "Gain access to an opt-in attendee list for future communication and recruitment.",
      color: "#FF5E3A",
      metric: "100%",
      metricLabel: "Opt-in Rate",
      growth: "Guaranteed"
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: "Prestige Award",
      description: "Receive public recognition as a CSR partner and youth development contributor during the main event.",
      color: "#00D1FF",
      metric: "VIP",
      metricLabel: "Recognition",
      growth: "Exclusive"
    },
  ]

  return (
    <section id="sponsors" className="relative py-48 overflow-hidden">
      {/* Ultra-Luxury Background System */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Animated Background Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-[#00D1FF]/20 via-[#00D1FF]/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-[#FF5E3A]/20 via-[#FF5E3A]/10 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-[#0A2540]/15 via-transparent to-[#0A2540]/15 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 animate-bounce"></div>
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-l from-[#FF5E3A]/10 via-transparent to-[#00D1FF]/10 rounded-full blur-xl animate-spin"></div>
      </div>

      {/* Premium Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          radial-gradient(circle at 25px 25px, #00D1FF 2px, transparent 0),
          radial-gradient(circle at 75px 75px, #FF5E3A 1px, transparent 0)
        `,
        backgroundSize: '100px 100px'
      }}></div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-[#00D1FF]/30 rotate-45 animate-spin"></div>
      <div className="absolute top-40 right-32 w-6 h-6 bg-[#FF5E3A]/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-32 left-40 w-3 h-3 bg-[#00D1FF]/40 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-5 h-5 bg-[#FF5E3A]/30 rotate-12 animate-spin"></div>

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ultra-Luxury Header Section */}
        <div className="text-center mb-40">
          <div className="relative inline-block mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF5E3A]/20 via-[#00D1FF]/20 to-[#FF5E3A]/20 blur-xl rounded-full"></div>
            <div className="relative inline-flex items-center px-12 py-6 rounded-full bg-gradient-to-r from-[#0A2540] via-[#0A2540]/95 to-[#0A2540] text-white font-black shadow-2xl border-2 border-white/10 backdrop-blur-sm">
              <Gem className="w-8 h-8 mr-4 text-[#00D1FF] animate-pulse" />
              <span className="text-xl tracking-[0.2em] uppercase">EXCLUSIVE PARTNERSHIP OPPORTUNITIES</span>
              <Infinity className="w-8 h-8 ml-4 text-[#FF5E3A] animate-spin" />
            </div>
          </div>
          
          <div className="relative mb-16">
            <h2 className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.85] tracking-tighter">
              <span className="block text-white drop-shadow-2xl">ELEVATE YOUR</span>
              <span className="block text-transparent bg-gradient-to-r from-[#FF5E3A] via-[#00D1FF] to-[#FF5E3A] bg-clip-text animate-pulse">BRAND LEGACY</span>
            </h2>
            
            {/* Decorative Lines */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#00D1FF] to-transparent"></div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-[#FF5E3A] to-transparent"></div>
          </div>
          
          <p className="text-2xl md:text-3xl lg:text-4xl text-white/80 max-w-7xl mx-auto leading-relaxed font-light mb-16">
            Partner with Global SkillShift and position your brand as the 
            <span className="relative font-black text-[#FF5E3A] mx-2">
              <span className="absolute inset-0 bg-[#FF5E3A]/20 blur-lg rounded-lg"></span>
              <span className="relative">ultimate champion</span>
            </span>
            of youth empowerment, innovation, and talent development across Africa.
          </p>

          {/* Premium Stats Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "1,000+", label: "Elite Participants", color: "#FF5E3A" },
              { number: "5,000+", label: "Digital Reach", color: "#00D1FF" },
              { number: "3,000+", label: "Campus Impact", color: "#0A2540" }
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105">
                  <div className="text-5xl font-black mb-2" style={{ color: stat.color }}>
                    {stat.number}
                  </div>
                  <div className="text-white/70 font-semibold uppercase tracking-wider text-sm">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ultra-Premium Value Propositions */}
        <div className="mb-40">
          <div className="text-center mb-24">
            <h3 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
              WHY ELITE BRANDS CHOOSE US
            </h3>
            <div className="w-32 h-1 bg-gradient-to-r from-[#FF5E3A] to-[#00D1FF] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {valueProps.map((prop, index) => (
              <div key={index} className="group relative">
                {/* Floating Card Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700 group-hover:scale-110"></div>
                
                <Card className="relative overflow-hidden border-0 bg-white/10 backdrop-blur-md shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-110 hover:-translate-y-8 rounded-3xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-3xl" style={{ backgroundColor: prop.color }}></div>
                  
                  {/* Premium Border Animation */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:from-[#FF5E3A]/40 group-hover:via-[#00D1FF]/40 group-hover:to-[#FF5E3A]/40 transition-all duration-700"></div>
                  
                  <CardContent className="relative p-12 text-center">
                    {/* Icon with Glow Effect */}
                    <div className="relative mb-8">
                      <div className="absolute inset-0 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" style={{ backgroundColor: prop.color }}></div>
                      <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full shadow-2xl group-hover:shadow-3xl transition-all duration-700 group-hover:scale-125" style={{ backgroundColor: prop.color }}>
                        <div className="text-white">
                          {prop.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Metrics Display */}
                    <div className="mb-6">
                      <div className="text-4xl font-black mb-2 text-white">
                        {prop.metric}
                      </div>
                      <div className="text-xs font-bold text-white/60 uppercase tracking-[0.2em] mb-2">
                        {prop.metricLabel}
                      </div>
                      <Badge className="px-3 py-1 text-xs font-black" style={{ backgroundColor: `${prop.color}30`, color: prop.color }}>
                        {prop.growth}
                      </Badge>
                    </div>
                    
                    <h4 className="text-xl font-black text-white mb-6 group-hover:opacity-90 transition-opacity">
                      {prop.title}
                    </h4>
                    
                    <p className="text-white/70 leading-relaxed font-medium text-sm group-hover:text-white/90 transition-colors">
                      {prop.description}
                    </p>
                    
                    {/* Premium Bottom Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-3xl" style={{ backgroundColor: prop.color }}></div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Ultra-Premium Platinum Tier - Hero Card */}
        <div className="mb-32">
          <div className="relative">
            {/* Floating Premium Badge */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-30">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF5E3A] to-[#00D1FF] blur-xl rounded-full"></div>
                <Badge className="relative bg-gradient-to-r from-[#FF5E3A] to-[#00D1FF] text-white px-8 py-4 text-lg font-black shadow-2xl border-2 border-white/30 backdrop-blur-sm rounded-full">
                  <Crown className="w-6 h-6 mr-3 animate-pulse" />
                  MOST EXCLUSIVE PARTNERSHIP
                  <Sparkles className="w-6 h-6 ml-3 animate-spin" />
                </Badge>
              </div>
            </div>
            
            {/* Main Platinum Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF5E3A]/30 via-[#00D1FF]/20 to-[#FF5E3A]/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-1000"></div>
              
              <Card className="relative overflow-hidden border-4 border-white/20 bg-gradient-to-br from-white/20 via-white/10 to-white/5 shadow-3xl backdrop-blur-md rounded-3xl">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF5E3A]/10 via-transparent to-[#00D1FF]/10 animate-pulse"></div>
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FF5E3A] via-[#00D1FF] to-[#FF5E3A] animate-pulse"></div>
                
                {/* Premium Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-2000"></div>
                
                <div className="relative grid lg:grid-cols-2 gap-0">
                  {/* Left Side - Main Info */}
                  <CardHeader className="p-20 text-center lg:text-left">
                    <div className="flex justify-center lg:justify-start mb-12">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF5E3A] to-[#00D1FF] rounded-full blur-2xl animate-pulse"></div>
                        <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-[#FF5E3A] to-[#FF5E3A]/80 flex items-center justify-center shadow-3xl">
                          <Crown className="w-16 h-16 text-white" />
                        </div>
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#00D1FF] rounded-full flex items-center justify-center animate-bounce">
                          <Sparkles className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <Badge className="bg-[#FF5E3A]/20 text-[#FF5E3A] px-6 py-3 text-base font-black mb-6 border border-[#FF5E3A]/30">
                        {sponsorshipTiers[0].exclusive}
                      </Badge>
                      <div className="text-sm text-white/60 font-semibold mb-4 uppercase tracking-wider">
                        {sponsorshipTiers[0].rarity}
                      </div>
                      <CardTitle className="text-6xl font-black text-white mb-4 tracking-tight">
                        {sponsorshipTiers[0].name}
                      </CardTitle>
                      <p className="text-xl text-white/70 font-light">
                        {sponsorshipTiers[0].subtitle}
                      </p>
                    </div>
                    
                    <div className="text-7xl font-black text-transparent bg-gradient-to-r from-[#FF5E3A] to-[#00D1FF] bg-clip-text mb-12 animate-pulse">
                      {sponsorshipTiers[0].price}
                    </div>
                    
                    <p className="text-white/70 text-xl leading-relaxed mb-12 font-light">
                      The ultimate partnership experience with maximum visibility, exclusive benefits, and unparalleled brand elevation that positions you as an industry leader.
                    </p>
                    
                    <Button className="group bg-gradient-to-r from-[#FF5E3A] to-[#00D1FF] hover:from-[#FF5E3A]/90 hover:to-[#00D1FF]/90 text-white px-16 py-8 text-2xl font-black shadow-3xl hover:shadow-4xl transition-all duration-500 hover:scale-110 rounded-2xl border-2 border-white/20">
                      <Crown className="w-8 h-8 mr-4 group-hover:animate-bounce" />
                      CLAIM PLATINUM STATUS
                      <ArrowRight className="w-8 h-8 ml-4 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </CardHeader>
                  
                  {/* Right Side - Benefits */}
                  <CardContent className="p-20 bg-gradient-to-br from-[#0A2540]/20 to-[#0A2540]/10 backdrop-blur-sm">
                    <h4 className="text-4xl font-black text-white mb-12 flex items-center">
                      <Zap className="w-10 h-10 mr-4 text-[#FF5E3A] animate-pulse" />
                      EXCLUSIVE BENEFITS
                    </h4>
                    <ul className="space-y-6">
                      {sponsorshipTiers[0].benefits.slice(0, 8).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-6 group/item">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF5E3A] to-[#00D1FF] flex items-center justify-center flex-shrink-0 mt-1 shadow-lg group-hover/item:scale-110 transition-transform">
                            <Check className="w-6 h-6 text-white font-bold" />
                          </div>
                          <span className="text-white/90 font-semibold text-lg leading-relaxed group-hover/item:text-white transition-colors">{benefit}</span>
                        </li>
                      ))}
                      <li className="flex items-center gap-6 pt-6 border-t border-white/20">
                        <div className="w-10 h-10 rounded-full bg-[#00D1FF] flex items-center justify-center animate-pulse">
                          <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-[#FF5E3A] font-black text-xl">+ {sponsorshipTiers[0].benefits.length - 8} MORE PREMIUM BENEFITS</span>
                      </li>
                    </ul>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Premium Tier Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32">
          {sponsorshipTiers.slice(1, 3).map((tier, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
              
              <Card className="relative overflow-hidden border-2 border-white/20 bg-white/10 backdrop-blur-md hover:shadow-3xl transition-all duration-700 hover:scale-105 hover:-translate-y-8 rounded-3xl">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700" style={{ backgroundColor: tier.color }}></div>
                
                {/* Premium Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r" style={{ background: `linear-gradient(90deg, ${tier.color}, ${tier.secondaryColor}, ${tier.color})` }}></div>
                
                <CardHeader className="relative text-center p-16">
                  <div className="flex justify-center mb-10">
                    <div className="relative group/icon">
                      <div className="absolute inset-0 rounded-full blur-xl opacity-50 group-hover/icon:opacity-100 transition-opacity duration-500" style={{ backgroundColor: tier.color }}></div>
                      <div className="relative w-24 h-24 rounded-full shadow-2xl flex items-center justify-center group-hover/icon:shadow-3xl transition-shadow duration-700 group-hover/icon:scale-125" style={{ backgroundColor: tier.color }}>
                        <div className="text-white">
                          {tier.icon}
                        </div>
                      </div>
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-4 h-4 rounded-full animate-pulse" style={{ backgroundColor: tier.color }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <Badge className="mb-6 px-6 py-3 text-sm font-black border" style={{ backgroundColor: `${tier.color}20`, color: tier.color, borderColor: `${tier.color}40` }}>
                    {tier.exclusive}
                  </Badge>
                  
                  <div className="text-xs text-white/60 font-semibold mb-4 uppercase tracking-wider">
                    {tier.rarity}
                  </div>
                  
                  <CardTitle className="text-4xl font-black text-white mb-4 tracking-tight">
                    {tier.name}
                  </CardTitle>
                  
                  <p className="text-lg text-white/70 font-light mb-8">
                    {tier.subtitle}
                  </p>
                  
                  <div className="text-6xl font-black mb-12" style={{ color: tier.color }}>
                    {tier.price}
                  </div>
                </CardHeader>
                
                <CardContent className="relative p-16 pt-0">
                  <ul className="space-y-5 mb-12">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-4 group/benefit">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md group-hover/benefit:scale-110 transition-transform" style={{ backgroundColor: tier.color }}>
                          <Check className="w-5 h-5 text-white font-bold" />
                        </div>
                        <span className="text-white/90 font-semibold leading-relaxed group-hover/benefit:text-white transition-colors">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full py-6 font-black text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 rounded-2xl group/btn" style={{ backgroundColor: tier.color, color: 'white' }}>
                    SECURE {tier.name.toUpperCase()}
                    <ArrowRight className="w-6 h-6 ml-3 group-hover/btn:translate-x-2 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Compact Premium Tiers */}
        <div className="grid md:grid-cols-2 gap-12 mb-32">
          {sponsorshipTiers.slice(3).map((tier, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              
              <Card className="relative overflow-hidden border border-white/20 bg-white/10 backdrop-blur-sm hover:shadow-2xl transition-all duration-700 hover:scale-105 rounded-2xl">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundColor: tier.color }}></div>
                
                <CardHeader className="relative text-center p-12">
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-2xl blur-lg opacity-50" style={{ backgroundColor: tier.color }}></div>
                      <div className="relative w-20 h-20 rounded-2xl shadow-xl flex items-center justify-center group-hover:shadow-2xl transition-shadow duration-500 group-hover:scale-110" style={{ backgroundColor: tier.color }}>
                        <div className="text-white">
                          {tier.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Badge className="mb-4 px-4 py-2 text-xs font-black border" style={{ backgroundColor: `${tier.color}20`, color: tier.color, borderColor: `${tier.color}30` }}>
                    {tier.exclusive}
                  </Badge>
                  
                  <div className="text-xs text-white/60 font-semibold mb-3 uppercase tracking-wider">
                    {tier.rarity}
                  </div>
                  
                  <CardTitle className="text-3xl font-black text-white mb-3 tracking-tight">
                    {tier.name}
                  </CardTitle>
                  
                  <p className="text-sm text-white/70 font-light mb-6">
                    {tier.subtitle}
                  </p>
                  
                  <div className="text-4xl font-black mb-8" style={{ color: tier.color }}>
                    {tier.price}
                  </div>
                </CardHeader>
                
                <CardContent className="relative p-12 pt-0">
                  <ul className="space-y-4 mb-10">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-3 group/item">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm group-hover/item:scale-110 transition-transform" style={{ backgroundColor: tier.color }}>
                          <Check className="w-4 h-4 text-white font-bold" />
                        </div>
                        <span className="text-white/90 font-semibold text-sm leading-relaxed group-hover/item:text-white transition-colors">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full py-4 font-black shadow-xl hover:shadow-2xl transition-all duration-500 rounded-xl group/btn" style={{ backgroundColor: tier.color, color: 'white' }}>
                    SELECT {tier.name.split(' ')[0].toUpperCase()}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Ultra-Luxury Call to Action */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/95 to-[#0A2540] rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF5E3A]/10 via-[#00D1FF]/10 to-[#FF5E3A]/10 rounded-3xl animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent rounded-3xl"></div>
          
          <div className="relative text-center p-20 rounded-3xl shadow-3xl border-2 border-white/10">
            <div className="mb-12">
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF5E3A]/30 to-[#00D1FF]/30 blur-xl rounded-full"></div>
                <div className="relative inline-flex items-center px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <Diamond className="w-6 h-6 mr-3 text-[#00D1FF] animate-pulse" />
                  <span className="text-white font-black text-lg tracking-[0.15em]">EXCLUSIVE INVITATION</span>
                  <Gem className="w-6 h-6 ml-3 text-[#FF5E3A] animate-bounce" />
                </div>
              </div>
              
              <h3 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
                READY TO JOIN THE ELITE?
              </h3>
              <p className="text-2xl md:text-3xl text-white/80 mb-16 max-w-5xl mx-auto font-light leading-relaxed">
                Join us in shaping the future of African talent and innovation. 
                <span className="font-black text-transparent bg-gradient-to-r from-[#FF5E3A] to-[#00D1FF] bg-clip-text"> Let's create something extraordinary together.</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Button className="group bg-gradient-to-r from-[#FF5E3A] to-[#00D1FF] hover:from-[#FF5E3A]/90 hover:to-[#00D1FF]/90 text-white px-16 py-8 text-2xl font-black shadow-3xl hover:shadow-4xl transition-all duration-500 hover:scale-110 rounded-2xl border-2 border-white/20">
                <Crown className="w-8 h-8 mr-4 group-hover:animate-bounce" />
                BECOME AN ELITE PARTNER
                <ArrowRight className="w-8 h-8 ml-4 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button variant="outline" className="group border-2 border-white/30 text-white hover:bg-white hover:text-[#0A2540] px-16 py-8 text-2xl font-black transition-all duration-500 hover:scale-105 rounded-2xl backdrop-blur-sm">
                <Diamond className="w-8 h-8 mr-4 group-hover:animate-spin" />
                DOWNLOAD PREMIUM DECK
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}