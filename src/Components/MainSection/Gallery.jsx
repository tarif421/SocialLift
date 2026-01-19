import React from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <div>
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: -30 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
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
              <p className="text-xl text-[#F0F0F0] font-semibold ">
                Road Cleaning
              </p>

              <p className="text-[#FFFFFFE6] text-sm">Mirpur 10, Dhaka</p>
            </div>
          </div>
          <div className="relative w-full max-w-md mx-auto">
            <img
              className=" w-full h-full"
              src="https://as2.ftcdn.net/v2/jpg/05/83/74/15/1000_F_583741578_tHezxJYYUAYkVZ2sQEGI6NbPbq4GC7Ff.jpg"
              alt=""
            />

            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-4 left-4    ">
              <p className="text-xl text-[#F0F0F0] font-semibold ">
                Tree Plantation
              </p>

              <p className="text-[#FFFFFFE6] text-sm">
                Hossainpur, Kishoreganj
              </p>
            </div>
          </div>
          <div className="relative w-full max-w-md mx-auto">
            <img
              className="w-full h-full"
              src="https://t3.ftcdn.net/jpg/11/44/40/92/240_F_1144409277_oH9FS8LM2aQwKfTHQybuqhI86xFYtMtw.jpg"
              alt=""
            />

            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-4 left-4    ">
              <p className="text-xl text-[#F0F0F0] font-semibold ">
                Donation Campaign
              </p>

              <p className="text-[#FFFFFFE6] text-sm">Gulshan, Dhaka</p>
            </div>
          </div>
          <div className="relative w-full max-w-md mx-auto">
            <img
              className="w-full h-full"
              src="https://t4.ftcdn.net/jpg/05/24/53/13/240_F_524531301_jZc92B4VLfsdV2hMhRuTYjWo10Sy6NkC.jpg"
              alt=""
            />

            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-4 left-4    ">
              <p className="text-xl text-[#F0F0F0] font-semibold ">
                Beach Cleanup
              </p>

              <p className="text-[#FFFFFFE6] text-sm">Cox's Bazar</p>
            </div>
          </div>
          <div className="relative w-full max-w-md mx-auto">
            <img
              className="w-full h-full"
              src="https://t4.ftcdn.net/jpg/17/82/70/67/240_F_1782706718_e824iiO7RItl4FlhAacagROGpeenCK89.jpg"
              alt=""
            />

            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-4 left-4    ">
              <p className="text-xl text-[#F0F0F0] font-semibold ">
                Food Distribution
              </p>

              <p className="text-[#FFFFFFE6] text-sm">Old Dhaka</p>
            </div>
          </div>
          <div className="relative w-full max-w-md mx-auto">
            <img
              className="w-full h-full"
              src="https://t4.ftcdn.net/jpg/06/63/78/87/240_F_663788712_GDG3oAcNecDgpvYIrtvghTnZTtWYqKtO.jpg"
              alt=""
            />

            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-4 left-4    ">
              <p className="text-xl text-[#F0F0F0] font-semibold ">
                Education Support
              </p>

              <p className="text-[#FFFFFFE6] text-sm">Savar, Dhaka</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Gallery;
