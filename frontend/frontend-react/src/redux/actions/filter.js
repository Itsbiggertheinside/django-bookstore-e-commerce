export const filterByCategoryAction = (data) => {
    return {
        type: 'FILTER_BY_CATEGORY',
        payload: data
    }
}

export const getBooks = category => {
    return function(dispatch){

        fetch('http://127.0.0.1:8000/api/?search=' + category)
        .then(response => response.json())
        .then(data => dispatch(filterByCategoryAction(data)))

    }
}