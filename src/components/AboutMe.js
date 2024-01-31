import profilePicture from "../assets/20221123 - Achmad - profile picture - small - 1.jpg"

const AboutMe = () => {
    return(
        <div id="about" className="py-32">
            <h1>About me</h1>
            <div className="flex py-16">
                <div className="grow basis-0 px-10 flex justify-end items-center">
                    <img className="w-60 rounded-full" 
                        src={profilePicture}/>
                </div>
                <div className="grow-0 shrink-0 basis-auto w-1 h-120 rounded-full bg-black"></div>
                <div className="grow basis-0 px-10 text-left">
                    <div className="max-w-xs">
                        <p>I am a UX/UI Developer who loves both 
                            solving design challenges and crafting
                            designs into reality. Equipped with UX 
                            design and front-end programming skills,
                            acquired through formal education and work 
                            experience, I am up for challenges that span 
                            from designing and prototyping to 
                            developing appropriate solutions.</p>
                        <br/>
                        <p>Let's get in touch and see how we can work together!</p>
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}

export default AboutMe;