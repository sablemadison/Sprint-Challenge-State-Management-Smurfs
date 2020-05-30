import React from 'react';
import smurfList from './smurfList';

const Smurf = (props) =>{
    return (
        <div>
            {/* smurf data here */}
            <h1>{props.name}</h1> 
            <h2>{props.height}</h2>
            <h3>{props.height}</h3>
        </div>
    )
}

export default Smurf;