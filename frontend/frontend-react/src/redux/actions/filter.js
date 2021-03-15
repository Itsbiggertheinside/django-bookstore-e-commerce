export const filterByCategoryAction = (data) => {
    return {
        type: 'FILTER_BY_CATEGORY',
        payload: data
    }
}


const url = 'http://127.0.0.1:8000/'

export const getBooks = category => {
    return function(dispatch){

        fetch(url + 'api/book/?search=' + category)
        .then(response => response.json())
        .then(data => dispatch(filterByCategoryAction(data.results)))

    }
}
