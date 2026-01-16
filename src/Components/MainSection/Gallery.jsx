import React from "react";

const Gallery = () => {
  return (
    <div>
      <div className=" mt-20">
        <div className="flex items-center justify-center gap-4 ">
          <div className="flex-grow h-[1px] bg-[#a1490f]"></div>
          <h1 className="text-4xl text-[#a1490f] font-bold whitespace-nowrap ">
            Community in Action
          </h1>
          <div className="flex-grow h-[1px] bg-[#a1490f]"></div>
        </div>
        <p className="text-center mt-3 mb-10">
          See the amazing work of our community members are doing across
          different events
        </p>
      </div>
      {/* gallery photos */}
      <div className="grid grid-cols-3 gap-2 px-20 ">
        <div className="relative w-full max-w-md mx-auto">
          <img
            className="w-full h-auto"
            src="https://as2.ftcdn.net/v2/jpg/04/08/90/13/1000_F_408901359_rNhD6OstfkI2h4cqpzvdDgAqxQMr0Qsi.jpg"
            alt=""
          />

          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-4 left-4    ">
            <p className="text-xl text-[#F0F0F0] font-semibold ">Road Cleaning</p>

            <p className="text-[#FFFFFFE6] text-sm">Mirpur 10, Dhaka</p>
          </div>
        </div>
        <div className="relative w-full max-w-md mx-auto">
          <img
            className="https://www.vintagetreecare.com/wp-content/uploads/2023/06/planting-tree.jpg"
            alt=""
          />

          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-4 left-4    ">
            <p className="text-xl text-[#F0F0F0] font-semibold ">Tree Plantation</p>

            <p className="text-[#FFFFFFE6] text-sm">Hossainpur, Kishoreganj</p>
          </div>
        </div>
        <div className="relative w-full max-w-md mx-auto">
          <img
            className="w-full h-auto"
            src="https://as2.ftcdn.net/v2/jpg/04/08/90/13/1000_F_408901359_rNhD6OstfkI2h4cqpzvdDgAqxQMr0Qsi.jpg"
            alt=""
          />

          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-4 left-4    ">
            <p className="text-xl text-[#F0F0F0] font-semibold ">Donation Campaign</p>

            <p className="text-[#FFFFFFE6] text-sm">Gulshan, Dhaka</p>
          </div>
        </div>
        <div className="relative w-full max-w-md mx-auto">
          <img
            className="w-full h-auto"
            src="https://as2.ftcdn.net/v2/jpg/04/08/90/13/1000_F_408901359_rNhD6OstfkI2h4cqpzvdDgAqxQMr0Qsi.jpg"
            alt=""
          />

          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-4 left-4    ">
            <p className="text-xl text-[#F0F0F0] font-semibold ">Beach Cleanup</p>

            <p className="text-[#FFFFFFE6] text-sm">Cox's Bazar</p>
          </div>
        </div>
        <div className="relative w-full max-w-md mx-auto">
          <img
            className="w-full h-auto"
            src="https://as2.ftcdn.net/v2/jpg/04/08/90/13/1000_F_408901359_rNhD6OstfkI2h4cqpzvdDgAqxQMr0Qsi.jpg"
            alt=""
          />

          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-4 left-4    ">
            <p className="text-xl text-[#F0F0F0] font-semibold ">Food Distribution</p>

            <p className="text-[#FFFFFFE6] text-sm">Old Dhaka</p>
          </div>
        </div>
        <div className="relative w-full max-w-md mx-auto">
          <img
            className="w-full h-auto"
            src="https://as2.ftcdn.net/v2/jpg/04/08/90/13/1000_F_408901359_rNhD6OstfkI2h4cqpzvdDgAqxQMr0Qsi.jpg"
            alt=""
          />

          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-4 left-4    ">
            <p className="text-xl text-[#F0F0F0] font-semibold ">Education Support</p>

            <p className="text-[#FFFFFFE6] text-sm">Savar, Dhaka</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
