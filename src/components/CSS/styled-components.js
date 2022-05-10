import styled from "styled-components";

const ArticlePokemon = ({image, name, type, life, attack, abilities}) => {

    return (
        <article>
                <div className={"divName " + type}>{name}
                    <div>
                        <div style={{display: 'flex'}}>
                            <img src="https://opengameart.org/sites/default/files/styles/medium/public/heart%20pixel%20art%20254x254.png"/>
                            {life}     
                        </div>
                        <div style={{display: 'flex'}}>
                            <img style={{filter: 'brightness(0)'}} src="https://lh3.googleusercontent.com/oo4Vr4s2IlGr944UUw2h7DiZx_PsWdz4s3Z00WDRhzg5Ggl2I3faST0FervAIxNQRvyFuB6O7anuDx330Nvp=s400"/>
                            {attack}     
                        </div>
                    </div>
                </div>
                <img src={image} alt={name} />
                <div className="divAbilities" style={{display: 'flex'}}>{abilities}</div>
        </article>
    )
}

export default ArticlePokemon;