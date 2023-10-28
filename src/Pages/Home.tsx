import '../Styles/Home.css'
import NavBar from './NavBar';
import { SodaData } from '../Data/SodaData';
import { useState } from 'react';
import left from '../assets/back-button.png'
import right from '../assets/right.png'

function Home() {

  const [index, setIndex] = useState(0);
  const sodaData = SodaData;

  const handleSwitch = (switchMode: string) => {

    if (switchMode === 'right') {
      if (index === 0) {
        sodaData[index].imgTransitionStatus = 'sodaImgExit';
        sodaData[sodaData.length - 1].imgTransitionStatus = 'sodaImgEnter';
        setIndex(SodaData.length - 1);
      } else {
        setIndex(index - 1)
      }
    } else {
      if (index === SodaData.length - 1) {
        sodaData[index].imgTransitionStatus = 'sodaImgExit';
        sodaData[0].imgTransitionStatus = 'sodaImgEnter';
        setIndex(0)
      } else {
        setIndex(index + 1)
      }

    }

  }

  return (
    <div className='homePage' style={{ '--bgColour': sodaData[index].bgColour } as never}>
      <NavBar />

      {/* <div className='switchBtn'>
        <div className='leftBtn' onClick={() => handleSwitch("left")}> <img src={left} alt="" /> </div>
        <div className='rightBtn' onClick={() => handleSwitch("right")}> <img src={right} alt="" /></div>
      </div> */}


      {sodaData.map((soda) => {
        return (

          <div className='sodaProducts'>
            <div className="content">
              <h1>Mango Soda Drink</h1>
              <h3>$2.99</h3>
              <button>Add To Cart</button>
              <p>Mango soda is a vibrant, aromatic, and refreshingly fizzy carbonated beverage that captures the sweet and tangy essence of ripe mangoes. With its inviting orange-yellow color and a delightful aroma reminiscent of fresh mangoes, the taste of mango soda is a perfect harmony of natural sweetness and carbonated fizz, creating a thirst-quenching and tropical flavor profile. Served chilled with ice or garnished with a slice of mango, this versatile drink is a popular choice for a wide range of occasions, making it a go-to refreshment for outdoor gatherings and a delightful companion to spicy cuisines. Whether in bottled, canned, or fountain form, mango soda offers a delightful way to savor the delicious taste of mango while staying cool and refreshed.</p>
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