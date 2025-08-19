import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { caseStudies } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function CaseStudiesPage() {
  return (
    <>
      <div className="bg-primary/5">
        <div className="container mx-auto max-w-7xl px-4 py-16 text-center">
          <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">Case Studies</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Explore our track record of success. A showcase of our commitment to achieving favorable outcomes for our clients.
          </p>
        </div>
      </div>

      <div className="py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-1">
            {caseStudies.map((study) => (
              <Card key={study.id} className="overflow-hidden transition-shadow duration-300 hover:shadow-xl md:grid md:grid-cols-5 md:gap-4">
                <div className="relative h-56 w-full md:col-span-2 md:h-full">
                  <Image
                    src={study.image}
                    alt={study.title}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="legal documents"
                  />
                </div>
                <div className="p-6 md:col-span-3">
                  <Badge variant="secondary">{study.category}</Badge>
                  <h2 className="mt-2 font-headline text-2xl font-bold">{study.title}</h2>
                  <p className="mt-2 text-muted-foreground">{study.summary}</p>
                  <div className="mt-4 border-t pt-4">
                    <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 flex-shrink-0 text-green-600 mt-1" />
                        <div>
                            <h3 className="font-semibold text-foreground">Favorable Outcome</h3>
                            <p className="text-sm text-muted-foreground">{study.outcome}</p>
                        </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold text-foreground">Case Details</h4>
                    <p className="text-sm text-muted-foreground mt-1">{study.details}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
