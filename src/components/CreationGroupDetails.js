import React from "react";
//import axios from "axios";
import { MdClose, MdChevronLeft, MdChevronRight } from "react-icons/md";

const CreationGroupDetails = ({dataToLoad, onClose}) => {
    const [creationDetails, setCreationDetails] = React.useState([]);
    const [selectedDetail, setSelectedDetail] = React.useState({});
    const [image, setImage] = React.useState(null);
    const [importedComponent, setImportedComponent] = React.useState(null);

    /* Initial data load */
    React.useEffect(() => {
        /*if(dataToLoad) {
            axios
            .get(dataToLoad)
            .then((result) => {
                setCreationDetails(result.data);
                setSelectedDetail(result.data[0]);
            })
            .catch(err => console.log(err));
        } */
        const loadJson = async () => {
            try {
                switch (dataToLoad) {            
                    case "3d":
                        const data3d = await import('../data/creation-3d.json');
                        console.log(data3d);
                        setCreationDetails(data3d.default);
                        setSelectedDetail(data3d.default[0]);
                        break;
                    case "2d":
                        const data2d = await import('../data/creation-2d.json');
                        setCreationDetails(data2d.default);
                        setSelectedDetail(data2d.default[0]);
                        break;
                    default:
                        const dataUX = await import('../data/creation-ux.json');
                        setCreationDetails(dataUX.default);
                        setSelectedDetail(dataUX.default[0]);
                        break;
                }
            }
            catch (err) {
                console.log(err);
            }
        };

        loadJson();
            
    }, []);

    /* load image when selected detail is changed */
    React.useEffect(() => {        
        const loadImage = async() => {
            try {                    
                const response = await import(`../assets/2d/${selectedDetail.data}`);
                setImage(response.default);
            }
            catch (err) {
                console.log(err);
            }
        }

        if (dataToLoad == '2d') {            
            loadImage();
        }

    }, [selectedDetail]);

    /* load UX data when selected detail is changed */
    React.useEffect(() => {        
        const loadCreationUXComponent = async() => {
            try {                    
                const response = await import(`./creationUX/${selectedDetail.data}`);
                const UXComponent = response.default;
                setImportedComponent(<UXComponent />);
            }
            catch (err) {
                console.log(err);
            }
        }

        if (dataToLoad == 'ux') {            
            loadCreationUXComponent();
        }

    }, [selectedDetail]);

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

    const leftNavButton = () => {
        return (
            
                <div className="absolute left-0 top-0 h-full flex items-center z-20">
                    <div className="flex items-center px-2 h-1/2 cursor-pointer hover:backdrop-blur-sm hover:bg-white/30 rounded-r-md"
                        onClick={previousItem}>
                        <MdChevronLeft size={60}/>
                    </div>                        
                </div>
                
            
        )
    }

    const rightNavButton = () => {
        return (
            
                <div className="absolute right-0 top-0 h-full flex items-center z-20">
                    <div className="flex items-center px-2 h-1/2 cursor-pointer hover:backdrop-blur-sm hover:bg-white/30 rounded-l-md"
                        onClick={nextItem}>
                        <MdChevronRight size={60}/>
                    </div>                        
                </div>  
           
            
        )
    }

    const render3d = () => {
        return (
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
                        src={selectedDetail.data}> 
                </iframe>
                {leftNavButton()}
                {rightNavButton()}
            </div>
        )
    }

    const render2d = () => {
        return (         
            <div className="h-[calc(100%-160px)] relative border-solid border-black rounded-md border-4">
                <img className="h-full object-cover" src={image} />                        
                {leftNavButton()}
                {rightNavButton()}
            </div>           
        )
    }

    const renderUX = () => {
        return (
            <div className="h-[calc(100%-160px)] w-full relative border-solid border-black rounded-md border-4 ">
                <div className="h-full w-full flex justify-center overflow-y-auto">
                    {importedComponent}
                </div>         
                {leftNavButton()}
                {rightNavButton()}
            </div>  
        )
    }

    const renderCreation = () => {
        switch(dataToLoad) {
            case "3d":
                return render3d();                
            case "2d":
                return render2d();
            default:
                return renderUX();
        }        
    }

    const selectorClass = (id) => {
        if (id == selectedDetail.id) {
            return "w-10 h-10 border-solid border-black rounded-md border-4 cursor-pointer bg-black";
        } 
        else {
            return "w-10 h-10 border-solid border-black rounded-md border-4 cursor-pointer";
        }
    }



    return (
        <div className="fixed flex flex-col w-full h-full top-0 left-0 right-0 bg-white z-10">
            <div className="flex justify-between px-10 py-5 shrink-0 basis-auto">
                <div className="grow text-left md:text-center pl-0 md:pl-6">
                    <h1>{selectedDetail.title}</h1>
                </div>
                
                <MdClose size={30} onClick={onClose} className="shrink-0 cursor-pointer"/>                 
            </div>
            <div className="flex flex-col w-full h-full grow basis-auto px-10 pb-5 items-center box-border">
                    
                {renderCreation()}
                
                <div className="flex w-full shrink-0 basis-auto justify-start md:justify-center px-5 py-5 gap-4 overflow-x-auto">
                    {creationDetails.map((creationDetail) => 
                        <div key={creationDetail.id}
                            onClick={() => setSelectedDetail(creationDetail)}>
                            <div className={selectorClass(creationDetail.id)}>
                            </div>
                        </div>
                        
                    )}
                </div>
            </div>
        </div>
    )
};

export default CreationGroupDetails;