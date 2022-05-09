/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react';
import ArticlePokemon from './CSS/styled-components'

const Home = () => {

    const [search, setSearch] = useState([]) //Armazena o valor do input de busca
    const[allPokemons, setAllPokemons] = useState([]) //Armazena todos os pokemons
    const[dataPokemon, setDataPokemon] = useState([])
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/') //Armazena a url que busca todos os pokemons
    const[nextPage, setNextPage] = useState() //Armazena a url que segue a inicial
    const[previousPage, setPreviousPage] = useState() //Armazena a url que precede a inicial


    const getAllPokemons = async () => {
        const res = await fetch(url) //Faz uma requisição para a url
        const data = await res.json()
    
        // setUrl(data.next)
        setNextPage(data.next)
        setPreviousPage(data.previous)
    
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

    const onChange = (element) => {
        console.log("pokemon: ", element.target.value)
        setSearch(element.target.value) //Insere no search o valor do input de pesquisa
    }

    return(
        <section id="pokedex">
            <header>
                <img className='imgIcone' src='https://logodownload.org/wp-content/uploads/2016/08/Pokemon-Go-logo.png'/>
            
                <div>
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"/>
                    <input type='search' onChange={onChange} placeholder='Busque o Pokemon'/>
                </div>

            </header>

            <section className='sectionOne'>
                <aside>
                    <img className='charizard' src='https://th.bing.com/th/id/R.ad6a3f3cddf66be471b562d74e6e1e08?rik=rR%2fQCj4voRcUyw&pid=ImgRaw&r=0'/>
                    <img className='pokeball' src='https://pngimg.com/uploads/pokeball/pokeball_PNG21.png'/>
                </aside>
                <aside>

                    <img className='pokeball' src='https://pngimg.com/uploads/pokeball/pokeball_PNG21.png'/>
                    <img className='pokeball' src='https://pngimg.com/uploads/pokeball/pokeball_PNG21.png'/>
                    <h1>Baixe. Busque.</h1>
                    <h1>Aventure-se</h1>
                    <img className='pokeball' src='https://pngimg.com/uploads/pokeball/pokeball_PNG21.png'/>
                    <img className='pokeball' src='https://pngimg.com/uploads/pokeball/pokeball_PNG21.png'/>

                </aside>
            </section>

            <section className='sectionTwo'>
                <h1>Pokedex</h1>
                <aside className='asideExibitionPokemons'>
                    {allPokemons.map( (pokemon) => 
                       <ArticlePokemon
                       id={pokemon.id}
                       image={pokemon.sprites.front_default}
                       name={pokemon.name}
                       habilities={pokemon.abilities.map(ab => {
                           return(
                               <span className='spanAbilitie'>
                                {ab.ability.name}
                               </span>
                           )
                       })}
                       />
                    )}
                </aside>
            </section>
        </section>
    )
}

export default Home;