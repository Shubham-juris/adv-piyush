
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AnimatedHeading from '@/components/animated-heading';
import { Users, Shield, Globe, Scale, Landmark } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function InternationalDivorcePage() {
  const commonIssues = [
    { title: "Jurisdiction Disputes", description: "Determining which country's laws and courts have the authority to hear the divorce, custody, and financial proceedings, which is often the first and most critical challenge." },
    { title: "Child Custody & Relocation", description: "Addressing complex international child custody arrangements, visitation rights, and obtaining legal permission for relocating children across borders while preventing parental abduction." },
    { title: "Asset & Property Division", description: "Identifying, valuing, and equitably dividing marital assets and properties that are located in different countries, each with its own property laws." },
    { title: "Spousal & Child Support", description: "Establishing fair spousal and child support orders and ensuring they can be legally enforced across international borders through treaties and agreements." },
    { title: "Enforcement of Foreign Orders", description: "The process of getting a divorce decree, custody order, or support order from one country legally recognized and enforced in another country." },
    { title: "Prenuptial Agreements", description: "Drafting, interpreting, and enforcing international prenuptial and postnuptial agreements to protect assets in the event of a cross-border divorce." }
  ];

  const ourApproach = [
    { title: "Strategic Legal Planning", description: "We meticulously analyze jurisdictional issues and international laws to devise a comprehensive legal strategy that best protects your interests and achieves your objectives." },
    { title: "Cross-Border Negotiation", description: "Our lawyers are skilled negotiators, adept at reaching amicable and enforceable settlements on complex international family matters, often avoiding lengthy court battles." },
    { title: "Robust Litigation", description: "When litigation is necessary, we provide strong, assertive representation in court to protect your rights, your financial interests, and your children's welfare." }
  ];

  const whyChooseUs = [
    { title: "Global Legal Network", description: "We have an established network of legal experts in various countries, allowing us to provide seamless and comprehensive representation for your international case." },
    { title: "Client-Focused Advocacy", description: "We provide personalized, responsive, and compassionate legal support, understanding the immense stress and emotional challenges of international family disputes." },
    { title: "Proven Track Record", description: "Our firm has a history of successfully resolving numerous complex international divorce and family law cases, securing favorable outcomes for our clients." }
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
            EXPERT LEGAL COUNSEL FOR CROSS-BORDER FAMILY LAW MATTERS, INCLUDING DIVORCE, CUSTODY, AND ASSET DIVISION INVOLVING MULTIPLE JURISDICTIONS.
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
                Family law cases that span multiple countries present unique challenges, from determining jurisdiction to enforcing court orders abroad. Our firm is equipped with the specialized knowledge and international network to handle the intricate legal landscape of international family law.
              </p>
              <div className="mt-8 space-y-6">
                 <div className="flex items-start gap-4">
                   <Globe className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                   <div>
                     <h3 className="text-xl font-bold uppercase text-foreground">JURISDICTIONAL ANALYSIS</h3>
                     <p className='text-muted-foreground'>WE PROVIDE CRITICAL ANALYSIS TO DETERMINE THE MOST ADVANTAGEOUS JURISDICTION FOR YOUR CASE AND HANDLE LEGAL PROCEEDINGS IN COORDINATION WITH FOREIGN COUNSEL.</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <Users className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                   <div>
                     <h3 className="text-xl font-bold uppercase text-foreground">CHILD CUSTODY & SUPPORT</h3>
                     <p className='text-muted-foreground'>PROTECTING THE BEST INTERESTS OF CHILDREN IN INTERNATIONAL CUSTODY DISPUTES, INCLUDING MATTERS RELATED TO THE HAGUE CONVENTION ON CHILD ABDUCTION.</p>
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
