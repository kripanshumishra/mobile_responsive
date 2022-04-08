import React from 'react';
import './SpecialMenu.css';
import { images,data } from '../../constants';
import { SubHeading,MenuItem } from '../../components';


const SpecialMenu = () => (
  <section id='SpecialMenu' className='bg-black text-white'>
    <div>
      <SubHeading 
      title='Menu That Fits Your Palatte'
      subHeading={`Today's Special`}
      info=''
      type=''
      />
    </div>

    <div className='flex flex-col items-center gap-10 mb-6 lap:flex-row lap:relative lap:justify-between lap:items-start  lap:gap-0 '>

      <div id='windAndBeer' className='flex flex-col items-center  lap:w-2/5  lap:z-10 '>
        <h3 className='text-2xl font-bold mb-4'>{`Wine & beer`}</h3>
        <ul className='flex flex-col gap-4 w-full '>
          {data.wines.map((wine,index)=>{
            return <MenuItem 
            key={index}
            title={wine.title}
            tags={wine.tags}
            price={wine.price}
            />
          })}
        </ul>
      </div>

      <img src={images.menu} alt="menuImage" className='w-3/4 lap:absolute lap:w-1/4 lap:scale-110 lap:z-0 lap:right-1/2 lap:top-0 lap:translate-x-1/2' />

      <div id='cocktails' className='flex flex-col items-center lap:w-2/5 lap:z-10 '>
        <h3 className='text-2xl font-bold mb-4'>{`Cocktails`}</h3>
        <ul className='flex flex-col gap-4'>
          {data.cocktails.map((cocktail,index)=>{
            return <MenuItem 
              key={index}
              title={cocktail.title}
              tags={cocktail.tags}
              price={cocktail.price}
            />
          })}
        </ul>
      </div>
    </div>
    <button className="primary-btn mx-auto block">View More</button>
  </section>
);

export default SpecialMenu;
