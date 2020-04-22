import React, { useState } from "react";
import "./App.css";
import SmurfList from "./SmurfList";
import { addSmurf } from "../actions";
import { connect } from 'react-redux';
import axios from 'axios';
function App (props) {
   const [fields, setFields] = useState({
     name: '',
     age: '',
     height: ''
   })
   const handleChange = (event) => {
     setFields({
       ...fields,
       [event.target.name]: event.target.value,
     })
   }

   const handleSubmit = (event) => {
     event.preventDefault()
     props.addSmurf(fields);
     setFields({
       name: '',
       age: '',
       height: ''
     })
   }
 
  
   
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <form>
          <label>Add smurfs!
          <input 
          name="name"
          onChange={handleChange}
          type="text"
          value={fields.name}
          placeholder="name"
          ></input>
          <input 
          name="age"
          onChange={handleChange}
          type="text"
          value={fields.age}
          placeholder="age"
          ></input>
          <input 
          name="height"
          onChange={handleChange}
          type="text"
          value={fields.height}
          placeholder="height"
          ></input>
          </label>
          <button type='submit' onClick={handleSubmit}>Add</button>
        </form>
        <SmurfList/>
      </div>
    );
  }
  
  const fetchData = () => {
    axios.get('http://localhost:3333/smurfs')
  .then(res => {
      console.log('res:', res)
  }) }
  fetchData()
export default connect(null, {addSmurf})(App)

console.log('red')