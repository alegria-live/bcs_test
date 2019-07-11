import listReducer from './list.js';
import * as actionTypes from '../actions/actionTypes';

describe('list reducer', () => {
    it('should return the initial state', () => {
        expect(listReducer(undefined, {})).toEqual({
            isLoading: false,
            loaded: false,
            error: false,    
            info: {},
            results: []
        });
    });
    it('should return isLoading : true', () => {
        expect(listReducer({
            isLoading: false,
            loaded: false,
            error: false,    
            info: {},
            results: []
        }, {
            type: actionTypes.LIST_INIT
            }))
            .toEqual({
            isLoading: true,
            loaded: false,
            error: false,    
            info: {},
            results: []
        });
    });
    it('should return new info and new results', () => {
        expect(listReducer({
            isLoading: true,
            loaded: false,
            error: false,
            info: {},
            results: []
        }, {
            type: actionTypes.LIST_SUCCESS,
            data: {
                info: {testInfo: "Test"},
                results: [{id:1}, {id:2}]}
            }))
            .toEqual({
            isLoading: false,
            loaded: true,
            error: false,
            info: {testInfo: "Test"},
            results: [{id:1}, {id:2}]
        });
    });
})