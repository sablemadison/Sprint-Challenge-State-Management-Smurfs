import React, { Component, useState } from "react";
import smurfList from "./smurfList";
import { addSmurf } from "../actions";
import { connect } from 'react-redux';
import axios from 'axios';
import "./App.css";


function App (props) {
  
  const [smurfField, setSmurfField] = useState({
    name: '',
    age: '',
   height:''
  })

    const handleChange = (event) => {
      setSmurfField({
        ...smurfField,
        [event.target.name]: event.target.value,
      })

     
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      props.addSmurf(smurfField);
      setSmurfField({
        name: '',
        age: ''
      })
    }
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>
        <form>
          <label>Add smurfs!
          <input 
          name="name"
          onChange={handleChange}
          type="text"
          value={smurfField.name}
          placeholder="name"
          ></input>
          <input 
          name="age"
          onChange={handleChange}
          type="text"
          value={smurfField.age}
          placeholder="age"
          ></input>
          </label>
          <button type='submit' onClick={handleSubmit}>Add</button>
        </form>
        <smurfList/>
        </div>
      </div>
    );
  
}



const fetchData = () => {
  axios.get('http://localhost:3333/smurfs')
.then(res => {
    console.log('res:', res)
}) }
fetchData()





export default App;
