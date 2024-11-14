import React from 'react';
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Image from "next/image";

export default function TopMenu() {
  return (
    <div className='container mx-auto py-8 px-4 sm:px-8 lg:px-28'>
      <div className='text-center mb-10'>
        <h1 className='text-2xl sm:text-4xl font-black mb-4'>Top List Menu</h1>
        <p className='text-sm sm:text-lg font-bold'>Our Top List</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6'>
        
        {/* Top Menu 1 */}
        <div className='bg-red-800/55 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300'>
          <Image src="/images/food1.webp" alt='Chicken Biryani' width={300} height={144} className="rounded-t-lg h-36 w-full object-cover" priority />
          <div className="flex items-center justify-center space-x-1 mt-2">
            <BsStarFill color='yellow' />
            <BsStarFill color='yellow' />
            <BsStarFill color='yellow' />
            <BsStarFill color='yellow'/>
            <BsStarFill color='yellow' />
          </div>
          <p className='mt-2 text-center'>$10.29</p>
          <p className='text-2xl text-center font-extrabold'>Chicken Biryani</p>
          <button className='text-white py-1 px-4 rounded-md bg-slate-900/60 border-2 border-black hover:bg-red-600/45 mt-2 w-full'>Order Now</button>
        </div>

        {/* Top Menu 2 */}
        <div className='bg-red-800/55 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300'>
          <Image src="/images/food2.gif" alt='Burger Meal' width={300} height={144} className="rounded-t-lg h-36 w-full object-cover"  priority />
          <div className="flex items-center justify-center space-x-1 mt-2">
          <BsStarFill color='yellow' />
            <BsStarFill color='yellow' />
            <BsStarFill color='yellow' />
            <BsStarFill color='yellow'/>
            <BsStarFill color='yellow' />
          </div>
          <p className='mt-2 text-center'>$15.00</p>
          <p className='text-2xl text-center font-extrabold'>Burger Meal</p>
          <button className='text-white py-1 px-4 rounded-md bg-slate-900/60 border-2 border-black hover:bg-red-600/45 mt-2 w-full'>Order Now</button>
        </div>

        {/* Top Menu 3 */}
        <div className='bg-red-800/55 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300'>
          <Image src="/images/food3.webp" alt='Pizza' width={300} height={144} className="rounded-t-lg h-36 w-full object-cover"  priority/>
          <div className="flex items-center justify-center space-x-1 mt-2">
          <BsStarFill color='yellow'/>
            <BsStarFill color='yellow' />
            <BsStarFill color='yellow' />
            <BsStarFill color='yellow' />
            <BsStarHalf color='yellow' />
          </div>
          <p className='mt-2 text-center'>$20.50</p>
          <p className='text-2xl text-center font-extrabold'>Pizza</p>
          <button className='text-white py-1 px-4 rounded-md bg-slate-900/60 border-2 border-black hover:bg-red-600/45 mt-2 w-full'>Order Now</button>
        </div>

        {/* Top Menu 4 */}
        <div className='bg-red-800/55 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300'>
          <Image src="/images/food4.webp" alt='Dhaga Kabab' width={300} height={144} className="rounded-t-lg h-36 w-full object-cover" priority />
          <div className="flex items-center justify-center space-x-1 mt-2">
          <BsStarFill color='yellow' />
            <BsStarFill color='yellow' />
            <BsStarFill color='yellow' />
            <BsStarFill color='yellow'/>
            <BsStarFill color='yellow' />
          </div>
          <p className='mt-2 text-center'>$30.20</p>
          <p className='text-2xl text-center font-extrabold'>Dhaga Kabab</p>
          <button className='text-white py-1 px-4 rounded-md bg-slate-900/60 border-2 border-black hover:bg-red-600/45 mt-2 w-full'>Order Now</button>
        </div>

        {/* Top Menu 5 */}
        <div className='bg-red-800/55 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300'>
          <Image src="/images/food5.gif" alt='Chicken Tikka' width={300} height={144} className="rounded-t-lg h-36 w-full object-cover"  priority/>
          <div className="flex items-center justify-center space-x-1 mt-2">
            <BsStarFill color='yellow'/>
            <BsStarFill color='yellow' />
            <BsStarFill color='yellow' />
            <BsStarFill color='yellow' />
            <BsStarHalf color='yellow' />
          </div>
          <p className='mt-2 text-center'>$29.23</p>
          <p className='text-2xl text-center font-extrabold'>Chicken Tikka</p>
          <button className='text-white py-1 px-4 rounded-md bg-slate-900/60 border-2 border-black hover:bg-red-600/45 mt-2 w-full'>Order Now</button>
        </div>

      </div>
    </div>
  );
}
