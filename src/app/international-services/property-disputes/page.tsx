
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AnimatedHeading from '@/components/animated-heading';
import { Landmark, FileText, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function InternationalPropertyPage() {
  const commonDisputes = [
    { title: "Ownership Disputes", description: "Conflicts over who legally owns the property or land located in a foreign country." },
    { title: "Inheritance Issues", description: "Family disputes regarding division of ancestral or inherited property across borders." },
    { title: "Boundary Conflicts", description: "Disagreements over land boundaries and encroachments involving international properties." },
    { title: "Landlord-Tenant Disputes", description: "Legal issues related to rental agreements, eviction, or property misuse for foreign landlords/tenants." },
    { title: "Fraudulent Transactions", description: "Cases involving forged documents or misrepresentation of property rights in international deals." },
    { title: "Joint Ownership Disputes", description: "Conflicts between co-owners on property use, sale, or management in different jurisdictions." }
  ];

  const ourApproach = [
    { title: "Negotiation & Mediation", description: "We aim to resolve disputes amicably through dialogue and settlements, saving time and costs." },
    { title: "Litigation", description: "When necessary, we represent clients in court with strong legal strategies to defend their rights." },
    { title: "Documentation Support", description: "Assistance with drafting, reviewing, and validating legal documents to avoid future disputes." }
  ];

  const whyChooseUs = [
    { title: "Experienced Lawyers", description: "Our team has extensive expertise in handling complex international property disputes." },
    { title: "Client-Focused Approach", description: "We prioritize your interests and provide transparent advice at every step." },
    { title: "Proven Track Record", description: "Successfully resolved numerous clients across domestic and commercial property matters." }
  ];

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

      {/* Common Disputes Section */}
      <div className="py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center">
            <AnimatedHeading
              tag="h2"
              text="Common Property Disputes We Handle"
              className="font-headline text-3xl font-bold text-primary justify-center"
            />
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {commonDisputes.map((item) => (
              <Card key={item.title} className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg text-accent uppercase">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <AnimatedHeading
            tag="h2"
            text="Our Approach"
            className="font-headline text-3xl font-bold text-primary-foreground justify-center"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {ourApproach.map((item) => (
              <Card key={item.title} className="bg-primary-foreground/10 border-accent/30 text-left">
                <CardHeader>
                  <CardTitle className="font-headline text-lg text-accent">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary-foreground/80">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <AnimatedHeading
            tag="h2"
            text="Why Choose Us?"
            className="font-headline text-3xl font-bold text-primary justify-center"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {whyChooseUs.map((item) => (
              <Card key={item.title} className="bg-primary/5">
                <CardHeader>
                  <CardTitle className="font-headline text-xl text-primary">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
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
