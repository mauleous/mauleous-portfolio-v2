import React from "react";
import HeroImage from '../assets/389.svg';

const Hero = () => {
    return (
        <section id="home" className="px-5 py-32 pt-44 h-svh md:max-h-[900px] w-full flex items-center justify-center flex-col md:flex-row">
            <div className="text-left px-8">
                <div>Hi there,</div>
                <h1>I'm Achmad</h1>
                <div>a UX Designer, UI Developer</div>
            </div>
            <div className="px-10 py-10">
                <img className="max-w-60 md:max-w-80" src={HeroImage} />
            </div>
        </section>
    );
}

export default Hero;