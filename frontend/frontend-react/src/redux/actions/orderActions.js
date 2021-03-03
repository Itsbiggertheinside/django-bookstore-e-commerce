import * as action from './actionTypes';


export const increaseQuantity = () => ({
    type: action.INCREASE_QUANTITY,
    payload: 1
});

export const decreaseQuantity = () => ({
    type: action.DECREASE_QUANTITY,
    payload: 1
});