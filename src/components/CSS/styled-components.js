/* eslint-disable jsx-a11y/alt-text */
import { useNavigate } from 'react-router-dom';

const ArticlePokemon = ({image, name, type, life, attack, defense, speed, abilities}) => {

    const navigate = useNavigate();
    const pokemonRoute = () => {
        navigate(`/pokemons/${name}`);
    }

    return (
        <article onClick={pokemonRoute}>
                <div className={"divName " + type}>{name}
                </div>
                <img src={image} alt={name} />
                <div className="divInfo">
                    <div>
                        <img src="https://opengameart.org/sites/default/files/styles/medium/public/heart%20pixel%20art%20254x254.png"/>
                        <span className="spanBarer"><span style={{width: `${life}%`}}/></span>
                        <p>{life}</p>
                    </div>
                    <div>
                        <img src="https://lh3.googleusercontent.com/oo4Vr4s2IlGr944UUw2h7DiZx_PsWdz4s3Z00WDRhzg5Ggl2I3faST0FervAIxNQRvyFuB6O7anuDx330Nvp=s400"/>
                        <span className="spanBarer"><span style={{width: `${life}%`}}/></span>
                        <p>{attack}</p>
                    </div>
                    <div>
                        <img src="https://th.bing.com/th/id/R.51cfb83c84475a12f4ba102ba24e08d1?rik=Fe8gHvoqmo5hEQ&riu=http%3a%2f%2fpixelartmaker.com%2fart%2f10568dc1b70f840.png&ehk=wKupCcWF3%2f%2fnTcKau5p5NWl2vg8bXiVeTik6%2bSAE%2feY%3d&risl=&pid=ImgRaw&r=0"/>
                        <span className="spanBarer"><span style={{width: `${defense}%`}}/></span>
                        <p>{defense}</p>
                    </div>
                    <div>
                        <img src="https://th.bing.com/th/id/R.5ceb1c9782e5063d84020de5c53eccae?rik=4kuXmpUyiMQQ4w&riu=http%3a%2f%2fwww.tezzamateriaiseletricos.com.br%2fwp-content%2fuploads%2f2014%2f04%2ficone-raio.png&ehk=ZB9ZYslsNYDEABEUPj9nEPQq%2fLTYd3ZtSgJPaE997pU%3d&risl=&pid=ImgRaw&r=0"/>
                        <span className="spanBarer"><span style={{width: `${speed}%`}}/></span>
                        <p>{speed}</p>
                    </div>
                </div>
        </article>
    )
}

export default ArticlePokemon;