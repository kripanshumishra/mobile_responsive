import React from 'react';
import './Header.css';
import {images} from '../../constants';
import SubHeading from '../../components/SubHeading/SubHeading';


const Header = () => (
  <header id='home' className='bg-black text-white lap:flex lap:px-5 lap:items-center lap:justify-around'>
     <div className='lap:w-1/2'>
     <SubHeading 
      title='chase the new flavour'
      subHeading='the key to fine dining' 
      btnText='Explore Menu' 
      info='Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus' 
      type='left'
      />
      <button className='primary-btn'>Explore Menu</button>
     </div>
      <img src={images.welcome} alt="header img" className='w-11/12 mx-auto my-5 tab:w-3/4 lap:w-2/5 aspect-square lap:m-0' />
  </header>
);

export default Header;
