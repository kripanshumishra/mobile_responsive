import React from 'react';
import './AboutUs.css';
import {images} from '../../constants';
import SubHeading from '../../components/SubHeading/SubHeading';


const AboutUs = () => (
  <section id='AboutUs' className='relative bg-black lap:flex lap:justify-between lap:-z-10 lap:gap-10'>
    
    <div className='lap:w-1/2 z-10 relative'>
    <SubHeading
    title='know about us'
    subHeading='About Us'
    info='Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae officia libero qui praesentium eaque harum facere, ducimus nulla, eum quod sapient'
    btnText='Know More'
    type='right'
    />
    <button className='primary-btn'>Know More</button>
    </div>

    
    <div className='relative h-screen flex justify-center items-center my-32 w-full lap:absolute lap:my-0'>
      <img src={images.G} alt="gImage" className=' h-1/2 absolute lap:h-3/4 lap:right-1/2 lap:translate-x-1/2' />
      <img src={images.knife} alt="" className='h-full absolute lap:right-1/2 lap:translate-x-1/2' />
    </div>
    

    <div className='lap:w-1/2 z-10 relative'>
    <SubHeading
    title='know out history'
    subHeading='Our History'
    info='Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae officia libero qui praesentium eaque harum facere, ducimus nulla, eum quod sapient'
    btnText='Know More'
    type='left'
    />
    <button className='primary-btn'>Know More</button>
    </div>
  </section>
);

export default AboutUs;
