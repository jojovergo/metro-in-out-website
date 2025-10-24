// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Users, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4 border-b-4 border-orange-500 pb-2">Our Story</h1>
      <p className="text-xl text-gray-600 mb-10 max-w-3xl">
        METRO IN & OUT is built on a commitment to speed, convenience, and community service.
      </p>

      {/* Story Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">A Local Foundation</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Founded with the goal of serving the busy residents and travelers of Oklahoma City, METRO IN & OUT quickly became a neighborhood essential. We know your time is valuable, which is why we focus on high-speed pumps and a well-stocked, clean store interior. Our mission is simple: to make your quick stop as efficient and pleasant as possible.
          </p>
          <p className="text-gray-700 leading-relaxed font-semibold">
            We are proud to be a local business, employing local residents and contributing to the vibrancy of the Shull Avenue area. Thank you for making us your preferred stop.
          </p>
        </div>
        <div className="h-64 bg-gray-200 rounded-xl shadow-lg bg-cover bg-center" style={{ backgroundImage: 'url("/images/staff.jpg")' }}>
            {/* NOTE: Add an image of your staff/store interior to public/images/staff.jpg */}
        </div>
      </section>

      {/* Mission/Values Section */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Core Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <Card className="p-6 text-center border-t-4 border-green-600 shadow-md">
          <Globe className="h-10 w-10 text-green-600 mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
          <p className="text-gray-600 text-sm">Always easy access to the fuel island and a convenient selection inside the store.</p>
        </Card>
        
        <Card className="p-6 text-center border-t-4 border-orange-500 shadow-md">
          <Users className="h-10 w-10 text-orange-500 mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-2">Community</h3>
          <p className="text-gray-600 text-sm">We are committed to supporting our neighborhood and providing a safe, friendly environment.</p>
        </Card>
        
        <Card className="p-6 text-center border-t-4 border-green-600 shadow-md">
          <Heart className="h-10 w-10 text-green-600 mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-2">Quality</h3>
          <p className="text-gray-600 text-sm">From quality fuel to fresh snacks, we ensure every product meets high standards.</p>
        </Card>

      </div>
    </div>
  );
}