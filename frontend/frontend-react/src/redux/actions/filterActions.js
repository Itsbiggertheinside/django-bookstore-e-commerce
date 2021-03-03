import * as actions from './actionTypes';


export function changeCategory(category) {
    return {
        type: actions.CHANGE_CATEGORY,
        payload: category
    }
}

export function getBooksByFilterSuccess(data) {
    return {
        type: actions.GET_BOOKS_BY_FILTER,
        payload: data
    }
}

export function filterBooks() {

    return function(dispatch) {

        let url = 'http://localhost:8000/books';

        return fetch(url).then(response => response.json())
        .then(data => dispatch(getBooksByFilterSuccess(data)))

    }

}