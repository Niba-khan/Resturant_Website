import { RiPhoneLine } from "react-icons/ri";

export default function Reservation() {
    return (
        <div className="pt-20 bg-center bg-cover relative mt-8 pb-20 mb-12 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGavHhfp3tKane3czXXWXcasOo4ivY-JFAuw&s')]">
            <div className="absolute w-full h-full bg-[#000000a6] top-0 left-0"></div>
            <div className="relative z-20 mx-auto grid lg:grid-cols-2 items-center gap-12 w-4/5">
                
                {/* Left Content: Reservation Info */}
                <div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">
                        DO YOU HAVE ANY DINNER PLAN TODAY? RESERVE YOUR TABLE
                    </h1>
                    <p className="text-lg mt-3 text-white text-opacity-70">
                        Reserve your table today for an unforgettable dining experience!
                        Enjoy exquisite dishes crafted by our head chef in a warm and inviting atmosphere, perfect for any occasion.
                    </p>

                    <div className="flex items-center mt-4">
                        <RiPhoneLine color="red" size={40} />
                        <div className="ml-4">
                            <h1 className="text-lg text-white">Quick Order</h1>
                            <h1 className="text-sm text-white">+92-3445-344</h1>
                        </div>
                    </div>
                </div>

                {/* Right Content: Reservation Form */}
                <div className="bg-red-800/50 p-6 rounded-lg shadow-lg relative z-30">
                    <h2 className="text-2xl font-semibold mb-4 text-zinc-300">Book a Table</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-zinc-300" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                aria-label="Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-zinc-300" htmlFor="date">Date</label>
                            <input
                                type="date"
                                id="date"
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                aria-label="Date"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-zinc-300" htmlFor="time">Time</label>
                            <input
                                type="time"
                                id="time"
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                aria-label="Time"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-zinc-300" htmlFor="guests">Guests</label>
                            <input
                                type="number"
                                id="guests"
                                placeholder="Number of guests"
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                aria-label="Guests"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-black/65 text-white font-semibold rounded-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Reserve Table
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
