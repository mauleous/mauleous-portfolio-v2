import React, {useState} from "react";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import Logo from "../assets/019_AMMH_Grey.svg";
import { Link } from "react-scroll";

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle);

    return (
        <header className="header-nav">
            <div className="flex justify-between w-full max-w-7xl items-center">
                <a href="/#home">
                    <img
                        src={Logo}
                        className="h-20"
                    />
                </a>

                {/** Desktop Nav */}
                <nav className="hidden md:block">
                    <ul className="flex">
                        <li>
                            <Link to="home" activeClass="active" smooth spy duration={250}>Home</Link>
                        </li>
                        <li>
                            <Link to="experiences" activeClass="active" smooth spy duration={250}>Experiences</Link>
                        </li>
                        <li>
                            <Link to="creations" activeClass="active" smooth spy duration={250}>Creations</Link>
                        </li>
                        <li>
                            <Link to="about" activeClass="active" smooth spy duration={250}>About me</Link>
                        </li>
                    </ul>
                </nav>
            </div> 
            {/** Logo */}
            

            {/** Mobile Nav */}
            <nav className={!toggle ? "mobile-nav left-[200%]" : "mobile-nav left-0"}>
                <ul className="flex flex-col h-full justify-center gap-20">
                    <li>
                        <Link to="home" activeClass="active" smooth spy duration={250} onClick={handleToggle}>Home</Link>
                    </li>
                    <li>
                        <Link to="experiences" activeClass="active" smooth spy duration={250} onClick={handleToggle}>Experiences</Link>
                    </li>
                    <li>
                        <Link to="creations" activeClass="active" smooth spy duration={250} onClick={handleToggle}>Creations</Link>
                    </li>
                    <li>
                        <Link to="about" activeClass="active" smooth spy duration={250} onClick={handleToggle}>About me</Link>
                    </li>
                    
                </ul>
            </nav>

            {/** Toggle button */}
            <button onClick={handleToggle} className="block md:hidden z-10" >
                {toggle ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </button>

        </header>
    );
}

export default Header;