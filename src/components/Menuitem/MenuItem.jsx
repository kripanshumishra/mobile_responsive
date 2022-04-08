import React from 'react';

import './MenuItem.css';

const MenuItem = ({title,price,tags,}) => (
  <li className=' flex flex-wrap w-full px-7 text-xl items-center lap:text-base'>
      <p className='text-amber-300 self-right'>{title}</p>
      <div className='flex-grow  flex items-center justify-end gap-5'>
      <div id='dash' className='h-0  rounded-md bg-amber-200 w-1/4'></div>
      <p>{price}</p>
      </div>

    <p className=' text-amber-100 w-full lap:text-sm'>{tags}</p>
  </li>
);

export default MenuItem;
