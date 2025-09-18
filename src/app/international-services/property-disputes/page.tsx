import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AnimatedHeading from '@/components/animated-heading';
import { Landmark, FileText, Globe } from 'lucide-react';

export default function InternationalPropertyPage() {
  return (
    <>
      <div className="bg-primary/5">
        <div className="container mx-auto max-w-7xl px-4 py-16 text-center">
          <AnimatedHeading 
            tag="h1" 
            text="International Property Legal Disputes" 
            className="font-headline text-4xl font-bold uppercase text-primary md:text-5xl justify-center"
          />
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Protecting your real estate and inheritance rights across borders with strategic legal representation for complex international property disputes.
          </p>
        </div>
      </div>

      <div className="py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
               <AnimatedHeading 
                tag="h2"
                text="Securing Your Assets Abroad"
                className="font-headline text-3xl font-bold uppercase text-primary"
              />
              <p className="mt-6 text-lg text-muted-foreground">
                Owning or inheriting property in another country can be complex. We provide specialized legal services to resolve disputes related to foreign-owned property, ensuring your rights are protected under international and local laws.
              </p>
              <div className="mt-8 space-y-6">
                 <div className="flex items-start gap-4">
                   <Landmark className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                   <div>
                     <h3 className="text-xl font-bold uppercase text-foreground">Inheritance & Succession</h3>
                     <p className='text-muted-foreground'>Assisting heirs in securing and liquidating inherited properties abroad, navigating complex succession laws and probate procedures in different countries.</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <FileText className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                   <div>
                     <h3 className="text-xl font-bold uppercase text-foreground">Title & Ownership Disputes</h3>
                     <p className='text-muted-foreground'>Representing clients in disputes over property titles, ownership claims, and partitions, ensuring clear and legal ownership is established.</p>
                   </div>
                 </div>
              </div>
            </div>
            <div>
              <Image 
                src="https://picsum.photos/seed/property/600/450" 
                alt="Architectural building" 
                width={600} 
                height={450}
                className="rounded-lg shadow-xl object-cover"
                data-ai-hint="international architecture building"
              />
            </div>
          </div>
        </div>
      </div>
       <div className="bg-primary/5 py-16 lg:py-24">
        <div className="container mx-auto max-w-4xl text-center">
           <AnimatedHeading 
              tag="h2"
              text="Safeguard Your International Property"
              className="font-headline text-3xl font-bold uppercase text-primary justify-center"
            />
           <p className="mt-4 text-lg text-muted-foreground">
             If you are facing a legal dispute over international property, contact our firm to discuss your case and explore your legal options.
           </p>
           <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
             <Link href="/appointments">Schedule a Consultation</Link>
           </Button>
        </div>
      </div>
    </>
  );
}
