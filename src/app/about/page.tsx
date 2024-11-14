import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="container py-8 px-10">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-6">About us</h1>
        
        <div className="bg-red-800/30 p-3 rounded-lg shadow-lg transition-transform transform hover:scale-95 hover:shadow-2xl duration-300 h-auto w-full flex flex-col lg:flex-row">
          
          {/* Kabuli Pulao Image */}
          <div className="rounded-t-lg border-4 border-black/45 lg:mr-10 w-full lg:w-1/2">
            <Image src="/images/aboutimg.webp" alt="Kabuli Pulao" layout="responsive" width={500} height={300} className="rounded-lg object-cover" />
          </div>

          {/* About us Section next to the image */}
          <div className="lg:w-1/2 text-left">
            <h1 className="text-5xl font-extrabold mb-6 text-black/45">Our Speciality: Kabuli Pulao</h1>
            <p className="text-lg text-gray-200 mb-4">
              Welcome to our restaurant, where Afghan traditions and flavors come to life! Our signature dish, Kabuli Pulao, 
              is the heart of our menu, showcasing the rich culinary heritage of Afghanistan. Each dish is crafted with love and 
              the finest ingredients to bring you the authentic taste of Afghan cuisine.
              We take pride in using the freshest spices and high-quality meat, ensuring that every bite of Kabuli Pulao 
              transports you to the streets of Kabul. Whether you,re looking for a comforting meal or a taste of something 
              extraordinary, our restaurant is dedicated to delivering an unforgettable dining experience.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
