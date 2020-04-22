import axios from "axios";
import React from 'react';
export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const START_ADDING = " START_ADDING";
export const SMURF_ADDED = "SMURF_ADDED";
export const SMURF_FAIL = "SMURF_FAIL";

const FetchSmurfs = () => (dispatch) => {
    dispatch({type: START_FETCHING})
    axios.get('http://localhost:3333/smurfs')
      .then((res) => dispatch({
          type: FETCH_SUCCESS, payload: res.data.results
      }))
      .catch((err) => dispatch({
          type: FETCH_FAILURE,
          payload: err.response
      }), )
}

export const addSmurf = (smurf) => (dispatch) => {
    dispatch({type: START_ADDING})
    axios.post('http://localhost:3333/smurfs', smurf)
       .then((res) => {
           dispatch({
               type: SMURF_ADDED, payload: res.data.results,
           })
       })
       .catch((error) => {
           dispatch({ type: SMURF_FAIL, payload: error.response});
       })
}

export default FetchSmurfs;
