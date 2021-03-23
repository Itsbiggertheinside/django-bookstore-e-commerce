import { CREATE_ORDER_ITEM } from '../actions/types';


const initialState = {
    item: {}
}


export const createOrderItemReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_ORDER_ITEM:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state
    }
}

export default createOrderItemReducer;