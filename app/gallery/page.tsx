// app/gallery/page.tsx

import React from 'react';
import Image from 'next/image';

// NOTE: Ensure these image paths are correct and the files exist in public/images
const photos = [
  { src: '/images/shop-interior1.jpg', alt: 'Shop Interior View' },
  { src: '/images/shop-interior2.jpg', alt: 'Shop Interior View' },
  { src: '/images/shop-interior3.jpg', alt: 'Shop Interior View' },
  { src: '/images/shop-interior4.jpg', alt: 'Shop Interior View' },
  { src: '/images/shop-interior5.jpg', alt: 'Shop Interior View' },
  { src: '/images/shop-exterior.jpg', alt: 'Shop Exterior and Signage' },
  { src: '/images/refreshment-bay.jpg', alt: 'Stay fuel-up' },
  { src: '/images/fuel-bay.jpg', alt: 'Car in fuel Bay' },
  { src: '/images/parking-lot.jpg', alt: 'Parking lot' },
   { src: '/images/shopview.jpg', alt: 'ShopView' },
];

export default function GalleryPage() {
  return (
    // You can adjust the padding to fit your overall layout/header
    <section className="min-h-screen py-16 md:py-24 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center text-gray-900 dark:text-gray-50 mb-12">
          Metro In & Out Photo Gallery
        </h1>

        {/* The Responsive Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg shadow-xl aspect-square transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                layout="fill"
                objectFit="cover"
                className="transition duration-500 ease-in-out hover:opacity-90"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 hover:opacity-100 transition duration-300 flex items-end p-4">
                <p className="text-sm font-semibold text-white">{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}