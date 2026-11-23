import React,{useState} from 'react';

 const POSTCODE_REGEX = /^[1-9][0-9]{2}\s?[0-9]{3}$/;

const MainCard: React.FC = () => {



  const[postcode , setPostcode] = useState<string>("");
  const[error, setError] = useState<string>("");
  const[status, setStatus] = useState<string>("");


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostcode(e.target.value);

    if(error) setError("");
    if (status) setStatus("");
  }

  const handleSearch=( e:React.FormEvent)=> {
    e.preventDefault();
    const cleanCode = postcode.trim().toUpperCase();
    if(!cleanCode){
      setError("Please enter a postcode or PIN code.");
      setStatus("");
      return;
    }

    if (!POSTCODE_REGEX.test(cleanCode)) {
      setError("Invalid format. Try e.g.560001.");
      setStatus("");
      return;
    }
    setError("");
    setStatus(`Great news! We deliver to ${cleanCode.toUpperCase()}.`);
  };

    return (
         <section className="w-full px-4 sm:px-6 lg:px-12 py-4 sm:py-6">
          <div className="relative w-full bg-slate-950 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center min-h-[360px] lg:min-h-[420px]">
           <div className="contents lg:flex lg:flex-col lg:justify-center lg:items-start lg:text-left lg:col-span-6 lg:p-16 z-10">

            <div className="order-1 px-5 pt-7 pb-3 sm:px-10 lg:p-0 text-center lg:text-left mb-2 lg:mb-10">
            <p className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white leading-tight">
              <span className="block">Freshly prepared meals</span>
              <span className="block mt-1">
                from your{" "}
                <span className="text-orange-500">Food Express</span>
              </span>
            </p>

            <p className="text-xs sm:text-base text-gray-300 font-normal mt-3">
              Delivered hot and fast straight to your doorstep.
            </p>
          </div>

              <form onSubmit={handleSearch} className="order-3 w-full max-w-md mx-auto lg:mx-0 px-5 pb-8 pt-3 sm:px-10 lg:p-0">
              <label
              htmlFor="postcode"
              className="block text-xs sm:text-sm font-medium text-gray-400 mb-2.5 text-center lg:text-left pl-5"             >
              Enter a postcode to deliver
            </label>
            <div className="flex items-center bg-white rounded-full p-1 pl-5 border border-gray-300 shadow-md">
              <input type="text" id="postcode" value={postcode} onChange={handleInputChange}
                placeholder="Enter postcode e.g. 560001"
                className="w-full min-w-0 bg-transparent text-slate-900 placeholder-gray-400 text-xs sm:text-sm pl-5 pr-2 py-3 sm:py-3.5 focus:outline-none"
              />
              <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs sm:text-sm px-6 sm:px-7 py-2.5 sm:py-3 rounded-full transition-colors cursor-pointer shrink-0">
                Search
              </button>
            </div>

            {error && (
              <p role="alert" className="text-xs sm:text-sm text-red-400 font-medium mt-2 text-center lg:text-left">
                {error}
              </p>
            )}
            {status && !error && (
              <p className="text-xs sm:text-sm text-emerald-400 font-medium mt-2 text-center lg:text-left">
                {status}
              </p>
            )}
              </form>
            </div>


            { /* Image section */}
            <div className="order-2 lg:col-span-6 relative h-full flex items-center justify-center px-5 py-3 sm:p-10 lg:p-12 z-10">
             <div className="hidden lg:block absolute inset-y-0 right-0 w-4/5 bg-orange-500 rounded-tl-[180px] -z-10 mt-8" />
              <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
              alt="Delicious food delivery"
              className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] h-40 sm:h-56 lg:h-80 object-cover rounded-2xl shadow-2xl border-4 border-white/15"
              />
              </div>
          </div>
         </section>
    );

};

export default MainCard;
