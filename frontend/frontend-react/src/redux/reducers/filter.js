import { FILTER_BY_CATEGORY } from '../actions/types';


const initialState = {
    next: '',
    previous: '',
    books: []
}


export const filterByCategoryReducer = (state = initialState, action) => {
    switch(action.type){
        case FILTER_BY_CATEGORY:
            return {
                ...state,
                next: action.payload.next,
                previous: action.payload.previous,
                books: action.payload.data
            }
        default:
            return state
    }
}

export default filterByCategoryReducer;