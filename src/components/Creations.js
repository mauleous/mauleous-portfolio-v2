import React from "react";
import CreationGroup from './CreationGroup';
import CreationGroupDetails from './CreationGroupDetails';

const Creations = () => {
    const [creationGroup, setCreationGroup] = React.useState("");

    const resetCreationGroup = () => {
        setCreationGroup("");
    }

    return(
        <div id="creations" className="py-32">
            <h1>Creations</h1>
            
            <div>
                <CreationGroup title="3D artworks" onPress={() => setCreationGroup("./data/creation-3d.json")} />
                <CreationGroup title="2D artworks" onPress={() => setCreationGroup("fasdfsadfsda")}/>
                <CreationGroup title="UX designs" onPress={() => setCreationGroup("")}/>
            </div>
            {creationGroup}
            {(creationGroup !== "" ) && <CreationGroupDetails dataToLoad={creationGroup} onClose={resetCreationGroup} />}
                
            
        </div>
    )
}

export default Creations;