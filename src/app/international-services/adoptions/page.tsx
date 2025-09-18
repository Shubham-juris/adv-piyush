import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AnimatedHeading from '@/components/animated-heading';
import { Heart, Home, Scale } from 'lucide-react';

export default function InternationalAdoptionsPage() {
  return (
    <>
      <div className="bg-primary/5">
        <div className="container mx-auto max-w-7xl px-4 py-16 text-center">
          <AnimatedHeading 
            tag="h1" 
            text="International Adoptions" 
            className="font-headline text-4xl font-bold uppercase text-primary md:text-5xl justify-center"
          />
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Navigating the complexities of inter-country adoption with legal expertise and compassionate guidance to unite families across borders.
          </p>
        </div>
      </div>

      <div className="py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
               <AnimatedHeading 
                tag="h2"
                text="Bringing Families Together"
                className="font-headline text-3xl font-bold uppercase text-primary"
              />
              <p className="mt-6 text-lg text-muted-foreground">
                International adoption is a beautiful way to build a family, but it involves navigating the legal systems of two different countries. Our firm provides comprehensive legal support to ensure a smooth and legally sound adoption process.
              </p>
              <div className="mt-8 space-y-6">
                 <div className="flex items-start gap-4">
                   <Heart className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                   <div>
                     <h3 className="text-xl font-bold uppercase text-foreground">Hague Convention Expertise</h3>
                     <p className='text-muted-foreground'>We specialize in adoptions under the Hague Convention, ensuring all international standards and safeguards are met for the protection of the child.</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <Scale className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                   <div>
                     <h3 className="text-xl font-bold uppercase text-foreground">Complete Legal Guidance</h3>
                     <p className='text-muted-foreground'>From compiling the dossier and fulfilling home country requirements to navigating immigration and post-adoption finalization, we guide you at every step.</p>
                   </div>
                 </div>
              </div>
            </div>
            <div>
              <Image 
                src="https://picsum.photos/seed/adoption/600/450" 
                alt="Family holding hands" 
                width={600} 
                height={450}
                className="rounded-lg shadow-xl object-cover"
                data-ai-hint="happy family adoption"
              />
            </div>
          </div>
        </div>
      </div>
       <div className="bg-primary/5 py-16 lg:py-24">
        <div className="container mx-auto max-w-4xl text-center">
           <AnimatedHeading 
              tag="h2"
              text="Start Your Adoption Journey"
              className="font-headline text-3xl font-bold uppercase text-primary justify-center"
            />
           <p className="mt-4 text-lg text-muted-foreground">
             If you are considering international adoption, contact us for a consultation to understand the legal pathway and requirements.
           </p>
           <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
             <Link href="/appointments">Schedule a Consultation</Link>
           </Button>
        </div>
      </div>
    </>
  );
}
