import './Viewer.scss';

export default function Viewer({id, name, generation, photo_url}){

    return(
        <span className='spanPokemonViewer'>
            <span className='spanId'>{id}</span>
            <img src={photo_url}/>
            <h1>{name}</h1>
            <p>{generation}</p>
        </span>
    )
}