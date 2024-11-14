import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="py-5 bg-slate-700/10 font-black text-xl sm:text-2xl border-8 border-zinc-50">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        
        {/* Logo Text */}
        <div className="text-center sm:text-left mb-7 sm:mb-0">
          <p className="text-lg sm:text-xl font-semibold pl-8">
            Khan,s
            <span className="ml-2 text-red-500">Restaurant</span>
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-10 text-sm sm:text-base md:text-lg mb-3 sm:mb-0">
          <Link className="hover:border border-b-2 hover:text-red-500" href={"/"}>Home</Link>
          <Link className="hover:border border-b-2 hover:text-blue-500" href={"/menuitem"}>MenuItem</Link>
          <Link className="hover:border border-b-2 hover:text-green-500" href={"/about"}>About</Link>
          <Link className="hover:border border-b-2 hover:text-yellow-500" href={"/reservation"}>Reservation</Link>
        </nav>

        {/* Image Logo */}
        <div className="mt-3 sm:mt-0 ml-4 sm:ml-8"> 
          <Image
            src="https://media.lordicon.com/icons/wired/flat/690-waiter-restaurant.gif"
            alt="logo"
            width={100}
            height={100}
            className="w-10 sm:w-12 rounded-full"
          />
        </div>

      </div>
    </div>
  );
}
