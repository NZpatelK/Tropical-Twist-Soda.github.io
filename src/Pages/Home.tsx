import '../Styles/Home.css'
import NavBar from './NavBar';
import { SodaData } from '../Data/SodaData';
import { TouchEventHandler, WheelEventHandler, useEffect, useState } from 'react';
import brand from '../assets/brand.png'
import down from '../assets/down-arrow.png'
import swipe from '../assets/swipe.png'

function Home() {

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [startX, setStartX] = useState<number | null> (null);

  const sodaData = SodaData;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    // Add a resize event listener
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd: TouchEventHandler<HTMLDivElement> = (e) => {
    if (startX) {
      const deltaY = e.changedTouches[0].clientX - startX;

      if (deltaY > 0) {
        handleSwitch("left");
      } else {
        handleSwitch("right");
      }

      setStartX(null);
    }
  };

  const handleScrollOnWheel: WheelEventHandler<HTMLDivElement> = (e) => {
    if (e.deltaY < 0) {
      handleSwitch("left");
    } else {
      handleSwitch("right");
    }
  }

  const handleSwitch = (switchMode: string) => {

    if (switchMode === 'left') {
      sodaData[index].imgTransitionStatus = 'sodaImgExit';
      sodaData[index - 1].imgTransitionStatus = 'sodaImgEnter';
      SodaData[index].textTransitionStatus = 'sodaTextDownExit';
      SodaData[index - 1].textTransitionStatus = 'sodaTextEnter';
      setIndex(index - 1)
    } else {

      sodaData[index].imgTransitionStatus = 'sodaImgExit';
      sodaData[index + 1].imgTransitionStatus = 'sodaImgEnter';
      SodaData[index].textTransitionStatus = 'sodaTextUpExit';
      SodaData[index + 1].textTransitionStatus = 'sodaTextEnter';
      setIndex(index + 1)
    }

  }


  return (
    <div className='homePage' style={{ '--bgColour': sodaData[index].bgColour } as never} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onWheel={handleScrollOnWheel}>
      <NavBar />

      {sodaData.map((soda) => {
        return (

          <div className='sodaProductsDisplay'>
            <div className={"content " + soda.textTransitionStatus}>
              <img className='brandLogo' src={brand} alt="" />
              <h1 className='title'>{soda.title}</h1>
              <h3 className='price'>${soda.price} ea</h3>
              <button onClick={() => {alert("This store not exist and you not able to purchase the soda can")}}>Add To Cart</button>
              <p className='brief'>{soda.breif}</p>
            </div>


            <div className='imageContent'>
              <div className={"sodaProd " + soda.imgTransitionStatus} style={{ '--sodaBgImg': `url(${soda.bgImg}) no-repeat center center/cover` } as never}>
                <img src={soda.img} alt="" />
              </div>
            </div>
          </div>
        )
      })}

      {isMobile ?
        <div className={"swipeIcon " + (index !== 0 && "hidden")}>
          <h1>Swipe Left for more flavours</h1>
          <img src={swipe} alt="" />
        </div>


        : <div className={"scrolldownIcon " + (index !== 0 && "hidden")} >
          <h1>Scroll down</h1>
          <h1>for more flavours</h1>
          <img src={down} alt="" />
        </div>
      }


    </div >
  )
}

export default Home