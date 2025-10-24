import Link from 'next/link';

const address = "2401 Shull Avenue, Oklahoma City, OK 73111";
const phone = "(405) 555-1234"; // Placeholder
const mapLink = "https://www.google.com/maps/search/?api=1&query=2401+Shull+Avenue,+Oklahoma+City,+OK+73111"; // Direct Maps link

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-12 border-t-4 border-green-700">
      <div className="container mx-auto p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* 1. Business Info */}
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-2xl font-black text-green-400 mb-3">METRO IN & OUT</h3>
          <p className="text-gray-400 text-sm">
            Your friendly local stop for gas, snacks, and convenience.
          </p>
        </div>

        {/* 2. Location & Hours */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Visit Us</h4>
          <address className="text-gray-400 text-sm not-italic space-y-1">
            <p><a href={mapLink} target="_blank" rel="noopener noreferrer" className="hover:text-green-400">{address}</a></p>
            <p><strong>Hours:</strong> 5:00 AM – 11:00 PM Daily</p>
            <p><strong>Phone:</strong> <a href={`tel:${phone.replace(/\D/g, '')}`} className="hover:text-green-400">{phone}</a></p>
          </address>
        </div>

        {/* 3. Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/about" className="text-gray-400 hover:text-green-400">Our Story</Link></li>
            <li><Link href="/services" className="text-gray-400 hover:text-green-400">Services</Link></li>
            <li><Link href="/gallery" className="text-gray-400 hover:text-green-400">Gallery</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-green-400">Contact</Link></li>
          </ul>
        </div>
        
        {/* 4. Optional Links */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Extra</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/promotions" className="text-gray-400 hover:text-green-400">Current Deals</Link></li>
            <li><Link href="/careers" className="text-gray-400 hover:text-green-400">Join Our Team</Link></li>
          </ul>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="border-t border-gray-700 text-center p-4">
        <p className="text-gray-500 text-xs">© {currentYear} METRO IN & OUT. All rights reserved.</p>
      </div>
    </footer>
  );
}