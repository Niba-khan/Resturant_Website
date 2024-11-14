import Image from "next/image";

export default function Team() {
    return (
        <div className="pt-20 pb-12">
            <h1 className="heading text-center text-6xl">
                Meet Our Expert <span className="text-red-700 text-7xl font-extrabold">Chefs</span>
            </h1>

            <div className="mt-20 w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                
                {/* Chef Card 1 */}
                <div className="bg-white/45 shadow-md rounded-md p-5 text-center border-4 border-black/60">
                    <Image src="/images/team1.jfif" alt="Chef Mahboob Khan" width={400} height={400}  className="mx-auto border-4 border-red-700 rounded-md" />
                    <h1 className="text-4xl text-gray-700 mt-6">Mahboob Khan</h1>
                    <button className="bg-red-500 mt-3 p-3 text-white rounded border-4 border-black/55">Kitchen Porter</button>
                    <p className="mt-3 text-black">
                        A kitchen porter supports kitchen staff by washing dishes, cleaning, and maintaining a tidy workspace. 
                        They assist with basic food prep and restock supplies, ensuring the kitchen runs smoothly and meets hygiene standards.
                    </p>
                </div>

                {/* Chef Card 2 */}
                <div className="bg-white/45 shadow-md rounded-md p-5 text-center border-4 border-black/60">
                    <Image src="/images/team2.jpg" alt="Chef Samia Adil"  width={400} height={400} className="mx-auto border-4 border-red-700 rounded-md" />
                    <h1 className="text-4xl text-gray-700 mt-6">Samia Adil</h1>
                    <button className="bg-red-500 mt-3 p-3 text-white rounded border-4 border-black/55">Executive Chef</button>
                    <p className="mt-3 text-black">
                        An executive chef is the culinary leader responsible for overseeing all kitchen operations in a restaurant or hotel.
                        They create menus, ensure high food quality and safety standards, manage kitchen staff, and handle budgeting for food costs.
                    </p>
                </div>
                
                {/* Chef Card 3 */}
                <div className="bg-white/45 shadow-md rounded-md p-5 text-center border-4 border-black/60">
                    <Image src="/images/team3.jfif" alt="Chef Zakir" width={400} height={400} className="mx-auto border-4 border-red-700 rounded-md" />
                    <h1 className="text-4xl text-gray-700 mt-6">Chef Zakir</h1>
                    <button className="bg-red-500 mt-3 p-3 text-white rounded border-4 border-black/55">Head Chef</button>
                    <p className="mt-3 text-black">
                        A head chef is responsible for managing the kitchen, designing the menu, and ensuring high-quality dishes.
                        They oversee food preparation, train kitchen staff, maintain inventory, and enforce hygiene and safety standards.
                    </p>
                </div>

            </div>
        </div>
    );
}
