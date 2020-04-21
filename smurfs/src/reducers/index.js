import {
    START_FETCHING,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    START_ADDING,
    SMURF_ADDED,
    SMURF_FAIL,
} from "../actions";

const initialState = {
    Smurfs: [],
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
    case START_FETCHING:
    return {
        ...state,
        isFetching: true,
        error: ''
    };
    case FETCH_FAILURE: 
    return {
       ...state,
       isFetching: false,
       error: action.payload,
    };
    case START_ADDING:
    return{
        ...state,
        isFetching: false,
        error: ''
    };
    case SMURF_ADDED:
    return {
        ...state,
        isFetching: false,
        error: '',
        Smurfs: action.payload,
    };
    case SMURF_FAIL:
    return{
        ...state, 
        isFetching: false,
        error: action.payload,
    }
    default:
    return state;
}
}

export default reducer;