import * as actionTypes from './actionTypes';

export const autoInitList = () => {
    return {
        type: actionTypes.AUTO_INIT_LIST
    };
};
export const listInit = () => {
    return {
        type: actionTypes.LIST_INIT
    };
};
export const listProcess = page => {
    return {
        type: actionTypes.LIST_PROCESS,
        page
    };
};
export const listSuccess = data => {
    return {
        type: actionTypes.LIST_SUCCESS,
        data
    };
};
export const listFail = error => {
    return {
        type: actionTypes.LIST_FAIL,
        error
    };
};