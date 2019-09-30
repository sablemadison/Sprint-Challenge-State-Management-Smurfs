import React, { useState } from 'react';
import { SmurfContext } from "../contexts/SmurfContext";
import axios from 'axios'

const smurfCard = () => {
    //const smurfData = useContext({});

    const [smurf, setSmurf] = useState({});
      axios
      .get(`http://localhost:3333/smurfs`)
      .then(Obj => { 
          setSmurf(Obj.data.results)
console.log(smurf)
      })
      .catch()
    }

