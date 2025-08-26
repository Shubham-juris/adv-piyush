import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gavel, Landmark, Building2, Quote, CheckCircle, Award, TrendingUp, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { caseStudies } from '@/lib/data';

export default function Home() {
  const practiceAreas = [
    {
      icon: <Gavel className="h-10 w-10 text-primary" />,
      title: 'Core Litigation',
      description: 'Expert representation in civil, criminal, and commercial litigation matters.',
    },
    {
      icon: <Landmark className="h-10 w-10 text-primary" />,
      title: 'Supreme Court of India',
      description: 'Handling Special Leave Petitions and other complex cases at the highest court.',
    },
    {
      icon: <Building2 className="h-10 w-10 text-primary" />,
      title: 'High Court of Punjab & Haryana',
      description: 'Extensive experience in writ petitions, appeals, and original side matters.',
    },
  ];

  const whyChooseUs = [
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: 'Proven Experience',
      description: 'With a rich history of handling complex cases, our firm brings a wealth of knowledge and strategic insight to every legal challenge.',
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: 'High Success Rate',
      description: 'Our diligent preparation and formidable courtroom presence have resulted in a consistent track record of favorable outcomes for our clients.',
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Client Trust',
      description: 'We are committed to building long-term relationships based on transparency, communication, and a deep-seated commitment to your best interests.',
    },
  ];

  const testimonials = [
    {
      quote: "Piyush Jain & Associates handled my case with utmost professionalism and dedication. Their strategic approach was brilliant, leading to a successful outcome I hadn't thought possible.",
      name: "Rajesh Kumar",
      company: "Corporate Client"
    },
    {
      quote: "Navigating the legal system was daunting, but their team provided clear guidance and constant support. I felt confident and well-represented throughout the entire process.",
      name: "Anita Sharma",
      company: "Civil Litigation Client"
    },
    {
      quote: "Exceptional legal minds. Their attention to detail and commitment to my case were truly remarkable. I highly recommend their services to anyone seeking expert legal counsel.",
      name: "Vikram Singh",
      company: "Commercial Dispute Client"
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full bg-primary/20">
        <Image
          src="https://placehold.co/1920x1080"
          alt="Law books and gavel"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-20"
          data-ai-hint="law books"
        />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-6xl lg:text-7xl">
            Excellence in Legal Representation
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground md:text-xl">
            Advocate Piyush Jain & Associates provides expert legal counsel and dedicated advocacy across a wide spectrum of practice areas.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/appointments">Book an Appointment</Link>
          </Button>
        </div>
      </section>

      {/* About Us Snippet */}
      <section id="about" className="py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="lg:order-2">
               <Image
                src="https://placehold.co/600x400"
                alt="Modern office interior"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-xl"
                data-ai-hint="modern office"
              />
            </div>
            <div className="lg:order-1">
              <h2 className="font-headline text-3xl font-bold text-primary">About Our Firm</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Founded on the principles of integrity, diligence, and justice, Advocate Piyush Jain & Associates has established itself as a leading law firm. We are committed to providing our clients with strategic, effective, and personalized legal solutions.
              </p>
              <p className="mt-4 text-muted-foreground">
                Our team of experienced legal professionals is dedicated to upholding the highest standards of the profession and achieving the best possible outcomes for our clients.
              </p>
              <Button asChild variant="link" className="mt-4 p-0 text-primary">
                <Link href="/about">Learn More About Us &rarr;</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice-areas" className="bg-primary/5 py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-primary">Our Practice Areas</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Specialized expertise to meet your legal needs.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => (
              <Card key={area.title} className="transform-gpu transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl bg-background">
                <CardHeader className="items-center text-center">
                  {area.icon}
                  <CardTitle className="mt-4 font-headline">{area.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
           <div className="mt-12 text-center">
             <Button asChild variant="outline">
                <Link href="/practice-areas">View All Practice Areas</Link>
             </Button>
           </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-primary">Why Choose Us?</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Decades of experience, a history of success.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {whyChooseUs.map((reason) => (
              <div key={reason.title} className="flex flex-col items-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  {reason.icon}
                </div>
                <h3 className="mt-6 font-headline text-xl font-bold">{reason.title}</h3>
                <p className="mt-2 text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="bg-primary/5 py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-primary">Proven Track Record</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Delivering results for our clients.
            </p>
          </div>
          <Card className="mt-12 overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4 bg-background">
            <div className="relative h-64 w-full lg:h-full">
              <Image
                src={caseStudies[0].image}
                alt={caseStudies[0].title}
                layout="fill"
                objectFit="cover"
                data-ai-hint="courtroom decision"
              />
            </div>
            <div className="p-8">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">{caseStudies[0].category}</span>
              <h3 className="mt-2 font-headline text-2xl font-bold">{caseStudies[0].title}</h3>
              <p className="mt-4 text-muted-foreground">{caseStudies[0].summary}</p>
              <div className="mt-6 flex items-start gap-3">
                 <CheckCircle className="h-6 w-6 flex-shrink-0 text-green-600" />
                 <div>
                    <h4 className="font-semibold">Outcome</h4>
                    <p className="text-muted-foreground">{caseStudies[0].outcome}</p>
                 </div>
              </div>
               <Button asChild variant="link" className="mt-4 p-0 text-primary">
                <Link href="/case-studies">Explore More Case Studies &rarr;</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-primary">What Our Clients Say</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Real stories from those we have had the privilege to represent.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex flex-col justify-between">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary/20" />
                  <p className="mt-4 text-muted-foreground italic">"{testimonial.quote}"</p>
                </CardContent>
                <CardHeader>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="font-headline text-3xl font-bold text-primary-foreground">
            Ready to Discuss Your Case?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Your legal journey begins with a conversation. Contact us today for a confidential consultation and let us help you navigate your legal challenges with confidence.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/appointments">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
