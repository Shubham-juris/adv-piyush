import Link from 'next/link';
import { Phone, Mail, MapPin, Twitter, Linkedin, Facebook } from 'lucide-react';
import Logo from './logo';

export default function Footer() {
  const navLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/practice-areas', label: 'Practice Areas' },
    { href: '/case-studies',label: 'Case Studies' },
    { href: '/international-services', label: 'International Services' },
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
            <h3 className="font-headline text-lg font-semibold text-accent uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-primary-foreground/80 transition-colors hover:text-white uppercase">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold text-accent uppercase">Contact Info</h3>
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
            <h3 className="font-headline text-lg font-semibold text-accent uppercase">Follow Us</h3>
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
          <p>&copy; {new Date().getFullYear()} Advocate Piyush Jain &amp; Associates. All Rights Reserved.</p>
          <p className='drop-cap-text'>DISCLAIMER: AS PER THE RULES OF THE BAR COUNCIL OF INDIA, WE ARE NOT PERMITTED TO SOLICIT WORK AND ADVERTISE. THE USER ACKNOWLEDGES THE FOLLOWING THAT THERE HAS BEEN NO ADVERTISEMENT, PERSONAL COMMUNICATION, SOLICITATION, INVITATION OR INDUCEMENT OF ANY SORT WHATSOEVER FROM US OR ANY OF OUR MEMBERS TO SOLICIT ANY WORK THROUGH THIS WEBSITE;THE USER WISHES TO GAIN MORE INFORMATION ABOUT US FOR HIS/HER OWN INFORMATION AND USE; THE INFORMATION ABOUT US IS PROVIDED TO THE USER ONLY ON HIS/HER SPECIFIC REQUEST AND ANY INFORMATION OBTAINED OR MATERIALS DOWNLOADED FROM THIS WEBSITE IS COMPLETELY AT THE USER’S VOLITION AND ANY TRANSMISSION, RECEIPT OR USE OF THIS SITE WOULD NOT CREATE ANY LAWYER-CLIENT RELATIONSHIP. THE INFORMATION PROVIDED UNDER THIS WEBSITE IS SOLELY AVAILABLE AT YOUR REQUEST FOR INFORMATIONAL PURPOSES ONLY, SHOULD NOT BE INTERPRETED AS SOLICITING OR ADVERTISEMENT. WE ARE NOT LIABLE FOR ANY CONSEQUENCE OF ANY ACTION TAKEN BY THE USER RELYING ON MATERIAL/INFORMATION PROVIDED UNDER THIS WEBSITE. IN CASES WHERE THE USER HAS ANY LEGAL ISSUES, HE/SHE IN ALL CASES MUST SEEK INDEPENDENT LEGAL ADVICE.</p>
        </div>
      </div>
    </footer>
  );
}
