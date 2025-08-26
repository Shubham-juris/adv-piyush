import Link from 'next/link';
import { Gavel } from 'lucide-react';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Advocate Piyush Jain & Associates Home">
      <Gavel className="h-8 w-8 text-primary" />
      <div className="flex flex-col">
        <span className="font-headline text-lg font-bold leading-tight text-primary">
          Advocate Piyush Jain
        </span>
        <span className="text-xs font-semibold tracking-wider text-muted-foreground">
          & ASSOCIATES
        </span>
      </div>
    </Link>
  );
}
