import React,{useState} from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const TOP_TABS = [
  "Frequent Questions",
  "Who we are?",
  "Partner Program",
  "Help & Support",
];

const FAQ_LIST: FaqItem[] = [
  {
    question: "How does Food Express work?",
    answer:
      "Food Express simplifies food ordering. Browse our menu, pick your favorite dishes, and checkout in seconds. Your meal is prepared fresh and delivered straight to your doorstep.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept UPI, Credit & Debit Cards, Net Banking, popular digital wallets, and Cash on Delivery (COD) for eligible orders.",
  },
  {
    question: "Can I track my order in real-time?",
    answer:
      "Yes! Once your order is confirmed, you can follow every stage live—from kitchen preparation to your rider's doorstep arrival.",
  },
  {
    question: "Are there any special discounts available?",
    answer:
      "Check our Exclusive Deals section daily for up to 40% off on top local restaurants, combo meals, and zero-delivery-fee offers.",
  },
  {
    question: "Is Food Express available in my area?",
    answer:
      "Enter your 6-digit PIN code in the search bar above to instantly see all partner kitchens and restaurants delivering to your neighborhood.",
  },
];


const HOW_IT_WORKS = [
  {
    emoji: "🍽️",
    title: "Place an Order!",
    description: "Place your order easily through our website or mobile app",
  },
  {
    emoji: "📍",
    title: "Track Progress",
    description: "Track your live order status with estimated delivery time",
  },
  {
    emoji: "🛵",
    title: "Get your Order!",
    description: "Receive your hot, fresh meal at lightning-fast speed!",
  },
];


const KnowMore:  React.FC = () => {

  const [activeTab, setActiveTab] = useState<string>("Frequent Questions");
  const[activefaqIndex, setActivefaqIndex] = useState<number>(0);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 py-6 sm:py-10">
      <div className="w-full bg-gray-100 rounded-2xl p-5 sm:p-8 lg:p-12">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-950 text-center lg:text-left">
            Know more about us!
          </h2>

          <div className="hidden lg:flex flex-wrap items-center gap-3">
           {TOP_TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button key={tab}
                onClick = {() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? "border border-orange-500 text-slate-950 font-bold bg-white"
                      : "border border-transparent text-slate-800 hover:text-orange-500"
                  }`}
                  >{tab}</button>
            );
           })}
          </div>
        </div>

       <div className="bg-transparent lg:bg-slate-950 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0">

          <div className="lg:col-span-5 px-2 sm:px-6 lg:p-10 lg:border-r lg:border-white/10 flex flex-col justify-center gap-2.5 sm:gap-3">
             {FAQ_LIST.map((faq, index) => {

              const isSelected = activefaqIndex === index;
                return(
                  <button key={index}
                    onClick={() => setActivefaqIndex(index)}
                    className={`w-full text-center lg:text-left px-5 py-3.5 rounded-full text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-orange-500 text-slate-950"
                      : "text-slate-950 hover:bg-gray-200 lg:text-white lg:hover:bg-white/10"
                  }`}
                  >{faq.question}</button>

                )
             })}
          </div>

          <div className="lg:col-span-7 bg-slate-950 lg:bg-transparent rounded-2xl lg:rounded-none p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {HOW_IT_WORKS.map((item) =>(
                <div
                  key={item.title}
                  className="bg-gray-200 rounded-xl p-5 text-center flex flex-col items-center justify-between"
                >
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-950">
                    {item.title}
                  </h3>
                  <div className="w-16 h-16 my-4 rounded-full bg-white flex items-center justify-center text-3xl shadow-sm">
                    {item.emoji}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {item.description}
                  </p>

                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-gray-200 text-center max-w-xl mx-auto mt-6 leading-relaxed">
              {FAQ_LIST[activefaqIndex].answer}
            </p>
          </div>
        </div>
      </div>
    </section>


  );
};

export default KnowMore;