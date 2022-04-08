import React from 'react';
import './Laurels.css';
import { SubHeading } from '../../components';
import { images,data } from '../../constants';


const Laurels = () => (
  <section id='Laurels' className='flex flex-col gap-7 tab:gap-5 lap:flex-row lap:flex-wrap lap:items-center lap:justify-center lap:gap-1 ' >
    <div className='w-full'>
      <SubHeading 
        title={`Awards & Recognition`}
        type=''
        subHeading='Our Laurels'
        info=''
      />
    </div>
 
    <div className='flex flex-col gap-5 w-full tab:flex-row tab:flex-wrap tab:gap-0 lap:flex-col  lap:w-1/2 lap:m-0 lap:gap-0'>
      {data.awards.map((award,index)=>{
        return (
        <div key={index} className='flex w-11/12 mx-auto justify-center items-center gap-6 tab:w-1/2 tab:my-5 tab:m-0  lap:w-full lap:my-3' >
          <img src={award.imgUrl} alt="" className='h-14' />
          <div>
            <p className='text-amber-400 font-bold tab:text-xl'>{award.title}</p>
            <p>{award.subtitle}</p>
          </div>
        </div>
        );
      })}
    </div>

    <img src={images.laurels} alt="" className='mx-auto w-3/4 mt-6  lap:w-1/3 lap:m-0 ' />

  </section>
);

export default Laurels;
