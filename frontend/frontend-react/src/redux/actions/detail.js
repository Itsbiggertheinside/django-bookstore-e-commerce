import { BASE_URL, GET_BOOK_DETAIL } from './types';



export const getBookDetailAction = data => {
    return {
        type: GET_BOOK_DETAIL,
        payload: data
    }
}


export const getBookDetail = seoUrl => {
    return function(dispatch){

        fetch(BASE_URL + '/api/book/' + seoUrl + '/')
        .then(response => response.json())
        .then(data => dispatch(getBookDetailAction(data)))

    }
}