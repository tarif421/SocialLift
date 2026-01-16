import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[#caa767] flex items-center p-7 '>
            {/* left side */}
            <div className='flex-1 ml-15 '>
             <h1 className=' text-5xl font-bold text-[#000000de]
             '>Make a Difference in <br /> Your Community</h1>
             <p className='text-sm'>
                Join local social development events, create meaningful impact, and connect with changemakers in your area.
             </p>
             <div className='mt-4 space-x-4 '>
                <button className='btn text-[#a86d00] border-[#a86d00] border-[3px]'>Browse Events</button>
                <button className='btn text-[#a86d00] border-[#a86d00] border-[3px]'>Create Event</button>
             </div>
             <div className='flex mt-4 space-x-5' >
                <div>
                    <h1 className='text-3xl font-medium text'>500+</h1>
                    <p className='text-[9px]'>Active Events</p>
                </div>
                <div>
                    <h1 className='text-3xl font-medium'>2,000+</h1>
                    <p className='text-[9px]'>Community Members</p>
                </div>
             </div>
            </div>
            {/* right side */}
            <div className='flex-1 flex justify-center'>
<div>
    <img className="max-w-[400px] h-[400px] p-4  ml-2" src="https://as1.ftcdn.net/v2/jpg/06/26/69/54/1000_F_626695438_F6x1cldjynJTYt2XgtoIBUPAhOK4J4uT.jpg" alt="" />
</div>
            </div>
        </div>
    );
};

export default Banner;