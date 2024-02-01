import CreationGroup from './CreationGroup'

const Creations = () => {
    return(
        <div id="creations" className="py-32">
            <h1>Creations</h1>
            <div>
                <CreationGroup hola="asdfasdfadfs"/>
                <CreationGroup/>
                <CreationGroup/>
            </div>
        </div>
    )
}

export default Creations;