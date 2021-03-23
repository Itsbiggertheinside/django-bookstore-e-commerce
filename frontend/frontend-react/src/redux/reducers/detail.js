import { GET_BOOK_DETAIL } from '../actions/types';


const initialState = {
    book: {}
}


const getBookDetailReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_BOOK_DETAIL:
            return {
                ...state,
                book: action.payload
            }
        default:
            return state;
    }

}


export default getBookDetailReducer;