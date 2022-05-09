import styled from "styled-components";

const ArticlePokemon = ({id, image, name, habilities }) => {
    return (
        <article>
            <div className="number">#{id}</div>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <div className="divHabilities">{habilities}</div>
        </article>
    )
}

export default ArticlePokemon;