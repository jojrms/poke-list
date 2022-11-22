import './Viewer.scss';

export default function Viewer({id, name, typePokemon, photo_url}){

    return(
        <span className='spanPokemonViewer'>
            <span className='spanId'>{id}</span>
            <img src={photo_url}/>
            <h1>{name}</h1>

            <div className='divTypes'>
                {typePokemon.map( (type) => 
                    <span className={type.type.name}>{type.type.name}</span>
                )}    
            </div>
            

        </span>
    )
}