import React,{useRef} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';



export default function Navbar() {

  let navLinkRef = useRef();

  let toggleNavLink = ()=>{
    navLinkRef.current.classList.toggle('hidden');
    navLinkRef.current.classList.toggle('displayNavLink');
  }

  return (
    <nav className='flex items-center justify-between px-3 py-2 text-sm text-white bg-black border-b-2 border-slate-500'>
    <img src={images.gericht} alt="" className='h-9'/>
    <ul ref={navLinkRef} 
    className='fixed top-0 bottom-0 left-0 right-0 flex-col items-center justify-center hidden gap-4 py-4 text-2xl bg-black bg-opacity-90
    lap:flex lap:flex-row lap:static lap:text-sm lap:py-0'>
      <li><a href="#home">Home</a></li>
      <li><a href="#pages">Pages</a></li>
      <li><a href="#cantact">Contact Us</a></li>
      <li><a href="#blog">Blog</a></li>
      <li><a href="#landing">Landing</a></li>
      <MdOutlineRestaurantMenu fontSize={30} className='absolute top-3 text-yellow-500 opacity-70 right-3 hover:opacity-100 lap:hidden' onClick={toggleNavLink}/>
    </ul>
    <div className='hidden tab:flex gap-4'>
      <a href="#login" className=''>Login / Register</a>
      <a href="#bookTable">Book Table</a>
    </div>
    <GiHamburgerMenu fontSize={30} className='lap:hidden' onClick={toggleNavLink} />
  </nav>
  );
}
