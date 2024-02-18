import profilePicture from "../assets/20221123 - Achmad - profile picture - small - 1.jpg"

const AboutMe = () => {
    return(
        <div id="about" className="py-32 min-h-svh">
            <h1>About me</h1>
            <div className="flex py-16 flex-col md:flex-row items-center">
                <div className="grow basis-0 px-10 py-10 flex justify-end items-center">
                    <div className="flex flex-col items-center">
                        <img className="w-60 rounded-full" 
                            src={profilePicture}/>
                        <div className="text-center pt-6">
                            <div>Achmad Maulana Malikul Hakim</div>
                            <div>achmad.maulana.m.h[at]gmail.com</div>
                            <div className="whitespace-pre flex justify-center w-full gap-2">
                                <a className="underline" href="https://www.linkedin.com/in/achmadmaulanamh/">
                                    LinkedIn
                                </a>
                                <span>|</span>
                                <a className="underline" href="https://www.instagram.com/mauleous/">
                                    Instagram
                                </a>
                            </div>
                        </div> 
                    </div>
                     
                </div>
                <div className="grow-0 shrink-0 basis-auto w-3/4 h-1 md:w-1 md:h-96 rounded-full bg-black"></div>
                <div className="grow basis-0 px-10 py-10 text-center md:text-left">
                    <div className="max-w-xs">
                        <p>
                            I am a UX/UI Developer who loves both 
                            solving design challenges and crafting
                            designs into reality. 
                        </p>
                        <p>
                            Equipped with UX 
                            design and front-end programming skills,
                            acquired through formal education and work 
                            experience, I am up for challenges that span 
                            from designing and prototyping to 
                            developing appropriate solutions.</p>
                        <p>
                            Let's get in touch and discuss how we can work together!
                        </p>
                    </div>
                    
                </div>
            </div>
                      
        </div>
        
    )
}

export default AboutMe;