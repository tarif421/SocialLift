import React from 'react';
import { GiNetworkBars } from 'react-icons/gi';
import { MdAddBox } from 'react-icons/md';
import { RiUserCommunityLine } from 'react-icons/ri';

const Feature = () => {
    return (
        <div>
            <div className=' mt-20'>
               <div className='flex items-center justify-center gap-4'>
                 <div className='flex-grow h-[1px] bg-[#a1490f]'></div>
                <h1 className='text-4xl text-[#a1490f] font-bold whitespace-nowrap '>Features</h1>
                <div className='flex-grow h-[1px] bg-[#a1490f]'></div>
               </div>
                <p className='text-center mt-3 mb-10'>Everything you need to organize and participant in commonly development events</p>
            </div>
            <div className='flex gap-15 px-20 rounded-2xl '>
                <div className='bg-[#99F6E450] rounded-2xl p-5'>
                    <span className='text-5xl text-[#22C55E]'><MdAddBox /></span>
                    <h2 className='text-[#1F2937]   text-xl font-semibold'>Create Events</h2>
                    <p className='mt-3' >Easily organize cleanup drives, tree plantations, donation campaigns, and more in tour local area</p>
                </div>
                   <div className='bg-[#93C5FD50] rounded-2xl p-5'>
                    <span className='text-5xl text-[#4b9efc]'><RiUserCommunityLine /></span>
                    <h2 className='text-black  text-xl font-semibold'>Join Community</h2>
                    <p className='mt-3' >Cinnect with passionate volunteers and make a real difference together in your neighborhood.</p>
                </div>
                   <div className='bg-[#E9D5FF80] rounded-2xl p-5'>
                    <span className='text-5xl text-[#7d32cd]'><GiNetworkBars /></span>
                    <h2 className='text-black  text-xl font-semibold'>Track Impact</h2>
                    <p className='mt-3' >Monitor your participation history and see the collective impact of your community efforts</p>
                </div>
         
            </div>
        </div>
    );
};

export default Feature;