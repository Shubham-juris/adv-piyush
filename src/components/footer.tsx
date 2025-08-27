import Link from 'next/link';
import { Phone, Mail, MapPin, Twitter, Linkedin, Facebook } from 'lucide-react';
import Logo from './logo';

export default function Footer() {
  const navLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/practice-areas', label: 'Practice Areas' },
    { href: '/case-studies',label: 'Case Studies' },
    { href: '/blog', label: 'Blog' },
    { href: '/appointments', label: 'Appointments' },
  ];
  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: '#' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#' },
    { icon: <Facebook className="h-5 w-5" />, href: '#' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="rounded-md bg-white p-2 inline-block">
                <Logo />
            </div>
            <p className="text-sm text-primary-foreground/80">
              Providing expert legal counsel with integrity and dedication. Your trusted partner in navigating complex legal landscapes.
            </p>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold text-accent">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-primary-foreground/80 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold text-accent">Contact Info</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/80">
                 Sco 27, New Sunny Enclave, Sector-125, Mohali-140301
                 <br/>                
                 Chamber No. 572, Patiala House Court, New Delhi-110001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-accent" />
                <a href="mailto:advpiyushjain1995@gmail.com" className="text-sm text-primary-foreground/80 transition-colors hover:text-white">
                  advpiyushjain1995@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-accent" />
                <a href="tel:01605013008" className="text-sm text-primary-foreground/80 transition-colors hover:text-white">
                  0160-501-3008
               </a>
              </li>
            </ul>
          </div>

           <div>
            <h3 className="font-headline text-lg font-semibold text-accent">Follow Us</h3>
             <div className="mt-4 flex space-x-4">
               {socialLinks.map((social, index) => (
                 <Link key={index} href={social.href} className="text-primary-foreground/80 transition-colors hover:text-white">
                   {social.icon}
                   <span className="sr-only">Social media</span>
                 </Link>
               ))}
             </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Advocate Piyush Jain & Associates. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
