import React,{useState,useRef,useEffect} from 'react';
import './Gallery.css';
import { data,images } from '../../constants';
import { SubHeading } from '../../components';

export default function Gallery() {

  const [currCard, setCurrCard] = useState(0);
  let scrollRef = useRef();
  let childCount = useRef();

  let swipeLeft = ()=>{
    let next = currCard-1===-1?scrollRef.current.childElementCount-1:currCard-1;
    setCurrCard(next);
  }

  let swipeRight = ()=>{
    let next = currCard+1>=scrollRef.current.childElementCount?0:currCard+1;
    setCurrCard(next);
  }

  useEffect(()=>{
    let cardList = Array.from(scrollRef.current.children);
    childCount.current = cardList.length;

    cardList.forEach((elem,index)=>{
      elem.style.transform = `translateX( -${currCard*100}% )`;
      elem.style.transition = 'all 0.5s ease-in-out';
    })
  },[currCard])

  return (
    <section id='Gallery' className='lap:flex lap:justify-around lap:flex-row-reverse lap:items-center'>
      <div className='lap:w-1/2'>
        <SubHeading
          title={'Instagram'}
          subHeading={'Photo Gallery'}
          info='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga iste eveniet dolorum ut quidem quia unde consequuntur. Beatae dolorum doloribus natus vero.'
          type={'right'}
        />
        <button className="primary-btn">View More</button>
      </div>

      <div className='relative z-0 my-7  lap:w-1/3 box-border lap:px-3 lap:py-2 lap:border-4 lap:border-slate-500 lap:rounded-md'>

        <div ref={scrollRef} className='flex w-3/4 h-80 mx-auto overflow-hidden z-0 tab:w-full tab:h-[80vh]'>
          {data.photoGallery.map((photo,index)=>{
            return (
              <img key={index} src={photo.imgUrl} alt="photo" className=' flex-none w-full object-cover object-center ' />
            )
          })}
        </div>

        <button onClick={swipeRight} className='block absolute right-0  z-10 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-80'><img src={images.rightArrow} alt="" className='w-10 tab:w-24 lap:w-10' /></button>

        <button onClick={swipeLeft} className='absolute left-0 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-80'><img src={images.leftArrow} alt="" className='w-10 tab:w-24 lap:w-10' /></button>

        <div className='absolute bg-white bg-opacity-30 w-3/4 left-1/2 -translate-x-1/2 bottom-0  flex justify-center gap-3 rounded-md'>
          {[...Array(childCount.current)].map((elem,index)=>{
            return <div key={index} className={`p-1 tab:p-3 lap:p-1 ${index===currCard?'bg-black':'bg-white'} rounded-full border-4 border-black`}></div>
          })}
        </div>

      </div>
    
  </section>
  );
}

