import React from "react";
import styled from "styled-components"


// `
const CardStyle = styled.div`
    margin: 4%;
    background-color: black;
    color: white;
    width: 10%;
    border: 2px solid gold;
    border-radius: 10px;
`

const Info = ({ character }) => {


    return (
        
            <CardStyle>
                <h2>{character.name} </h2>
                <p>Gender: {character.gender} </p>
                <p>Birth Year: {character.birth_year}</p>
                <p>Height: {character.height} </p>
            </CardStyle>
        



    )


}

export default Info