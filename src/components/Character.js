// Write your Character component here
import React from 'react';

const Character = (props) => {
    
    const chars = (props.charList);
    
    
    return (
        <article> 
{
    chars.map(character => (
        <h1 key={character.name}>{character.name}</h1>
    ))

}

        </article>);
}



export default Character;





