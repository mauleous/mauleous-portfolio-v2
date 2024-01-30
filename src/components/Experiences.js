import React from "react";
import axios from "axios";
import { MdOutlineWorkOutline, MdOutlineSchool } from "react-icons/md";

const Experiences = () => {

    const [experiences, setExperiences] = React.useState([]);

    React.useEffect(() => {
        axios
        .get("./data/experiences.json")
        .then((result) => setExperiences(result.data))
        .catch(err => console.log(err))
    }, []);
    
    function containerClass(experienceType) {
        return experienceType ==="work" ? "py-5 flex w-full" : "py-5 flex flex-row-reverse w-full";
    };

    function experienceDetailClass(experienceType) {
        let classes = "px-3 flex flex-col grow basis-0 ";
        if(experienceType === "work")
            classes = classes + "items-start text-left";
        else
            classes = classes + "items-end text-right";

        return classes;
    }

    const exp = experiences.map((experience, i, experiences) => 
        <div className={containerClass(experience.type)} key={experience.id}>
            <div className="px-3 grow basis-0"></div>
            <div className="grow-0 shrink-0 basis-auto flex flex-col items-center">
                {experience.type === "work" ? (
                    <MdOutlineWorkOutline size={30} className="shrink-0" /> 
                ) : (
                    <MdOutlineSchool size={30} className="shrink-0"/> 
                )}
                <div className={i + 1 === experiences.length ? "" : "bg-black w-1 h-full rounded-full mt-1 mb-[-30px]"} ></div>
            </div>
            <div className={experienceDetailClass(experience.type)}>
                <div>{experience.title}</div>
                <div>{experience.location}</div>
                <div>{experience.period}</div>
            </div>
            
        </div>
    );

    return(
        <div> 
            <h1>Experiences</h1>
            <div className="flex flex-col py-16">{exp}</div>
        </div>
    );
}

export default Experiences;