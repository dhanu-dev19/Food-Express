import React, {useState} from 'react'


 interface DealItem {
   id: number;
   name:string;
   category:string;
   discount:string;
   price:number;
   image:string;
  }

  const CATEGORIES = ["All","Vegan", "Sushi", "Pizza & Fast food", "Others"];

  {/* Sample data*/}

  const DEALS_DATA: DealItem[] = [
  // Pizza & Fast food (Default active tab)
  {
    id: 1,
    name: "Chef Burgers Express",
    category: "Pizza & Fast food",
    price: 200,
    discount: "-40%",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Grand Ai Cafe",
    category: "Pizza & Fast food",
    price: 150,
    discount: "-20%",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Butterbrot Cafe",
    category: "Pizza & Fast food",
    price: 120,
    discount: "-17%",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
  },
  // Vegan
  {
    id: 4,
    name: "Green Bowl Kitchen",
    category: "Vegan",
    price: 180,
    discount: "-30%",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Pure Plant Bistro",
    category: "Vegan",
    price: 150,
    discount: "-25%",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Fresh Leaf Cafe",
    category: "Vegan",
    price: 120,
    discount: "-15%",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
  },
  // Sushi
  {
    id: 7,
    name: "Tokyo Roll House",
    category: "Sushi",
    price: 200,
    discount: "-35%",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "Sakura Sushi Bar",
    category: "Sushi",
    price: 150,
    discount: "-20%",
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    name: "Kyoto Bento Express",
    category: "Sushi",
    price: 120,
    discount: "-10%",
    image:
      "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=600&q=80",
  },
  // Others
  {
    id: 10,
    name: "Spice Route Grill",
    category: "Others",
    price: 150,
    discount: "-25%",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 11,
    name: "Sweet Cravings Bakery",
    category: "Others",
    price: 120,
    discount: "-30%",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 12,
    name: "Royal Biryani House",
    category: "Others",
    price: 150,
    discount: "-15%",
    image:
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
  },
];


const DealsCards: React.FC = () =>{

 const [activeCategory, setActiveCategory] = useState<string>("All");


 const filteredDeals =
 activeCategory === "All"
    ? DEALS_DATA:
  DEALS_DATA.filter((item) => item.category === activeCategory);

  return(
   <section className="w-full px-4 sm:px-6 lg:px-12 py-6 sm:py-10">
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6 sm:mb-8">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-950">
          Up to -40% Food Express exclusive deals
      </h2>

      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        {CATEGORIES.map((category) => {

          const isActive = activeCategory === category;
          return (
               <button key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? "border border-orange-500 text-orange-500 font-semibold"
                    : "border border-transparent text-slate-900 hover:text-orange-500"
                }`}
                >
                  {category}
                </button>
          );
        })}
      </div>
    </div>



    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
     {filteredDeals.map((deal) => (
      <div
            key={deal.id}
            className="group relative h-44 sm:h-60 lg:h-72 rounded-2xl overflow-hidden shadow-md cursor-pointer"

       >
        <img
              src={deal.image}
              alt={deal.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />
            <span className="absolute top-0 right-3 sm:right-5 bg-slate-950 text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-2 sm:py-2.5 rounded-b-xl shadow">
              {deal.discount}
            </span>

            <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-6 right-3">
              <span className="block text-[11px] sm:text-sm font-medium text-orange-400">
                Restaurant
              </span>
              <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-white leading-snug line-clamp-1">
                {deal.name}
              </h3>
            </div>
        </div>
     ))}

    </div>
   </section>

  );
};

export default DealsCards;