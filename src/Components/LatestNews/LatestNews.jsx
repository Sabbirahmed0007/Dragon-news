import React from 'react';
import * as Marqu from 'react-fast-marquee';
const Marquee = Marqu.default.default

console.log(Marquee);


const LatestNews = () => {
    return (
        <div className='bg-base-300 p-2 flex items-center gap-1 rounded-sm'>
            <p className='text-base-100 bg-second py-2 px-3 rounded-sm text-sm'>Latest</p>
            
            <Marquee>

            <p>Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, et eligendi obcaecati impedit laborum, <span className='font-bold text-second'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, fugiat.</span> maiores perspiciatis nemo id delectus, veniam dicta dolor adipisci repudiandae consequatur fugiat quae iste minima! Officiis?.</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;