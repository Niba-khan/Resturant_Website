import Image from "next/image";

export default function Hero() {
  return (
    <div className="container mx-auto text-black grid grid-cols-1 md:grid-cols-2 min-h-[600px] pl-5 md:pl-32">

      {/* Heading and Paragraph */}
      <div className="flex flex-col justify-center gap-3 text-center md:text-left pt-24 pb-10">
        <h1 className="text-3xl font-black">
          Welcome to <span className="text-red-500">Khan,s Restaurant</span> Where Flavor Meets Elegance
        </h1>
        <p className="font-semibold text-2xl">
          At <span className="text-red-500">Khan,s Restaurant</span>, we take pride in offering a unique dining experience
          that tantalizes your taste buds and delights your senses. Our menu is crafted
          with care, combining the finest ingredients with creativity and passion.
          Whether you,re craving traditional dishes with a modern twist or exploring
          new culinary horizons, <span className="text-red-500">Khan,s Restaurant</span> has something for everyone.
        </p>

        <div className="flex space-x-4">
          <button className="text-white px-4 py-2 bg-slate-500 border-zinc-800 border-4 rounded-full hover:bg-slate-800">
            Food Menu
          </button>
          <button className="px-4 py-2 text-black bg-black/10 border-gray-500 border-4 rounded-full hover:bg-white">
            Book Table
          </button>
        </div>
      </div>

      {/* Images Section */}
      <div className="flex justify-center items-center">
        <Image
          src="/images/hero.gif" 
          alt="Hero Image"
          width={450}
          height={450}
          className="object-cover border-4 border-black/40 transition-transform duration-500 hover:animate-bounce"
          priority 
        />
      </div>

    </div>
  );
}
