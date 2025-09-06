
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Check, Scale, Target, Users } from 'lucide-react';
import AnimatedHeading from '@/components/animated-heading';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Adv. Piyush Jain',
      role: 'Founder & Lead Counsel',
      image: 'https://placehold.co/400x400',
      bio: 'A distinguished litigator known for sharp legal acumen and unwavering dedication to clients.'
    },
    {
      name: 'Jane',
      role: 'Senior Associate',
      image: 'https://placehold.co/400x400',
      bio: 'Specializing in corporate law and commercial litigation, Jane brings a wealth of knowledge and strategic insight to the team.'
    },
    {
      name: 'John ',
      role: 'Associate',
      image: 'https://placehold.co/400x400',
      bio: 'John focuses on criminal law and civil disputes, providing rigorous research and compelling arguments in court.'
    },
  ];

  const values = [
    {
      icon: <Check className="h-6 w-6 text-primary" />,
      title: "Integrity",
      description: "Upholding the highest ethical standards in all our dealings."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Client-Centric",
      description: "Placing our clients' needs and best interests at the forefront."
    },
    {
      icon: <Scale className="h-6 w-6 text-primary" />,
      title: "Justice",
      description: "A relentless pursuit of justice and fair outcomes."
    }
  ]

  return (
    <>
      <div className="bg-primary/5">
        <div className="container mx-auto max-w-7xl px-4 py-16 text-center">
          <AnimatedHeading 
            tag="h1" 
            text="ABOUT OUR FIRM" 
            className="font-headline text-4xl font-bold uppercase text-primary md:text-5xl justify-center"
          />
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            A tradition of excellence, a commitment to justice. Learn about the values, history, and people that define Advocate Piyush Jain & Associates.
          </p>
        </div>
      </div>

      <div className="py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <AnimatedHeading 
                tag="h2"
                text="OUR MISSION & VISION"
                className="font-headline text-3xl font-bold uppercase text-primary"
              />
              <div className="mt-6 space-y-6 text-muted-foreground">
                 <div className="flex items-start gap-4">
                   <Target className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                   <div>
                     <h3 className="text-xl font-bold uppercase text-foreground">Our Mission</h3>
                     <p>To provide exceptional, ethical, and effective legal representation that achieves the best possible outcomes for our clients, while contributing positively to the legal profession and the community.</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <Scale className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                   <div>
                     <h3 className="text-xl font-bold uppercase text-foreground">Our Vision</h3>
                     <p>To be the most trusted and respected law firm in the region, recognized for our legal expertise, professional integrity, and unwavering commitment to justice for all.</p>
                   </div>
                 </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Image 
                src="/images/about.jpg" 
                alt="Law firm meeting room" 
                width={600} 
                height={450}
                className="rounded-lg shadow-xl object-cover"
                data-ai-hint="lawyers meeting"
              />
            </div>
          </div>

          <div className="mt-20 text-center">
            <AnimatedHeading 
              tag="h2"
              text="OUR CORE VALUES"
              className="font-headline text-3xl font-bold uppercase text-primary justify-center"
            />
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {values.map((value) => (
                <div key={value.title} className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    {value.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-bold uppercase font-headline">{value.title}</h3>
                  <p className="mt-2 text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 lg:py-24">
        <div className="container mx-auto max-w-4xl text-center">
           <AnimatedHeading 
              tag="h2"
              text="LET'S DISCUSS YOUR LEGAL NEEDS"
              className="font-headline text-3xl font-bold uppercase text-primary justify-center"
            />
           <p className="mt-4 text-lg text-muted-foreground">
             Our team is ready to provide the expert legal guidance you deserve. Reach out to us for a confidential consultation.
           </p>
           <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
             <Link href="/appointments">Schedule a Consultation</Link>
           </Button>
        </div>
      </div>
    </>
  );
}
