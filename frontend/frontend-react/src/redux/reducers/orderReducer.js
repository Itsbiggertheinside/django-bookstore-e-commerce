import * as action from '../actions/actionTypes';


const quantityReducer = (state=0, quantityAction) => {

    let newState;

    switch (quantityAction.type) {
        case action.INCREASE_QUANTITY:
            return (newState = state + quantityAction.payload)
        case action.DECREASE_QUANTITY:
            return (newState = state - quantityAction.payload)
        default:
            return state;
    }

}

export default quantityReducer;