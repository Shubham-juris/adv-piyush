import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/data';
import Image from 'next/image';
import { Calendar, User } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import AnimatedHeading from '@/components/animated-heading';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <article>
          <header className="mb-8">
            <AnimatedHeading 
              tag="h1" 
              text={post.title} 
              className="font-headline text-3xl font-bold text-primary md:text-5xl"
            />
            <div className="mt-4 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </div>
          </header>

          <div className="relative my-8 h-80 w-full">
            <Image
              src={post.image}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
              data-ai-hint="legal analysis"
            />
          </div>

          <Separator className="my-8" />
          
          <div
            className="prose prose-lg max-w-none text-foreground prose-headings:font-headline prose-headings:text-primary prose-a:text-primary hover:prose-a:text-primary/80"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
}
