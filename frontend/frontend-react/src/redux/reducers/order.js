const orderReducer = (state = [], action) => {
    switch(action.type){
        case 'GET_CUSTOMER_ORDER':
            return action.payload;
        default:
            return state
    }
}

export default orderReducer;