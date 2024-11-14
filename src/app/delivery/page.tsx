import Image from "next/image";
import { RiEBike2Fill } from "react-icons/ri";
import { IoFastFood } from "react-icons/io5";
import { BsDoorOpen } from "react-icons/bs";

export default function Delivery() {
    return (
        <div className="pt-32 pb-12">
            <div className="w-4/5 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-9">
                <div className='flex justify-center'>
                    <Image src="/images/delivery.png" alt="Delivery illustration" width={550} height={550} />
                </div>

                <div>
                    <h1 className='text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-snug md:leading-tight'>
                        Your <span className='text-red-700 font-extrabold'>Favourite Food</span> on the way
                    </h1>
                    <p className='mt-8 text-black text-lg font-bold text-opacity-70'>
                        Your delicious meal is on the way! Our delivery partner is bringing fresh, hot food right to your doorstep.
                        Sit back and relax as we make sure everything arrives just the way you like it—packed with flavor and care.
                        Get ready to enjoy!
                    </p>

                    <div className='flex items-center space-x-3 mt-8'>
                        <RiEBike2Fill color='red' size={30} />
                        <h1 className='text-lg text-black font-medium'>
                            Delivery in 30 minutes
                        </h1>
                    </div>

                    <div className='flex items-center space-x-3 mt-8'>
                        <IoFastFood color='red' size={30}/>
                        <h1 className='text-lg text-black font-medium'>
                            Free Shipping from $75
                        </h1>
                    </div>

                    <div className='flex items-center space-x-3 mt-8'>
                        <BsDoorOpen color='red' size={30}/>
                        <h1 className='text-lg text-black font-medium'>
                            Delivery on your Doorstep
                        </h1>
                    </div>

                </div>
            </div>
        </div>
    );
}
