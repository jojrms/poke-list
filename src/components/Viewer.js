/* eslint-disable jsx-a11y/alt-text */
import React, {
    useEffect,
    useState,
  } from 'react';
  import { useNavigate, useParams } from 'react-router-dom';
  
  const PokemonView = () => {

    const navigate = useNavigate();
    const initialRoute = () => {
        navigate(`/`);
    }
    const routePreviousPokemon = () => {
      navigate(`/pokemons/${(id - 1)}`);
    }
    const routeNextPokemon = () => {
      navigate(`/pokemons/${parseInt(id) + 1}`);
    }

    const [pokemon, setPokemon] = useState(null);
    const { id } = useParams();
  
    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((r) => r.json())
        .then((resultPokemon) => {
          setPokemon(resultPokemon);
        });
    }, [id]);
  
    if (!pokemon) {
      return null;
    }
  
    return (
      <div className="backgroundTotal">
        <header>
          <img onClick={initialRoute} className='imgIcone' src='https://logodownload.org/wp-content/uploads/2016/08/Pokemon-Go-logo.png'/>
        </header>

        <button className='button' id='previousButton' onClick={routePreviousPokemon}>
          <img style={{transform: 'scaleX(-1)'}} src="https://img.icons8.com/windows/32/000000/arrow.png"/>
        </button>

        <article>
          <span className='spanExibition'>
            <span className='spanId'>#00{pokemon.id}</span>
            <img id='imagePokemon' src={pokemon.sprites.other.dream_world.front_default}/> 
            <div>{pokemon.types.map( typesPokemon => {
              return(
                <span className={typesPokemon.type.name}>{typesPokemon.type.name}</span>
              )
            })}</div>

            <div className='divVersions' style={{display: 'flex'}}>
              <img src={pokemon.sprites.other.dream_world.front_default}/>
              <img src={pokemon.sprites.other.home.front_shiny}/>
            </div>

          </span>
          
          <div className='divInformations'>
            <h1>{pokemon.name}</h1>
            <div style={{display: 'flex'}}>
              <p style={{fontWeight: 'bold'}}>Habilidades: </p>
              <ul>
                {pokemon.abilities.map((item) => (
                  <li>{item.ability.name}</li>
                ))}
              </ul>    
            </div>
            <div>
              <p style={{fontWeight: 'bold', marginTop: '1vw'}}>Informações: </p>
              <ul className='ulInfo'>
                <li>
                  <p>HP:</p> 
                  <span className="spanBarer"><span style={{width: `${pokemon.stats[0].base_stat}%`}}/></span>
                  <p>{pokemon.stats[0].base_stat}</p>
                </li>
                <li>
                  <p>Attack:</p> 
                  <span className="spanBarer"><span style={{width: `${pokemon.stats[1].base_stat}%`}}/></span>
                  <p>{pokemon.stats[1].base_stat}</p>
                </li> 
                <li>
                  <p>Defense:</p> 
                  <span className="spanBarer"><span style={{width: `${pokemon.stats[2].base_stat}%`}}/></span>
                  <p>{pokemon.stats[2].base_stat}</p>
                </li> 
                <li>
                  <p>Special-Attack:</p> 
                  <span className="spanBarer"><span style={{width: `${pokemon.stats[3].base_stat}%`}}/></span>
                  <p>{pokemon.stats[3].base_stat}</p>
                </li> 
                <li>
                  <p>Special-Defense:</p> 
                  <span className="spanBarer"><span style={{width: `${pokemon.stats[4].base_stat}%`}}/></span>
                  <p>{pokemon.stats[4].base_stat}</p>
                </li> 
                <li>
                  <p>Speed:</p> 
                  <span className="spanBarer"><span style={{width: `${pokemon.stats[5].base_stat}%`}}/></span>
                  <p>{pokemon.stats[5].base_stat}</p>
                </li>    
              </ul>
            </div>
          </div>

          
          
        </article>

        <button className='button' id='nextButton' onClick={routeNextPokemon}>
          <img src="https://img.icons8.com/windows/32/000000/arrow.png"/>
        </button>
        
      </div>
    );
  };
  
  export default PokemonView;
  