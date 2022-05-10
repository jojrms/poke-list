/* eslint-disable jsx-a11y/alt-text */
import React, {
    useEffect,
    useState,
  } from 'react';
  import { useParams } from 'react-router-dom';
  
  const PokemonView = () => {
    const [pokemon, setPokemon] = useState(null);
    const { name } = useParams();
  
    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((r) => r.json())
        .then((resultPokemon) => {
          setPokemon(resultPokemon);
        });
    }, [name]);
  
    if (!pokemon) {
      return null;
    }
  
    return (
      <div className="backgroundTotal">
        <header>
          <img className='imgIcone' src='https://logodownload.org/wp-content/uploads/2016/08/Pokemon-Go-logo.png'/>
        </header>

        <article>
          <span>
            <img src={pokemon.sprites.front_default} alt={name} />  
          </span>
          
          <div>
            <h1>{pokemon.name}</h1>
            Abilities
            <ul className="PokemonView__abilities">
              {pokemon.abilities.map((item) => (
                <li>{item.ability.name}</li>
              ))}
            </ul>    
          </div>
          
        </article>
        
      </div>
    );
  };
  
  export default PokemonView;
  