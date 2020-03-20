import React, {useState, useEffect} from "react";
import axios from "axios";
import Info from './info';
import styled from "styled-components"


const Card = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    `

const CharacterCard = () => {

const [character, setCharacter] = useState([]);

useEffect(() => {
    axios.get(`https://swapi.co/api/people/`)
    .then(response => {
        // console.log(response.data.results)
        setCharacter(response.data.results)
       
    })
    .catch(error => {
        console.log('Yikes...', error)
    })
}, [])


 console.log(character)

return (
    


<Card>{character.map(c => {
        return  <Info character={c}/>
    })}
   </Card>

)

}
export default CharacterCard