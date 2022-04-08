import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const FindUs = () => (
  <section className='lap:flex lap:justify-around lap:items-center '>
    <div className='lap:w-1/2 '>
      <SubHeading
        title={'Contact'}
        subHeading={'Find Us'}
        info={'Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G'}
        type={'left'}
      />

      <h3 className='text-2xl font-bold text-amber-400 text-center lap:text-left  lap:px-5'>Opening Hours</h3>
      <p className='text-center lap:text-left lap:px-5'>Mon - Fri: 10:00 Am - 02:00 Am</p>
      <p className='text-center lap:text-left lap:px-5'>Sat - Sun: 10:00 Am - 03:00 Am</p>
      <button className='primary-btn mt-5 lap:mx-5'>Visit Us</button>
    </div>

    <img src={images.findus} alt="" className='w-5/6 my-7 mx-auto lap:w-1/3 lap:mx-0 lap:my-0' />
  </section>
);

export default FindUs;
