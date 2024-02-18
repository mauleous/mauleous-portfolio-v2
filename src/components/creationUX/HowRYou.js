import imgPaperBracelet from "../../assets/ux/howryou/paper_bracelet.jpg"
import imgScreen1 from "../../assets/ux/howryou/screen 1.jpg"
import imgHowRYou from "../../assets/ux/howryou/HowRYou.jpg"

const HowRYou = () => {
    return(
        <div className="max-w-3xl h-full text-left py-8 px-8 md:px-12">
            <table className="">
                <tbody>
                    <tr>
                        <td><h3>Work type</h3></td>
                        <td className="px-2">:</td>
                        <td>Student work - Product UX Design</td>
                    </tr>
                    <tr>
                        <td><h3>Location</h3></td>
                        <td className="px-2">:</td>
                        <td>University of Tampere</td>
                    </tr>
                    <tr>
                        <td><h3>Year</h3></td>
                        <td className="px-2">:</td>
                        <td>2014</td>
                    </tr>
                </tbody>
                
            </table>
            <div className="w-full h-0.5 bg-black rounded-full my-8"></div>
            <h2>Background</h2>
            <p>
                Sometimes, current social medias feel too complicated and could give ambiguity to what someone want to share. Arganka, Heikki, and I explored on how to simplify the way we share our feelings.
            </p>
            <h2>Idea</h2>
            <p>
                We came up with a concept called HowRYou bracelet. The concept consist of a wearable device that allow people to share their feeling in a very basic way; happy or not happy. The other part of the concept is a software where user can see how other persons are doing. With aimed to make people share their feelings more often to the persons the love by simplify the way to tell their feelings.
            </p>
            <img className="mb-6" src={imgHowRYou}/>
            <h2>Work</h2>
            <p>
                In this project, I worked on the ideation phase together with my team mates. I then continued with the design of the bracelet and the UI of the software.
            </p>
            <img className="mb-6" src={imgScreen1}/>
            <p>
                I also prepared paper-based prototype of the bracelet to make the idea to be more tangible. 
            </p>
            <img className="mb-6" src={imgPaperBracelet}/>            
            <h2>Result</h2>
            <p>
                At the end, we made a video to showcase how the HowRYou bracelet would be used.
            </p>            
            <iframe className="w-full aspect-video mb-6"  src="https://www.youtube.com/embed/pvs3dkBmL2c?si=RsHFYRvkmm7Nhrjk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p className="whitespace-pre"> </p>
        </div>    
    )
}

export default HowRYou;