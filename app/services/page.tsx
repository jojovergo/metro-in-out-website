import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Fuel, Utensils, Coffee, DollarSign, Store, Car } from 'lucide-react';

const serviceCategories = [
  { 
    title: "Fuel & Automotive", 
    icon: Fuel, 
    items: ["Regular, Mid-Grade, and Premium Unleaded Gasoline", "Diesel Fuel", "Windshield Washer Fluid", "Motor Oil & Additives"] 
  },
  { 
    title: "Food & Snacks", 
    icon: Utensils, 
    items: ["Freshly Brewed Coffee", "Hot Dog Roller Grill", "Grab-and-Go Sandwiches", "Wide Variety of Chips & Candy"] 
  },
  { 
    title: "Beverages", 
    icon: Coffee, 
    items: ["Fountain Drinks (Sodas, Teas)", "Energy Drinks & Juices", "Bottled Water & Sports Drinks", "Cold Beer & Wine (License permitting)"] 
  },
  { 
    title: "Convenience Items", 
    icon: Store, 
    items: ["Over-the-Counter Medications", "Tobacco Products (Cigarettes, Vapes)", "Lottery Tickets & Scratch-Offs", "Basic Groceries (Milk, Bread, Eggs)"] 
  },
  { 
    title: "Financial & ATM", 
    icon: DollarSign, 
    items: ["On-Site ATM", "Money Orders", "Prepaid Gift Cards", "Phone Top-Up Cards"] 
  },
  { 
    title: "Restroom & Facilities", 
    icon: Car, 
    items: ["Clean Public Restrooms", "Air and Vacuum Station", "Ample Parking Space", "24/7 Security Monitoring"] 
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4 border-b-4 border-orange-500 pb-2">
        Our Full Service Offerings
      </h1>
      <p className="text-xl text-gray-600 mb-10 max-w-4xl">
        We stock everything you need to fuel your vehicle and power your day. Discover all the services available at METRO IN & OUT.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceCategories.map((category) => (
          <Card key={category.title} className="shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-600">
            <CardHeader className="flex flex-row items-center space-x-4">
              <category.icon className="h-8 w-8 text-orange-500" />
              <CardTitle className="text-2xl">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {category.items.map((item, index) => (
                  <li key={index} className="text-sm">{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}