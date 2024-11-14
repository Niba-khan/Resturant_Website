import React from 'react';
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Image from 'next/image';

const menuItems = [
  { Image: "/images/combo1.avif", price: '$25.12', title: 'Deal-1', rating: 5 },
  { Image: "/images/combo2.jpg", price: '$30.23', title: 'Deal-2', rating: 4.5 },
  { Image: "/images/combo3.jfif", price: '$55.12', title: 'Deal-3', rating: 5 },
  { Image: "/images/combo4.jfif", price: '$40.23', title: 'Deal-4', rating: 4.5 },
  { Image: "/images/combo5.webp", price: '$65.12', title: 'Deal-5', rating: 5 },
  { Image: "/images/f1.jpg", price: '$75', title: 'SkyeFries', rating: 5 },
  { Image: "/images/f2.jfif", price: '$60', title: 'Chicken Cheese Pizza', rating: 4.5 },
  { Image: "/images/f3.webp", price: '$59', title: 'CornDog', rating: 5 },
  { Image: "/images/f4.jfif", price: '$56', title: 'Chicken Wrap', rating: 4.5 },
  { Image: "/images/f5.jfif", price: '$100', title: 'Chicken Fried Wings', rating: 5 },
  { Image: "/images/ch1.webp", price: '$55.14', title: 'Chicken Chilli with Fried Rice', rating: 5 },
  { Image: "/images/ch2.jpeg", price: '$90.43', title: 'Beef Chowmin', rating: 4.5 },
  { Image: "/images/ch3.webp", price: '$65.62', title: 'Chinese Sesame Chicken', rating: 5 },
  { Image: "/images/ch4.jpg", price: '$70.23', title: 'Pink Sauce Pasta', rating: 4.5 },
  { Image: "/images/ch5.jpg", price: '$120', title: 'Cashew Chicken', rating: 5 },
  { Image: "/images/pf1.png", price: '$139', title: 'Chapli Kabab', rating: 5 },
  { Image: "/images/pf2.webp", price: '$200', title: 'Mandi', rating: 4.5 },
  { Image: "/images/pf3.jpg", price: '$140.12', title: 'Sujji', rating: 5 },
  { Image: "/images/pf4.png", price: '$180.23', title: 'Chicken Biryani', rating: 4.5 },
  { Image: "/images/pf5.jpg", price: '$95.12', title: 'Fish Fry', rating: 5 },
  { Image: "/images/ap1.webp", price: '$85.12', title: 'Greek Salad Nachos', rating: 5 },
  { Image: "/images/ap-2.webp", price: '$90.83', title: 'Peach Caprese Skewers', rating: 4.5 },
  { Image: "/images/ap3.webp", price: '$95.92', title: 'Strawberry & Brie Bites', rating: 5 },
  { Image: "/images/ap4.webp", price: '$50.43', title: 'Cracker Party Sandwiches', rating: 4.5 },
  { Image: "/images/ap5.webp", price: '$67.32', title: 'Tiny Tacos', rating: 5 },
  { Image: "/images/s1.webp", price: '$80', title: 'Raspberry Macarons', rating: 5 },
  { Image: "/images/s5.jpg", price: '$180', title: 'Conafa', rating: 4.5 },
  { Image: "/images/s6.webp", price: '$166', title: 'Five Flavours of Icecream', rating: 5 },
  { Image: "/images/s7.png", price: '$53.78', title: 'Oreo Shake', rating: 4.5 },
  { Image: "/images/s5.png", price: '$76.52', title: 'Bubble Tea', rating: 5 }
];

const MenuItemPage = () => {
  return (
    <div className='container py-16 pl-10'>
      <h2 className='text-center text-3xl font-bold mb-10 text-black/95'>Delicious Combos: Just for You</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {menuItems.map((item) => (
          <div key={item.title} className='bg-red-800/55 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-95 hover:shadow-2xl duration-300 h-auto w-64'>
            <div className="relative h-56 w-full">
              <Image
                src={item.Image}
                alt={item.title}
                width={150}
                height={150}
                className="rounded-t-lg h-full w-full object-cover"
                unoptimized // Temporarily disable optimization if needed for testing
              />
            </div>
            <div className="flex items-center justify-center space-x-1 mt-2">
              {[...Array(Math.floor(item.rating))].map((_, i) => (
                <BsStarFill key={i} color='yellow'/>
              ))}
              {item.rating % 1 !== 0 && <BsStarHalf color='yellow' />}
            </div>
            <p className='font-black mt-2 text-center text-2xl'>{item.title}</p>
            <p className='mt-2 text-center'>{item.price}</p>
            <button
              className='text-white p-2 rounded-md bg-slate-900/60 border-2 border-black hover:bg-red-600/45 w-full my-2'
              aria-label={`Order ${item.title}`}
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItemPage;
