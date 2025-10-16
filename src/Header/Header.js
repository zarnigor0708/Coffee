import "./Header.css"
import logo from "../images/logo.jpg"
// container xato

const Header = () => {
    return (
        <div className="cotainer">
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="CoffeeHub Logo" />
                </div>

                <ul className="nav-links">
                    <li>
                        <a href="#home" className="active">Home</a>
                    </li>
                    <li >
                        <a href="#menu">Menu</a>
                    </li>
                    <li className="">
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Header