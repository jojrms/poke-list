import { useEffect, useState } from 'react';
import Viewer from '../Viewer/Viewer';

import './Initial.scss';

export default function Initial(){

    const [allPokemons, setAllPokemons] = useState([]) //Armazena todos os pokemons
    const [limit, setLimit] = useState('0')

    const getAllPokemons = async () => {
        setLimit('50')

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`) //Faz uma requisição para a url
        const data = await res.json()
    
        function createPokemonObject(results)  { //Cria uma função que faz um map nas informações dos pokemons
          results.forEach( async pokemon => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            const data =  await res.json()

            console.log(data);

            setAllPokemons( currentList => [...currentList, data])
            })
        }

        createPokemonObject(data.results)
      }
    
     useEffect(() => {
      getAllPokemons()
     }, [])

    return(
        <aside>

            <section className='sectionListPokemons'>
                {allPokemons.map( (pokemon) => 
                        <Viewer
                            id={pokemon.id}
                            name={pokemon.name}
                            generation={pokemon.name}
                            photo_url={pokemon.sprites.front_default}                        
                        />
                )}
            </section>

            <span className='spanExbDetailsPokemon'></span>
            
        </aside>
    )
}