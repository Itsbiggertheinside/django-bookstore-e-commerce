import * as actions from '../actions/actionTypes';
import initialState from './initialState';


export default function filterByCategoryReducer(state=initialState.books, action) {

    switch (action.type) {
        case actions.GET_BOOKS_BY_FILTER:
            return action.payload;
    
        default:
            return state;
    }

}