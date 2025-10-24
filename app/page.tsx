import { Button } from '@/components/ui/button';
import { GoogleMapEmbed } from '@/components/sections/GoogleMapEmbed';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Fuel, Coffee, Clock } from 'lucide-react';

export default function HomePage() {
  const mapLink = "https://www.google.com/maps/search/?api=1&query=2401+Shull+Avenue,+Oklahoma+City,+OK+73111";

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: 'url("/images/hero.jpg")' }}>
        {/* NOTE: Add your main hero image to public/images/hero.jpg */}
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-2xl tracking-tight">
            YOUR QUICK STOP <span className="text-green-500">IN OKC</span>
          </h1>
          <p className="text-xl md:text-2xl text-orange-300 mb-8 max-w-3xl font-light">
            Quality Fuel, Fresh Snacks, and Friendly Service at 2401 Shull Ave.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild className="bg-green-600 hover:bg-green-700 text-lg px-8 py-7 shadow-xl font-bold">
              <Link href="/services">See All Services</Link>
            </Button>
            <Button asChild variant="outline" className="bg-white/90 hover:bg-white text-lg px-8 py-7 text-gray-900 shadow-xl border-2 border-orange-500 font-bold">
              <a href={mapLink} target="_blank" rel="noopener noreferrer">Get Directions</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro & Key Features Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">More Than Just a Gas Station</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-600">
            <CardHeader>
              <Fuel className="h-10 w-10 text-green-600 mx-auto mb-2" />
              <CardTitle>Fast Fuel Service</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Reliable gas and diesel for your daily commute or road trip. Always competitive prices.</CardDescription>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow border-t-4 border-orange-500">
            <CardHeader>
              <Coffee className="h-10 w-10 text-orange-500 mx-auto mb-2" />
              <CardTitle>Snacks & Drinks</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Stop in for fresh coffee, cold beverages, and a wide selection of quick grab-and-go food items.</CardDescription>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-600">
            <CardHeader>
              <Clock className="h-10 w-10 text-green-600 mx-auto mb-2" />
              <CardTitle>Convenient Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Open daily from 5:00 AM to 11:00 PM to serve you when you need us most.</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="bg-gray-200" />
      
      {/* Location Section with Map */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">Find Us in Oklahoma City</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            <div className="md:order-last">
              <GoogleMapEmbed />
            </div>

            <div className="space-y-6">
              <p className="text-2xl font-semibold text-gray-700">
                We&apos;re located at the heart of the community.
              </p>
              <p className="text-xl text-green-700 font-bold">
                2401 Shull Avenue, Oklahoma City, OK 73111
              </p>
              <p className="text-gray-600">
                Whether you&apos;re passing through or a local resident, Metro In & Out is easy to find and always stocked with essentials. Click below for the fastest route.
              </p>
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-6 shadow-md">
                <a href={mapLink} target="_blank" rel="noopener noreferrer">
                  Drive There Now
                </a>
              </Button>
            </div>

        </div>
      </section>
    </div>
  );
}