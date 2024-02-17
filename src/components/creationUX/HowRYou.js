import imgPaperBracelet from "../../assets/ux/howryou/paper_bracelet.jpg"
import imgScreen1 from "../../assets/ux/howryou/screen 1.jpg"
import imgHowRYou from "../../assets/ux/howryou/HowRYou.jpg"

const HowRYou = () => {
    return(
        <div className="max-w-3xl h-full text-left py-4 px-12">
            <h2>Background</h2>
            <p>
                Sometimes, current social medias feel too complicated and could give ambiguity to what someone want to share. Arganka, Heikki, and I explored on how to simplify the way we share our feelings.
            </p>
            <h2>Design</h2>
            <p>
                We came up with a concept called HowRYou bracelet. The concept consist of a wearable device that allow people to share their feeling in a very basic way, happy or not happy. The other part of the concept is a software where user can see how other persons are doing. With aimed to make people share their feelings more often to the persons the love by simplify the way to tell their feelings.
            </p>
            <img src={imgPaperBracelet}/>
            <p>
                In this project, I worked on the ideation phase together with my team mates. I then continued with the design of the bracelet and the UI of the software.
            </p>
            <img src={imgHowRYou}/>
            <img src={imgScreen1}/>
        </div>    
    )
}

export default HowRYou;