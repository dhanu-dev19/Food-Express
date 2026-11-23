import React ,{useState} from 'react';


const NAVLINKS = [
  "Home",
  "Special Offers",
  "Restaurants",
  "Track Order"
]

const Navbar: React.FC =  () => {
  const [active, setActive] = useState<string>("Home");
  const[isMenuOpen, setIsMenuOpen] = useState<boolean>(false);


  const handleLink = (link: string) => {
    setActive(link);
    setIsMenuOpen(false);
  }



  return(

     <nav className="w-full bg-white border-b border-gray-100">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
      <a
          href="#"
          className="flex items-center text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950"
        >
           Food
          <span className="ml-0.5 bg-orange-500 text-slate-950 text-xs font-bold px-1.5 py-0.5 rounded">
           Express
          </span>
        </a>

   <ul className="hidden lg:flex items-center gap-4 xl:gap-6">
  {NAVLINKS.map((link) => {
    const isActive = active === link;

    return (
      <li key={link}>
        <button onClick={()=> handleLink(link)}
          className={`px-5 py-2.5 rounded-full text-base font-bold  font-medium transition-colors cursor-pointer ${
                    isActive
                      ? "bg-orange-500 text-white"
                      : "text-slate-900 hover:text-orange-500"
                  }`}
            >{link}</button>

      </li>
    );

  })}

   </ul>

  {/*Desktop login and mobile hamburger */}
   <div className="flex items-center gap-3">
    <button className="hidden sm:flex items-center gap-3 bg-slate-950 hover:bg-slate-800 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors cursor-pointer">
            <span className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-slate-950">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
            </span>
            <span>Login/Signup</span>
      </button>


     <button onClick = {() => setIsMenuOpen(!isMenuOpen)}
           aria-label="Toggle Menu"
            className="lg:hidden p-2 rounded-lg text-slate-900 hover:bg-gray-100 transition-colors cursor-pointer"
      >
        {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
      </button>
   </div>
     </div>
       {/*Mobile menu dropdown*/}
        {isMenuOpen && (
          <div className="lg:hidden px-4 pt-2 pb-5 border-t border-gray-100 bg-white">
            <ul className="flex flex-col gap-2">
             {NAVLINKS.map((link) => {
                const isActive = active ===link;
                return (
                  <li key={link}>
                    <button onClick={()=> handleLink(link)}
                      className={`w-full text-left px-4 py-2.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                      isActive
                        ? "bg-orange-500 text-white"
                        : "text-slate-900 hover:bg-gray-100"
                    }`}>
                     {link}
                    </button>

                  </li>
                );
             })}
            </ul>



            <button className="sm:hidden mt-4 w-full flex items-center justify-center gap-3 bg-slate-950 hover:bg-slate-800 text-white text-sm font-medium px-5 py-3 rounded-full transition-colors cursor-pointer">
              <span className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-slate-950">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
            </span>
            <span>Login/Signup</span>
            </button>
          </div>
        )}



      </nav>
  );

};

export default Navbar;