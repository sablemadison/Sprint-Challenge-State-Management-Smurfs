import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';
import { FetchSmurfs}  from '../actions/index'

function SmurfList(props) {
    useEffect(() =>{
        props.FetchSmurfs()
    }, [] )
    if (props.isFetching){
        return <h2>Loading smurfs...</h2>
    }
    return (
        <div>
        {props.Smurf.map((smurf) => (
            <Smurf key={smurf.id} smurf={smurf}></Smurf>))}
            </div>
    )
}

const mapStateToProps = (state) => {
    return {
        Smurf: state.Smurfs,
        isFetching: state.isFetching,
        error: state.error

    }
}
export default connect(mapStateToProps, {FetchSmurfs})(SmurfList)