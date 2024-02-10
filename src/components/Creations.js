import React from "react";
import CreationGroup from './CreationGroup';
import CreationGroupDetails from './CreationGroupDetails';
import Creation3D from '../assets/020_3D.svg';
import Creation2D from '../assets/020_2D.svg';
import CreationUX from '../assets/020_UX.svg';

const Creations = () => {
    const [creationGroup, setCreationGroup] = React.useState("");

    const resetCreationGroup = () => {
        setCreationGroup("");
    }

    return(
        <div id="creations" className="py-32">
            <h1>Creations</h1>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full px-5 py-10 md:py-32">
                <CreationGroup title="3D artworks" image={Creation3D} onPress={() => setCreationGroup("3d")} />
                <CreationGroup title="2D artworks" image={Creation2D} onPress={() => setCreationGroup("2d")}/>
                <CreationGroup title="UX designs" image={CreationUX} onPress={() => setCreationGroup("ux")}/>
            </div>
            {creationGroup}
            {(creationGroup !== "" ) && <CreationGroupDetails dataToLoad={creationGroup} onClose={resetCreationGroup} />}
                
            
        </div>
    )
}

export default Creations;