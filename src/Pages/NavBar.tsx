import '../Styles/NavBar.css'
import logo from '../assets/logo 2.png';
import menu from '../assets/menu.png';


function NavBar() {

    return (
        <div className='navbar'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="links">
                <a href="#" onClick={() => {alert("This feature is not available.")}}>Our Flavours</a>
                <a href="#" onClick={() => {alert("This feature is not available.")}}>News</a>
                <a href="#" onClick={() => {alert("This feature is not available.")}}>About us</a>
            </div>
            <div className="mobileNav">
                <img src={menu} alt="" />
            </div>


        </div>
    )
}

export default NavBar