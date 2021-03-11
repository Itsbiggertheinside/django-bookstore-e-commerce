import axios from 'axios';


export const getBookDetailAction = data => {
    return {
        type: 'GET_BOOK_DETAIL',
        payload: data
    }
}


const url = 'http://127.0.0.1:8000'

export const getBookDetail = seoUrl => {
    return function(dispatch){

        fetch(url + '/api/' + seoUrl + '/')
        .then(response => response.json())
        .then(data => dispatch(getBookDetailAction(data)))

    }
}