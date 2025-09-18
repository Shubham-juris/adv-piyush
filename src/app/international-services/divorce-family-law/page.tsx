
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AnimatedHeading from '@/components/animated-heading';
import { Users, Shield, Globe, Scale, Landmark } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function InternationalDivorcePage() {
  const commonIssues = [
    { title: "Jurisdiction Disputes", description: "Determining which country's laws apply to the divorce and custody proceedings." },
    { title: "Child Custody & Relocation", description: "Addressing international child custody, visitation rights, and preventing parental abduction." },
    { title: "Asset & Property Division", description: "Locating and dividing marital assets and properties located in different countries." },
    { title: "Spousal & Child Support", description: "Establishing and enforcing support orders across international borders." },
    { title: "Enforcement of Foreign Orders", description: "Registering and enforcing divorce decrees and custody orders from another country." },
    { title: "Prenuptial Agreements", description: "Drafting and enforcing international prenuptial and postnuptial agreements." }
  ];

  const ourApproach = [
    { title: "Strategic Legal Planning", description: "We analyze jurisdictional issues to devise a legal strategy that best protects your interests." },
    { title: "Cross-Border Negotiation", description: "Skilled negotiation to reach amicable settlements on complex international family matters." },
    { title: "Robust Litigation", description: "Strong representation in court when litigation is necessary to protect your rights and your children's welfare." }
  ];

  const whyChooseUs = [
    { title: "Global Legal Network", description: "We collaborate with legal experts in other countries to provide comprehensive representation." },
    { title: "Client-Focused Advocacy", description: "We provide personalized and compassionate legal support during challenging family transitions." },
    { title: "Proven Track Record", description: "Successfully resolved numerous complex international divorce and family law cases." }
  ];

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

      {/* Common Issues Section */}
      <div className="py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center">
            <AnimatedHeading
              tag="h2"
              text="Common International Family Law Issues"
              className="font-headline text-3xl font-bold text-primary justify-center"
            />
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {commonIssues.map((item) => (
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
