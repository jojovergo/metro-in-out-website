import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react'; // Placeholder for mobile menu icon

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  // NOTE: A real project needs a mobile menu dialog/sheet implementation
  return (
    <header className="bg-white/95 sticky top-0 z-50 shadow-lg backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo/Business Name */}
        <Link href="/" className="text-2xl font-black text-green-700 hover:text-green-800 transition-colors">
          METRO <span className="text-orange-500">IN & OUT</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-gray-700 hover:text-green-700 font-semibold transition-colors text-lg"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* CTA Button */}
        <div className="hidden md:block">
          <Button asChild className="bg-orange-500 hover:bg-orange-600 font-bold">
            <Link href="/contact">Get Directions</Link>
          </Button>
        </div>

        {/* Mobile Menu Icon */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6 text-green-700" />
        </Button>
      </div>
    </header>
  );
}