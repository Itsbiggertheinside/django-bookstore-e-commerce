export const getOrderAction = (data) => {
    return {
        type: 'GET_CUSTOMER_ORDER',
        payload: data
    }
}


const url = 'http://127.0.0.1:8000/'

export const getBooks = user => {
    return function(dispatch){

        fetch(url + 'api/order/' + user)
        .then(response => response.json())
        .then(data => dispatch(getOrderAction(data)))

    }
}
