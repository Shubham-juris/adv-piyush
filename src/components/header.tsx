'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';
import { cn } from '@/lib/utils';
import MobileNav from './mobile-nav';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/practice-areas', label: 'Practice Areas' },
  { href: '/case-studies', label: 'Case Studies' },
  { 
    href: '/international-services', 
    label: 'International Services',
    submenu: [
      { href: '/international-services/adoptions', label: 'International Adoptions' },
      { href: '/international-services/divorce-family-law', label: 'Divorce & Family Law' },
      { href: '/international-services/property-disputes', label: 'Property Legal Disputes' },
    ]
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Logo />
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            link.submenu ? (
              <DropdownMenu key={link.href}>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-primary uppercase hover:bg-transparent p-0',
                      pathname.startsWith(link.href)
                        ? 'text-primary font-bold'
                        : 'text-muted-foreground'
                    )}
                  >
                    {link.label}
                    <ChevronDown className="relative top-[1px] ml-1 h-4 w-4 transition duration-200" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {link.submenu.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link href={item.href} className={cn(pathname === item.href && 'bg-accent/50')}>{item.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary uppercase',
                  pathname === link.href
                    ? 'text-primary font-bold'
                    : 'text-muted-foreground'
                )}
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 uppercase">
            <Link href="/appointments">Book Appointment</Link>
          </Button>
        </div>
        <div className="lg:hidden">
          <MobileNav navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
}
