import styled from "styled-components";

const ArticlePokemon = ({id, image, name, habilities, type }) => {

    return (
        <article>
            <div className={"number " + type}>#{id}</div>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <div className="divHabilities ">{habilities}</div>
        </article>
    )
}

export default ArticlePokemon;