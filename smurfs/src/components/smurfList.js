import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Smurf from './smurf';
import fetchSmurfs from '../actions/index'

function SmurfList(props) {
    useEffect(() =>{
        props.fetchSmurfs()
    }, [] )
    if (props.isFetching){
        return <h2>Loading smurfs...</h2>
    }
    return (
        <div>
        {props.Smurf.map((smurf) => (
            <Smurf  smurf={smurf}></Smurf>))}
            </div>
    )
}

const mapStateToProps = (state) => {
    return {
        Smurf: state.Smurfs,
        isFetching: state.isFetching,
        error: state.error,

    }
}
export default connect(mapStateToProps, {fetchSmurfs})(SmurfList)