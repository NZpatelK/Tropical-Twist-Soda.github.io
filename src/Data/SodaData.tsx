import mangoImg  from '../assets/MongoSodaCan.png';
import watermelonImg from '../assets/watermeloncan.png';
import mangoBg from '../assets/mangoBG.png'
import watermelonBg from '../assets/ware.png'
import aproctimg from '../assets/apriocctcan.png'
import aproctbg from '../assets/apriocctBg.png'
import blueberryimg from '../assets/blueberrycan.png'
import blueberrybg from '../assets/blueberrybg.png'
import graphfriuitImg from '../assets/graphfruitcan.png'
import graphfruitbg from '../assets/graphfruitbg.png'
import pemoImg from '../assets/pomecan.png'
import pemoBg from '../assets/pomebg.png'

export const SodaData = [
    {
        id:0,
        title: 'Mango Tango Fizz',
        breif: 'Mango Tango Fizz is a mango flavored soda that is made with real mango juice. It is a refreshing drink that is perfect for a hot summer day.',
        price: 1.99,
        bgColour: '#FFA500',
        img: mangoImg,
        bgImg: mangoBg, 
        imgTransitionStatus:'sodaImgEnter',
        textTransitionStatus:'sodaTextEnter'
    },
    {
        id:1,
        title: 'Watermelon Wave Soda',
        breif: 'Watermelon Wave Soda is a watermelon flavored soda that is made with real watermelon juice. It is a refreshing drink that is perfect for a hot summer day.',
        price: 1.99,
        bgColour: '#ff0000',
        img: watermelonImg,
        bgImg: watermelonBg,
        imgTransitionStatus:'sodaImgExit',
        textTransitionStatus:'sodaTextDownExit'
    },
    {
        id:1,
        title: 'Apricot Euphoria Fizz',
        breif: 'Apricot Euphoria Fizz is a apricot flavored soda that is made with real apricot juice. It is a refreshing drink that is perfect for a hot summer day. ',
        price: 1.99,
        bgColour: '#ff0000',
        img: aproctimg,
        bgImg: aproctbg,
        imgTransitionStatus:'sodaImgExit',
        textTransitionStatus:'sodaTextDownExit'
    },
    {
        id:1,
        title: 'Blueberry Bubby burst',
        breif: 'Blueberry bubby burst is a blueberry flavored soda that is made with real blueberry juice. It is a refreshing drink that is perfect for a hot summer day.',
        price: 1.99,
        bgColour: '#ff0000',
        img: blueberryimg,
        bgImg: blueberrybg,
        imgTransitionStatus:'sodaImgExit',
        textTransitionStatus:'sodaTextDownExit'
    },
    {
        id:1,
        title: 'Grapefruit Zest Zing',
        breif: 'Graperfruit Zest Zing is a grapefruit flavored soda that is made with real grapefruit juice. It is a refreshing drink that is perfect for a hot summer day.',
        price: 1.99,
        bgColour: '#ff0000',
        img: graphfriuitImg,
        bgImg: graphfruitbg,
        imgTransitionStatus:'sodaImgExit',
        textTransitionStatus:'sodaTextDownExit'
    },
    {
        id:1,
        title: 'Pomegranate Paradise Punch',
        breif: 'Pomegranate Paradise Punch is a pomegranate flavored soda that is made with real pomegranate juice. It is a refreshing drink that is perfect for a hot summer day.',
        price: 1.99,
        bgColour: '#ff0000',
        img: pemoImg,
        bgImg: pemoBg,
        imgTransitionStatus:'sodaImgExit',
        textTransitionStatus:'sodaTextDownExit'
    },
]