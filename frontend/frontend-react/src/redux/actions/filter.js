import { BASE_URL, FILTER_BY_CATEGORY } from './types';



export const getFilteredBooksByCategory = (data) => {
    return {
        type: FILTER_BY_CATEGORY,
        payload: {data: data.results, previous: data.previous, next: data.next}
    }
}


export const getBooks = category => {
    return function(dispatch){

        fetch(BASE_URL + '/api/book/?search=' + category)
        .then(response => response.json())
        .then(data => dispatch(getFilteredBooksByCategory(data)))

    }
}
