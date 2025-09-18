
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AnimatedHeading from '@/components/animated-heading';
import { Heart, Home, Scale, Shield, Users, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function InternationalAdoptionsPage() {
  const processSteps = [
    { title: "Home Study & Dossier", description: "Comprehensive evaluation and document preparation for submission to the foreign country." },
    { title: "Child Referral", description: "Accepting a match with a child from the foreign adoption authority." },
    { title: "Immigration & Visa", description: "Navigating U.S. immigration processes to bring your child home." },
    { title: "Travel & Court Process", description: "Traveling to the child's country to finalize the adoption in their legal system." },
    { title: "Post-Adoption Finalization", description: "Finalizing the adoption in U.S. courts and completing post-placement reporting." },
    { title: "Citizenship", description: "Ensuring your child automatically acquires U.S. citizenship upon entry." }
  ];

  const ourApproach = [
    { title: "Compassionate Guidance", description: "We provide empathetic support, understanding the emotional journey of adoption." },
    { title: "Legal Expertise", description: "Deep knowledge of the Hague Convention and inter-country adoption laws." },
    { title: "Seamless Coordination", description: "We work with international agencies to ensure a smooth and compliant process." }
  ];

  const whyChooseUs = [
    { title: "Experienced Counsel", description: "Our team has extensive experience in successfully handling complex international adoptions." },
    { title: "Child-Focused", description: "We prioritize the best interests and welfare of the child at every step." },
    { title: "Proven Success", description: "We have a strong track record of uniting families across borders." }
  ];

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

      {/* Key Aspects Section */}
      <div className="py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center">
            <AnimatedHeading
              tag="h2"
              text="Key Aspects of The Adoption Process"
              className="font-headline text-3xl font-bold text-primary justify-center"
            />
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((item) => (
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
