
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AnimatedHeading from '@/components/animated-heading';
import { Landmark, FileText, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function InternationalPropertyPage() {
  const commonDisputes = [
    { title: "Ownership & Title Disputes", description: "Conflicts over who holds the legal title to a property or land located in a foreign country, often involving complex historical claims or unclear documentation." },
    { title: "Inheritance & Succession Issues", description: "Family disputes regarding the rightful division and transfer of ancestral or inherited property across international borders, complicated by differing succession laws." },
    { title: "Boundary & Encroachment Conflicts", description: "Disagreements over the precise location of land boundaries and allegations of encroachment by neighboring property owners, requiring surveys and legal adjudication." },
    { title: "Landlord-Tenant Disputes", description: "Legal issues for foreign landlords or tenants related to rental agreements, eviction proceedings, property misuse, or failure to meet contractual obligations." },
    { title: "Fraudulent Transactions", description: "Cases involving forged documents, misrepresentation of property rights, or other deceptive practices in international real estate deals that require legal action to nullify." },
    { title: "Joint Ownership Disputes", description: "Conflicts that arise between co-owners of a property in different jurisdictions concerning its use, sale, maintenance, or the division of any income it generates." }
  ];

  const ourApproach = [
    { title: "Negotiation & Mediation", description: "We prioritize resolving disputes amicably through structured dialogue and mediation, which can save significant time, expense, and stress compared to litigation." },
    { title: "Strategic Litigation", description: "When negotiation is not possible, we represent our clients' interests vigorously in court with strong, evidence-based legal strategies to defend their property rights." },
    { title: "Thorough Documentation Support", description: "We provide comprehensive assistance with drafting, reviewing, and validating all necessary legal documents to prevent future disputes and secure your property rights." }
  ];

  const whyChooseUs = [
    { title: "Experienced Lawyers", description: "Our legal team possesses extensive expertise and a deep understanding of the nuances of handling complex international property and real estate disputes." },
    { title: "Client-Focused Approach", description: "We always prioritize your best interests, providing clear, transparent advice and personalized legal strategies at every stage of the process." },
    { title: "Proven Track Record", description: "We have a long history of successfully resolving a wide range of domestic and commercial international property matters for our clients." }
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
            PROTECTING YOUR REAL ESTATE AND INHERITANCE RIGHTS ACROSS BORDERS WITH STRATEGIC LEGAL REPRESENTATION FOR COMPLEX INTERNATIONAL PROPERTY DISPUTES.
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
                Owning or inheriting property in another country can be fraught with legal complexity. We provide specialized legal services to resolve disputes related to foreign-owned property, ensuring your rights are protected under both international treaties and local laws.
              </p>
              <div className="mt-8 space-y-6">
                 <div className="flex items-start gap-4">
                   <Landmark className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                   <div>
                     <h3 className="text-xl font-bold uppercase text-foreground">INHERITANCE & SUCCESSION</h3>
                     <p className='text-muted-foreground'>ASSISTING HEIRS IN SECURING AND LIQUIDATING INHERITED PROPERTIES ABROAD, NAVIGATING COMPLEX SUCCESSION LAWS AND PROBATE PROCEDURES IN DIFFERENT COUNTRIES.</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <FileText className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                   <div>
                     <h3 className="text-xl font-bold uppercase text-foreground">TITLE & OWNERSHIP DISPUTES</h3>
                     <p className='text-muted-foreground'>REPRESENTING CLIENTS IN DISPUTES OVER PROPERTY TITLES, OWNERSHIP CLAIMS, AND PARTITIONS, ENSURING CLEAR AND LEGAL OWNERSHIP IS ESTABLISHED.</p>
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
