/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import ArticlePokemon from './CSS/styled-components'

const Home = () => {

    const [search, setSearch] = useState([])

    const onChange = (element) => {
        console.log("pokemon: ", element.target.value)
        setSearch(element.target.value) //Insere no search o valor do input de pesquisa
    }

    return(
        <section id="pokedex">
            <header>
                <span className='spanLogo'/>

                <div>
                    <input type='search' onChange={onChange} placeholder='Busque Aqui'/>
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"/>
                </div>
            </header>
        </section>
    )
}

export default Home;