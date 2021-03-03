import * as actions from '../actions/actionTypes';
import initialState from './initialState';


export default function filterByCategoryReducer(state=initialState.currentCategory, action) {

    switch (action.type) {
        case actions.FILTER_BY_CATEGORY:
            return action.payload;
    
        default:
            return state;
    }

}