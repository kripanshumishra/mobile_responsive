import React from 'react';
import './Footer.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';


const Footer = () => (
  <section>
    <div className='flex flex-col items-center gap-3 tab:border-2 tab:py-4 tab:rounded-md tab:border-amber-500 lap:border-4  lap:rounded-2xl'>
      <SubHeading
        title={'News letter'}
        subHeading='Subscribe To Our Newsletter'
        info='And Never Miss Latest Updates!'
        type=''
      />
      
      <input type="email" name="email" id="emailAdd" className='w-3/4 bg-slate-700 rounded-md focus:outline-none px-3 py-1 text-lg font-bold focus:border-2 focus:border-slate-500' placeholder='Your Email Here' />

      <button className='primary-btn'>Subscribe</button>
    </div>

    <div className='flex flex-col gap-11 my-11 text-xl text-center lap:flex-row lap:items-center lap:my-24'>
      <div className='flex flex-col gap-2'>
        <h3 className='text-3xl  font-bold'>Contact Us</h3>
        <p>9 W 53rd St, New York, NY 10019, USA</p>
        <p>+1 212-344-1230</p>
        <p>+1 212-344-1230</p>
      </div>

      <div className='flex flex-col items-center  gap-3'>
        <img src={images.gericht} alt="geritch" className='w-3/4' />
        <p>"The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others."</p>
        <img src={images.spoon} alt="spoon" />
      </div>

      <div className='flex flex-col text-center'>
        <h3 className='font-bold text-3xl '>Working Hours</h3>
        <div>
          <p>Monday-Friday:</p>
          <p>08:00 Am - 12:00 Am</p>
        </div>
      </div>
    </div>

    <p className='font-semibold text-center'>2021 Gericht. All Rights Reserved</p>
  </section>
);

export default Footer;
