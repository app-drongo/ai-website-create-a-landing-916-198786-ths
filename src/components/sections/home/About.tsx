'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Target,
  Users,
  Award,
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Database,
  Zap,
  Shield,
  CheckCircle,
} from 'lucide-react';

export default function About() {
  const handleReadStory = () => {
    window.location.href = '/company-story';
  };

  const handleViewTeam = () => {
    window.location.href = '/team';
  };

  const values = [
    {
      icon: Database,
      title: 'SAP Excellence',
      description:
        'Deep expertise in SAP ERP systems with certified consultants who understand complex enterprise requirements and deliver seamless integrations.',
    },
    {
      icon: Zap,
      title: 'Rapid Implementation',
      description:
        'Accelerated deployment methodologies that reduce go-live time by 40% while maintaining quality and minimizing business disruption.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description:
        'Bank-grade security protocols and compliance frameworks ensuring your SAP data remains protected throughout the integration process.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description:
        'Supporting multinational enterprises across 35+ countries with localized SAP implementations and 24/7 technical support coverage.',
    },
  ];

  const stats = [
    { value: '2015', label: 'SAP Partner Since', icon: Award },
    { value: '500+', label: 'ERP Implementations', icon: Database },
    { value: '99.8%', label: 'Project Success Rate', icon: TrendingUp },
    { value: '35+', label: 'Countries Served', icon: Globe },
  ];

  const team = [
    {
      name: 'Marcus Weber',
      role: 'SAP Practice Director',
      image: 'MW',
      bio: '20+ years SAP consulting. Former SAP AG solution architect with S/4HANA expertise.',
    },
    {
      name: 'Priya Sharma',
      role: 'Integration Lead',
      image: 'PS',
      bio: 'SAP PI/PO specialist. Led 100+ middleware implementations for Fortune 500 companies.',
    },
    {
      name: 'Thomas Mueller',
      role: 'Technical Architect',
      image: 'TM',
      bio: 'ABAP development expert. Certified in SAP HANA and cloud integration platforms.',
    },
    {
      name: 'Lisa Chen',
      role: 'Change Management Director',
      image: 'LC',
      bio: 'Organizational transformation specialist. Ensures smooth SAP adoption across enterprises.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/30">
            About SAP Integrator Company
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transforming Business Through
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              SAP ERP Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're SAP integration specialists dedicated to helping enterprises unlock the full
            potential of their ERP investments through seamless implementations and strategic
            consulting.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our SAP Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2015 by former SAP consultants, we recognized the gap between SAP's
                powerful capabilities and successful enterprise adoption. Complex implementations
                were failing due to inadequate change management and technical expertise.
              </p>
              <p>
                Our methodology combines deep SAP technical knowledge with proven change management
                frameworks, ensuring not just successful go-lives but sustained business
                transformation and measurable ROI improvements.
              </p>
              <p>
                Today, we've completed 500+ SAP implementations across manufacturing, retail, and
                services industries, with a 99.8% project success rate and average 25% efficiency
                gains.
              </p>
            </div>
            <Button onClick={handleReadStory} className="group bg-primary hover:bg-primary/90">
              Explore Our Methodology
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <Card className="border-primary/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-primary/10 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "SAP success isn't just about technology—it's about transforming how people
                      work and think."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">
                      - Marcus Weber, SAP Practice Director
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border-primary/20 hover:border-primary/40 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2 text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our SAP Expertise</h3>
            <p className="text-muted-foreground">
              The core competencies that make us the trusted SAP integration partner for enterprise
              clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-primary/20 hover:border-primary/40 transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">SAP Certified Experts</h3>
            <p className="text-muted-foreground">
              Our leadership team combines decades of SAP experience with proven track records in
              enterprise transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-primary/20 hover:border-primary/40 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleViewTeam}
              variant="outline"
              className="group border-primary/30 hover:border-primary"
            >
              View All SAP Consultants
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Client Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "SAP Integrator Company delivered our S/4HANA migration 3 weeks ahead of schedule.
                Their expertise in change management was crucial—user adoption exceeded 95% within
                the first month."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground font-bold">
                  RK
                </div>
                <div className="text-left">
                  <div className="font-semibold">Robert Klein</div>
                  <div className="text-sm text-muted-foreground">
                    CIO, Global Manufacturing Corp
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
