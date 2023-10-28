import '../Styles/Home.css'
import NavBar from './NavBar';
import { SodaData } from '../Data/SodaData';
import { useState } from 'react';
import brand from '../assets/brand.png'
import left from '../assets/back-button.png'
import right from '../assets/right.png'

function Home() {

  const [index, setIndex] = useState(0);
  const sodaData = SodaData;

  const handleScrollOnWheel = (e: any) => {
    if (e.deltaY < 0) {
      handleSwitch("left");
    } else {
      handleSwitch("right");
    }
  }

  const handleSwitch = (switchMode: string) => {

    if (switchMode === 'right') {
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
    <div className='homePage' style={{ '--bgColour': sodaData[index].bgColour } as never} onWheel={handleScrollOnWheel}>
      <NavBar />

      {/* <div className='switchBtn'>
        <div className='leftBtn' onClick={() => handleSwitch("left")}> <img src={left} alt="" /> </div>
        <div className='rightBtn' onClick={() => handleSwitch("right")}> <img src={right} alt="" /></div>
      </div> */}


      {sodaData.map((soda) => {
        return (

          <div className='sodaProducts'>
            <div className={"content " + soda.textTransitionStatus}>
              {/* <div className={"content "}> */}
              <img src={brand} alt="" />
              <h1>{soda.title}</h1>
              <h3>${soda.price} ea</h3>
              <button>Add To Cart</button>
              <p>{soda.breif}</p>
            </div>


            <div className='bgLogo'>
              <div className={"sodaProd " + soda.imgTransitionStatus} style={{ '--sodaBgImg': `url(${soda.bgImg}) no-repeat center center/cover` } as never}>
                <img src={soda.img} alt="" />
              </div>
            </div>
          </div>
        )
      })}


    </div >
  )
}

export default Home