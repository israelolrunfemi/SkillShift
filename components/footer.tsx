import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MapPin, Phone, Mail, Calendar, Linkedin, Twitter, Instagram, Facebook } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: " https://x.com/globaskillshift?s=21", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/globalskillshift/?igsh=ZHZ1c2g5eWlhNThz&utm_source=qr",
       label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ]

  const quickLinks = [
    { label: "About SkillShift", href: "#about" },
    { label: "Sponsorship", href: "#sponsors" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
    { label: "Partnership", href: "#partnership" },
    { label: "Media Kit", href: "#media" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="text-2xl font-bold font-sans">SkillShift</h3>
              <p className="text-sm text-primary-foreground/80 font-medium">Link. Learn. Leap.</p>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              More than an event - it's the beginning of a movement. Helping young people across Africa turn their
              skills into real opportunities.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Event Details</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 mt-0.5 text-primary-foreground/60" />
                <div>
                  <div className="font-medium">Dec 13th 2025</div>
                  <div className="text-sm text-primary-foreground/80">Beyond the Skill Summit</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-primary-foreground/60" />
                <div>
                  <div className="font-medium">UNILAG Campus</div>
                  <div className="text-sm text-primary-foreground/80">University of Lagos, Nigeria</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-foreground/60" />
                <a
                  href="mailto:info@globalskillshift.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                >
                  info@globalskillshift.com.ng
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-foreground/60" />
                <a
                  href="tel:+2341234567890"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                >
                  +234 123 456 7890
                </a>
              </div>
            </div>

            <div className="mt-6">
              <Badge
                variant="secondary"
                className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20"
              >
                Sponsorship Opportunities Available!
              </Badge>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-primary-foreground/80 text-sm">© 2025 Global SkillShift. All rights reserved.</div>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
            >
              Sponsorship Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
