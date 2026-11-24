import React from 'react';

interface StatItem {
  value: string;
  label: string;
}

const STATS_DATA: StatItem[] = [
  { value: "546+", label: "Registered Riders" },
  { value: "789,900+", label: "Orders Delivered" },
  { value: "690+", label: "Restaurants Partnered" },
  { value: "17,457+", label: "Food items" },
];

const StatsBanner: React.FC = () => {


  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 py-6 sm:py-8">
      <div className="w-full bg-orange-500 rounded-2xl px-6 py-4 lg:py-8 text-white shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          {STATS_DATA.map((stat,index) => {
             const isNotLast = index < STATS_DATA.length - 1;
            return(
              <div key={stat.label}
              className="relative flex flex-col items-center justify-center text-center py-6 lg:py-2">

                <span className="text-4xl sm:text-5xl xl:text-6xl font-light tracking-tight">
                  {stat.value}
                </span>

                <span className="text-sm sm:text-base font-bold mt-1.5">
                  {stat.label}
                </span>
                {/* Mobile*/}
                {isNotLast && (
                  <div className="lg:hidden w-44 h-px bg-white/45 absolute bottom-0" />
                )}
                 {/* Desktop*/}
                {isNotLast && (
                  <div className="hidden lg:block w-px h-16 bg-white/45 absolute right-0" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )

}

export default StatsBanner;