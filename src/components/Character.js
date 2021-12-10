// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const A = styled.a`
    color: black;

`

const Div1 = styled.div`
    height: 250px;
    width: 400px;
    text-align: center;
    margin: 0 auto;
    background-color: white;

`

const Character = (props) => {
    
    const chars = props.charList;
    console.log(chars)
    
    
    
    return (
        <article> 
{
    chars.map(character => (
        
        <Div1>
        <A href={character.url}><h1 key={character.name}>{character.name}</h1></A>
        <p>I was born in the year {character.birth_year}.</p>
        <p>Hair Color: {character.hair_color}<br /> Eye Color: {character.eye_color}<br />
        Gender: {character.gender}<br /> Height: {character.height}<br /> Weight: {character.mass}<br />
        <A href={character.homeworld}>HomeWorld</A> </p>
        </Div1>
    ))

}

        </article>);
}



export default Character;





