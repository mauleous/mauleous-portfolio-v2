import React, {useState} from "react";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import Logo from "../assets/019_AMMH_Grey.svg";

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle);

    return (
        <header className="header-nav">
            <div className="flex justify-between w-full max-w-7xl items-center">
                <a href="/">
                    <img
                        src={Logo}
                        className="h-20"
                    />
                </a>

                {/** Desktop Nav */}
                <nav className="hidden md:block">
                    <ul className="flex">
                        <li>
                            <a href="/#experiences">Experiences</a>
                        </li>
                        <li>
                            <a href="/#creations">Creations</a>
                        </li>
                        <li>
                            <a href="/#about">About me</a>
                        </li>
                    </ul>
                </nav>
            </div> 
            {/** Logo */}
            

            {/** Mobile Nav */}
            <nav className={!toggle ? "mobile-nav left-[200%]" : "mobile-nav left-0"}>
                <ul className="flex flex-col">
                    <li>
                        <a href="/#experiences">Experiences</a>
                    </li>
                    <li>
                        <a href="/#creations">Creations</a>
                    </li>
                    <li>
                        <a href="/#about">About me</a>
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