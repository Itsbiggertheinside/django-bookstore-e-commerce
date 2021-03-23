import { BASE_URL, AUTH_HEADERS, GET_ORDER } from './types';


export const getOrderAction = data => {
    return {
        type: GET_ORDER,
        payload: data
    }
}


export const getOrder = () => {

    const requestOptions = {
        method: 'GET',
        headers: AUTH_HEADERS
    }

    return function(dispatch){

        fetch(BASE_URL + '/api/order/', requestOptions)
        .then(response => response.json())
        .then(data => dispatch(getOrderAction(data)))

    }
}