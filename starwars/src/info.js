import React from "react";
import styled from "styled-components"

const Card = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const CardStyle = styled.div`
    margin: 5%;
    background-color: black;
    color: white;
    width: 10%;
    border: 2px solid gold;
    border-radius: 10px;
`

const Info = ({ character }) => {


    return (
        <Card>
            <CardStyle>
                <h2>{character.name} </h2>
                <p>Gender: {character.gender} </p>
                <p>Birth Year: {character.birth_year}</p>
                <p>Height: {character.height} </p>
            </CardStyle>
        </Card>



    )


}

export default Info