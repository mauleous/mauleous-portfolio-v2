const CreationGroup = ({ title, onPress }) => {
    return(
        <div className="py-2" onClick={onPress}>
            {title}
        </div>
    )
}

export default CreationGroup;