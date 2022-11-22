import { useNavigate} from 'react-router-dom';

import './Viewer.scss';

export default function Viewer({id, name, typePokemon, photo_url}){

    const navigate = useNavigate();

    const routeNavigate = () => {
        navigate(`/pokemons/${id}`);
      }

    return(
        <span className='spanPokemonViewer' onClick={routeNavigate}>
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