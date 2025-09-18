import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import Logo from './logo';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

type NavLink = {
  href: string;
  label: string;
  submenu?: NavLink[];
};

type MobileNavProps = {
  navLinks: NavLink[];
};

export default function MobileNav({ navLinks }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-sm">
        <SheetHeader>
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b pb-4">
            <Logo />
          </div>
          <nav className="mt-8 flex flex-1 flex-col gap-2">
            {navLinks.map((link) => (
              link.submenu ? (
                <Collapsible key={link.href}>
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md p-2 text-lg font-medium transition-colors hover:bg-muted">
                    {link.label}
                    <ChevronDown className="h-5 w-5" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-4">
                    {link.submenu.map((sublink) => (
                       <SheetClose asChild key={sublink.href}>
                         <Link
                          href={sublink.href}
                          className={cn(
                            'block rounded-md p-2 text-lg font-medium transition-colors hover:bg-muted mt-1',
                            pathname === sublink.href ? 'bg-muted text-primary' : ''
                          )}
                        >
                          {sublink.label}
                        </Link>
                       </SheetClose>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'rounded-md p-2 text-lg font-medium transition-colors hover:bg-muted',
                      pathname === link.href ? 'bg-muted text-primary' : ''
                    )}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              )
            ))}
          </nav>
          <div className="mt-auto border-t pt-4">
            <SheetClose asChild>
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/appointments">Book Appointment</Link>
              </Button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
