import { combineReducers } from 'redux';
import filterByCategoryReducer from './filter';
import getBookDetailReducer from './detail';
import createOrderItemReducer from './orderItem';
import getOrderItemsReducer from './order';


const rootReducer = combineReducers({
    filterByCategoryReducer, getBookDetailReducer, createOrderItemReducer, getOrderItemsReducer
})


export default rootReducer;