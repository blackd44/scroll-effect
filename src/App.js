import './App.css';
import { useEffect } from 'react';

import sky from './assets/118Z_2012.w017.n001.324A.p30.3245.png'
import backRocks from './assets/118Z_2012.w017.n001.324A.p30.3242.png'
import MiddleRocks from './assets/118Z_2012.w017.n001.324A.p30.3243.png'
import FrontRocks from './assets/118Z_2012.w017.n001.324A.p30.3244.png'

function App() {

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let scroll = window.scrollY
      let skyImage = document.querySelector('.sky')
      let backRocksImage = document.querySelector('.backRocks')
      let middleRocksImage = document.querySelector('.MiddleRocks')
      let FrontRocksImage = document.querySelector('.FrontRocks')
      let button = document.querySelector('button')
      let text = document.querySelector('.text')

      skyImage.style.left = scroll * .75 + 'px'
      skyImage.style.top = scroll * .5 + 'px'
      backRocksImage.style.top = scroll * .4 + 'px'
      middleRocksImage.style.top = scroll * .25 + 'px'
      FrontRocksImage.style.top = scroll * .1 + 'px'
      button.style.marginTop = scroll * .3 + 'px'
      text.style.marginRight = scroll * 3.5 + 'px'
      text.style.marginTop = scroll  + 'px'
    })
  }, [])
  return (
    <>
      <section className='top-section'>
        <div className='text'>I thing you are enjoying</div>
        <button>Join Now</button>
        <img alt='sky' src={sky} className='sky' />
        <img alt='backRocks' src={backRocks} className='backRocks' />
        <img alt='MiddleRocks' src={MiddleRocks} className='MiddleRocks' />
        <img alt='FrontRocks' src={FrontRocks} className='FrontRocks' />
        <div className='gradient'></div>
      </section>
      <section>
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
        this is scrolling effect with javascript, this is scrolling effect with javascript, this is scrolling effect with javascript, 
      </section>
    </>
  );
}

export default App;
