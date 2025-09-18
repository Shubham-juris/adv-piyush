
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gavel, Landmark, Building2, Quote, CheckCircle, Award, TrendingUp, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { caseStudies } from '@/lib/data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import AnimatedHeading from '@/components/animated-heading';

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

  const faqs = [
    {
      question: "How do I schedule a consultation?",
      answer: "You can schedule a consultation by visiting our 'Appointments' page and filling out the request form. Alternatively, you can call our office directly at the number provided on the contact page. We will get back to you promptly to confirm a date and time."
    },
    {
      question: "What types of cases do you specialize in?",
      answer: "Our firm specializes in a wide range of legal matters, with a focus on core litigation including civil, criminal, and commercial cases. We also have extensive experience in handling matters before the Supreme Court of India and various High Courts. For a detailed list, please visit our 'Practice Areas' page."
    },
    {
      question: "What should I bring to my first consultation?",
      answer: "For your initial consultation, please bring all documents relevant to your case. This may include contracts, correspondence, police reports, court notices, or any other paperwork that can help us understand your situation. A written summary of events can also be very helpful."
    },
    {
      question: "What is your fee structure?",
      answer: "Our fee structure varies depending on the complexity and nature of the case. We offer various arrangements, including flat fees, hourly rates, and retainers. We are committed to transparency and will discuss all fee-related matters with you upfront during your initial consultation."
    },
    {
      question: "Do you handle international legal matters?",
      answer: "Yes, we have a dedicated practice for international legal services, including international adoptions, cross-border family law, and property disputes. Please visit our 'International Services' page for more detailed information on our global capabilities."
    },
    {
      question: "How will I be kept updated on the progress of my case?",
      answer: "We believe in maintaining open and regular communication with our clients. You will be assigned a primary point of contact at our firm who will provide you with regular updates. We are also available to answer your questions via phone or email."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[400px] w-full bg-primary/10">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-40"
        >
          <source src="/images/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
          <AnimatedHeading 
            tag="h1"
            text="Excellence in Legal Representation"
            className="font-headline text-4xl font-bold tracking-tight text-primary md:text-6xl lg:text-7xl"
          />
          <p className="mt-4 max-w-2xl text-lg text-foreground md:text-xl">
            Advocate Piyush Jain & Associates provides expert legal counsel and dedicated advocacy across a wide spectrum of practice areas.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
          >
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
                src="/images/miroshni.jpg" 
                alt="Modern office interior"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-xl"
                data-ai-hint="modern office"
              />
            </div>
            <div className="lg:order-1">
              <AnimatedHeading 
                tag="h2"
                text="About Our Firm"
                className="font-headline text-3xl font-bold text-primary"
              />
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
            <AnimatedHeading 
              tag="h2"
              text="Our Practice Areas"
              className="font-headline text-3xl font-bold text-primary justify-center"
            />
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
             <AnimatedHeading 
              tag="h2"
              text="Why Choose Us?"
              className="font-headline text-3xl font-bold text-primary justify-center"
            />
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
            <AnimatedHeading 
              tag="h2"
              text="Proven Track Record"
              className="font-headline text-3xl font-bold text-primary justify-center"
            />
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

      {/* FAQ Section */}
      <section id="faq" className="py-16 lg:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center">
            <AnimatedHeading 
              tag="h2"
              text="Frequently Asked Questions"
              className="font-headline text-3xl font-bold text-primary justify-center"
            />
            <p className="mt-2 text-lg text-muted-foreground">
              Answers to common inquiries about our services.
            </p>
          </div>
          <Accordion type="single" collapsible className="mt-12 w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="container mx-auto max-w-7xl px-4 text-center">
           <AnimatedHeading 
              tag="h2"
              text="Ready to Discuss Your Case?"
              className="font-headline text-3xl font-bold text-primary-foreground justify-center"
            />
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
