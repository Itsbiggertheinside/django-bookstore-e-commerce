import { GET_ORDER } from '../actions/types';


const initialState = {
    orderItems: []
}


export const getOrderItemsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ORDER:
            return {
                ...state,
                orderItems: action.payload
            }
        default:
            return state
    }
}

export default getOrderItemsReducer;