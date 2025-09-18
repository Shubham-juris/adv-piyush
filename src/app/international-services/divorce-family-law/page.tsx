import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AnimatedHeading from '@/components/animated-heading';
import { Users, Shield, Globe } from 'lucide-react';

export default function InternationalDivorcePage() {
  return (
    <>
      <div className="bg-primary/5">
        <div className="container mx-auto max-w-7xl px-4 py-16 text-center">
          <AnimatedHeading 
            tag="h1" 
            text="International Divorce & Family Law" 
            className="font-headline text-4xl font-bold uppercase text-primary md:text-5xl justify-center"
          />
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Expert legal counsel for cross-border family law matters, including divorce, custody, and asset division involving multiple jurisdictions.
          </p>
        </div>
      </div>

      <div className="py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
             <div className="order-2 lg:order-1">
               <AnimatedHeading 
                tag="h2"
                text="Resolving Cross-Border Family Disputes"
                className="font-headline text-3xl font-bold uppercase text-primary"
              />
              <p className="mt-6 text-lg text-muted-foreground">
                Family law cases that span multiple countries present unique challenges, from determining jurisdiction to enforcing court orders abroad. Our firm is equipped to handle the intricate legal landscape of international family law.
              </p>
              <div className="mt-8 space-y-6">
                 <div className="flex items-start gap-4">
                   <Globe className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                   <div>
                     <h3 className="text-xl font-bold uppercase text-foreground">Jurisdictional Analysis</h3>
                     <p className='text-muted-foreground'>We provide critical analysis to determine the most advantageous jurisdiction for your case and handle legal proceedings in coordination with foreign counsel.</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <Users className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                   <div>
                     <h3 className="text-xl font-bold uppercase text-foreground">Child Custody & Support</h3>
                     <p className='text-muted-foreground'>Protecting the best interests of children in international custody disputes, including matters related to the Hague Convention on Child Abduction.</p>
                   </div>
                 </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Image 
                src="https://picsum.photos/seed/familylaw/600/450" 
                alt="Stylized scales of justice" 
                width={600} 
                height={450}
                className="rounded-lg shadow-xl object-cover"
                data-ai-hint="legal family law"
              />
            </div>
          </div>
        </div>
      </div>
       <div className="bg-primary/5 py-16 lg:py-24">
        <div className="container mx-auto max-w-4xl text-center">
           <AnimatedHeading 
              tag="h2"
              text="Protect Your Rights Across Borders"
              className="font-headline text-3xl font-bold uppercase text-primary justify-center"
            />
           <p className="mt-4 text-lg text-muted-foreground">
            For expert guidance on international family law matters, schedule a confidential consultation with our experienced legal team.
           </p>
           <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
             <Link href="/appointments">Schedule a Consultation</Link>
           </Button>
        </div>
      </div>
    </>
  );
}
