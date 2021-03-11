const getBookDetailReducer = (state = {}, action) => {

    switch (action.type) {
        case 'GET_BOOK_DETAIL':
            return action.payload
        default:
            return state;
    }

}


export default getBookDetailReducer;