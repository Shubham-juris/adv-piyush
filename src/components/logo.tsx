import Link from 'next/link';
import Image from 'next/image';


export default function Logo() {
  return (
    <Link 
      href="/" 
      className="flex items-center gap-2" 
      aria-label="Advocate Piyush Jain & Associates Home"
    >
      {/* Logo Image */}
      <Image 
        src="/images/pj.png" 
        alt="Logo" 
        width={60} 
        height={60} 
        className="h-10 w-10 object-contain"
      />

      {/* Text */}
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
