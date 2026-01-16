import React from 'react';
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Banner = () => {
    return (
        <div className='bg-[#caa767] flex items-center p-7  '>
            {/* left side */}
               <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
              <div className='flex-1 ml-15 '>
             <h1 className=' text-5xl font-bold text-[#000000de]
             '>Make a Difference in <br /> Your Community</h1>
             <p className='text-sm'>
                Join local social development events, create meaningful impact, and connect with changemakers in your area.
             </p>
             <div className='mt-4 space-x-4 '>
                <button className='btn text-[#a86d00] border-[#a86d00] border-[3px] rounded-xl'>Browse Events</button>
                <button className='btn text-[#a86d00] border-[#a86d00] border-[3px] rounded-xl'>Create Event</button>
             </div>
             {/* / */}
             <div className='flex mt-4 space-x-5' >
                <div>
                    <h1 className='text-3xl font-medium text'><CountUp start={0} end={500} duration={2} separator="," />
              +</h1>
                    <p className='text-[9px]'>Active Events</p>
                </div>
                <div>
                    <h1 className='text-3xl font-medium'><CountUp start={0} end={2000} duration={2} separator="," />
              +</h1>
                    <p className='text-[9px]'>Community Members</p>
                </div>
             </div>
            </div>
        </motion.div>
        
            {/* right side */}
            <div className='flex-1 flex justify-center'>
<div>
    <img className="max-w-[600px] h-[400px] p-4  ml-2 rounded-4xl" src="https://t4.ftcdn.net/jpg/10/20/75/49/240_F_1020754907_cD9j4u6MWYmoCUrAGlZjRsu3ss7G3h5T.jpg" alt="" />
</div>
            </div>
        </div>
    );
};

export default Banner;