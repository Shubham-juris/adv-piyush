import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gavel, Landmark, Building2, Briefcase, Scale, Shield } from 'lucide-react';
import Image from 'next/image';

export default function PracticeAreasPage() {
  const practiceAreas = [
    {
      icon: <Gavel className="h-10 w-10 text-primary" />,
      title: 'Core Litigation',
      description: 'We provide robust representation in civil, criminal, and commercial disputes before various courts and tribunals. Our approach is strategic, focusing on meticulous preparation and assertive advocacy to protect our clients\' interests.',
      subareas: ['Civil Suits', 'Criminal Trials', 'Commercial Disputes', 'Property Law']
    },
    {
      icon: <Landmark className="h-10 w-10 text-primary" />,
      title: 'Supreme Court of India',
      description: 'Our firm possesses specialized expertise in handling matters before the Apex Court, including Special Leave Petitions (SLPs), writ petitions, transfer petitions, and appeals. We understand the nuances of Supreme Court practice and procedure.',
      subareas: ['Special Leave Petitions', 'Writ Petitions', 'Public Interest Litigation', 'Constitutional Law']
    },
    {
      icon: <Building2 className="h-10 w-10 text-primary" />,
      title: 'High Court of Punjab & Haryana',
      description: 'With extensive experience at the High Court, we manage a wide array of cases, from writ petitions challenging administrative actions to civil and criminal appeals. We have a deep understanding of the local jurisdiction.',
      subareas: ['Writ Jurisprudence', 'Civil & Criminal Appeals', 'Company Petitions', 'Service Matters']
    },
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: 'Corporate & Commercial Law',
      description: 'We offer comprehensive legal services for businesses, including contract drafting and negotiation, corporate governance, compliance, and dispute resolution. Our goal is to provide practical legal solutions that support your business objectives.',
      subareas: ['Contract Law', 'Company Incorporation', 'Mergers & Acquisitions', 'Regulatory Compliance']
    },
    {
      icon: <Scale className="h-10 w-10 text-primary" />,
      title: 'Arbitration & Mediation',
      description: 'We are skilled in alternative dispute resolution (ADR) mechanisms, representing clients in domestic and international arbitrations and mediations. We aim for efficient and effective resolution of disputes outside of traditional courtrooms.',
      subareas: ['Domestic Arbitration', 'Commercial Mediation', 'Enforcement of Awards', 'Conciliation']
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: 'Family Law',
      description: 'Handling sensitive family matters with compassion and professionalism. We assist clients with divorce proceedings, child custody, maintenance, and property settlements, always striving for amicable solutions where possible.',
      subareas: ['Divorce & Separation', 'Child Custody', 'Alimony & Maintenance', 'Domestic Violence']
    },
  ];

  return (
    <>
      <div className="bg-primary/5">
        <div className="container mx-auto max-w-7xl px-4 py-16 text-center">
          <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">Practice Areas</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Comprehensive legal expertise across a wide spectrum of disciplines to address your most complex challenges.
          </p>
        </div>
      </div>

      <div className="py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => (
              <Card key={area.title} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                      {area.icon}
                    </div>
                    <div>
                      <CardTitle className="font-headline text-xl">{area.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <p className="text-muted-foreground">{area.description}</p>
                   <div className="mt-4">
                        <h4 className="font-semibold text-foreground mb-2">Key areas include:</h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                            {area.subareas.map(sub => <li key={sub}>{sub}</li>)}
                        </ul>
                   </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
