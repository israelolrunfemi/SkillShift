"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Crown, Award, Star, Heart, Sparkles, TrendingUp, Users, Database, Trophy, Zap, Shield, Diamond, ArrowRight, Gem, Infinity, Target, Download, Phone } from "lucide-react"

export function SponsorshipSection() {
  
const sponsorshipTiers = [
{
name: "Platinum Elite",
subtitle: "The Pinnacle of Partnership",
price: "₦3,000,000+",
icon: <Crown className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16" />,
color: "#475569",
secondaryColor: "#64748B",
bgColor: "bg-slate-600/5",
borderColor: "border-slate-600/30",
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
icon: <Award className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16" />,
color: "#6B7280",
secondaryColor: "#9CA3AF",
bgColor: "bg-gray-500/5",
borderColor: "border-gray-500/30",
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
icon: <Star className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16" />,
color: "#374151",
secondaryColor: "#4B5563",
bgColor: "bg-gray-700/5",
borderColor: "border-gray-700/30",
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
icon: <Shield className="w-7 h-7 sm:w-10 sm:h-10 lg:w-14 lg:h-14" />,
color: "#64748B",
secondaryColor: "#94A3B8",
bgColor: "bg-slate-500/5",
borderColor: "border-slate-500/20",
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
icon: <Heart className="w-7 h-7 sm:w-10 sm:h-10 lg:w-14 lg:h-14" />,
color: "#71717A",
secondaryColor: "#A1A1AA",
bgColor: "bg-zinc-500/5",
borderColor: "border-zinc-500/20",
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
icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12" />,
title: "Elite Enrollment",
description: "Engage directly with over 1,000 high-caliber participants and extend your brand's reach to more than 5,000 digital viewers and 3,000 students on campus.",
color: "#475569",
metric: "1,000+",
metricLabel: "Elite Participants",
growth: "+250%"
},
{
icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12" />,
title: "Premium Publicity",
description: "Enjoy multi-channel promotional campaigns featuring sponsored content, influencer collaborations, and interactive digital challenges.",
color: "#6B7280",
metric: "5,000+",
metricLabel: "Digital Reach",
growth: "+400%"
},
{
icon: <Target className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12" />,
title: "Talent Pipeline",
description: "Build a pipeline of emerging talent and initiate a campus ambassador program tailored to your brand.",
color: "#374151",
metric: "3,000+",
metricLabel: "Campus Students",
growth: "+180%"
},
{
icon: <Database className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12" />,
title: "Exclusive Database",
description: "Gain access to an opt-in attendee list for future communication and recruitment.",
color: "#64748B",
metric: "100%",
metricLabel: "Opt-in Rate",
growth: "Guaranteed"
},
{
icon: <Trophy className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12" />,
title: "Prestige Award",
description: "Receive public recognition as a CSR partner and youth development contributor during the main event.",
color: "#71717A",
metric: "VIP",
metricLabel: "Recognition",
growth: "Exclusive"
},
]

return (
<section id="sponsors" className="relative py-16 sm:py-24 md:py-32 lg:py-48 overflow-hidden">
{/* Sophisticated Background System */}
<div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>

{/* Responsive Animated Background Orbs */}
<div className="absolute inset-0">
<div className="absolute top-0 left-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[800px] lg:h-[800px] bg-gradient-to-br from-gray-200/30 via-gray-300/15 to-transparent rounded-full blur-2xl sm:blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
<div className="absolute bottom-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[800px] lg:h-[800px] bg-gradient-to-tl from-slate-200/30 via-slate-300/15 to-transparent rounded-full blur-2xl sm:blur-3xl transform translate-x-1/2 translate-y-1/2 animate-pulse"></div>
<div className="absolute top-1/2 left-1/4 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] bg-gradient-to-r from-gray-300/20 via-transparent to-gray-300/20 rounded-full blur-xl sm:blur-2xl transform -translate-x-1/2 -translate-y-1/2 animate-bounce"></div>
<div className="absolute top-1/4 right-1/4 w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-gradient-to-l from-slate-300/15 via-transparent to-gray-300/15 rounded-full blur-lg sm:blur-xl animate-spin"></div>
</div>

{/* Refined Grid Pattern */}
<div className="absolute inset-0 opacity-[0.02] sm:opacity-[0.03]" style={{
backgroundImage: `
         radial-gradient(circle at 15px 15px, #6B7280 1px, transparent 0),
         radial-gradient(circle at 45px 45px, #9CA3AF 0.5px, transparent 0)
       `,
backgroundSize: '60px 60px'
}}></div>

{/* Responsive Floating Elements */}
<div className="absolute top-16 sm:top-20 left-4 sm:left-20 w-2 h-2 sm:w-4 sm:h-4 bg-gray-400/30 rotate-45 animate-spin"></div>
<div className="absolute top-24 sm:top-40 right-6 sm:right-32 w-3 h-3 sm:w-6 sm:h-6 bg-slate-400/20 rounded-full animate-bounce"></div>
<div className="absolute bottom-24 sm:bottom-32 left-6 sm:left-40 w-1.5 h-1.5 sm:w-3 sm:h-3 bg-gray-500/40 animate-pulse"></div>
<div className="absolute bottom-16 sm:bottom-20 right-4 sm:right-20 w-2.5 h-2.5 sm:w-5 sm:h-5 bg-slate-500/30 rotate-12 animate-spin"></div>

<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
{/* Sophisticated Header Section */}
<div className="text-center mb-16 sm:mb-24 lg:mb-40">
<div className="relative inline-block mb-8 sm:mb-12 lg:mb-16">
<div className="absolute inset-0 bg-gradient-to-r from-gray-300/20 via-slate-300/20 to-gray-300/20 blur-lg sm:blur-xl rounded-full"></div>
<div className="relative inline-flex items-center px-4 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 rounded-full bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white font-black shadow-2xl border border-gray-700/30 backdrop-blur-sm">
<Gem className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 mr-2 sm:mr-3 lg:mr-4 text-gray-300 animate-pulse" />
<span className="text-xs sm:text-base lg:text-xl tracking-[0.1em] sm:tracking-[0.15em] lg:tracking-[0.2em] uppercase">EXCLUSIVE PARTNERSHIP OPPORTUNITIES</span>
<Infinity className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 ml-2 sm:ml-3 lg:ml-4 text-gray-400 animate-spin" />
</div>
</div>

<div className="relative mb-8 sm:mb-12 lg:mb-16">
<h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 sm:mb-6 lg:mb-8 leading-[0.85] tracking-tighter">
<span className="block text-gray-900 drop-shadow-lg">ELEVATE YOUR</span>
<span className="block text-transparent bg-gradient-to-r from-gray-600 via-slate-700 to-gray-600 bg-clip-text">BRAND LEGACY</span>
</h2>

{/* Responsive Decorative Lines */}
<div className="absolute -top-4 sm:-top-6 lg:-top-8 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 lg:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
<div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 lg:w-48 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-slate-500 to-transparent"></div>
</div>

<p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600 max-w-2xl sm:max-w-4xl lg:max-w-7xl mx-auto leading-relaxed font-light mb-8 sm:mb-12 lg:mb-16 px-4">
Partner with Global SkillShift and position your brand as the 
<span className="relative font-black text-gray-800 mx-1 sm:mx-2">
<span className="absolute inset-0 bg-gray-200/60 blur-lg rounded-lg"></span>
<span className="relative">ultimate champion</span>
</span>
of youth empowerment, innovation, and talent development across Africa.
</p>

{/* Responsive Premium Stats Display */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto">
{[
{ number: "1,000+", label: "Elite Participants", color: "#475569" },
{ number: "5,000+", label: "Digital Reach", color: "#6B7280" },
{ number: "3,000+", label: "Campus Impact", color: "#374151" }
].map((stat, index) => (
<div key={index} className="relative group">
<div className="absolute inset-0 bg-gradient-to-br from-white/60 to-gray-50/80 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl group-hover:blur-2xl transition-all duration-500"></div>
<div className="relative bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200/50 hover:border-gray-300/60 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl">
<div className="text-2xl sm:text-3xl lg:text-5xl font-black mb-1 sm:mb-2" style={{ color: stat.color }}>
{stat.number}
</div>
<div className="text-gray-500 font-semibold uppercase tracking-wider text-xs sm:text-sm">
{stat.label}
</div>
</div>
</div>
))}
</div>
</div>

{/* Responsive Value Propositions */}
<div className="mb-16 sm:mb-24 lg:mb-40">
<div className="text-center mb-12 sm:mb-16 lg:mb-24">
<h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 lg:mb-8 tracking-tight">
WHY ELITE BRANDS CHOOSE US
</h3>
<div className="w-16 sm:w-24 lg:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-gray-400 to-slate-500 mx-auto rounded-full"></div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
{valueProps.map((prop, index) => (
<div key={index} className="group relative">
{/* Floating Card Effect */}
<div className="absolute inset-0 bg-gradient-to-br from-white/60 to-gray-50/40 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl group-hover:blur-2xl transition-all duration-700 group-hover:scale-110"></div>

<Card className="relative overflow-hidden border-0 bg-white/90 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 sm:hover:scale-110 hover:-translate-y-2 sm:hover:-translate-y-4 lg:hover:-translate-y-8 rounded-2xl sm:rounded-3xl">
<div className="absolute inset-0 bg-gradient-to-br from-white/40 via-gray-50/30 to-transparent"></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-2xl sm:rounded-3xl" style={{ backgroundColor: prop.color }}></div>

{/* Premium Border Animation */}
<div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-transparent bg-gradient-to-r from-transparent via-gray-300/30 to-transparent group-hover:from-gray-400/40 group-hover:via-slate-400/40 group-hover:to-gray-400/40 transition-all duration-700"></div>

<CardContent className="relative p-6 sm:p-8 lg:p-12 text-center">
{/* Icon with Glow Effect */}
<div className="relative mb-4 sm:mb-6 lg:mb-8">
<div className="absolute inset-0 rounded-full blur-lg sm:blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" style={{ backgroundColor: prop.color }}></div>
<div className="relative inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 rounded-full shadow-xl group-hover:shadow-2xl transition-all duration-700 group-hover:scale-110 sm:group-hover:scale-125" style={{ backgroundColor: prop.color }}>
<div className="text-white">
{prop.icon}
</div>
</div>
</div>

{/* Metrics Display */}
<div className="mb-4 sm:mb-6">
<div className="text-2xl sm:text-3xl lg:text-4xl font-black mb-1 sm:mb-2 text-gray-900">
{prop.metric}
</div>
<div className="text-xs font-bold text-gray-500 uppercase tracking-[0.1em] sm:tracking-[0.15em] lg:tracking-[0.2em] mb-1 sm:mb-2">
{prop.metricLabel}
</div>
<Badge className="px-2 sm:px-3 py-1 text-xs font-black border" style={{ backgroundColor: `${prop.color}20`, color: prop.color, borderColor: `${prop.color}30` }}>
{prop.growth}
</Badge>
</div>

<h4 className="text-lg sm:text-xl font-black text-gray-900 mb-3 sm:mb-4 lg:mb-6 group-hover:opacity-90 transition-opacity">
{prop.title}
</h4>

<p className="text-gray-600 leading-relaxed font-medium text-sm group-hover:text-gray-700 transition-colors">
{prop.description}
</p>

{/* Premium Bottom Accent */}
<div className="absolute bottom-0 left-0 right-0 h-1 sm:h-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-2xl sm:rounded-b-3xl" style={{ backgroundColor: prop.color }}></div>
</CardContent>
</Card>
</div>
))}
</div>
</div>

{/* Ultra-Premium Platinum Tier - Responsive Hero Card */}
<div className="mb-16 sm:mb-24 lg:mb-32">
<div className="relative">
{/* Floating Premium Badge */}
<div className="absolute -top-6 sm:-top-8 lg:-top-12 left-1/2 transform -translate-x-1/2 z-30">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-slate-500 blur-lg sm:blur-xl rounded-full"></div>
<Badge className="relative bg-gradient-to-r from-gray-700 to-gray-800 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-black shadow-2xl border border-gray-600/30 backdrop-blur-sm rounded-full">
<Crown className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3 animate-pulse" />
MOST EXCLUSIVE PARTNERSHIP
<Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-2 sm:ml-3 animate-spin" />
</Badge>
</div>
</div>

{/* Main Platinum Card */}
<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-br from-gray-300/30 via-slate-300/20 to-gray-300/30 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl group-hover:blur-3xl transition-all duration-1000"></div>

<Card className="relative overflow-hidden border-2 sm:border-4 border-gray-200/60 bg-gradient-to-br from-white/90 via-gray-50/80 to-white/70 shadow-2xl backdrop-blur-md rounded-2xl sm:rounded-3xl">
{/* Animated Background Gradient */}
<div className="absolute inset-0 bg-gradient-to-r from-gray-100/30 via-transparent to-slate-100/30 animate-pulse"></div>
<div className="absolute top-0 left-0 right-0 h-1 sm:h-2 bg-gradient-to-r from-gray-500 via-slate-600 to-gray-500"></div>

{/* Premium Shine Effect */}
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-2000"></div>

<div className="relative grid lg:grid-cols-2 gap-0">
{/* Left Side - Main Info */}
<CardHeader className="p-6 sm:p-12 lg:p-20 text-center lg:text-left">
<div className="flex justify-center lg:justify-start mb-6 sm:mb-8 lg:mb-12">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-slate-500 rounded-full blur-xl sm:blur-2xl animate-pulse opacity-30"></div>
<div className="relative w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center shadow-2xl">
<Crown className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-white" />
</div>
<div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-top-4 lg:-right-4 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-slate-500 rounded-full flex items-center justify-center animate-bounce">
<Sparkles className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-white" />
</div>
</div>
</div>

<div className="mb-4 sm:mb-6 lg:mb-8">
<Badge className="bg-gray-600/20 text-gray-700 px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 text-sm sm:text-base font-black mb-3 sm:mb-4 lg:mb-6 border border-gray-500/30">
{sponsorshipTiers[0].exclusive}
</Badge>
<div className="text-xs sm:text-sm text-gray-500 font-semibold mb-2 sm:mb-3 lg:mb-4 uppercase tracking-wider">
{sponsorshipTiers[0].rarity}
</div>
<CardTitle className="text-3xl sm:text-4xl lg:text-6xl font-black text-gray-900 mb-2 sm:mb-3 lg:mb-4 tracking-tight">
{sponsorshipTiers[0].name}
</CardTitle>
<p className="text-base sm:text-lg lg:text-xl text-gray-600 font-light">
{sponsorshipTiers[0].subtitle}
</p>
</div>

<div className="text-4xl sm:text-5xl lg:text-7xl font-black text-transparent bg-gradient-to-r from-gray-600 to-slate-700 bg-clip-text mb-6 sm:mb-8 lg:mb-12">
{sponsorshipTiers[0].price}
</div>

<p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 lg:mb-12 font-light">
The ultimate partnership experience with maximum visibility, exclusive benefits, and unparalleled brand elevation that positions you as an industry leader.
</p>

<Button className="group bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white px-6 sm:px-10 lg:px-16 py-4 sm:py-6 lg:py-8 text-base sm:text-lg lg:text-2xl font-black shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 sm:hover:scale-110 rounded-xl sm:rounded-2xl border border-gray-600/20 w-full sm:w-auto">
<Crown className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 mr-2 sm:mr-3 lg:mr-4 group-hover:animate-bounce" />
<span className="hidden sm:inline">CLAIM PLATINUM STATUS</span>
<span className="sm:hidden">GET PLATINUM</span>
<ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 ml-2 sm:ml-3 lg:ml-4 group-hover:translate-x-2 transition-transform" />
</Button>
</CardHeader>

{/* Right Side - Benefits */}
<CardContent className="p-6 sm:p-12 lg:p-20 bg-gradient-to-br from-gray-100/40 to-slate-100/30 backdrop-blur-sm">
<h4 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-6 sm:mb-8 lg:mb-12 flex items-center">
<Zap className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 mr-2 sm:mr-3 lg:mr-4 text-gray-600 animate-pulse" />
<span className="hidden sm:inline">EXCLUSIVE BENEFITS</span>
<span className="sm:hidden">BENEFITS</span>
</h4>
<ul className="space-y-3 sm:space-y-4 lg:space-y-6">
{sponsorshipTiers[0].benefits.slice(0, 8).map((benefit, benefitIndex) => (
<li key={benefitIndex} className="flex items-start gap-3 sm:gap-4 lg:gap-6 group/item">
<div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-r from-gray-600 to-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1 shadow-lg group-hover/item:scale-110 transition-transform">
<Check className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-white font-bold" />
</div>
<span className="text-gray-700 font-semibold text-sm sm:text-base lg:text-lg leading-relaxed group-hover/item:text-gray-900 transition-colors">{benefit}</span>
</li>
))}
<li className="flex items-center gap-3 sm:gap-4 lg:gap-6 pt-3 sm:pt-4 lg:pt-6 border-t border-gray-200">
<div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-slate-600 flex items-center justify-center animate-pulse">
<Sparkles className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-white" />
</div>
<span className="text-gray-700 font-black text-sm sm:text-base lg:text-xl">+ {sponsorshipTiers[0].benefits.length - 8} MORE PREMIUM BENEFITS</span>
</li>
</ul>
</CardContent>
</div>
</Card>
</div>
</div>
</div>

{/* Responsive Premium Tier Cards Grid */}
<div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-24 lg:mb-32">
{sponsorshipTiers.slice(1, 3).map((tier, index) => (
<div key={index} className="group relative">
<div className="absolute inset-0 bg-gradient-to-br from-white/60 to-gray-50/40 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl group-hover:blur-2xl transition-all duration-700"></div>

<Card className="relative overflow-hidden border border-gray-200/60 bg-white/90 backdrop-blur-md hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:-translate-y-4 sm:hover:-translate-y-8 rounded-2xl sm:rounded-3xl">
<div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700" style={{ backgroundColor: tier.color }}></div>

{/* Premium Top Accent */}
<div className="absolute top-0 left-0 right-0 h-1 sm:h-2 bg-gradient-to-r" style={{ background: `linear-gradient(90deg, ${tier.color}, ${tier.secondaryColor}, ${tier.color})` }}></div>

<CardHeader className="relative text-center p-8 sm:p-12 lg:p-16">
<div className="flex justify-center mb-6 sm:mb-8 lg:mb-10">
<div className="relative group/icon">
<div className="absolute inset-0 rounded-full blur-lg sm:blur-xl opacity-30 group-hover/icon:opacity-50 transition-opacity duration-500" style={{ backgroundColor: tier.color }}></div>
<div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full shadow-xl flex items-center justify-center group-hover/icon:shadow-2xl transition-shadow duration-700 group-hover/icon:scale-125" style={{ backgroundColor: tier.color }}>
<div className="text-white">
{tier.icon}
</div>
</div>
<div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
<div className="w-2 h-2 sm:w-4 sm:h-4 rounded-full animate-pulse" style={{ backgroundColor: tier.color }}></div>
</div>
</div>
</div>

<Badge className="mb-4 sm:mb-6 px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 text-xs sm:text-sm font-black border" style={{ backgroundColor: `${tier.color}20`, color: tier.color, borderColor: `${tier.color}40` }}>
{tier.exclusive}
</Badge>

<div className="text-xs text-gray-500 font-semibold mb-2 sm:mb-3 lg:mb-4 uppercase tracking-wider">
{tier.rarity}
</div>

<CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 sm:mb-3 lg:mb-4 tracking-tight">
{tier.name}
</CardTitle>

<p className="text-sm sm:text-base lg:text-lg text-gray-600 font-light mb-4 sm:mb-6 lg:mb-8">
{tier.subtitle}
</p>

<div className="text-3xl sm:text-4xl lg:text-6xl font-black mb-6 sm:mb-8 lg:mb-12" style={{ color: tier.color }}>
{tier.price}
</div>
</CardHeader>

<CardContent className="relative p-8 sm:p-12 lg:p-16 pt-0">
<ul className="space-y-3 sm:space-y-4 lg:space-y-5 mb-8 sm:mb-10 lg:mb-12">
{tier.benefits.map((benefit, benefitIndex) => (
<li key={benefitIndex} className="flex items-start gap-3 sm:gap-4 group/benefit">
<div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1 shadow-md group-hover/benefit:scale-110 transition-transform" style={{ backgroundColor: tier.color }}>
<Check className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white font-bold" />
</div>
<span className="text-gray-700 font-semibold text-sm sm:text-base leading-relaxed group-hover/benefit:text-gray-900 transition-colors">{benefit}</span>
</li>
))}
</ul>

<Button className="w-full py-4 sm:py-5 lg:py-6 font-black text-base sm:text-lg lg:text-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-xl sm:rounded-2xl group/btn" style={{ backgroundColor: tier.color, color: 'white' }}>
<span className="hidden sm:inline">SECURE {tier.name.toUpperCase()}</span>
<span className="sm:hidden">GET {tier.name.split(' ')[0].toUpperCase()}</span>
<ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover/btn:translate-x-2 transition-transform" />
</Button>
</CardContent>
</Card>
</div>
))}
</div>

{/* Responsive Compact Premium Tiers */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-16 sm:mb-24 lg:mb-32">
{sponsorshipTiers.slice(3).map((tier, index) => (
<div key={index} className="group relative">
<div className="absolute inset-0 bg-gradient-to-br from-white/60 to-gray-50/40 rounded-xl sm:rounded-2xl blur-md sm:blur-lg group-hover:blur-xl transition-all duration-500"></div>

<Card className="relative overflow-hidden border border-gray-200/60 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-700 hover:scale-105 rounded-xl sm:rounded-2xl">
<div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500" style={{ backgroundColor: tier.color }}></div>

<CardHeader className="relative text-center p-6 sm:p-8 lg:p-12">
<div className="flex justify-center mb-4 sm:mb-6 lg:mb-8">
<div className="relative">
<div className="absolute inset-0 rounded-xl sm:rounded-2xl blur-md sm:blur-lg opacity-30" style={{ backgroundColor: tier.color }}></div>
<div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-500 group-hover:scale-110" style={{ backgroundColor: tier.color }}>
<div className="text-white">
{tier.icon}
</div>
</div>
</div>
</div>

<Badge className="mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-black border" style={{ backgroundColor: `${tier.color}20`, color: tier.color, borderColor: `${tier.color}30` }}>
{tier.exclusive}
</Badge>

<div className="text-xs text-gray-500 font-semibold mb-2 sm:mb-3 uppercase tracking-wider">
{tier.rarity}
</div>

<CardTitle className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 mb-2 sm:mb-3 tracking-tight">
{tier.name}
</CardTitle>

<p className="text-xs sm:text-sm text-gray-600 font-light mb-4 sm:mb-6">
{tier.subtitle}
</p>

<div className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 sm:mb-6 lg:mb-8" style={{ color: tier.color }}>
{tier.price}
</div>
</CardHeader>

<CardContent className="relative p-6 sm:p-8 lg:p-12 pt-0">
<ul className="space-y-2 sm:space-y-3 lg:space-y-4 mb-6 sm:mb-8 lg:mb-10">
{tier.benefits.map((benefit, benefitIndex) => (
<li key={benefitIndex} className="flex items-start gap-2 sm:gap-3 group/item">
<div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm group-hover/item:scale-110 transition-transform" style={{ backgroundColor: tier.color }}>
<Check className="w-3 h-3 sm:w-4 sm:h-4 text-white font-bold" />
</div>
<span className="text-gray-700 font-semibold text-xs sm:text-sm leading-relaxed group-hover/item:text-gray-900 transition-colors">{benefit}</span>
</li>
))}
</ul>

<Button className="w-full py-3 sm:py-4 font-black text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-500 rounded-lg sm:rounded-xl group/btn" style={{ backgroundColor: tier.color, color: 'white' }}>
<span className="hidden sm:inline">SELECT {tier.name.split(' ')[0].toUpperCase()}</span>
<span className="sm:hidden">{tier.name.split(' ')[0].toUpperCase()}</span>
<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2 group-hover/btn:translate-x-1 transition-transform" />
</Button>
</CardContent>
</Card>
</div>
))}
</div>

{/* Sophisticated Call to Action - Fully Responsive */}
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl"></div>
<div className="absolute inset-0 bg-gradient-to-r from-gray-700/20 via-slate-700/20 to-gray-700/20 rounded-2xl sm:rounded-3xl"></div>
<div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent rounded-2xl sm:rounded-3xl"></div>

<div className="relative text-center p-8 sm:p-12 lg:p-20 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-700/30">
<div className="mb-8 sm:mb-10 lg:mb-12">
<div className="relative inline-block mb-4 sm:mb-6 lg:mb-8">
<div className="absolute inset-0 bg-gradient-to-r from-gray-400/30 to-slate-500/30 blur-lg sm:blur-xl rounded-full"></div>
<div className="relative inline-flex items-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full bg-white/10 backdrop-blur-sm border border-gray-600/20">
<Diamond className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3 text-gray-300 animate-pulse" />
<span className="text-white font-black text-sm sm:text-base lg:text-lg tracking-[0.1em] sm:tracking-[0.15em]">EXCLUSIVE INVITATION</span>
<Gem className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-2 sm:mr-3 text-gray-400 animate-bounce" />
</div>
</div>

<h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 lg:mb-8 tracking-tight">
READY TO JOIN THE ELITE?
</h3>
<p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 sm:mb-12 lg:mb-16 max-w-2xl sm:max-w-4xl lg:max-w-5xl mx-auto font-light leading-relaxed px-4">
Join us in shaping the future of African talent and innovation. 
<span className="font-black text-transparent bg-gradient-to-r from-gray-300 to-white bg-clip-text"> Let's create something extraordinary together.</span>
</p>
</div>

<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center">
<Button className="group bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white px-6 sm:px-10 lg:px-16 py-4 sm:py-6 lg:py-8 text-base sm:text-lg lg:text-2xl font-black shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 sm:hover:scale-110 rounded-xl sm:rounded-2xl border border-gray-500/20">
<Crown className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 mr-2 sm:mr-3 lg:mr-4 group-hover:animate-bounce" />
<span className="hidden sm:inline">BECOME AN ELITE PARTNER</span>
<span className="sm:hidden">JOIN ELITE</span>
<ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 ml-2 sm:ml-3 lg:ml-4 group-hover:translate-x-2 transition-transform" />
</Button>
<Button className="group border-2 border-gray-400/30 text-white hover:bg-white hover:text-gray-800 px-6 sm:px-10 lg:px-16 py-4 sm:py-6 lg:py-8 text-base sm:text-lg lg:text-2xl font-black transition-all duration-500 hover:scale-105 rounded-xl sm:rounded-2xl backdrop-blur-sm bg-transparent">
<Download className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 mr-2 sm:mr-3 lg:mr-4 group-hover:animate-spin" />
<span className="hidden sm:inline">DOWNLOAD PREMIUM DECK</span>
<span className="sm:hidden">GET DECK</span>
</Button>
</div>

{/* Contact Information */}
<div className="mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 lg:pt-12 border-t border-gray-600/20">
<p className="text-gray-400 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
Ready to discuss your partnership? Contact our elite partnerships team:
</p>
<div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center">
<a href="mailto:partnerships@skillshift.com" className="group flex items-center text-gray-300 hover:text-white transition-colors font-semibold text-sm sm:text-base">
<div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-600/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-gray-500/40 transition-colors">
<span className="text-xs sm:text-sm">@</span>
</div>
partnerships@skillshift.com
</a>
<a href="tel:+2348123456789" className="group flex items-center text-gray-300 hover:text-white transition-colors font-semibold text-sm sm:text-base">
<div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-600/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-gray-500/40 transition-colors">
<Phone className="w-4 h-4 sm:w-5 sm:h-5" />
</div>
+234 812 345 6789
</a>
</div>
</div>
</div>
</div>
</div>
</section>
)}