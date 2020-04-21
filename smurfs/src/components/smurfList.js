import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Smurf from './smurf';

const smurfList = (props) => {
    useEffect(() =>{
        props.fetchSmurfs()
    }, [] )
    if (props.isFetching){
        return <h2>Loading smurfs...</h2>
    }
    return (
        <div>
        {props.Smurfs.map((smurf) => (
            <Smurf key={null} smurf={smurf}></Smurf>))}
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
export default connect(mapStateToProps, {fetchSmurfs})(smurfList)