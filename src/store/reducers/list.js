import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isLoading: false,
    loaded: false,
    error: false,    
    info: {},
    results: []
};

const listInit = (state, action) => {
    return {
        ...state,
        isLoading: true
    }
};
const listSuccess = (state, action) => {
    return {
        ...state,
        isLoading: false,
        loaded: true,
        info: action.data.info,
        results: action.data.results
    }
};
const listFail = (state, action) => {
    return {
        ...state,
        isLoading: false,
        loaded: true,
        error: action.data.error
    }
};
const listReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LIST_INIT: return listInit(state, action);
        case actionTypes.LIST_SUCCESS: return listSuccess(state, action);
        case actionTypes.LIST_FAIL: return listFail(state, action);
        default: return state
    }
};
export default listReducer