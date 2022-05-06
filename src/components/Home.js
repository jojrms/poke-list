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
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"/>
                    <input type='search' onChange={onChange} placeholder='Busque o Pokemon'/>
                </div>
            </header>

            <section id='sectionOne'>
                <aside>
                    <img className='imgCharizard' src='https://vignette.wikia.nocookie.net/vsbattles/images/3/35/Charizard_SSBu.png/revision/latest?cb=20180721110519'/>
                    <img className='imgPokeBall' src='https://pngimg.com/uploads/pokeball/pokeball_PNG21.png'></img>
                </aside>
                <aside>
                    <h1>Baixe. Busque.</h1>
                    <h1>Aventure-se</h1>

                    <div>
                        <button/>
                        <button/>
                    </div>
                </aside>
            </section>
        </section>
    )
}

export default Home;