/* eslint-disable react/no-unescaped-entities */
import { GoogleMapEmbed } from '@/components/sections/GoogleMapEmbed';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MapPin, Clock, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  const address = "2401 Shull Avenue, Oklahoma City, OK 73111";
  const phone = "(405) 555-1234";
  const email = "manager@metroinout.com"; // Placeholder
  const mapLink = "https://www.google.com/maps/search/?api=1&query=2401+Shull+Avenue,+Oklahoma+City,+OK+73111";

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4 border-b-4 border-orange-500 pb-2">
        Contact & Location
      </h1>
      <p className="text-xl text-gray-600 mb-10 max-w-4xl">
        We're here to serve you! Get in touch or find the quickest route to our store.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        
        {/* Contact Info Cards */}
        <Card className="text-center shadow-md">
            <CardHeader>
                <MapPin className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle>Our Address</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-gray-700 font-semibold">{address}</p>
                <Button asChild variant="link" className="text-orange-500 mt-2 p-0">
                    <a href={mapLink} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </Button>
            </CardContent>
        </Card>

        <Card className="text-center shadow-md">
            <CardHeader>
                <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle>Hours of Operation</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-gray-700 font-semibold">Open Daily:</p>
                <p className="text-lg text-orange-500 font-bold">5:00 AM - 11:00 PM</p>
            </CardContent>
        </Card>

        <Card className="text-center shadow-md">
            <CardHeader>
                <Phone className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle>Give Us a Call</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-gray-700 font-semibold">For quick questions or service:</p>
                <Button asChild variant="link" className="text-lg text-orange-500 p-0 font-bold">
                    <a href={`tel:${phone.replace(/\D/g, '')}`}>{phone}</a>
                </Button>
            </CardContent>
        </Card>

      </div>

      {/* Map & Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Google Map */}
        <div className="lg:h-full">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Exact Location</h2>
            <GoogleMapEmbed className="h-[400px] lg:h-[600px]" />
        </div>

        {/* Contact Form */}
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
            <Card className="shadow-2xl">
                <CardContent className="pt-6">
                    {/* NOTE: For this form to work, you need to use a backend service 
                        like Formspree, Netlify Forms, or a serverless function. 
                        For a quick submission today, use a service like Formspree. 
                    */}
                    <form action={`mailto:${email}`} method="POST" className="space-y-4">
                        <div>
                            <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                            <Input id="name" type="text" placeholder="Your Name" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                            <Input id="email" type="email" placeholder="you@example.com" required />
                        </div>
                        <div>
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <Textarea id="message" placeholder="How can we help you?" rows={5} required />
                        </div>
                        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-lg">
                            <Send className="h-5 w-5 mr-2" /> Send Inquiry
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}