const CreationGroup = ({ title, image, onPress }) => {
    return(
        <div className="py-2 w-1/2 md:w-1/3 max-w-80 cursor-pointer" 
            onClick={onPress}>
            <img src={image} />
        </div>
    )
}

export default CreationGroup;