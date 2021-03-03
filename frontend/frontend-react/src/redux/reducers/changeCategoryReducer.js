import * as actions from '../actions/actionTypes';
import initialState from './initialState';


export default function changeCategoryReducer(state=initialState.currentCategory, action) {

    switch (action.type) {
        case actions.CHANGE_CATEGORY:
            return action.payload;
    
        default:
            return state;
    }

}