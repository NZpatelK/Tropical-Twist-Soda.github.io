import '../Styles/NavBar.css'
import logo from '../assets/logo 2.png';


function NavBar() {

    return (
        <div className='navbar'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="links">
                <a href="#">Our Favlour</a>
                <a href="#">News</a>
                <a href="#">About us</a>
            </div>


        </div>
    )
}

export default NavBar