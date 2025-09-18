import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Landmark } from 'lucide-react';
import AnimatedHeading from '@/components/animated-heading';

export default function InternationalServicesPage() {
  const services = [
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: 'International Adoptions',
      description: 'Guiding families through the legal complexities of inter-country adoption processes.',
      href: '/international-services/adoptions'
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Divorce & Family Law',
      description: 'Expert counsel on cross-border divorce, child custody, and international family law matters.',
      href: '/international-services/divorce-family-law'
    },
    {
      icon: <Landmark className="h-10 w-10 text-primary" />,
      title: 'Property Legal Disputes',
      description: 'Resolving disputes related to property ownership, inheritance, and real estate transactions across jurisdictions.',
      href: '/international-services/property-disputes'
    },
  ];

  return (
    <>
      <div className="bg-primary/5">
        <div className="container mx-auto max-w-7xl px-4 py-16 text-center">
          <AnimatedHeading 
            tag="h1" 
            text="International Legal Services" 
            className="font-headline text-4xl font-bold uppercase text-primary md:text-5xl justify-center"
          />
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Extending our legal expertise beyond borders to handle complex international cases with diligence and precision.
          </p>
        </div>
      </div>

      <div className="py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <AnimatedHeading 
              tag="h2"
              text="Our Global Reach"
              className="font-headline text-3xl font-bold text-primary justify-center"
            />
            <p className="mt-2 text-lg text-muted-foreground">
              Specialized services to navigate the complexities of international law.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="transform-gpu transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl bg-background">
                 <Link href={service.href} className="block h-full">
                    <CardHeader className="items-center text-center">
                      {service.icon}
                      <CardTitle className="mt-4 font-headline uppercase">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                 </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-primary py-16 lg:py-20">
        <div className="container mx-auto max-w-7xl px-4 text-center">
           <AnimatedHeading 
              tag="h2"
              text="Discuss Your International Case"
              className="font-headline text-3xl font-bold text-primary-foreground justify-center"
            />
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Navigating international legal systems requires specialized knowledge. Contact us for a confidential consultation to discuss your specific situation.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/appointments">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
