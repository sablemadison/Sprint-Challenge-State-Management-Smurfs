import React from 'react';

const Smurf = (props) =>{
    return (
        <div>
            
            <h1>Name: {props.smurf.name}</h1> 
            <h2>Age: {props.smurf.age}</h2>
            <h3>Height: {props.smurf.height}</h3>
        </div>
    )
}

export default Smurf;