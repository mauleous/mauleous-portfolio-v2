import React from "react";
import axios from "axios";

const Experiences = () => {

    const [experiences, setExperiences] = React.useState([]);

    React.useEffect(() => {
        axios
        .get("./data/experiences.json")
        .then((result) => setExperiences(result.data))
        .catch(err => console.log(err))
    }, []);

    const exp = experiences.map(experience => 
        <div className="py-5" key={experience.id}>
            {experience.type}
            {experience.title}
            {experience.location}
            {experience.period}
        </div>
    );

    return(
        <div> 
            <div>Experiences</div>
            <div>{exp}</div>
        </div>
    );
}

export default Experiences;