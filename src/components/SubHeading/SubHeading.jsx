import React from 'react';
import {images} from '../../constants';
import './SubHeading.css';

const SubHeading = ({title,subHeading,info,type}) => (
  <div className={`flex flex-col SubHeading px-4 text-center items-center tab:w-3/4 tab:mx-auto lap:w-full
      ${type==='right'?'lap:text-right lap:items-end':
        type==='left'? 'lap:text-left lap:items-start':
        'lap:text-center lap:items-center'
        }`}>
    <p className='mb-2 capitalize font-bold text-slate-50 '>{title} </p>
    <img src={images.spoon} alt="spoon" className={`h-2.5 mb-6 ${type==='right'?'transform rotate-180':''}`}/>
    <h1 className='text-5xl text-amber-200 mb-11  capitalize font-bold'>{subHeading}</h1>
    <p className='text-lg leading-relaxed text-slate-50 font-semibold mb-3'>{info}</p>
  </div>
);

export default SubHeading;
