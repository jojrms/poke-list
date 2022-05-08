/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react';
import ArticlePokemon from './CSS/styled-components'

const Home = () => {

    const [search, setSearch] = useState([])
    const [pokemons, setPokemon] = useState([])
      
    // exibição de todos os pokemons com limite de 50 por páginas
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=50&offset=20`) // faço a busca direto na API
        .then((res) => res.json()) // transformo os arquivos em um json para ter acesso a eles
        .then((data) => {
            setPokemon(data.results); // e novamente pegos esses dados e os envio para o meu hook de estado.
            console.log(pokemons);
        });
    }, []);

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
                    {pokemons.map((pokemon) => 
                    <article key={pokemon.id}>
                        <img key={pokemon.id} src={`https://pokeapi.co/api/v2/pokemon/${pokemon.name}/`}/>
                        <label>{pokemon.name}</label>
                    </article>)}
                </aside>
            </section>
        </section>
    )
}

export default Home;