'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Database,
  Shield,
  Workflow,
  Cloud,
  BarChart3,
  Settings,
  Zap,
  Users,
  CheckCircle,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Database,
      title: 'SAP ERP Integration',
      description:
        'Seamless integration with all SAP modules including FI/CO, MM, SD, and HR for unified business operations.',
      badge: 'Core Integration',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description:
        'SOX-compliant security protocols with role-based access control and audit trail capabilities.',
      badge: 'Compliance',
    },
    {
      icon: Workflow,
      title: 'Process Automation',
      description:
        'Automate complex business workflows across procurement, finance, and supply chain management.',
      badge: 'Automation',
    },
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description:
        'Expert SAP S/4HANA cloud migration services with zero downtime deployment strategies.',
      badge: 'Migration',
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description:
        'Advanced SAP Analytics Cloud integration for real-time business intelligence and reporting.',
      badge: 'Analytics',
    },
    {
      icon: Settings,
      title: 'Custom Development',
      description:
        'Bespoke ABAP development and Fiori app creation tailored to your business requirements.',
      badge: 'Development',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description:
        'Database tuning and system optimization to achieve 40% faster transaction processing.',
      badge: 'Performance',
    },
    {
      icon: Users,
      title: 'Change Management',
      description:
        'Comprehensive user training and change management to ensure smooth SAP adoption.',
      badge: 'Training',
    },
    {
      icon: CheckCircle,
      title: '24/7 SAP Support',
      description:
        'Round-the-clock technical support from certified SAP consultants and basis administrators.',
      badge: 'Support',
    },
  ];

  const handleStartImplementation = () => {
    window.location.href = '/implementation-consultation';
  };

  const handleViewCaseStudies = () => {
    window.location.href = '/sap-case-studies';
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20">
            SAP Integration Capabilities
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Complete SAP ERP
            <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Integration Solutions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Transform your business operations with our comprehensive SAP integration services. From
            implementation to optimization, we deliver enterprise-grade solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-card"
              >
                {/* Subtle hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 rounded-2xl bg-muted/30 border border-border">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Ready to Transform Your SAP Environment?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join 500+ enterprises who trust us with their SAP integration projects. Get a free
            consultation and implementation roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleStartImplementation}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-sm"
            >
              Start SAP Implementation
            </button>
            <button
              onClick={handleViewCaseStudies}
              className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors text-foreground"
            >
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
