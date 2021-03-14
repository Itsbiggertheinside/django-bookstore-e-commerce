import { combineReducers } from 'redux';
import filterByCategoryReducer from './filter';
import getBookDetailReducer from './detail';
import orderReducer from './order';


const rootReducer = combineReducers({
    filterByCategoryReducer, getBookDetailReducer, orderReducer
})


export default rootReducer;