'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
} from 'lucide-react';

export default function Footer() {
  const router = useRouter();

  const footerSections = [
    {
      title: 'SAP Solutions',
      links: [
        { name: 'SAP S/4HANA', href: '/solutions/s4hana' },
        { name: 'SAP SuccessFactors', href: '/solutions/successfactors' },
        { name: 'SAP Ariba', href: '/solutions/ariba' },
        { name: 'SAP Concur', href: '/solutions/concur' },
        { name: 'SAP Analytics Cloud', href: '/solutions/analytics' },
        { name: 'SAP Fiori', href: '/solutions/fiori' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'ERP Implementation', href: '/services/implementation' },
        { name: 'System Integration', href: '/services/integration' },
        { name: 'Migration Services', href: '/services/migration' },
        { name: 'Support & Maintenance', href: '/services/support' },
        { name: 'Training Programs', href: '/services/training' },
        { name: 'Consulting', href: '/services/consulting' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Implementation Guide', href: '/resources/guide' },
        { name: 'SAP Community', href: '/resources/community' },
        { name: 'Best Practices', href: '/resources/best-practices' },
        { name: 'Webinars', href: '/resources/webinars' },
        { name: 'Case Studies', href: '/resources/case-studies' },
        { name: 'Knowledge Base', href: '/resources/knowledge' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About SAP Integrator', href: '/about' },
        { name: 'Our Methodology', href: '/methodology' },
        { name: 'Certifications', href: '/certifications' },
        { name: 'Partners', href: '/partners' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '#contact' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/sap-integrator' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/sapintegrator' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/sapintegrator' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/sapintegrator' },
  ];

  // ACTION_PLACEHOLDER_START
  const handleNewsletterSignup = () => {
    router.push('/newsletter');
  };
  // ACTION_PLACEHOLDER_END

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">S</span>
                </div>
                <span className="font-bold text-xl">SAP Integrator Company</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Transforming Business Through SAP ERP Excellence. Leading enterprise SAP
                implementations with 500+ successful deployments across 35+ countries since 2015.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">enterprise@sapintegrator.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (800) SAP-IMPL</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  Global HQ: Enterprise Plaza, Suite 2000
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">SAP Insights Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your business email"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3" onClick={handleNewsletterSignup}>
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get SAP implementation insights and industry updates. Enterprise-focused content
                only.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 SAP Integrator Company. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Trusted by <Heart className="size-3 text-primary fill-current" /> 500+ enterprises
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/security"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Security & Compliance
            </Link>
            <Link
              href="/support"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Enterprise Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
