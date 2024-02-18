import LogoHorizontal from "../assets/019_AMMH_horizontal.svg";

const Footer = () => {
    return(
        <div className="py-8 relative">            
            <div className="w-full absolute flex justify-center bottom-0 opacity-10">
                <img src={LogoHorizontal} />
            </div>
            <p>© 2024 AMMH | Made with React & Tailwind CSS.</p>
        </div>
    );
}

export default Footer;