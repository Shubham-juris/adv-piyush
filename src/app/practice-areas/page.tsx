import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gavel, Landmark, Building2, Briefcase, Scale, Shield, Users, Banknote } from 'lucide-react';

export default function PracticeAreasPage() {
  const practiceAreas = [
    {
      icon: <Gavel className="h-10 w-10 text-primary" />,
      title: 'Civil Law',
      description: 'Handling a wide range of civil disputes including property, contracts, and torts. We focus on resolving conflicts efficiently, whether through negotiation, mediation, or courtroom litigation.',
      subareas: ['Property Disputes', 'Contract Law', 'Motor Vehicle Accident Cases', 'Injunctions']
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: 'Criminal Law',
      description: 'Providing robust defense for individuals facing criminal charges. Our expertise covers everything from bail applications to trials and appeals, ensuring your rights are protected at every stage.',
      subareas: ['Bail Applications', 'Criminal Trials', 'Appeals and Revisions', 'Complaint under Section 138 of NI Act']
    },
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: 'Corporate & Commercial Law',
      description: 'Offering comprehensive legal services for businesses, including contract drafting, corporate governance, and dispute resolution, to support your business objectives.',
      subareas: ['Contract Law', 'Company Incorporation', 'Mergers & Acquisitions', 'Regulatory Compliance']
    },
    {
        icon: <Users className="h-10 w-10 text-primary" />,
        title: 'Family Law',
        description: 'Handling sensitive family matters with compassion and professionalism. We assist with divorce, child custody, maintenance, and property settlements.',
        subareas: ['Divorce & Separation', 'Child Custody', 'Alimony & Maintenance', 'Domestic Violence']
    },
    {
      icon: <Landmark className="h-10 w-10 text-primary" />,
      title: 'Supreme Court of India',
      description: 'Specialized expertise in handling matters before the Apex Court, including Special Leave Petitions (SLPs), writ petitions, transfer petitions, and appeals.',
      subareas: ['Special Leave Petitions', 'Writ Petitions', 'Public Interest Litigation', 'Constitutional Law']
    },
    {
      icon: <Building2 className="h-10 w-10 text-primary" />,
      title: 'High Court of Punjab & Haryana',
      description: 'Extensive experience at the High Court, managing cases from writ petitions challenging administrative actions to civil and criminal appeals.',
      subareas: ['Writ Jurisprudence', 'Civil & Criminal Appeals', 'Company Petitions', 'Service Matters']
    },
    {
      icon: <Scale className="h-10 w-10 text-primary" />,
      title: 'Arbitration & Mediation',
      description: 'Skilled in alternative dispute resolution (ADR), representing clients in arbitrations and mediations for efficient dispute resolution outside of traditional courts.',
      subareas: ['Domestic Arbitration', 'Commercial Mediation', 'Enforcement of Awards', 'Conciliation']
    },
    {
      icon: <Banknote className="h-10 w-10 text-primary" />,
      title: 'Banking & Finance',
      description: 'Advising on financial regulations, loan agreements, and representing clients in matters related to the Securitisation Act (SARFAESI) and debt recovery tribunals.',
      subareas: ['SARFAESI Act', 'Debt Recovery Tribunal (DRT)', 'Loan Agreements', 'Financial Regulation']
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
