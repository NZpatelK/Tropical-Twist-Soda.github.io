import mangoImg  from '../assets/MongoSodaCan.png';
import watermelonImg from '../assets/watermelonSodaCan.png';
import mangoBg from '../assets/mangoBG.png'
import watermelonBg from '../assets/ware.png'

export const SodaData = [
    {
        id:0,
        title: 'Mango Tangp Fizz',
        breif: 'Mango Tangp Fizz is a mango flavored soda that is made with real mango juice. It is a refreshing drink that is perfect for a hot summer day.',
        price: 1.99,
        bgColour: '#FFA500',
        img: mangoImg,
        bgImg: mangoBg, 
        imgTransitionStatus:'sodaImgEnter'
    },
    // {
    //     id:1,
    //     title: 'Watermelon Wave Soda',
    //     breif: 'Watermelon Wave Soda is a watermelon flavored soda that is made with real watermelon juice. It is a refreshing drink that is perfect for a hot summer day.',
    //     price: 1.99,
    //     bgColour: '#ff0000',
    //     img: watermelonImg,
    //     bgImg: watermelonBg,
    //     imgTransitionStatus:'sodaImgExit'
    // }
]