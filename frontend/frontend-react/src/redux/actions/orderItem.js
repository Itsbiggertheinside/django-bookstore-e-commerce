import { BASE_URL, AUTH_HEADERS, CREATE_ORDER_ITEM } from './types';


export const createOrderItemAction = data => {
    return {
        type: CREATE_ORDER_ITEM,
        payload: data
    }
}


export const createOrderItem = id => {

    const requestOptions = {
        method: 'POST',
        headers: AUTH_HEADERS
    }

    return function(dispatch){

        fetch(BASE_URL + '/api/item/?book_id=' + id, requestOptions)
        .then(response => response.json())
        .then(data => dispatch(createOrderItemAction(data)))

    }
}