
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AnimatedHeading from '@/components/animated-heading';
import { Heart, Home, Scale, Shield, Users, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function InternationalAdoptionsPage() {
  const processSteps = [
    { title: "Home Study & Dossier", description: "Comprehensive evaluation of the prospective adoptive parents' home environment and compilation of all necessary legal documents for submission to the foreign country's adoption authority." },
    { title: "Child Referral", description: "The foreign adoption authority proposes a match with a child. We help you review the referral and make an informed decision on accepting the match." },
    { title: "Immigration & Visa", description: "Navigating the complex U.S. immigration processes, including filing petitions with USCIS to obtain the necessary visa for your child to enter the United States." },
    { title: "Travel & Court Process", description: "Traveling to the child's country of origin to meet them and finalize the adoption in their local legal system, a process we guide you through." },
    { title: "Post-Adoption Finalization", description: "Upon returning to the U.S., we assist with finalizing the adoption in local courts and completing all required post-placement reporting for the foreign country." },
    { title: "Citizenship", description: "Ensuring your child automatically acquires U.S. citizenship upon their entry into the country, securing their legal status as a member of your family." }
  ];

  const ourApproach = [
    { title: "Compassionate Guidance", description: "We understand that adoption is a deeply emotional journey. Our team provides empathetic and supportive legal counsel every step of the way." },
    { title: "Legal Expertise", description: "We have a deep and up-to-date knowledge of the Hague Convention on Intercountry Adoption and the specific adoption laws of various countries." },
    { title: "Seamless Coordination", description: "We work closely with international adoption agencies, foreign attorneys, and government bodies to ensure a smooth, compliant, and efficient process." }
  ];

  const whyChooseUs = [
    { title: "Experienced Counsel", description: "Our legal team has extensive, hands-on experience in successfully navigating the complexities of international adoptions from a wide range of countries." },
    { title: "Child-Focused", description: "In every action we take, we prioritize the best interests, welfare, and legal rights of the child, ensuring an ethical and responsible adoption process." },
    { title: "Proven Success", description: "We have a strong and verifiable track record of uniting families across borders, overcoming legal hurdles, and bringing children home to their loving families." }
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
            NAVIGATING THE COMPLEXITIES OF INTER-COUNTRY ADOPTION WITH LEGAL EXPERTISE AND COMPASSIONATE GUIDANCE TO UNITE FAMILIES ACROSS BORDERS.
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
                International adoption is a beautiful way to build a family, but it involves navigating the legal systems of two different countries. Our firm provides comprehensive legal support to ensure a smooth and legally sound adoption process, from initial paperwork to final citizenship.
              </p>
              <div className="mt-8 space-y-6">
                 <div className="flex items-start gap-4">
                   <Heart className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                   <div>
                     <h3 className="text-xl font-bold uppercase text-foreground">HAGUE CONVENTION EXPERTISE</h3>
                     <p className='text-muted-foreground'>WE SPECIALIZE IN ADOPTIONS UNDER THE HAGUE CONVENTION, ENSURING ALL INTERNATIONAL STANDARDS AND SAFEGUARDS ARE MET FOR THE PROTECTION OF THE CHILD.</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <Scale className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                   <div>
                     <h3 className="text-xl font-bold uppercase text-foreground">COMPLETE LEGAL GUIDANCE</h3>
                     <p className='text-muted-foreground'>FROM COMPILING THE DOSSIER AND FULFILLING HOME COUNTRY REQUIREMENTS TO NAVIGATING IMMIGRATION AND POST-ADOPTION FINALIZATION, WE GUIDE YOU AT EVERY STEP.</p>
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
