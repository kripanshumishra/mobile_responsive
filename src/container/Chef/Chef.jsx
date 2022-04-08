import React from 'react';
import './Chef.css';
import {images} from '../../constants';
import { SubHeading } from '../../components';


const Chef = () => (
  <section className='lap:flex lap:items-center lap:gap-5 '>
      <img src={images.chef} alt="chefImage" className='w-3/4 mx-auto mb-7 lap:max-h-screen p-5 aspect-auto lap:m-0' />
      <div className=''>
        <SubHeading
          title={`Chef's Word`}
          subHeading='What We Believe In' 
          info='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore quia officia, dicta corporis amet repudiandae saepe officiis itaque, cum repellat neque eaque.'
        />
        <div className='w-3/4 mx-auto lap:flex lap:flex-row lap:items-center justify-around'>
          <div>
          <p className='text-2xl text-amber-400 '>Kevin Luo</p>
          <p className='text-sm '>{`Chef & Founder`}</p>
          </div>
          <img src={images.sign} alt="chef sign" className='w-3/4 my-6 lap:w-2/5' />
        </div>
      </div> 
  </section>
);

export default Chef;
