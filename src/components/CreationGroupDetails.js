import React from "react";
import axios from "axios";
import { MdClose, MdChevronLeft, MdChevronRight } from "react-icons/md";

const CreationGroupDetails = ({dataToLoad, onClose}) => {
    const [creationDetails, setCreationDetails] = React.useState([]);
    const [selectedDetail, setSelectedDetail] = React.useState({});

    React.useEffect(() => {
        if(dataToLoad) {
            axios
            .get(dataToLoad)
            .then((result) => {
                setCreationDetails(result.data);
                setSelectedDetail(result.data[0]);
            })
            .catch(err => console.log(err));
        }        
        
    }, []);

    function nextItem() {
        const nextId = parseInt(selectedDetail.id) + 1;
        const total = creationDetails.length;

        if (nextId <= total) {
            setSelectedDetail(creationDetails[nextId - 1]);
        }
        else {
            setSelectedDetail(creationDetails[0]);
        }
    }

    function previousItem() {
        const prevId = parseInt(selectedDetail.id) - 1;
        const total = creationDetails.length;

        if (prevId <= 0) {
            setSelectedDetail(creationDetails[total - 1]);
        }
        else {
            setSelectedDetail(creationDetails[prevId - 1]);
        }
    }


    return (
        <div className="fixed flex flex-col w-full h-full top-0 left-0 right-0 bg-white z-10">
            <div className="flex justify-between px-10 py-5 shrink-0 basis-auto">
                <h1>{selectedDetail.title}</h1>
                <MdClose size={30} onClick={previousItem} />                 
            </div>
            <div className="flex flex-col w-full grow basis-auto px-10 py-5">
                <div className="w-full h-full relative border-solid border-black rounded-md border-4">
                    
                    
                    <iframe className="w-full h-full" 
                            title={selectedDetail.title} 
                            frameborder="0" 
                            allowfullscreen 
                            mozallowfullscreen="true" 
                            webkitallowfullscreen="true" 
                            allow="autoplay; fullscreen; xr-spatial-tracking" 
                            xr-spatial-tracking 
                            execution-while-out-of-viewport 
                            execution-while-not-rendered 
                            web-share 
                            src={selectedDetail.url}> 
                    </iframe>

                    <div className="absolute left-0 top-0 h-full flex items-center">
                        <div className="flex items-center px-2 h-1/2 cursor-pointer hover:backdrop-blur-sm hover:bg-white/30 rounded-r-md"
                            onClick={previousItem}>
                            <MdChevronLeft size={60}/>
                        </div>                        
                    </div>

                    <div className="absolute right-0 top-0 h-full flex items-center">
                        <div className="flex items-center px-2 h-1/2 cursor-pointer hover:backdrop-blur-sm hover:bg-white/30 rounded-l-md"
                            onClick={nextItem}>
                            <MdChevronRight size={60}/>
                        </div>                        
                    </div>
                    
                </div>                
                
                <div className="flex shrink-0 basis-auto px-5 py-5">
                    {creationDetails.map((creationDetail) => 
                        <div key={creationDetail.id}
                            onClick={() => setSelectedDetail(creationDetail)}>
                            <div>{creationDetail.title}</div>                            
                        </div>
                        
                    )}
                </div>
            </div>
        </div>
    )
};

export default CreationGroupDetails;